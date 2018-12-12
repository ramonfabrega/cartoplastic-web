import bindingCases_01 from '../../images/bindingCases/bindingCases_01.jpg';
import letterFile_01 from '../../images/bindingCases/letterFile_01.jpg';
import letterFile_02 from '../../images/bindingCases/letterFile_02.jpg';
import letterFile_03 from '../../images/bindingCases/letterFile_03.jpg';
import letterFile_04 from '../../images/bindingCases/letterFile_04.jpg';

export default {
  route: '/productos/bindingcases',
  submenu: ['Binding Cases', 'Letter Files'],
  'Binding Cases': {
    images: [
      {
        original: bindingCases_01,
        thumbnail: ''
      },
      {
        original: bindingCases_01,
        thumbnail: ''
      },
      {
        original: bindingCases_01,
        thumbnail: ''
      },
      {
        original: bindingCases_01,
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
      Fibrone: ['Negro', 'Rojo', 'Amarillo', 'Celeste']
    },
    info: {
      cards: null,
      info: [
        {
          header: 'Material',
          paragraphs: ['Fibrone y vinilo, a solicitud de algunos clientes.'],
          footer: null
        },
        {
          header: 'Mecanismo',
          paragraphs: [
            'Lever Arch, disponible en:',
            '7 cm (estándar USA), capacidad 75mm (500 hojas)',
            '8 cm (estándar Europa), capacidad 75mm (500 hojas)'
          ],
          footer: null
        },
        {
          header: 'Denominaciones para la venta',
          paragraphs: [
            'No. 49 (tamaño especial –5 ½” x 8 ½”)',
            'No. 50 (tamaño carta- 8 ½” x 11”)',
            'No. 51 (tamaño legal - 8 ½”x 14”)'
          ],
          footer: null
        },
        {
          header: 'Opciones de personalización',
          paragraphs: [
            'Usted puede personalizar sus binding case incluyendo una etiqueta pegada en el lomo cuando el material elegido sea fibrone. En el caso del vinilo, se puede imprimir la imagen que usted desee en serigrafía, o puede repujarse, realzarse o estamparse.'
          ],
          footer: null
        }
      ]
    }
  },
  'Letter Files': {
    images: [
      {
        original: letterFile_01,
        thumbnail: ''
      },
      {
        original: letterFile_02,
        thumbnail: ''
      },
      {
        original: letterFile_03,
        thumbnail: ''
      },
      {
        original: letterFile_04,
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
      ]
    },
    info: {
      cards: null,
      info: [
        {
          header: 'Material',
          paragraphs: ['Cartón forrado en percalina o en vinilo'],
          footer: null
        },
        {
          header: 'Mecanismo',
          paragraphs: [
            'Lever Arch, disponible en:',
            '7 cm (estándar USA), capacidad 50 mm (300 hojas) y 75mm (500 hojas)',
            '8 cm (estándar Europa), capacidad 50 mm (300 hojas) y 75mm (500 hojas)'
          ],
          footer: null
        },
        {
          header: 'Otras características',
          paragraphs: [
            'Argolla para fácil manipulación',
            'Rado para estabilidad que permite parar el Letter file',
            'Riel protector para resguardar la base y aumentar la durabilidad'
          ],
          footer: null
        },
        {
          header: 'Denominaciones para la venta',
          paragraphs: [
            'Carta- 11” x 8 ½” (50mm o 75mm)',
            'Legal - 14” x 8 ½” (50mm o 75mm)'
          ],
          footer: null
        }
      ]
    }
  }
};
