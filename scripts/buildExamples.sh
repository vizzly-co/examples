#!/usr/bin/env sh

cd ./examples/angular16

# Install dependencies
npm install

# Define the deploy URL prefix
DEPLOY_URL="/examples/vizzlyangular16/"

# Build the angular example with a dynamic deployUrl
npm run build -- --configuration production --deploy-url=${DEPLOY_URL}


# Copy the output to the static builds folder
cp -r ./dist/vizzlyangular16 ../../static-build-outputs