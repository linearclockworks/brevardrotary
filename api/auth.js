export default function handler(req, res) {
  const clientId = Ov23liYWONnxQSOvEZfO;
  const redirectUri = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;
  res.redirect(302, redirectUri);
}
