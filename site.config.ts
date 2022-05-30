import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c4b84f78ac5d4ded9ab380f1dfcbca8a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Врятуй Мій Дім',
  domain: 'savemyhome.in.ua',
  author: 'Save My Home',

  // open graph metadata (optional)
  description: 'Благодійний фонд для відновлення будинку, розташованого на просп. Лобановського, 6-А у Києві, після російського ракетного обстрілу',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: null,
  pageUrlOverrides: {
    '/en': '0fc82c3870dd455da34242bd2d692cad',
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '🇺🇦',
      pageId: 'c4b84f78ac5d4ded9ab380f1dfcbca8a',
    },
    {
      title: '🇬🇧',
      pageId: '0fc82c3870dd455da34242bd2d692cad',
    },
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  ]
})
