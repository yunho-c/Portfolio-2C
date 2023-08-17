import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Yunho Cho',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Yunho Cho',
    status: '👍',
    bio: 'mechanical engineering, interaction design, and software engineering'
  },
  themeColor: '#3D4451'
}
