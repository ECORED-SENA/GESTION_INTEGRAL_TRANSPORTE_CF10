<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Auditoría Interna
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema5/img1.png')
    p.mb-5(data-aos="fade-left") La auditoría interna es una actividad independiente y objetiva de aseguramiento, creada para dar valor y mejorar las operaciones de una organización ayudándola a conseguir los objetivos, de forma sistemática y disciplinada con el propósito de poder evaluar y mejorar el desempeño de los procesos de gestión de riesgos, control y administración, ver figura 2.
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      p.mb-0 #[b Figura 2]. Auditoría interna
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img1.svg')
      .col-lg-6.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img2.svg')
    p.mb-5(data-aos="fade-down") Es importante, a la hora de comprender el proceso de auditoría interna, tener claro los siguiente postulados:
    TabsC.color-acento-contenido(data-aos="fade-right")
      .py-3.py-md-4(titulo="¿Para qué sirve la auditoría interna?")
        .row
          .col-12
            p Es una actividad que tiene como objetivo realizar un seguimiento de un negocio, de igual forma controla los movimientos financieros.
            p Cuando se realiza una auditoría interna, las probabilidades de cumplir sus objetivos son más elevadas ya que la auditoría permite detectar cualquier tipo de fraudes o desvío ya sea de bienes materiales o dineros. 
            p La auditoría interna es exacta para hallar diferentes anomalías en una empresa u organización y así poder ser subsanadas con prontitud y eficacia.
            p.mb-4 La auditoría debe ser realizada por personas competentes en la materia. Su trabajo debe ser imparcial y objetiva. De igual forma la organización debe brindar al auditor toda la información y material necesarios para realizar los estudios pertinentes y así, poder detectar lo que realmente sucede en la empresa a nivel contable y financiero.
            figure
              img(src='@/assets/curso/tema5/img2.png')
      .py-3.py-md-4(titulo="¿Para qué sirve la auditoría interna?")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p A medida que una empresa u organización va creciendo se va haciendo necesaria la auditoría interna ya que la revisión, control y monitoreo de las operaciones se tiende a volver más complejas por lo que el análisis y estudio de la operación de la empresa puede hacerse de manera menos objetiva y alejada de la realidad.
            p Una auditoría interna se realiza sobre un plan redactado y diseñado anticipadamente bajo las políticas de la empresa a evaluar. Además, debe cumplir con:
            ul.lista-ul
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Verificación de cumplimiento de los planes y procesos que se derivan de la gerencia.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Inspección y evaluación de la utilización de los procedimientos operativos y financieros.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Llevar a cabo una inspección de los inventarios buscando que todos los bienes de la organización estén debidamente registrados y controlados.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Revisar y evaluar la documentación contable, que sea verdadera y corresponda a la realidad de la organización.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Ejecutar procesos de investigación cuando la gerencia lo exija necesario.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Proyectar informes de auditoría sobre anomalías que se puedan observar en los procesos de investigación haciendo recomendaciones para subsanarlas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img3.png')

</template>

<script>
export default {
  name: 'Tema5',
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
