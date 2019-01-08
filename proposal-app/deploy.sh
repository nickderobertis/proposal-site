#!/usr/bin/env bash

ROOT_URL="taylorandnicklove.com";
BASE_HREF="http://$ROOT_URL/";
GH_TOKEN="fd24341241e9632080376b9d9d776c419fbf9cb9";
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
  --cname $ROOT_URL \
  --no-silent;
