#!/usr/bin/env bash

BASE_HREF="https://whoopnip.github.io/proposal-site/";
GH_TOKEN="0385570948a8ac00ddd02ebb9f2275a237828d03";
PROJECT_DIR="dist/proposal-app";
COMMIT_MESSAGE="Deployment commit at $(date)";
REPO_HREF="https://$GH_TOKEN@github.com/whoopnip/proposal-site.git";
NAME_OF_USER="Nick DeRobertis";
EMAIL_OF_USER="whoopnip@gmail.com";

echo "Building application with Angular CLI for URL $BASE_HREF";
ng build --prod --base-href $BASE_HREF;

echo "Publishing Github Pages at repo $REPO_HREF";
npx angular-cli-ghpages \
  --dir=$PROJECT_DIR \
  --message "$COMMIT_MESSAGE" \
  --repo "$REPO_HREF" \
  --name "$NAME_OF_USER" \
  --email "$EMAIL_OF_USER" \
  --no-silent;
