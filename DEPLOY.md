
# Deploying to Vercel (step-by-step)

1. Create a GitHub repository and push this project (all files in root).
2. Go to https://vercel.com and Sign Up / Log In.
3. Click "New Project" → Import from GitHub → choose the repository.
4. Vercel will detect Next.js automatically. Keep defaults and click "Deploy".
5. After build completes, you'll get a live URL like `https://your-repo-name.vercel.app`.

If you run into build errors:
- Ensure package.json dependencies are present and `npm install` locally to verify.
- If you add additional packages (e.g., image libs), push updated package.json to GitHub so Vercel installs them.
