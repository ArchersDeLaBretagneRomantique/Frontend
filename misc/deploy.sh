#!/bin/bash
if [ "$TRAVIS_PULL_REQUEST" == "false" && "$TRAVIS_BRANCH" == "master" ]
then
	echo -e "Starting deployment\n"

	cd dist
	git init

	git config --global user.name "Travis"
	git config --global user.email "benoit.travers.fr@gmail.com"

	git remote add origin https://${GH_TOKEN}@github.com/ArchersDeLaBretagneRomantique/ArchersDeLaBretagneRomantique.github.io.git > /dev/null
	git add .
	git commit -am "Travis build $TRAVIS_BUILD_NUMBER deployed"
	git push origin master -fq > /dev/null

	echo -e "Deployment done\n"
fi
