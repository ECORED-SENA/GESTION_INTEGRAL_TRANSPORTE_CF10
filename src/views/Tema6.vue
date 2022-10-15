<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Gestión de riesgos
    p.mb-5 Esta gestión ayuda a identificar, analizar y dar respuesta a factores de riesgo durante la existencia de una organización con la finalidad de dar cumplimiento a sus objetivos y metas tanto a largo como corto plazo.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos sistemas están creados con el objetivo de identificar riesgos, cuantificarlos y predecir su impacto en una organización. Los riesgos se clasifican en aceptables o inaceptables de acuerdo a qué tan factible sea funcionar o no con ellos. Esta clasificación depende del punto de vista del gerente de proyectos, ver figura 3.
    .titulo-sexto.color-acento-contenido.mb-5
      p.mb-0 #[b Figura 3]. Gestión de riesgos
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/tema6/img1.svg')
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src='@/assets/curso/tema6/img2.png' style="width: 350px").m-auto
      .col-lg-8.order-1.order-lg-2
        p.mb-4 Según la Norma ISO 31000 (ver norma en anexos), la gestión de riesgos cumple con los siguientes principios: 
        ul.lista-ul
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Proteger y crear valor para las organizaciones.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Ser parte integrante de todos los procesos de la organización.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Ser considerada en el proceso de toma de decisiones.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Abordar a la incertidumbre de forma explícita.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Ser sistemática, estructurada y oportuna.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Basarse en la mejor información disponible.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Estar alineada con los entornos internos y externos de la organización y con el perfil de riesgo.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Considerar los factores humanos y culturales.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Ser transparente e inclusiva.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Ser dinámica, interactiva y capaz de reaccionar a los cambios.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Permitir la mejora continua de los procesos de la organización.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img1.svg')
      .col
        p.mb-0 #[b La gestión de riesgos en la logística]
    p.mb-5 Hoy en día las empresas conocen la importancia de contar con un seguimiento en la logística, a través de un programa que considere los siguientes puntos:
    TabsA.color-acento-botones
      .tarjeta.color-acento-botones.p-4(titulo="Identificación de riesgos potenciales")
        .row
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img3.png')
          .col-lg
            h4 Identificación de riesgos potenciales
            p Se determina los factores que alteran la cadena de suministro como los desastres naturales, falta de proveedores, cambios legislativos.
      .tarjeta.color-acento-botones.p-4(titulo="Evaluación y priorización de riesgos")
        .row
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img4.png')
          .col-lg
            h4 Evaluación y priorización de riesgos
            p Es decir, por tipo cuantitativo (que se basa en información histórica, medible y pronosticable) o cualitativo (que se basa en el juicio experto); por gravedad o severidad (insignificante, moderado o fuerte); por frecuencia (nula, rara, probable o casi segura) y por velocidad (o la capacidad de detección a tiempo).
      .tarjeta.color-acento-botones.p-4(titulo="Prevención y solución de riesgos")
        .row
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img5.png')
          .col-lg
            h4 Prevención y solución de riesgos
            p Propone soluciones para aliviar y/o  evitar riesgos, como por ejemplo afianzar los sistemas de evaluación, compra de seguros contra riesgos, uso obligatorio de elementos de seguridad.
      .tarjeta.color-acento-botones.p-4(titulo="Control")
        .row
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img6.png')
          .col-lg
            h4 Control
            p Revisiones constantes con la finalidad de verificar si han cambiado los criterios de los riesgos. Este control se basa en indicadores de riesgo operativo, estadísticas de actividad, datos de incidencias y reportes de control, entre otros.

</template>

<script>
export default {
  name: 'Tema6',
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
