import rompecabezas from '../../images/promocionales/rompecabezas.jpg';
import asientosEstadio from '../../images/promocionales/asientosEstadio.jpg';
import coasters from '../../images/promocionales/coasters.jpg';
import portaRevistas from '../../images/promocionales/portaRevistas.jpg';
import cajasDecorativas from '../../images/promocionales/cajasDecorativas.jpg';

export default {
  route: '/productos/promocionales',
  submenu: [
    'Rompecabezas',
    'Asientos de estadio',
    'Coasters o portavasos',
    'Aislantes de calor para vasos',
    'Revisteros',
    'Cajas decorativas'
  ],
  Rompecabezas: {
    images: [
      {
        original: rompecabezas,
        thumbnail: ''
      }
    ],
    colors: null,
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: [
            'El marketing promocional y el marketing directo necesitan de soportes originales y de alta calidad para tener éxito. Productos promocionales que atrapen a su cliente y logren el objetivo de posicionar su marca, introducir un producto o lanzar una oferta, entre otros.',
            'Por eso, Cartoplastic pone a su disposición una gama flexible de productos promocionales. El único limite que tenemos es el de su imaginación.',
            'Los artículos promocionales son los reyes de la personalización. El sentido mismo de su existencia los convierte en soporte de marca o campaña y, por tanto, la personalización con su logo o con cualquier arte diseñado al efecto es fundamental. Pregunte a nuestros ejecutivos de venta por las múltiples opciones que tenemos de impresión o marcado, que van desde la serigrafía al repujado, pasando por la impresión digital, hasta el resaltado o el estampado (incluyendo colores metálicos).'
          ],
          footer: null
        }
      ]
    }
  },
  'Asientos de estadio': {
    images: [
      {
        original: asientosEstadio,
        thumbnail: ''
      }
    ],
    colors: {
      'Colores disponibles': [
        'Negro',
        'Azul oscuro',
        'Azul royal',
        'Celeste',
        'Blanco',
        'Rojo',
        'Verde',
        'Gris claro',
        'Gris oscuro',
        'Amarillo',
        'Aqua'
      ]
    },
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: [
            'Confeccionados en vinilo (vinyl) y foam, resulta una manera muy efectiva de promover una marca, puesto que se llevan como un maletín y la impresión en ambas caras será vista por muchos consumidores potenciales. Los asientos pueden llevar impresión en serigrafía en cualquier parte del área de 13” x 13”.'
          ],
          footer: null
        }
      ]
    }
  },
  'Coasters o portavasos': {
    images: [
      {
        original: coasters,
        thumbnail: ''
      }
    ],
    colors: null,
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: [
            'Excelente articulo promocional para cualquier negocio donde se ofrezcan bebidas. También puede ser utilizado por empresas, o a título personal en eventos o fiestas especiales agregando un toque de distinción en la atención a clientes o invitados.',
            'Pueden imprimirse a todo color y están disponibles en forma redonda de 4” de diámetro, cuadrada de 3 ½” y rectangular de 4” X 8"'
          ],
          footer: null
        }
      ]
    }
  },
  'Aislantes de calor para vasos': {
    images: [],
    colors: null,
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: [
            'Confeccionados en cartón flauta tipo E o cualquier otra modalidad que requiera el cliente, son ideales para negocios que ofrezcan bebidas calientes para llevar. Pueden imprimirse a varios colores.'
          ],
          footer: null
        }
      ]
    }
  },
  Revisteros: {
    images: [
      {
        original: portaRevistas,
        thumbnail: ''
      }
    ],
    colors: null,
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: [
            'Confeccionados en cartón y recubiertos en papel/percalina impresa a todo color. Ideales para ofrecer con una mejor presentación, revistas o impresiones a clientes de una empresa. De esta manera las mismas son fácilmente almacenadas y pueden colocarse en anaqueles.'
          ],
          footer: null
        }
      ]
    }
  },
  'Cajas decorativas': {
    images: [
      {
        original: cajasDecorativas,
        thumbnail: ''
      }
    ],
    colors: null,
    info: {
      cards: null,
      info: [
        {
          header: null,
          paragraphs: [
            'Cajas finas de regalos, generalmente utilizadas por las joyerías, chocolaterías, bombonerías y cualquier otro negocio en donde el empaque o caja donde va el producto sea su carta de presentación.',
            'Las cajas se fabrican en cartón grueso y son forradas con percalina impresa. La percalina permite que se imprima digitalmente, lo que facilita la reproducción desde fotografías hasta cualquier arte a todo color.'
          ],
          footer: null
        }
      ]
    }
  }
};
