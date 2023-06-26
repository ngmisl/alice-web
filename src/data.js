import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Navigation',
      links: [
        {
          text: 'Demo',
          href: '#demo',
        },
        {
          text: 'Story',
          href: '#story',
        },
        {
          text: 'Tokenomics',
          href: '#tokenomics',
        },
        {
          text: 'NFT Access Card',
          href: '#access',
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Discord',
      href: 'https://discord.gg/fWsJhSWKfS',
    },
  ],
  actions: [{ type: 'button', text: 'PLAY', href: '/alice' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/alicegamedotxyz' },
    { ariaLabel: 'Mastodon', icon: 'tabler:rocket', href: 'https://mastodon.online/@alicegame' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made by Alice Devs · All rights reserved. <a rel="me" href="https://mastodon.online/@alicegame" target="_blank">Mastodon</a>
  `,
};
