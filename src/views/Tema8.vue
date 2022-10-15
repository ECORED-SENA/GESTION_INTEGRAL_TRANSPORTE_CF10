<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Recibo y despacho
    figure.mb-5
      img(src='@/assets/curso/tema8/img1.png')
    p En los procesos de recibo y despacho de mercancías en el desarrollo logístico es importante determinar con certeza los procedimientos y demás actividades que conlleven a una adecuada verificación y validación de los recursos utilizados en la operación.
    Separador
    #t_8_1
    .titulo-segundo.color-acento-contenido
      h2 8.1 Métodos de recibo
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema8/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los conceptos y técnicas que se describen en este capítulo deben estar en conocimiento de todos los que intervienen en la operación de recibo, desde los auxiliares de cargue y descargue hasta el jefe del almacén o centro de distribución pasando por el supervisor del proceso. Esto permitirá controlar el proceso de forma adecuada para hacerlo cada vez más exacto y reducir la cantidad de errores que se puedan presentar, que como en cualquier operación de cualquier empresa, estarán siempre latentes. (García, 2011, pág. 24).
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img1.svg')
      .col
        p.mb-0 #[b Recibo físico según el producto o el empaque]
    p Por la unidad de empaque que contenga el producto que se recibe determina el método de recibo físico como también el equipamiento necesario para el proceso (plataformas, muelles).
    p.mb-5 A continuación, se muestran las variaciones en los métodos y el empleo de equipos en los tres principales grupos de unidades de manejo: Paletizado (uso de estibas), a granel (líquidos, polvos o granos), y en arrume (cajas, unidades sueltas):
    .tarjeta.tarjeta--azul.p-3.p-lg-5.mb-5
      SlyderA(tipo="b")
        .row
          .col-lg
            h4 PALETIZADO
            p Es un conjunto de productos debidamente organizados sobre una estiba y el embalaje del mismo, de esta manera se convierte en una unidad compacta. Las mercancías llegan de esta forma desde el proveedor, facilitando el proceso y reduciendo los tiempos de manipulación.
            p En la siguiente imagen, se visualiza un ejemplo de estiba paletizada y la técnica de crear este paletizado.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema8/img3.png')
        .row
          .col-lg
            h4 Beneficios de la paletización
            ul.lista-ul
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Reducción la duración de los procesos de carga.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Reducción en la duración de atención en el recibo.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Bajos índices en reclamos por faltantes y sobrantes.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Bajos costes de la operación de carga y descarga.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Mejor tratamiento de los productos.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Mejor adecuación de las zonas de almacenamiento.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Aumento de la eficacia de la flotilla de transporte.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 Mejor firmeza y estabilidad de los productos.
            p En la imagen se puede apreciar un ejemplo de paletización.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema8/img4.png')
        .row
          .col-lg
            h4 A GRANEL
            p Se aplica para los materiales que debido a las grandes cantidades en las que se trasladan y su estructura física, es imposible su embalaje en cajas o bultos. Aunque productos como los granos y el cemento se manejan en bultos, en su etapa de distribución a los clientes finales; los mayoristas mueven tales materiales en camiones cisterna.
            p Hay varios tipos de carga a granel, los más conocidos son: mercancía a granel sólida y mercancía a granel líquida; donde cada bulto exigirá un modo de transporte específico y un método de manipulación diferente.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema8/img5.png')
        .row
          .col-lg
            h4 Transporte de mercancía a granel sólida
            p Es aquella materia que puede despacharse en la propia fábrica, mina, yacimiento o lugar de origen de la materia y para la que generalmente se usan grúas, silos, tolvas o cintas de transporte en las labores de estiba; como, por ejemplo: trigo, carbón, fertilizantes o resinas, madera, sal, entre otros.
            p Para el transporte marítimo de estas mercancías, se usan graneleros conocidos como bulk carriers, que son buques o barcos mercantes de gran tamaño, especialmente diseñados para el transporte de este tipo de mercancía.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema8/img6.png')
        .row
          .col-lg
            h4 Transporte de mercancía a granel líquida
            p Es aquella materia que puede fluir libremente, y que generalmente es cargada y descargada del barco mediante tuberías y estaciones de bombeo. Se transporta en tanques o depósitos específicamente creados para alojar materias líquidas, como, por ejemplo: productos químicos, alimentos en estado líquido, como el aceite vegetal; petróleo y gas natural. En cuanto a estos dos últimos, son trasladados generalmente vía marítima en buques diseñados especialmente para ello, eso sí, bajo excelentes medidas de seguridad y uso de maquinaria adecuada para su manipulación.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema8/img7.png')
        .row
          .col-lg
            h4 EN ARRUME
            p En este método la mercancía no se recibe en estibas, pero tampoco corresponden a los productos que se reciben a granel sino en cajas o bultos siempre sueltos.
            p Las mercancías recibidas son llevadas a las zonas de revisión y seguidamente a almacenamiento de dos formas:
            ul.lista-ul
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 En su unidad original, es decir, acumularlo en los lugares de recibo y almacenamiento en cajas o bultos.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |
                p.mb-0 En estibas, para ello el personal competente arrume las cajas o bultos recibidos sobre una estiba facilitando su manejo y traslado interno.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema8/img8.png')
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img1.svg')
      .col
        p.mb-0 #[b Validación física]
    p.mb-5 El proceso de recibo es el primer y se puede decir el más importante punto, en el cual una organización tiene el deber de garantizar que las mercancías o productos recibidos cumplan con el estado de calidad, cantidad, empaque y demás especificaciones necesarias para garantizar el éxito de la operación, ver figura 5.
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 5]. #[i Validación física]
        figure
          img(src='@/assets/curso/tema8/img1.svg' style="width: 350px").m-auto
      .col-lg-6.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema8/img9.png')
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img1.svg')
      .col
        p.mb-0 #[b Validación documental]
    p.mb-5 La validación de los documentos de un embarque (ver figura 6) es igual de fundamental que el control físico de las cantidades y referencias recibidas, puesto que de esto depende mantener la legalidad de la comercialización de las mercancías, tener su correcto registro contable y un buen control sobre los inventarios. Se pueden presentar situaciones como:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-6.p-4.p-lg-5.bg-color9
        .row.justify-content-center
          .col-4
            figure.mb-5
              img(src='@/assets/curso/tema8/img2.svg').m-auto
        p Ausencia de documentación que valide la mercancía a recibir, como la factura de venta, registro de nacionalización (en el caso de las importaciones), o un permiso especial de transporte para materiales restringidos por la ley (medicamentos, químicos, etc.). 
      .col-md-8.col-lg-6.p-4.p-lg-5.bg-color10
        .row.justify-content-center
          .col-4
            figure.mb-5
              img(src='@/assets/curso/tema8/img3.svg').m-auto
        p Documentación no acorde a la mercancía recibida, es decir, una factura que registre un producto o cantidad diferente a la establecida en la orden de compra.
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 6]. #[i Formato de recepción de bienes y mercancías]
        figure.mb-4
          img(src='@/assets/curso/tema8/img4.svg')
        p Nota. Formato de Recepción de Bienes y Mercancías. Estremadoyro, A. (2017).
    Separador
    #t_8_2
    .titulo-segundo.color-acento-contenido
      h2 8.2 Despacho de mercancías
    p.mb-5 El proceso de despachos tiene como finalidad garantizar la adecuada entrega del producto terminado a los clientes de manera en que fue pactada la negociación, manteniendo de esta forma un excelente nivel de confianza empresarial por parte de los clientes y el mercado.
    .row.align-items-center.justify-content-center.bg-color12.mb-5
      .col-lg-2.mb-4.mb-lg-0
        p.mb-0.text-center #[b Estas condiciones son:]
      .col-lg-9
        .row.justify-content-center
          .col-10.col-md-6.col-lg.p-4.m-1.bg-color11.shadow.mb-4.mb-lg-0
            figure.mb-2
              img(src='@/assets/curso/tema8/img6.svg' style="width: 150px").m-auto
            p.text-center.mb-0 Precisión en las cantidades
          .col-10.col-md-6.col-lg.p-4.m-1.bg-color11.shadow.mb-4.mb-lg-0
            figure.mb-2
              img(src='@/assets/curso/tema8/img7.svg' style="width: 150px").m-auto
            p.text-center.mb-0 Despacho de las referencias correctas
          .col-10.col-md-6.col-lg.p-4.m-1.bg-color11.shadow.mb-4.mb-lg-0
            figure.mb-2
              img(src='@/assets/curso/tema8/img8.svg' style="width: 150px").m-auto
            p.text-center.mb-0 Cumplimiento de los tiempos y lugar de entrega.
          .col-10.col-md-6.col-lg.p-4.m-1.bg-color11.shadow
            figure.mb-2
              img(src='@/assets/curso/tema8/img9.svg' style="width: 150px").m-auto
            p.text-center.mb-0 Documentación según las condiciones pactadas.
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        p En un despacho de mercancías habrá un margen de riesgo o error, sin embargo, es responsabilidad del personal del centro de distribución que los mantengan al mínimo posible. 
        p Los errores que más se presentan son:
        ul.lista-ul
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Daño del empaque de las mercancías, generalmente se presenta durante el proceso de cargue de vehículos, sin embargo, es responsabilidad de la empresa su buen estado hasta que sea recibido por el cliente.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Inconsistencias en la documentación, ya sea por cantidad de artículos o precios.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Salida del artículo fuera del tiempo establecido, entrega del pedido al cliente fuera de los tiempos pactados.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema8/img10.png')
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img1.svg')
      .col
        p.mb-0 #[b Objetivos del despacho de mercancías]
    .row.justify-content-center.mb-5
      .col-md-7.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema8/img1.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row
                .col-12
                  .row
                    .col-auto.mb-4
                      figure
                        img(src='@/assets/curso/tema8/img10.svg')
                    p Garantizar que la mercancía despachada cumpla con todos los requisitos exigidos por el cliente. 
      .col-md-7.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema8/img2.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row
                .col-12
                  .row
                    .col-auto.mb-4
                      figure
                        img(src='@/assets/curso/tema8/img10.svg')
                    p Identificar oportunamente las inconformidades que vayan en contra del correcto y adecuado servicio de la empresa.
      .col-md-7.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema8/img3.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row
                .col-12
                  .row
                    .col-auto.mb-4
                      figure
                        img(src='@/assets/curso/tema8/img10.svg')
                    p Servir de filtro para mantener la consistencia de los inventarios manejados en el centro de distribución.
      .col-md-7.col-lg-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema8/img4.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row
                .col-12
                  .row
                    .col-auto.mb-4
                      figure
                        img(src='@/assets/curso/tema8/img10.svg')
                    p Permitir la salida a las mercancías de manera ágil, evitando así acaparamiento de productos en zonas no habilitadas para ello (pasillos).
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.mb-4
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema3/img1.svg')
          .col
            p.mb-0 #[b Validación del despacho]
        p Para validar la correcta forma de despacho de mercancías es conveniente verificar los siguientes aspectos, ver figura 7:
        ul.lista-ul
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Examinar el pedido preparado, es donde se debe verificar las cantidades, documentación, referencias y características de los productos para así poder asegurar que la mercancía que se despacha cumpla con condiciones pactadas con los clientes.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Sistema de facturación, es donde se expide la factura de venta después de haber efectuado el embalaje y la validación del despacho, siendo el último procedimiento antes de ubicar la mercancía en el área de despacho y embarque de los vehículos que la transportarán.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema8/img11.png')
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 7]. #[i Pasos para el despacho de mercancía]
        figure
          img(src='@/assets/curso/tema8/img11.svg')
    .row.justify-content-center
      .col-lg-6
        a.anexo.mb-4.mb-lg-0(href="http://recibosydespachosdemercanciasaura.blogspot.com/2012/11/gestion-y-logistica-sena-eficacia-53.html" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Información complementaria en el enlace

</template>

<script>
export default {
  name: 'Tema8',
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
