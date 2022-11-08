<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Monitoreo y seguridad de carga en el transporte
    .row.mb-5
      .col-xl-6.mb-4.mb-xl-0(data-aos="fade-right")
        p El transporte logístico es un elemento de suma importancia en toda empresa que desarrolla cualquier tipo de actividad logística de cara a los clientes finales. Por esto es importante crear y realizar un sistema de seguimiento y monitoreo exigente en las áreas del transporte en tiempo real. 
        p La inadecuada gestión de los procesos y la ausencia de tecnologías de información, son algunos de los inconvenientes que afectan las actividades logísticas en las empresas, así como el monitoreo de todos los de los componentes que inciden en el transporte de las mercancías.
      .col-xl-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema9/img1.png' style="width: 650px").m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img1.svg')
      .col
        p.mb-0 #[b Técnicas de sujeción de carga]
    p(data-aos="fade-left") En el transporte de carga se debe evitar que la mercancía y otros componentes que la conformen se deslicen, basculen o en general se muevan de manera brusca en cualquier dirección. Por tal motivo se debe utilizar métodos que prevengan accidentes dando adecuada sujeción a la carga.
    p(data-aos="fade-left") Toda la carga debe disponerse en el vehículo que la va a transportar de manera adecuada minimizando accidentes a las personas y a la mercancía además de proveer un desplazamiento adecuado dentro y fuera del vehículo. La sujeción debe realizarse de manera segura teniendo en cuenta el peso, las dimensiones y puntos de anclaje que se usarán para este procedimiento.
    p.mb-5(data-aos="fade-left") Es de precisar que todo transporte de carga o mercancía debe ser siempre embalado con una manipulación y una estiba adecuada.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-10.col-md-6.col-lg-5.mb-4(data-aos="zoom-in")
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema9/img4.png")
          .crd_hover_txt--font
            .row.bg-color13.align-items-center
              .col.p-2
                h4.mb-0 Estiba
            .row.bg-color14
              .col
                .p-2.p-lg-4
                  .row
                    .col-auto.me-0.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema9/img1.svg')
                    .col
                      p #[b Es la colocación y distribución de las mercancías de forma segura y conveniente que puede ser un contenedor, una caja de camión, etc., o un vehículo de transporte.]
      .col-sm-10.col-md-6.col-lg-5.mb-4(data-aos="zoom-in")
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema9/img3.png")
          .crd_hover_txt--font
            .row.bg-color13.align-items-center
              .col.p-2
                h4.mb-0 Trincaje
            .row.bg-color14
              .col
                .p-2.p-lg-4
                  .row
                    .col-auto.me-0.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema9/img1.svg')
                    .col
                      p #[b Es el proceso necesario para sujetar, bloqueando firmemente mediante instrumentos precisos todo tipo todo tipo de mercancías que se transporten con medios marítimos, terrestres o aéreos, buscando prevenir los daños ocasionados por desplazamientos bruscos o volcamientos del contenido.]
    .row.justify-content-center(data-aos="fade-left")
      .col-md-9.col-lg-10.bg-color15
        .row.align-items-center
          .col.col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema9/img2.svg' style="width:70px").m-auto
          .col-lg
            h4.mb-0 Manual de prevención carga y estiba de transporte
            p El siguiente manual, contiene información sobre las técnicas mencionadas en la temática anterior.
          .col-lg-auto
            a.boton.color-acento-botones.me-3(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema9',
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
