$env:MAD_LEARNING_API_URL = "https://localhost:5001"
$env:MAD_LEARNING_WEB_URL="http://localhost:3000"

if ((Test-Path "./scripts/generate-local-secrets-env.ps1")) {
    ./scripts/generate-local-secrets-env.ps1
}

./scripts/generate-env.ps1

Remove-Item Env:\MAD_LEARNING_API_URL
Remove-Item Env:\MAD_LEARNING_WEB_URL

if ((Test-Path "./scripts/generate-local-secrets-env-rm.ps1")) {
    ./scripts/generate-local-secrets-env-rm.ps1
}
