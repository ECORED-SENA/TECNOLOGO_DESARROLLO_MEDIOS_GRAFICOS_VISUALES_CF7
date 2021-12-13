<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Premedia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.h4.mb-3 Con la aparición de los medios digitales, se comienza a hablar del concepto premedia como el proceso de organización de archivos que serán publicidades por los medios digitales como la web, el video, animaciones, entre otros.
        p La premedia, con el soporte de la tecnología adecuada, suministra una variedad de servicios en productos que se enlazan satisfactoriamente, como la creación de contenido y creatividad en el proceso de una publicación sin importar el medio en el cual se publicará.
        p Entre los principales servicios que ofrecen están:
      .col-8.col-lg
        img(src="@/assets/curso/t4-01.png")

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4 align-self-stretch")
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/t4-02.svg')
        h2.text-center Creatividad
        p.text-center.mb-0 Está formada por un grupo de profesionales en el campo de la comunicación, como diseñadores gráficos, publicistas, producción de piezas gráficas.

      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/t4-03.svg')
        h2.text-center Fotografía
        p.text-center.mb-0 Dentro de su equipo de trabajo están los fotógrafos con especialidades para diferentes conceptos de fotografías desarrolladas para medios digitales.

      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/t4-04.svg')
        h2.text-center Gestión de imágenes
        p.text-center.mb-0 Se diseñan imágenes a partir de retoques y fotomontajes, y se procede a la digitalización para diferentes medios según la necesidad de cada proyecto.

      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/t4-05.svg')
        h2.text-center Color
        p.text-center.mb-0 Se implementa una aplicación visual corporativa cuidando el color igual para todos los diferentes medios que necesita el proyecto.

      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/t4-06.svg')
        h2.text-center Prevuelo
        p.text-center.mb-0 Análisis de las condiciones técnicas en los archivos entregados para publicación.

      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/t4-07.svg')
        h2.text-center Video
        p.text-center.mb-0 Se implementa la edición no lineal del video digital, musicalización, efectos especiales, que funcionen de persuasión en los medios digitales a publicar.

      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/t4-08.svg')
        h2.text-center Producción
        p.text-center.mb-0 Organización de archivos y control en el proceso, así se garantiza que la estrategia se aplique de manera adecuada en el desarrollo del proyecto. 

      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/t4-09.svg')
        h2.text-center Tecnología
        p.text-center.mb-0 En el desarrollo de la estrategia creativa y publicitaria, la tecnología juega un papel crucial en el desarrollo de los objetivos corporativos del cliente, se analiza la incorporación de nuevas tecnologías y los nuevos procesos para el análisis de los resultados. 

    p.mb-5 Con el fin de sintetizar el contenido de este componente formativo se presenta el siguiente mapa conceptual:

    .titulo-sexto.color-acento-contenido
      h5 Figura
      span Desarrollo de medios gráficos visuales - Procesos de producción gráfica

    img(src='@/assets/curso/t4-10.svg')





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
