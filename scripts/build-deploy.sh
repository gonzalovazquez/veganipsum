#!/bin/bash

# Purpose: Build a Docker Image of the next-app-template
#
# Author: Gonzalo Vazquez, gvazquez@usmakestwo.io
#
# Parameters:
# $1: Docker username
# $2: Container name
# $3: Version of application
# Example:
# ./build-deploy.sh gonzalovazquez next-app-template 1.0.0

xUSERNAME=$1
xNAME=$2
xVERSION=$3

if [ -z $1 ]; then
   echo "Missing username"
   exit
fi

if [ -z $2 ]; then
   echo "Missing name"
   exit
fi

if [ -z $3 ]; then
   echo "Missing version"
   exit
fi

echo "Building $xNAME ..."
npm run dist
echo "$xNAME built"
echo "Building Docker image with version $xVERSION"
docker build -t $xUSERNAME/$xNAME:$xVERSION -t $xUSERNAME/$xNAME:latest . --no-cache=true
echo "Image $xNAME built with version $xVERSION"