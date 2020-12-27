module.exports = {
  title: 'The Powerpuff Girl',
  template: {
    favicon: 'https://react-styleguidist.js.org/img/logo.svg'
  },
  theme: {
    color: {
      baseBackground: '#fbfbf9',
      sidebarBackground: '#fff',
      link: '#0D9CBD',
      linkHover: '#5ECFE8',
      border: '#eeede9',
      ribbonBackground: '#e90',
      ribbonText: '#fff',
      base: '#333',
      light: '#767676',
      lightest: '#ccc',
    },
    fontSize: {
      base: 12,
    },
  },
  styles: {
    Logo: {
      logo: {
        background: 'url(http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg)',
        backgroundSize: '92px',
        border: 'none',
        width: '92px',
        height: '92px',
        fontSize: '0px',
        left: 0,
        right: 0,
        margin: 'auto',
      },
    },
    Playground: {
      preview: {
        background: 'white',
        border: 'none',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,.05)',
      },
    },
  },

  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Theme',
      content: 'src/theme/Theme.md',
      sections: [
        {
          name: 'Color',
          content: 'src/theme/Color.md',
          usageMode: 'hide',
        },
      ],
    },
    {
      name: 'Components',
      content: 'src/components/Components.md',
      pagePerSection: true,
      sections: [
        {
        //Components content
        },
      ],
    },
    {
      name: 'Pages',
      content: 'src/components/pages/Layouts.md',
      pagePerSection: true,
      sections: [
        {
          name: 'Page 404',
          content: 'src/components/pages/Page-404/Page-404.md',
        },
      ],
    },
  ],
}
