#!/bin/bash
set -e

echo "📦 Staging local modifications..."
git add -A

if ! git diff-index --quiet HEAD --; then
    COMMIT_MSG="${1:-Update website content}"
    echo "💾 Committing local changes: '$COMMIT_MSG'..."
    git commit -m "$COMMIT_MSG"
fi

echo "🔄 Syncing with Decap CMS changes on GitHub..."
git pull --rebase origin main

echo "🚀 Pushing to GitHub and triggering Vercel..."
git push origin main

echo "✅ Live deployment complete!"
