export default async function handler(req, res) {
  const { code } = req.query;

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: Ov23liYWONnxQSOvEZfO,
      client_secret: d862c6fddec4a6684832df3b46a74f569e24ba21,
      code,
    }),
  });

  const data = await response.json();
  const token = data.access_token;

  const html = `
    
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
