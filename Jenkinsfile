pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
      registryUrl 'https://quay.io'
      registryCredentialsId 'quay'
    }
  }
  environment {
    def NPM_CONFIG_CACHE = '/tmp/npm'
    def info = repoInfo()
    ARTIFACTORY_REPO = 'cs-node'
  }
  stages {
    stage('prepare') {
      when {
        branch 'master'
      }
      steps {
        script {
          env.CI_SKIP = "false"
          result = sh (script: "git log -1 | grep '.*\\[ci auto incrementing version\\].*'", returnStatus: true)
          if (result == 0) {
              env.CI_SKIP = "true"
              error "'[ci auto incrementing version]' found in git commit message. Aborting."
          }
        }
      }
    }
    stage('bump version') {
      when {
        branch 'master'
      }
      steps {
        script {
          sh 'npm --no-git-tag-version version minor'
        }
      }
    }
    stage('publish') {
      when {
        branch 'master'
      }
      steps {
        script {
          withVaultCredentials([
            [path: "/secret/content-engineering/global/artifactory/content-engineering@gannett.com", keys: ['username': 'ARTIFACTORY_USERNAME', 'password': 'ARTIFACTORY_PASSWORD']],
            [path: "/secret/content-engineering/global/apigee/paas-api", keys: ['API_KEY': 'API_KEY']],
            [path: "/secret/content-engineering/global/github/content-solutions", keys: ['content-engineering-jenkins-token': 'GIT_PASSWORD']],
            [path: "/secret/content-engineering/global/github/content-solutions", keys: ['username': 'GIT_USERNAME']]
          ]) {
            def node_package = readJSON file: 'package.json'
            def repo_package_version = sh(script: "npm view ${node_package.name} dist-tags.latest", returnStdout: true).trim()
            echo "repo_package_version:${repo_package_version}"
            if (repo_package_version == node_package.version) {
             env.FAILURE_MESSAGE = "<${env.BUILD_URL}|#${env.BUILD_TAG}> - [${node_package.name}] node_package.version:${node_package.version} already exists in npm repo as repo_package_version:${repo_package_version}. update the version number in package.json"
             error env.FAILURE_MESSAGE
            }
            sh 'git add package.json package-lock.json'
            sh "git -c user.name='${node_package.author.name}' -c user.email='${node_package.author.name}@gannett.com' commit -m '[ci auto incrementing version] to ${node_package.version}'"
            sh "git push https://${env.GIT_PASSWORD}:${env.GIT_PASSWORD}@github.com/GannettDigital/${env.GIT_REPO_NAME} ${env.BRANCH_NAME}"
            def pkg = sh(script: 'npm pack .', returnStdout: true).trim()
            archiveArtifacts artifacts: pkg
            env.LIBRARY_PKG_NAME = pkg
            stash includes: pkg, name: 'LIBRARY_NPM_PACKAGE'
            paasTag.create apiKey: env.API_KEY,
                           version: node_package.version,
                           org: 'GannettDigital',
                           repo: env.GIT_REPO_NAME,
                           sha: env.GIT_COMMIT_SHA,
                           message: "publish version ${node_package.version}",
                           tagger_name: node_package.author.name,
                           tagger_email: "${node_package.author.name}@gannett.com"
           sh "curl -Lf -o /dev/null -u '${env.ARTIFACTORY_USERNAME}:${env.ARTIFACTORY_PASSWORD}' -T ${pkg} https://artifactory.gannettdigital.com/artifactory/${env.ARTIFACTORY_REPO}/${pkg}"
          } // withVaultCredentials
        } // script
      } // steps
      post {
        success {
          script {
            unstash 'LIBRARY_NPM_PACKAGE'
            def node_package = readJSON file: 'package.json'
            slackSend color: 'good', message: "<${env.BUILD_URL}|#${env.BUILD_TAG}> - ${node_package.name}] published to https://artifactory.gannettdigital.com/artifactory/${ARTIFACTORY_REPO}/${LIBRARY_PKG_NAME}!"
          }
        }
        failure {
          script {
            def node_package = readJSON file: 'package.json'
            if (env.FAILURE_MESSAGE) {
              env.FAILURE_MESSAGE
            }
            else {
              env.FAILURE_MESSAGE = "<${env.BUILD_URL}|#${env.BUILD_TAG}> - [${node_package.name}] ${node_package.author.name}-docker-artifactory.gannettdigital.com/${node_package.name}:${node_package.version} failed to publish, Error:${err}"
            }
          }
        }
      }
    } // stage('publish')
  }
  post {
    failure {
      script {
        if (env.FAILURE_MESSAGE && env.CI_SKIP == "false") {
          slackSend color: 'danger',
            message: env.FAILURE_MESSAGE
        }
      }
    }
    always {
      script {
        if (env.CI_SKIP == "true") {
          currentBuild.result = 'NOT_BUILT'
        }
        deleteDir()
      }
    }
  }
}
