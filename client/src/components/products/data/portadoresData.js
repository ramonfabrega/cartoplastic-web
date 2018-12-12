import bindingCases_01 from '../../images/bindingCases/bindingCases.jpg';

export default {
  route: '/productos/portadores',
  submenu: ['One', 'Two'],
  One: {
    images: [
      {
        original: bindingCases_01,
        thumbnail: ''
      }
    ],
    colors: {
      Uno: ['Negro', 'Azul'],
      Dos: ['Negro', 'Azul']
    },
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: ['', '', '', ''],
          footer: null
        }
      ]
    }
  },
  Two: {
    images: [
      {
        original: bindingCases_01,
        thumbnail: ''
      }
    ],
    colors: {
      Uno: ['Negro', 'Azul'],
      Dos: ['Negro', 'Azul']
    },
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: [''],
          footer: null
        }
      ]
    }
  }
};
