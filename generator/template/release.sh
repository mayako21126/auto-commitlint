#!/bin/bash
# Release branch
master="feature/hp/czi"
prefix="v"

echo -en "Enter version:"

read version

git pull origin $master
echo "Current pull origin $master."

# Auto generate version number and tag
HUSKY_SKIP_HOOKS=1 standard-version -r $version --tag-prefix $prefix

git push --follow-tags origin $master
echo "version is $version"
echo "Git push origin $master"
echo "Release finished."