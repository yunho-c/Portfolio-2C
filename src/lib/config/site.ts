import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'yunhocho.com',
  title: 'Yunho Cho',
  // subtitle: 'Procrastinator, Student, Engineer, Maker',
  subtitle: 'Student, Engineer, Maker',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Yunho Cho',
    status: '🎓',
    // bio: "I'm an engineer who's quite passionate in just about everything in the world. This includes mechanical engineering, software engineering, machine learning, human-computer interaction, design theory, cognitive psychology, 3D graphics, origami, musical instruments, spatial audio, and photography. In free time, I watch DW Documentary, lie down in bed thinking about things, write, plan out the coming weeks, and majestically procrastinate while doom-scrolling through Instagram. Thanks for visiting - and always feel free to reach out! Let's grab coffee and talk."
    // bio: "I am an engineer who is passionate about things like machines, software, machine learning, human-computer interaction, psychology, design theory, interactive artworks, 3D graphics, origami, music & instruments, spatial audio, and photography. \nIn my free time, I watch documentaries, think, ride a bike, read, and majestically procrastinate while doomscrolling through Instagram. \nThanks for visiting—and feel free to reach out anytime for a coffee chat!"
    bio: "I'm an engineer passionate about assistive technology and human-computer interaction. \nIn my free time, I watch documentaries, think, ride a bike, read, and majestically procrastinate while doomscrolling through Instagram. \nThanks for visiting—and feel free to reach out anytime for a (virtual) coffee chat!"
  },
  themeColor: '#3D4451'
}
