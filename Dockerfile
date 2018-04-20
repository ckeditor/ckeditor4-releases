# template version 0.0.1
# ---- Base Node ----
FROM paas-docker-artifactory.gannettdigital.com/paas-centos7-base:latest

# install packages
RUN yum install -y gcc-c++ git make nodejs-8.9.4-1nodesource.x86_64

WORKDIR /opt/gannett/node
