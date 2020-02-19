# template version 0.0.1
# ---- Base Node ----
FROM quay.io/gannett/authoring-nodejs-base:latest

USER root

ENTRYPOINT ["tini", "--"]

WORKDIR /opt/gannett/jenkins
