export default {
  global: {
    componenteFormativo: 'Monitoreo de la operación',
    descripcionCurso:
      'Por medio del siguiente contenido el aprendiz llegará a comprender los criterios y procedimientos a tener en cuenta en la evaluación y monitoreo de la operación del transporte, analizando y conceptualizando los resultados del ejercicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Simulación de operaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Utilidades de la simulación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Procedimiento',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Balanced scorecard</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>Ciclo Deming</em> (Ciclo de la calidad)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Auditoría Interna',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Gestión de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Análisis y resultados en la operación del servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Recibo y despacho',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Métodos de recibo',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Despacho de mercancías',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Monitoreo y seguridad de carga en el transporte',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  icono: 'fas fa-sitemap',
      //  titulo: 'Síntesis',
      //  nombreRuta: 'sintesis',
      //  desarrolloContenidos: true,
      //},
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  complementario: [
    {
      tema: 'Monitoreo y seguridad de carga en el transporte',
      referencia:
        'Sanchez, M. D. (2020). <em>Manual de prevención carga y estiba en el transporte</em>. Tec sup prl.',
      tipo: 'PDF',
      descarga: '/downloads/anexo2.pdf',
    },
    {
      tema: 'Gestión de riesgos',
      referencia:
        'Iso (2018). <em>Norma Internacional Iso 31000</em>. Segunda edición.',
      tipo: 'PDF',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      tema: 'Análisis y resultados en la operación del servicio',
      referencia:
        'Virtual Training Lteam (2016). <em>Informes de gestión</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-3fWhB6MPU8',
    },
  ],
  glosario: [
    {
      termino: 'KPIs',
      significado:
        'Son Indicadores para cuantificar el desarrollo de una empresa e implementar acciones de mejora continua.',
    },
    {
      termino: 'Método',
      significado:
        'Proceso lógico y ordenado que conlleva a un resultado determinado.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Es el desarrollo de un sistema para obtener, analizar y utilizar información haciendo seguimiento al desarrollo de un plan o proceso para cumplir con los objetivos definidos.',
    },
    {
      termino: 'Operación logística',
      significado:
        'Grupo de acciones que se implementan para ejecutar los procesos en gestión y transporte de mercancías y productos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Estremadoyro, A. (Feb 02, 2017). <em>Formato de Recepción de Bienes y Mercancías</em>. ',
      link:
        'https://es.scribd.com/document/338221430/Formato-de-Recepcion-de-Bienes-y-Mercancias',
    },
    {
      referencia:
        'European Open Business School. (2021). <em>Manual Gestión Logística</em>. ',
      link: 'https://user-gadoc8x.cld.bz/MANUAL-GESTION-LOGISTICA/28/ ',
    },
    {
      referencia:
        'Fundación valenciaport (2021). <em>Simulación logística (chile)</em>. ',
      link:
        'https://www.fundacion.valenciaport.com/proyecto/simulacion-logistica-chile-levantamiento-multidimensional-de-procesos-de-las-cadenas-logisticas-del-puerto-de-san-antonio-y-planteamiento-de-soluciones-para-su-optimizacion/',
    },
    {
      referencia: 'IAPHL (2021). <em>Manual de logística</em>. ',
      link:
        'http://iaphl.org/wp-content/uploads/2016/05/Manuel-de-Logistica_Guia-para-Gerentes.pdf',
    },
    {
      referencia:
        'Mora, L. A. (2011). <em>Gestión logística en centros de distribución</em>. Ecoe Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Rodríguez, J. C. (2017). <em>Manual de transporte de carga</em>. Editorial Utadeo.',
      link: '',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Dairo Giovanni Rodríguez Agaton',
        cargo: 'Experto temático',
        centro:
          'Centro de Tecnologías del Transporte - Regional Distrito Capital',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
