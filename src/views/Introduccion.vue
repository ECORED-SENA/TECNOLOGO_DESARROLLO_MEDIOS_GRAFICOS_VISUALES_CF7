<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span i
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p La producción gráfica en la actualidad es un concepto que hace referencia a cualquier impreso, desde una simple fotografía hasta un proyecto editorial; por eso, comprender y entender la importancia en cada uno de sus procesos es un factor fundamental en la conceptualización de ideas que contengan un alto concepto de comunicación.
        p.mb-0 Bienvenido al componente formativo 
          b Procesos de producción gráfica. 
          | A continuación, conocerá los temas que se tratarán a lo largo del mismo. ¡Muchos éxitos en su proceso de aprendizaje!
      .col-8.col-lg
        img(src="@/assets/curso/intro-01.png")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
