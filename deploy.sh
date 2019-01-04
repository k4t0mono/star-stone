#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

yarn run build:prod
git checkout gh-pages
mv public/* .

msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

git push origin gh-pages

# Come Back up to the Project Root
cd ..