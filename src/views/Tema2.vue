<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Trazabilidad
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema2/img1.png')
    p.mb-5(data-aos="fade-left") La trazabilidad en el campo de la logística de mercancías es la forma de identificar el origen y los ciclos por los cuales atraviesa un producto durante todo el desarrollo productivo y su proceso de distribución logística hasta llegar al consumidor final.
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h4.mb-0 Es importante tener en cuenta la Información resultante de la trazabilidad:
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Al realizar una adecuada trazabilidad las empresas pueden generar mayor valor a la operación y obtienen información que les permiten tomar decisiones acertadas, corrigiendo las fallas que se presentan en el desarrollo de esta.
    p.mb-5(data-aos="fade-up") A través de los resultados obtenidos de la trazabilidad se pueden alcanzar los siguientes beneficios:
    SlyderF(columnas="col-9 col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6.mb-4
            img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop' style="width: 120px").m-auto
        p.text-center Contribuye a mejorar el control de la mercancía de la empresa.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6.mb-4
            img(src='@/assets/curso/tema2/img2.svg' alt='AvatarTop' style="width: 120px").m-auto
        p.text-center Facilita la automatización de la información de la entrada de los productos.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6.mb-4
            img(src='@/assets/curso/tema2/img3.svg' alt='AvatarTop' style="width: 120px").m-auto
        p.text-center Facilita la utilización de la información.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6.mb-4
            img(src='@/assets/curso/tema2/img4.svg' alt='AvatarTop' style="width: 120px").m-auto
        p.text-center Agiliza la velocidad en los datos de transmisión.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6.mb-4
            img(src='@/assets/curso/tema2/img5.svg' alt='AvatarTop' style="width: 120px").m-auto
        p.text-center Se controla de mejor manera el transporte, dinamizando la gestión de #[i stocks] y así, proporcionar mejor servicio.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6.mb-4
            img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop' style="width: 120px").m-auto
        p.text-center Se aumenta la seguridad en la preparación de los pedidos.

</template>

<script>
export default {
  name: 'Tema2',
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
