# README.md
Simple resume site written in React hosted in a Docker container, running on AWS ECS

  TODO:
- [ ] Write better README
- [X] Set up SSL cert in docker/dockerfile (Needs letsencrypt/Certbot)
- [X] Set up GitHub actions to re-build image when changes are made
- [X] Set up GitHub actions to push new image to ECR 
- [ ] Set up GitHub actions to deploy new image on ECS (Need to ensure old container doesn't go down right away because of DNS change)
- [ ] Set up GitHub actions to make any required changes if IP of the container changes
- [ ] Create diagram of how it works
- [ ] Build tests in GitHub actions
- [ ] Replace all placeholder with real information
- [ ] Certificate autorenew
- [ ] Monitoring
- [ ] Add variables for hard coded links
- [ ] Only actually rebuild when necesary (don't need to rebuild the image when we commit the README)
- [ ] dev/master separation
- [ ] Clean up resources if build fails   