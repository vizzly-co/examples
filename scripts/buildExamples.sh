#!/usr/bin/env sh

cd ./examples/angular16

# Build the angular example
npm run build -- --configuration production

# Copy the output to the static builds folder
cp -r ./dist/vizzlyangular16 ../../static-build-outputs