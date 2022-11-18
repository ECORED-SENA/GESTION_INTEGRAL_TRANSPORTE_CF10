<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 #[i Ciclo Deming] (Ciclo de la calidad)
    p.mb-5(data-aos="fade-right") Es nombrado así por su creador Edwards Deming, es un método cíclico que se compone de cuatro fases. El principal propósito de su implementación es colaborar y ejecutar procesos eficientes, hasta llegar a un objetivo. A medida que se implementa este método, la productividad, la participación en el mercado y la rentabilidad se ven progresivamente aumentar con la implementación de estas fases:
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UQJcmopnXeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-4(data-aos="fade-up")
      .col-12.bg-color3.p-4
        .row
          .col-lg-6
            .row.align-items-center.my-5
              .col-auto.pe-0
                figure
                  img(src='@/assets/curso/tema3/img1.svg')
              .col
                p.mb-0 #[b Importancia del ciclo de Deming o PDCA]
            p A través de este ciclo, una empresa puede identificar las oportunidades de mejora continua y así aprovecharlas a su favor. Permite al área de logística crear nuevas y óptimas soluciones en el tiempo, rehaciendo progresivamente prácticas que estén en desuso o que no cumplan con las expectativas. 
            p.mb-5 El ciclo Deming en logística hace una evaluación de forma continua, logrando identificar fallas o procesos inútiles que retrasan y complican la obtención de los objetivos.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/img2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 CICLO DE CALIDAD
                  p.text-small Para afianzar la información sobre el ciclo de calidad, se invita a revisar el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=KvitqfuxFtw" target="_blank")
                    span(style="color:#000 !important") Ver video
                    i.fas.fa-play-circle(style="color:#000 !important")

</template>

<script>
export default {
  name: 'Tema4',
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
