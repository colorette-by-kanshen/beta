fetch('https://api.github.com/repos/colorette-by-kanshen/colorette-by-kanshen.github.io/releases/latest')
  .then(response => response.json())
  .then(data => {
    const release = data;
    const versionName = release.name.split(' - ')[1];
    const versionCodeName = release.name.split(' - ')[0];
    const releaseURL = release.html_url;
    const releaseTime = release.published_at;
    const changesList = release.body;

    const embed = {
      content: 'Hey! New colorétte+ version dropped!',
      embeds: [
        {
          title: 'colorétte+',
          description: 'A simple color palette generator',
          url: 'https://github.com/colorette-by-kanshen/colorette-by-kanshen.github.io',
          color: 4456516,
          author: {
            name: 'Richard Kanshen',
            url: 'https://github.com/RichardKanshen',
            icon_url: 'https://img.guildedcdn.com/UserAvatar/7f19036e97480749da9b4ef008ec0a98-Large.webp?w=450&h=450'
          },
          footer: {
            text: 'Available on GitHub',
            icon_url: 'https://pluspng.com/img-png/github-logo-png-white-github-11-icon-free-white-social-icons-256x256.png'
          },
          timestamp: '2023-02-12T11:08:00.000Z',
          image: {
            url: 'https://github.com/colorette-by-kanshen/beta/blob/main/img/color%C3%A9ttebanner.png?raw=true'
          }
        },
        {
          title: `${versionName}`,
          description: `${versionCodeName}`,
          url: `${releaseURL}`,
          color: 6591981,
          fields: [
            {
              name: "What's Changed?",
              value: `${changesList}`
            }
          ],
          footer: {
            text: 'Available on GitHub',
            icon_url: 'https://pluspng.com/img-png/github-logo-png-white-github-11-icon-free-white-social-icons-256x256.png'
          },
          timestamp: `${releaseTime}`,
          image: {
            url: 'https://github.com/colorette-by-kanshen/beta/blob/main/img/color%C3%A9ttebanner.png?raw=true'
          },
          author: {
            name: 'colorétte+',
            url: 'https://github.com/colorette-by-kanshen/colorette-by-kanshen.github.io',
            icon_url: 'https://img.guildedcdn.com/UserAvatar/37bc163cb89c0696bc0c6503406e4875-Large.webp?w=450&h=450'
          }
        }
      ]
    };
  const webhookURL = process.env.GUILDED_WEBHOOK_URL;
  
  fetch(webhookURL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ embeds: [embed] })
})
  .then(response => {
    console.log('Message sent successfully!');
  })
  .catch(error => {
    console.log('Error sending message:', error);
  });
