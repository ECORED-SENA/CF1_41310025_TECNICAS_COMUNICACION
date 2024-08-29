export default {
  global: {
    componenteFormativo: 'La comunicación organizacional',
    descripcionCurso:
      'El componente formativo aborda la importancia de la comunicación organizacional, destacando su papel en la gestión interna y externa, y su adaptación a los cambios sociales y tecnológicos. Se describen elementos clave, niveles de comunicación y herramientas de gestión, subrayando la necesidad de estrategias efectivas para motivar, coordinar y fortalecer la organización, mejorando así el desempeño y las relaciones públicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elementos de la comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación interna y externa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de comunicación interna',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de gestión',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Comunicación organizacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Los clientes, el servicio y la comunicación organizacional. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/Fj3zHwTwVsg?si=ehvV18Jyk_MliG0d',
    },
    {
      tema: 'Elementos de la comunicación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020). Elementos de la comunicación. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/uyfkdAMQAI8?si=NYxHOmqo2hRnMaGk',
    },
    {
      tema: 'Comunicación interna y externa',
      referencia:
        'Roca Pérez, X. Romeo Delgado, M. & Almenara Aloy, J. (2014). Comunicación interna en la empresa: (ed.). Editorial UOC.',
      tipo: 'Capítulo 2',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/115903',
    },
    {
      tema: 'Plan de comunicación interna',
      referencia:
        'Factorial HR. (s.f.). Claves para una comunicación interna eficaz con Blanca Rodriguez [Podcast].',
      tipo: 'Podcast',
      link: 'https://music.youtube.com/watch?v=eVUmsdl-uf4',
    },
    {
      tema: 'Herramientas de gestión',
      referencia:
        'Factorial España (2022). Herramientas de Comunicación Interna para tu empresa. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3uyHyL0DQHs',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'forma de expresión consciente, congruente, clara, directa y equilibrada. Consiste en comunicar ideas y sentimientos o defender derechos sin intención de herir o perjudicar a otros.',
    },
    {
      termino: 'Campaña',
      significado:
        'conjunto de actividades o esfuerzos realizados durante cierto tiempo con el fin de alcanzar un objetivo.',
    },
    {
      termino: 'Capacidad crítica',
      significado:
        'habilidad para reflexionar y tomar una posición neutra al emitir conclusiones sobre un texto o acción, utilizando el conocimiento y la imaginación.',
    },
    {
      termino: 'Competencia',
      significado:
        'conjunto de conocimientos, procedimientos, valores y actitudes que, integrados en la acción, permiten al individuo resolver problemas específicos de manera autónoma y flexible.',
    },
    {
      termino: 'Comunicación',
      significado:
        'proceso mediante el cual establecemos contacto con otras personas para transmitir o intercambiar mensajes.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'conjunto de habilidades gerenciales o directivas que permiten a un individuo influir en las personas o grupos, motivándolos a trabajar con entusiasmo para lograr metas y objetivos.',
    },
    {
      termino: 'Publicidad',
      significado:
        'forma de comunicación comercial que intenta incrementar el consumo de un producto o servicio a través de los medios de comunicación y técnicas de propaganda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguirre, D. (2017). Comunicación interna sin fronteras: tendencias y casos en América Latina: (ed.). RIL editores. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/106272',
    },
    {
      referencia:
        'Aguado, J. (2004). Introducción a las teorías de la información y la comunicación. Universidad de Murcia.',
      link: '',
    },
    {
      referencia:
        'Bayer, C. (2005). Comunicación eficaz: una competencia para lograr el éxito organizacional. ',
      link:
        'http://intellectum.unisabana.edu.co/bitstream/handle/10818/4624/130814.pdf?sequence=1',
    },
    {
      referencia:
        'Bustinduy, I. (2012). La comunicación interna en las organizaciones 2.0: (ed.). Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/56267',
    },
    {
      referencia:
        'Chávez, N. (2013). La imagen corporativa: Teoría y práctica de la identificación institucional. Editorial Gili Gaya, México.',
      link: '',
    },
    {
      referencia:
        'Cuenca, J. (2018). Guía fundamental de la comunicación interna: (ed.). Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/105390',
    },
    {
      referencia:
        'Kreitner, R. (2003). Comportamiento organizacional: Conceptos, problemas y prácticas. Arizona State University.',
      link: '',
    },
    {
      referencia:
        'Molina, M.; Conca, F. (2000). Innovación tecnológica y competitividad empresarial. Publicaciones de la Universidad de Alicante.',
      link: '',
    },
    {
      referencia:
        'Solano, A. (2008). Administración de la educación. Promai-uned, San José de Costa Rica.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Herney Sánchez Pizarro',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial CEDEAGRO - Regional Boyacá',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
