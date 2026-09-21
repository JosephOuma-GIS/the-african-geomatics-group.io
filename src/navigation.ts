import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Projects', href: getPermalink('/projects') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Insights', href: getBlogPermalink() },
    { text: 'Careers', href: getPermalink('/careers') },
  ],
  actions: [{ text: 'Schedule consultation', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Remote sensing & Earth observation', href: getPermalink('/services#remote-sensing') },
        { text: 'Land administration & cadastre', href: getPermalink('/services#land') },
        { text: 'Environmental & climate solutions', href: getPermalink('/services#environment') },
        { text: 'Custom GIS development', href: getPermalink('/services#development') },
        { text: 'Training & capacity building', href: getPermalink('/services#training') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Projects', href: getPermalink('/projects') },
        { text: 'Insights', href: getBlogPermalink() },
        { text: 'Careers', href: getPermalink('/careers') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'ouma.otih@gmail.com', href: 'mailto:ouma.otih@gmail.com' },
        { text: '+254 741 305 673', href: 'tel:+254741305673' },
        { text: 'Kisumu & Nairobi, Kenya', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/JosephOuma-GIS' },
  ],
  footNote: `© ${new Date().getFullYear()} The African Geomatics Group · Spatial intelligence for public good.`,
};
