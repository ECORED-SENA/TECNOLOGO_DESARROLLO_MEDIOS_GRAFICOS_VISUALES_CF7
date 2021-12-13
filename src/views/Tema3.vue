<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prevuelo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.h4.mb-3 En las artes gráficas el término prevuelo es el adjetivo con el cual se hace referencia a un chequeo previo.
        p En la etapa de preprensa los archivos que se van a imprimir se tienen que revisar para detectar cualquier problema posible y poder corregirlo, es recomendable suministrar a las empresas de artes gráficas los archivos editables para que, si se detectan errores, puedan ser ajustados dentro de estos archivos. 
        p Las características del 
          b prevuelo 
          | son:
      .col-8.col-lg
        img(src="@/assets/curso/t3-01.png")


    .row.justify-content-center
      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip2 = false")
          .indicador--hover(v-if="indicadorTarjetaFlip2")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t3-02.png')})`}")
            .tarjeta-flip__contenido.p-4
              h4.text-center Perfil de color
              p.text-center.mb-0 Una de las revisiones iniciales que se debe hacer es mirar el perfil de color, verificar que sea CMYK, a menudo los clientes entregan los archivos en otro formato como por ejemplo RGB, en este caso se debe hacer el correspondiente cambio a CMYK.

      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip2 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t3-03.png')})`}")
            .tarjeta-flip__contenido.p-4
              h4.text-center Sangrías
              p.text-center.mb-0 Hace referencia al espacio del diseño que está al borde de margen de diseño, se hace esto con el propósito de prevenir blancos sobrantes en el archivo final después de ser refilado.

      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip2 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t3-04.png')})`}")
            .tarjeta-flip__contenido.p-4
              h4.text-center Guías de corte
              p.text-center.mb-0 En la preparación del archivo las guías de corte son importantes, ya que esta será como su palabra lo indica la guía por donde se va a refilar de producto impreso, esta guía es necesaria para la persona encargada de realizar el proceso de corte en la guillotina.

      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip2 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t3-05.png')})`}")
            .tarjeta-flip__contenido.p-4
              h4.text-center Textos negros
              p.text-center.mb-0 Otro tema a revisar son los valores de los textos, en ocasiones los textos negros no están en el valor que corresponde y hay que ajustarlos correctamente.

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
