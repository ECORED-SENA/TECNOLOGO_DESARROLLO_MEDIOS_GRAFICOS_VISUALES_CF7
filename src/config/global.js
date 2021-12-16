export default {
  global: {
    componenteFormativo: 'Procesos de producción gráfica',
    descripcionCurso:
      'La producción gráfica es una forma artística y creativa de plasmar una imagen a partir de un proceso de varias etapas como el diseño, la preimpresión, la impresión y la postproducción. Con la tecnología aparecen nuevas formas de comunicar y la creación de diseños para medios digitales, la premedia organiza archivos multipropósitos dirigidos a medios impresos y digitales.',
    imagenBannerPrincipal: require('@/assets/curso/inicio.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-i.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producción gráfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procesos de artes gráficas',
            hash: 't1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Flujo de proceso',
            hash: 't1-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diseño',
            hash: 't1-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Preprensa',
            hash: 't1-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Impresión',
            hash: 't1-5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Posimpresión',
            hash: 't1-6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formatos de salida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos y clasificación',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medios impresos y digitales',
            hash: 't2-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Sustratos',
            hash: 't2-3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Prevuelo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Premedia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acosta, A., C. (2018). Medios digitales: herramientas útiles para el crecimiento de las empresas. ',
      link:
        'http://www.entreperiodistas.com/medios-digitales-herramientas-utiles/',
    },
    {
      referencia: 'Adobe. (2020). Rasterizado y vectorizado.',
      link:
        'https://helpx.adobe.com/es/photoshop-elements/key-concepts/raster-vector.html',
    },
    {
      referencia: 'Bolina, L. (2 de marzo de 2020). ¿Qué es una Landing Page? ',
      link: 'https://rockcontent.com/es/blog/landing-page/',
    },
    {
      referencia:
        'Dipe. (2020). Vectorizar imagen: qué es y qué utilidades tiene en diseño. ',
      link:
        'https://blog.dipe.es/blog/vectorizar-imagen-que-es-y-que-utilidades-tiene-en-diseno/',
    },
    {
      referencia:
        'Hotmart. (2020). Medio digital: qué es, principales tipos y cómo usarlo. ',
      link: 'https://blog.hotmart.com/es/medio-digital/',
    },
    {
      referencia: 'Ionos. (2021). ¿Qué es un píxel? ',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/diseno-web/que-es-un-pixel/',
    },
    {
      referencia:
        'Johanlenium. (2019). El proceso de preprensa, características e importancia.',
      link:
        'https://insumosesmar.com/es/el-proceso-de-preprensa-caracteristicas-e-importancia/',
    },
    {
      referencia:
        'Machuca, F. (2021) ¿Qué es el diseño gráfico? Te lo cuento sin cambios.',
      link:
        'https://www.crehana.com/co/blog/diseno-grafico/que-es-el-diseno-grafico/',
    },
    {
      referencia:
        'Printateca.es (2016) ¿Qué es la producción gráfica? El medio impreso. ',
      link:
        'https://www.printateca.es/blog/que-es-la-produccion-grafica-el-medio-impreso/',
    },
    {
      referencia:
        'Redacción Interempresas. (2016). Revisión de archivos y pruebas antes de imprimir.',
      link:
        'https://www.interempresas.net/Graficas/Articulos/154393-Revision-de-archivos-y-pruebas-antes-de-imprimir.html',
    },
    {
      referencia:
        'Romero, B. (2021). ¿Cuáles son los mejores tipos de formatos de imágenes que existen? ',
      link: 'https://www.begoromero.com/formatos-de-imagen/',
    },
  ],
  glosario: [
    {
      termino: 'CMYK',
      significado: 'separación en cian, magenta, amarillo y key (negro)',
    },
    {
      termino: 'EPS',
      significado: '<em>Encapsulates PostScript.</em>',
    },
    {
      termino: 'GIF',
      significado: '<em>Graphics Interchange Format.</em>',
    },
    {
      termino: 'JPG',
      significado: '<em>Joint Photographic Experts Group.</em>',
    },
    {
      termino: 'Landing Page',
      significado:
        'también conocida como página de destino, tiene como foco principal la conversión de los visitantes. Son páginas con pocos elementos y enfocadas en un único CTA., evitando distracciones y garantizando la conversión deseada en tu estrategia de <em>Marketing</em> Digital (Laís, 2020).',
    },
    {
      termino: 'PDF',
      significado: '<em>Portable Document Format.</em>',
    },
    {
      termino: 'PNG',
      significado: '<em>Portable Network Graphics.</em>',
    },
    {
      termino: 'Premedia',
      significado:
        'es preparar los archivos que van para multimedia, web, etc., así es la evolución y complementación de lo que se conoce como preprensa y que se aplica a los medios digitales.',
    },
    {
      termino: 'Prevuelo',
      significado:
        'el término <em>pre-flight</em> es un término del campo de la aviación, donde se emplea para referirse al control y revisión del avión realizado por el piloto antes del despegue. En producción gráfica se usa este concepto para el control que se hace del original digital de impresión (también llamado arte final digital, <em>digital art work</em>) previamente a su salida a película o a forma de impresión (Cevagraf, 2013).',
    },
    {
      termino: 'Pixel',
      significado:
        'el píxel -o px, para abreviar- es el elemento más pequeño de una imagen reproducida digitalmente. En un monitor o en la pantalla de un teléfono móvil se suelen alinear varios píxeles en una trama. La combinación de varios píxeles constituye una imagen rasterizada (Ionos, 2021).',
    },
    {
      termino: 'SVG',
      significado: '<em>Scalable Vector Graphics.</em>',
    },
    {
      termino: 'TIFF',
      significado: '<em>Tagged Image Film Format.</em>',
    },
    {
      termino: 'Vectorizar ',
      significado:
        'el proceso de vectorizar se basa en hacer una conversión de una imagen creada con píxeles (como puede ser en los formatos más comunes, como PNG o JPEG) a una imagen vectorial (en formatos como EPS, EMF o SVG). Es decir, que vectorizar imagen consiste en hacer la transformación de esos píxeles que componen la imagen, a vectores (Dipe, 2020).',
    },
  ],
  complementario: [
    {
      texto:
        'Universidad de Israel (13 de abril de 2016) Capítulo I La Industria Gráfica',
      tipo: 'PDF',
      descarga: '/downloads/anexo2_cf007_capitulo_i_la_industria_grafica.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Instructor Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora Instruccional ',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jorge Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella',
        cargo: 'Soporte Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
