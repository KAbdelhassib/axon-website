# Deployment Setup Guide

This guide will help you set up automatic deployments to Vercel using GitHub Actions.

## 🚀 Quick Setup

### 1. Get Vercel Credentials

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Link your project:**
   ```bash
   cd axon-website
   vercel link
   ```
   - Select your Vercel account
   - Link to existing project or create new one

3. **Get your credentials:**
   ```bash
   # This will output all the credentials you need
   vercel env ls
   ```

   Or manually get them:
   - **VERCEL_TOKEN:** Go to https://vercel.com/account/tokens → Create new token
   - **VERCEL_ORG_ID:** Found in `.vercel/project.json` after running `vercel link`
   - **VERCEL_PROJECT_ID:** Found in `.vercel/project.json` after running `vercel link`

### 2. Add GitHub Secrets

1. Go to your repo: https://github.com/KAbdelhassib/axon-website

2. Click **Settings** → **Secrets and variables** → **Actions**

3. Click **New repository secret** and add each of these:

   | Secret Name | Description |
   |-------------|-------------|
   | `VERCEL_TOKEN` | Your Vercel authentication token |
   | `VERCEL_ORG_ID` | Your Vercel organization/team ID |
   | `VERCEL_PROJECT_ID` | Your Vercel project ID |

4. Save all secrets

### 3. Test the Workflow

1. Make a small change to README.md
2. Commit and push:
   ```bash
   git add .
   git commit -m "test: trigger CI/CD"
   git push
   ```

3. Watch the workflow run:
   - Go to **Actions** tab on GitHub
   - You should see the workflows running

## 📋 What Each Workflow Does

### CI Workflow (`ci.yml`)
**Triggers:** Push or PR to master/main  
**Does:**
- Runs on Node 18.x and 20.x
- Installs dependencies
- Runs linter
- Builds the project
- Uploads build artifacts

### Deploy Workflow (`deploy.yml`)
**Triggers:** Push to master/main  
**Does:**
- Builds the project
- Deploys to Vercel production
- Comments deployment URL on commit

### Preview Workflow (`preview.yml`)
**Triggers:** Pull requests  
**Does:**
- Builds the project
- Deploys preview to Vercel
- Comments preview URL on PR

## 🔧 Manual Deployment

If you prefer to deploy manually:

```bash
# Development preview
vercel

# Production
vercel --prod
```

## 🌐 Current Deployments

- **Production:** https://axon-website-six.vercel.app
- **GitHub:** https://github.com/KAbdelhassib/axon-website

## 📝 Vercel Project Settings

Recommended settings in Vercel dashboard:

1. **Framework Preset:** Next.js
2. **Build Command:** `npm run build`
3. **Output Directory:** `.next`
4. **Install Command:** `npm install`
5. **Development Command:** `npm run dev`

### Environment Variables in Vercel

If you have environment variables, add them in:
- Vercel Dashboard → Your Project → Settings → Environment Variables

## 🔄 Update Deployment

To update the production site:

```bash
git add .
git commit -m "feat: your changes"
git push
```

GitHub Actions will automatically:
1. Run tests
2. Build the project  
3. Deploy to Vercel
4. Comment the deployment URL

## 🐛 Troubleshooting

### Workflow fails with "VERCEL_TOKEN not found"
→ Make sure you added the secrets in GitHub Settings → Secrets and variables → Actions

### Build fails in CI
→ Run `npm run build` locally first to catch errors

### Deployment takes too long
→ Check the Actions tab for logs showing what's taking time

### Preview deployment doesn't comment on PR
→ Make sure the GitHub token has write permissions (it should by default)

## 🔒 Security Notes

- Never commit `.env.local` or secrets to git
- Keep your `VERCEL_TOKEN` secure
- Rotate tokens if compromised
- Use environment variables for sensitive data

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

Need help? Open an issue or check the [Contributing Guide](CONTRIBUTING.md).
