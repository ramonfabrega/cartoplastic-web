import portafolios_01 from '../../images/portafolios/portafolios_01.jpg';
import portafolios_02 from '../../images/portafolios/portafolios_02.jpg';
import portafolios_03 from '../../images/portafolios/portafolios_03.jpg';
import portafolios_04 from '../../images/portafolios/portafolios_04.jpg';
import divisiones_01 from '../../images/portafolios/divisiones_01.jpg';
import mecanismoRedondo from '../../images/portafolios/mecanismoRedondo.jpg';
import mecanismoD from '../../images/portafolios/mecanismoD.jpg';

export default {
  route: '/productos/portafolios',
  submenu: ['Portafolios', 'Divisiones'],
  Portafolios: {
    images: [
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
    ],
    colors: {
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
    },
    info: {
      cards: {
        'Tipo Redondo': {
          image: mecanismoRedondo,
          header: ['Tamaño', 'Cantidad de hojas'],
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
          header: ['Tamaño', 'Cantidad de hojas'],
          measurements: {
            '1"': '250',
            '1 ½"': '375',
            '2"': '500',
            '2 ½"': '625'
          }
        }
      },
      info: {
        header: 'Dimensiones',
        sizes: [
          '11” x 8 ½”',
          '14” x 8 ½”',
          '9” X 7” *',
          '11” x 17',
          'Tamaños especiales'
        ],
        caption:
          'El tamaño 9” x 7” está disponible en argolla redonda de 1” y 1 1/2”, y en argolla tipo “D” de 1”.'
      }
    }
  },
  Divisiones: {
    images: [
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
    ],
    colors: {
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
    },
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: [
            'Las divisiones se fabrican principalmente en cartulina de 90 lbs blanca, pero también hay la posibilidad de hacerlas en cartulina celeste, rosada, verde claro y amarillo. Además, se pueden solicitar divisiones en cartulinas fluorescentes y en cualquier otro material disponible en el mercado.',
            'Estas divisiones pueden llevar impresión en las pestañas para personalizarlas. Las pestañas están protegidas del uso continuo por medio de un material plástico (mylar), que está disponible en una amplia gama de colores (ver listado de colores disponibles arriba). Los tamaños de las divisiones se adaptan a las diferentes medidas de portafolios y/o folders que el cliente utilice. El cliente elije la cantidad de divisiones que desea para cada portafolio/folder, y el tamaño de la pestaña dependerá de la cantidad de posiciones que se requieran.',
            'Los tamaños de las divisiones se adaptan a las diferentes medidas de portafolios y/o folders que el cliente utilice. El cliente elije la cantidad de divisiones que desea para cada portafolio/folder, y el tamaño de la pestaña dependerá de la cantidad de posiciones que se requieran.',
            'El cliente elije la cantidad de divisiones que desea para cada portafolio/folder, y el tamaño de la pestaña dependerá de la cantidad de posiciones que se requieran.'
          ],
          footer: null
        }
      ]
    }
  }
};
