<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 #[i Balanced scorecard]
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema3/img1.png')
    p.mb-5(data-aos="fade-left") El Balanced Scorecard (BSC) es un método de gerencia en el cual se integra los aspectos de planificación y dirección, en donde se puede relacionar estrategias y objetivos con indicadores y metas para conseguir el logro de la formulación e implementación estratégica.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img1.svg')
      .col
        p.mb-0 #[b ¿Cuál es su utilidad?]
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Contribuye para que la misión y visión se transformen en medidas reales de actuación en la organización, realizando un detallado seguimiento y retroalimentación.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img1.svg')
      .col
        p.mb-0 #[b Beneficios de aplicar el BSC]
    p.mb-5(data-aos="fade-left") El #[i Balanced Scorecard] ayuda a generar resultados en beneficio de la administración de la compañía, siempre y cuando se use la metodología y la aplicación para monitorear y estudiar los indicadores obtenidos del análisis.
    .row.mb-4
      .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img3.png' style="width: 350px").m-auto
      .col-lg(data-aos="fade-left")
        p Existen otras ventajas como:
        ul.lista-ul
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Enfocar a los empleados hacia la visión de la empresa.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Explicación al personal acerca de los objetivos y su cumplimiento.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Redefinición de la estrategia con base en resultados.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Convertir la visión y estrategias en acción.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Beneficia en el presente la creación de valor futuro.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Integración de información de diversas áreas de negocio.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Capacidad de análisis.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Ventaja en los indicadores financieros.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Desarrollo laboral de los promotores del proyecto.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Mide las decisiones estratégicas para verificar si la asignación de recursos de la organización está siendo efectiva.
    p.mb-5(data-aos="fade-down") Algunas características del BSC:
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-11.col-md-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center.mb-5 Perspectivas en el BSC
              p Usualmente se suelen identificar cuatro perspectivas en un BSC, no es necesario que siempre estén todas; estas cuatro perspectivas son las más usadas y pueden aplicarse casi a toda clase de empresas, y no forman una condición indispensable para crear un modelo de negocios.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img4.png')})`}")
              .row.fig-p1
                .col-12.p-2.bg-c1
                  p.mb-0 #[b Perspectiva en el BSC]
      .col-11.col-md-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center.mb-5 Perspectiva financiera
              p Durante mucho tiempo los indicadores financieros han sido muy usados, ya que muestran lo que está sucediendo con las inversiones y el valor añadido económico, incluso, todas las medidas que forman parte de la relación causa-efecto, culminan en la mejor actuación financiera.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img5.png')})`}")
              .row.fig-p1
                .col-12.p-2.bg-c1
                  p.mb-0 #[b Perspectiva financiera]
      .col-11.col-md-7.col-lg-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center.mb-5 Perspectiva del cliente
              p Como parte del modelo comercial, se determinan los clientes a los que se dirige el servicio o el producto. El punto de vista del cliente refleja el mercado en el que se compite. Generando información relevante para generar, adquirir, retener y satisfacer a los clientes, ganar participación en el mercado, rentabilidad, etc.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img6.png')})`}")
              .row.fig-p1
                .col-12.p-2.bg-c1
                  p.mb-0 #[b Perspectiva del cliente]
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-11.col-md-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center.mb-5 Perspectiva procesos internos
              p Para lograr los objetivos financieros y de los clientes, ciertos procesos que empoderan deben ejecutarse con excelencia. Aquellos procesos que deben ser, los gerentes los identifican y les da una especial atención de manera que se alcancen las metas de los accionistas y clientes.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img7.png')})`}")
              .row.fig-p1
                .col-12.p-2.bg-c1
                  p.mb-0 #[b Perspectiva procesos internos]
      .col-11.col-md-7.col-lg-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4.text-center Perspectiva de aprendizaje y crecimiento
              p.mb-0 Si desea obtener resultados sostenidos a largo plazo, este ángulo es el que más preocupa. Aquí se determina la infraestructura necesaria para crear valor a largo plazo. La formación y el crecimiento debe lograrse en tres grandes áreas: personas, sistemas y clima organizacional. Suelen ser intangibles, pues son identificadores relacionados con la formación de personal, #[i software] o desarrollo, maquinaria, tecnología y todo aquello que se debe potenciar para alcanzar las metas propuestas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img8.png')})`}")
              .row.fig-p1
                .col-12.p-2.bg-c1
                  p.mb-0 #[b Perspectiva de aprendizaje y crecimiento]
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/img2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 CUADRO DE MANDO INTEGRAL (CMI)
                  p.text-small Para mayor comprensión del tema BSC, es importante consultar el siguiente video, el cual explica brevemente el Cuadro de Mando Integral o #[i Balance Scorecard]:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=eyau1IvNuXA" target="_blank")
                    span(style="color:#000 !important") Ver video
                    i.fas.fa-play-circle(style="color:#000 !important")

</template>

<script>
export default {
  name: 'Tema3',
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
