import portafolios_01 from '../images/portafolios/portafolios_01.jpg';
import portafolios_02 from '../images/portafolios/portafolios_02.jpg';
import portafolios_03 from '../images/portafolios/portafolios_03.jpg';
import portafolios_04 from '../images/portafolios/portafolios_04.jpg';
import divisiones_01 from '../images/portafolios/divisiones_01.jpg';
import mecanismoRedondo from '../images/portafolios/mecanismoRedondo.jpg';
import mecanismoD from '../images/portafolios/mecanismoD.jpg';

export const productos = [
  {
    label: 'Portafolios, duplicados, y divisiones',
    value: 'portafolios'
  },
  {
    label: 'Folders expansibles',
    value: 'folders'
  },
  {
    label: 'Binding Cases y letter files',
    value: 'bindingcases'
  },
  {
    label: 'Productos promocionales',
    value: 'promocionales'
  },
  {
    label: 'Cubiertas y estuches',
    value: 'portadores'
  },
  {
    label: 'Papeleria',
    value: 'papeleria'
  }
];

export const colors = [
  {
    name: 'Negro',
    hex: '#000000'
  },
  {
    name: 'Azul oscuro',
    hex: '#1d1157'
  },
  {
    name: 'Azul royal',
    hex: '#1a1c96'
  },
  {
    name: 'Vino',
    hex: '#662234'
  },
  {
    name: 'Rojo vino',
    hex: '#91343a'
  },
  {
    name: 'Celeste',
    hex: '#236faf'
  },
  {
    name: 'Gris',
    hex: '#d0cccc'
  },
  {
    name: 'Chocolate',
    hex: '#553f25'
  },
  {
    name: 'Blanco',
    hex: '#ffffff'
  },
  {
    name: 'Verde oscuro',
    hex: '#1c4f1a'
  },
  {
    name: 'Anaranjado',
    hex: '#e8611e'
  },
  {
    name: 'Rojo',
    hex: '#e71f1f'
  },
  {
    name: 'Rosado',
    hex: '#ba1131'
  },
  {
    name: 'Verde',
    hex: '#2b7661'
  },
  {
    name: 'Verde claro',
    hex: '#5dca93'
  },
  {
    name: 'Gris claro',
    hex: '#908b8a'
  },
  {
    name: 'Gris oscuro',
    hex: '#4e4e47'
  },
  {
    name: 'Amarillo',
    hex: '#e2c81b'
  },
  {
    name: 'Amarillo oscuro',
    hex: '#eab62b'
  },
  {
    name: 'Aqua',
    hex: '#0d98ad'
  },
  {
    name: 'Morado',
    hex: '#643679'
  },
  {
    name: 'Transparente',
    hex: 'transparent'
  }
];

export const portafolioColors = {
  Vinilo: [
    'Negro',
    'Azul oscuro',
    'Azul royal',
    'Celeste',
    'Blanco',
    'Rojo',
    'Rojo vino',
    'Vino',
    'Verde',
    'Verde oscuro',
    'Gris claro',
    'Gris oscuro',
    'Amarillo',
    'Aqua'
  ],
  Percalina: [
    'Negro',
    'Azul oscuro',
    'Celeste',
    'Gris',
    'Verde oscuro',
    'Rosado'
  ],
  Castillian: [
    'Negro',
    'Azul oscuro',
    'Azul royal',
    'Celeste',
    'Anaranjado',
    'Blanco'
  ],
  Cuerotexa: ['Negro', 'Azul oscuro', 'Vino', 'Chocolate']
};

export const divisionColors = {
  'Colores disponibles': [
    'Transparente',
    'Rojo',
    'Anaranjado',
    'Amarillo',
    'Amarillo oscuro',
    'Verde claro',
    'Verde',
    'Aqua',
    'Gris',
    'Rosado',
    'Morado',
    'Chocolate'
  ]
};

export const portafolioImages = [
  {
    original: portafolios_01,
    thumbnail: ''
  },
  {
    original: portafolios_02,
    thumbnail: ''
  },
  {
    original: portafolios_03,
    thumbnail: ''
  },
  {
    original: portafolios_04,
    thumbnail: ''
  }
];

export const divisionImages = [
  {
    original: divisiones_01,
    thumbnail: ''
  },
  {
    original: divisiones_01,
    thumbnail: ''
  },
  {
    original: divisiones_01,
    thumbnail: ''
  },
  {
    original: divisiones_01,
    thumbnail: ''
  }
];

export const portafolioMecanismos = {
  'Tipo Redondo': {
    image: mecanismoRedondo,
    measurements: {
      '½"': '100',
      '1"': '200',
      '1 ½"': '300',
      '2"': '400',
      '2 ½"': '500',
      '3"': '600'
    }
  },
  'Tipo D': {
    image: mecanismoD,
    measurements: {
      '1"': '250',
      '1 ½"': '375',
      '2"': '500',
      '2 ½"': '625'
    }
  }
};
