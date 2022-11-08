<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-up") El presente componente de formación busca que el aprendiz, comprenda los criterios y procedimientos a tener en cuenta en la evaluación y monitoreo de la operación del transporte, analizando y conceptualizando los resultados del ejercicio. 
    .row.align-items-center
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        p A través del buen desarrollo de la logística en las empresas que intervienen en la operación, se dinamizan y articulan las economías regionales y nacionales ya que a través de estos procesos se facilita la comercialización de productos y mercancías entre poblaciones, por tal motivo, es muy importante considerar la importancia de la supervisión y monitoreo de los procesos que intervienen en la operación.
        p Es de considerar que el monitoreo y evaluación de la operación de transporte cumple un papel importante puesto que es, donde se verifican y controlan los procesos, de tal manera que se subsanen los errores e inconvenientes que se suscitan en el desarrollo de la operación y así mismo, mejorar procesos que sean obsoletos o que no estén funcionando según los estándares de calidad.
        p Cabe anotar que el buen desempeño en la vigilancia y monitoreo de las actividades en la operación de transporte redunda en el crecimiento empresarial de la organización y más aún en la satisfacción del cliente, ya que crea confianza en por parte del mercado en todos los involucrados de la cadena logística.
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png' style="width: 550px").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
