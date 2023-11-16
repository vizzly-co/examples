#!/usr/bin/env sh

cd ./examples/angular-16

# Install the latest webcomponent package
npm install @vizzly/dashboard-webcomponent@latest --legacy-peer-deps

# Build the angular example
npm run build -- --configuration production

# Copy the output to the static builds folder
cp -r ./dist/vizzangular14 ../../static-build-outputs