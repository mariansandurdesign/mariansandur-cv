#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEB_ROOT="/var/www/mariansandur.it"
BRANCH="${BRANCH:-main}"

echo "==> Deploying mariansandur-cv to ${WEB_ROOT}"
cd "${APP_DIR}"

echo "==> Updating repository (${BRANCH})"
git fetch origin "${BRANCH}"
git checkout "${BRANCH}"
git pull --ff-only origin "${BRANCH}"

echo "==> Installing dependencies"
if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi

echo "==> Type checking"
npm run typecheck

echo "==> Building static site"
rm -rf .next out
npm run build

if [[ ! -d out ]]; then
  echo "ERROR: build output directory 'out' not found" >&2
  exit 1
fi

echo "==> Deploying files to ${WEB_ROOT}"
sudo mkdir -p "${WEB_ROOT}"
sudo rsync -a --delete "${APP_DIR}/out/" "${WEB_ROOT}/"

echo "==> Testing and reloading nginx"
sudo nginx -t
sudo systemctl reload nginx

echo "==> Deployment complete"
