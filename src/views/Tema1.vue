<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Simulación de operaciones
    p.mb-5 La simulación de operaciones representa la operación de un proceso o componente real, la cual se puede llevar a cabo de forma sistemática basándose en un paso a paso o a través de un sistema de computación y tiene como finalidad deducir características de funcionalidad con la observación del proceder del sistema durante un tiempo definido, así como se observa en la figura 1.
    .titulo-sexto.color-acento-contenido.mb-5
      p.mb-0 #[b Figura 1]. Simulación Logística
    .row.bg-color1.mb-2
      .col-12.p-5
        .row.justify-content-center
            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/img1.svg')
              .tarjeta.color-acento-botones.p-3(x="29.5%" y="24%" numero="")
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | Transportista
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | Agencia aduanera
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | EPSA
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | Terminal
                  li
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | Extraportuario
              .tarjeta.color-acento-botones.p-3(x="51.5%" y="39.5%" numero="")
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | Agencia aduanera
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | Terminal
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | SAG
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | SNA
              .tarjeta.color-acento-botones.p-3(x="70%" y="20%" numero="")
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | EPSA
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | Agencia naviera
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | Terminal
                  li 
                    i.fas.fa-angle-right(style="color: #FF6D4B")
                    | SNA
    .row.justify-content-center.mb-5
      .col-lg-12.bg-color2.p-2
        p.mb-0 Nota. Fundación valenciaport (2021).
    .row
      .col-lg
        p El desarrollo tecnológico permite a las empresas, probar y/o crear equipos, productos y procesos en un ambiente virtual antes de ser pasados a un mundo real. Así, se pueden detectar a tiempo situaciones de riesgo, realizar pruebas y configurar diferentes escenarios. En conclusión, la simulación es un proceso que genera una base para la experimentación, creando flexibilidad y una mejor productividad de los negocios.
        p La simulación permite una sincronización en los procesos logísticos, además ocupa un papel importante en el diseño, ejecución y control de estos.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema1/img3.png')
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Utilidades de la simulación
    p.mb-5 A continuación, se mencionan algunas utilidades al implementar simulaciones como:
    .row
      .col-lg
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Mejora constante de los procesos")
            .row.justify-content-center.align-items-center
              .col-4.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img2.svg' style="width: 90px").m-auto
              .col-lg
                p.mb-0 Todos los procesos se pueden observar de manera virtual pudiendo ser corregidos y evaluados permanentemente dando oportunidad de hacer correcciones a tiempo y evitando errores en el momento de la puesta en marcha.
          .row(titulo="Ahorro de costes")
            .row.justify-content-center.align-items-center
              .col-4.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img3.svg' style="width: 90px").m-auto
              .col-lg
                p.mb-0 El equipo profesional puede desarrollar prototipos virtuales evitando la creación de modelos físicos que conllevan a costos elevados.
          .row(titulo="Prevención de fallos")
            .row.justify-content-center.align-items-center
              .col-4.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img4.svg' style="width: 90px").m-auto
              .col-lg
                p.mb-0 Se pueden identificar diferentes fallas en el proceso de la operación y así evitar interrupciones en el servicio.
          .row(titulo="Incremento de la productividad")
            .row.justify-content-center.align-items-center
              .col-4.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img5.svg' style="width: 90px").m-auto
              .col-lg
                p.mb-0 La simulación puede aportar a las empresas una disminución en un 50% el tiempo de lanzamiento de un producto al mercado (time to market) y aumentando en un 20% la productividad.
          .row(titulo="Planificación del futuro")
            .row.justify-content-center.align-items-center
              .col-4.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img6.svg' style="width: 90px").m-auto
              .col-lg
                p.mb-0 El análisis de datos y la simulación crean una conducta predictiva e impulsan el perfeccionamiento de todos los procesos ubicando a una empresa u organización delante de la competencia.
          .row(titulo="Monitorizar decisiones")
            .row.justify-content-center.align-items-center
              .col-4.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img7.svg' style="width: 90px").m-auto
              .col-lg
                p.mb-0 Los procesos operan articulados, por tal razón la comunicación es en tiempo real y así la toma de decisiones siempre es más confiable.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema1/img4.png' style="width: 350px").m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Procedimiento
    p.mb-5 Para efectuar un modelo de simulaciones se debe:
    .tarjeta.tarjeta--azul.p-3.p-lg-5
      SlyderA(tipo="b")
        .row
          .col-lg
            h4 Formular, definir e identificar el problema
            p Por medio de un modelo conceptual que evidencie las características más importantes.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/img5.png')
        .row
          .col-lg
            p Realizar el modelo virtual basado en los elementos específicos en el problema, puesto que cada lenguaje de simulación tiene definidas ciertas características, como:
            ul.lista-ul
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 #[b Entidades]: elementos sujetos a la simulación (productos, documentos, mercancía consolidada).
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 #[b Recursos]: elementos que posibilitan el proceso a simular (operarios, montacargas, grúas, etc.).
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 #[b Plazas productivas]: áreas mediadoras en el proceso de simulación, por ejemplo, muelles de carga, áreas de almacenamiento, oficinas, líneas de producción, etc.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 #[b Grafos]: representación simbólica de aquellas redes o rutas por donde se mueve un recurso de un área productiva a otra.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/img6.png')
        .row
          .col-lg
            h4 Verificación, desarrollo y ejecución del modelo
            p En este punto se verifica la funcionalidad entre las variables, restricciones, elementos de entrada y resultados esperados tras simular en tiempo real la aplicación realizada.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/img7.png')
        .row
          .col-lg
            h4 Recolección de datos y análisis de resultados
            p Este proceso complementa la simulación, se generan las conclusiones y recomendaciones; se expresan por medio de estadísticas y porcentajes frente a los recursos usados, costos y ganancias generadas por el modelo.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/img8.png')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
