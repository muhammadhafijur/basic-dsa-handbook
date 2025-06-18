import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Basic DSA Handbook",
  description: "A Basic DSA Handbook",
  locales: {
    root: {
      label: 'বাংলা',
      lang: 'bn', 
      title: 'Basic DSA Handbook',
      description: 'একটি বেসিক DSA হ্যান্ডবুক'
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Basic DSA Handbook',
      description: 'A Basic DSA Handbook'
    },
    
  },

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: 'Github', link: 'https://github.com/muhammadhafijur/basic-dsa-handbook' }
    ],

    sidebar: {
      '/': [ 
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: 'Testing',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
      '/bn/': [ // Bangla Sidebar
        // {
        //   text: 'উদাহরণ',
        //   items: [
        //     { text: 'Markdown উদাহরণ', link: '/bn/markdown-examples' },
        //     { text: 'Runtime API উদাহরণ', link: '/bn/api-examples' }
        //   ]
        // },
        {
          text: 'Basic DS',
          items: [
            { text: 'পূর্বশর্ত (Prerequisite)', link: '/bn/prerequisite.md' },
            { text: 'DSA কী ও কেন শেখা জরুরি?', link: '/bn/why-dsa' },
            { text: 'টাইম ও স্পেস কমপ্লেক্সিটি', link: '/bn/time-and-space-complexity.md' },
            { text: 'STL Vector', link: '/bn/stl-vector.md' }
          ]
        },
        { 
          text: "More Coming Soong", link: "/bn/intro" ,
          items: [
            { text: 'Test', link: '/bn/test.md' },
          ]
        },

        // {
        //   text: 'test',
        //   items: [
        //     { text: 'Markdown উদাহরণ', link: '/bn/markdown-examples' },
        //     { text: 'Runtime API উদাহরণ', link: '/bn/api-examples' }
        //   ]
        // },
      ]
    },
    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "Copyright © 2023-present Muhammad Hafijur",
    // },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  }
})
