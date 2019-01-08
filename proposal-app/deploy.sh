#!/usr/bin/env bash

source ./env.sh;

BASE_HREF="http://$ROOT_URL/";
COMMIT_MESSAGE="Deployment commit at $(date)";
REPO_HREF="https://$GH_TOKEN@$REPO_URL.git";

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
