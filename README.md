# README.md
Simple resume site written in React hosted in a Docker container, running on AWS ECS

todo: write better todo
set up SSL cert in docker/dockerfile (Needs letsencrypt)
set up GitHub actions to re-build image when changes are made
set up GitHub actions to push new image to ECR
set up GitHub actions to deploy new image on ECS
(Maybe) set up GitHub actions to make any required changes if IP of the container changes
create diagram of how it works