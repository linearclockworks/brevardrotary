export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const redirectUri = `https://brevardrotary.vercel.app/api/callback`;
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo&redirect_uri=${encodeURIComponent(redirectUri)}`;
  
  res.redirect(302, githubUrl);
}
