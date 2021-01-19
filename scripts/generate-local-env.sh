#!/bin/sh

export MAD_LEARNING_API_URL="https://localhost:5001"
export MAD_LEARNING_WEB_URL="http://localhost:3000"

if [ -f "./scripts/generate-local-secrets-env.sh" ]; then
   . ./scripts/generate-local-secrets-env.sh
fi

./scripts/generate-env.sh