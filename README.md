[![Docker Build and Push to GCP Artifact Registry, deploy to Kubernetes](https://github.com/jdk3410/resume/actions/workflows/docker.yml/badge.svg)](https://github.com/jdk3410/resume/actions/workflows/docker.yml)

# README.md
Simple resume site written in React hosted in a Docker container, running on Google Kubernetes Engine. 
When an update is pushed to the code of the website, a GitHub Actions workflow compiles a new Docker image,
pushes the image to Google Artifact Registry, deploys the container in GKE, then updates 
the IP of the domain to the GKE Ingress controller in Cloudflare. 

  TODO:
- [ ] Write better README (README should include a diagram of the infrastructure and GitHub actions workflows, and include how to get everything running)
- [ ] Observability

  TODONE/TODIDN'T:
- ~~[X] Move entire thing out of AWS to GCP (GKS, Artifact Registry, Cloud Storage) and Cloudflare~~
- ~~[X] Set up e-mail forward~~
- ~~[X] Set up SSL cert in docker/dockerfile (Needs letsencrypt/Certbot)~~
- ~~[X] Set up GitHub actions to re-build image when changes are made~~
- ~~[X] Set up GitHub actions to push new image to ECR~~
- ~~[X] Set up GitHub actions to deploy new image on ECS~~
- ~~[X] Set up GitHub actions to make any required changes if IP of the container changes~~
- ~~[X] Build tests in GitHub actions~~
- ~~[X] Replace placeholders~~
- ~~[X] Add variables for hard coded links~~
- ~~[X] Only actually rebuild when necesary (don't need to rebuild the image when we commit the README)~~
- ~~[X] dev/master separation~~
- ~~[ ] Clean up resources if build fails~~
- ~~[X] Change email~~
- ~~[X] Since we will switch to using certbot from a GitHub action, need to change Dockerfile, docker.yml, and schedule container renewal~~
- ~~[ ] Restart old version if deploy fails~~
- ~~[ ] Push certbot out another month, handle conditions where certbot autorenew doesn't complete~~
- ~~[X] Bucket names and emails should be variables~~



 Future Improvements:
 - [ ] Install helpers - Terraform file to setup IAM roles
 - ~~[X] Could make it work on Elastic Kubernetes Service although it's overkill for this purpose~~
 - [ ] Make it extensible so it could be easily useable for any website
 - [ ] Since schedules on GitHub Actions workflows only work on one branch per file, re-write the entire docker.yml into one for each branch
 - [ ] Automerge / AutoPR to pull dev into master
 - ~~[X] Explore ways to improve deploy time~~
 - [ ] Increase code coverage 
 - ~~[ ] Move to Google DNS / Cloud Build / Cloud Run - Could simplfy all of the workflows considerably~~
