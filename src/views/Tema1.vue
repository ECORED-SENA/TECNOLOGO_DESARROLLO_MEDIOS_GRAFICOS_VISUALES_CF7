<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producción gráfica


    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--reverse.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El término producción gráfica empieza a implementarse por primera vez a partir de la invención de la imprenta por 
              b Johannes Gutenberg 
              |en el año 1450, como la manera de unir los procesos de la impresión tipográfica, dicho de otra forma, la ubicación de los tipos, la impresión, la encuadernación, el acabado y todas las formas de procesos que conlleva el material impreso.
    
    separador

    .titulo-segundo.color-secundario
      h2 1.1 Procesos de artes gráficas


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Cuando se habla de un proceso de producción gráfica, se hace referencia a un proceso donde se incorporan varias etapas en su desarrollo. Se comienza con un brief suministrado por el cliente y termina con la elaboración y entrega del producto impreso; la creación de un producto gráfico puede ser un libro, un catálogo, una revista, un afiche, un manual corporativo, un folleto, entre otros formatos previamente definidos.
        p.mb-0 En la actualidad se encuentran varias técnicas de impresión gráfica, es aquí donde se utilizan dependiendo de las necesidades del producto. Ejemplo de estas son:
      .col-8.col-lg
        img(src="@/assets/curso/t1-02.png")


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-03.png")
        h2.p-2.mb-0.text-center Fotomecánica

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-04.png")
        h2.p-2.mb-0.text-center CTP

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-05.png")
        h2.p-2.mb-0.text-center Impresión digital

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-06.png")
        h2.p-2.mb-0.text-center Serigrafía

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-07.png")
        h2.p-2.mb-0.text-center Tampografía

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-08.png")
        h2.p-2.mb-0.text-center Flexografía

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-09.png")
        h2.p-2.mb-0.text-center Huecograbado

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-10.png")
        h2.p-2.mb-0.text-center Litografía

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-11.png")
        h2.p-2.mb-0.text-center Impresión tipográfica

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-12.png")
        h2.p-2.mb-0.text-center Rotograbado

      .tarjeta.color-acento-botones--borde.color-acento-botones
        img(src="@/assets/curso/t1-13.png")
        h2.p-2.mb-0.text-center Bordado

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Así mismo, el medio ofrece una variedad de sustratos para la impresión, esta no se da solamente en papel, sino también en diferentes materiales como el metal, plástico, madera, tela, cerámica, objetos tridimensionales, etc.
    
    p.mb-5 Es así como el proceso de producción gráfica se compone de las siguientes etapas:
    
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--claro.p-5(titulo="Planificación estratégica")
        h4 Planificación estratégica
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            p En esta etapa de inicio se realiza una reunión con el cliente para discutir aspectos, inquietudes acerca del brief. El cliente comunica al equipo de trabajo la información del proyecto, como por ejemplo el grupo objetivo, los objetivos, tirajes a producir, características de impresión y los tiempos de entrega.
          .col-8.col-lg
            img(src="@/assets/curso/t1-14.png")

      .tarjeta.color-secundario--claro.p-5(titulo="Idea creativa")
        h4 Idea creativa
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            p En esta etapa vez se definen:
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Lineamientos
              li
                i.fas.fa-check
                | Presupuesto con el cliente.
              li
                i.fas.fa-check
                | Equipo de trabajo (publicistas o diseñadores gráficos).

            p Comienzan el trabajo creativo para definir el concepto gráfico que cumpla con las necesidades de la marca. Mediante el proceso de bocetos se le presenta al cliente:
          
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | La propuesta gráfica.
              li
                i.fas.fa-check
                | La ficha técnica.
              li
                i.fas.fa-check
                | Materiales
              li
                i.fas.fa-check
                | Acabados
              li
                i.fas.fa-check
                | Tiempos de elaboración y producción.
            p.mb-0 Este proceso es muy importante, porque el cliente podrá ver plasmada por primera vez la propuesta creativa de diseño, donde se tendrá a una evaluación y análisis por parte de este para aprobar o solicitar ajustes.

          .col-8.col-lg
            img(src="@/assets/curso/t1-15.png")
      
      .tarjeta.color-secundario--claro.p-5(titulo="Finalizar artes ")
        h4 Finalizar artes 
        .row.justify-content-center
          .col-xl-6.mb-4.mb-xl-0
            p El siguiente paso consiste en la aprobación de los bocetos por parte del cliente, una vez verificados y aprobados el equipo de trabajo o diseñador realizará el proceso de finalización de artes para su correspondiente proceso de preimpresión, es decir, la organización en máquinas del documento. Este documento final debe contener todas las instrucciones necesarias para la imprenta, un ejemplo de esto es el perfil de color, marcas de registro, sangría, líneas de corte, tipografías y resolución de imágenes. 
          .col-8.col-xl
            img(src="@/assets/curso/t1-16.png")
      
      .tarjeta.color-secundario--claro.p-5(titulo="Pruebas de color")
        h4 Pruebas de color
        .row.justify-content-center
          .col-xl-6.mb-4.mb-xl-0
            p En los procesos para la producción gráfica es importante cada etapa, con el fin de obtener un producto final optimo y un cliente satisfecho. Las pruebas de color son de suma importancia ya que ayudaran a definir las tonalidades de colores corporativos de una empresa, o la textura de una imagen, muchas veces lo que se ve en el monitor tiende a variar un poco, así que la mejor opción que se tiene son las pruebas de color impresas, de esta manera se visualiza la calidad de impresión y la corrección de posibles errores. 
          .col-8.col-xl
            img(src="@/assets/curso/t1-17.png")
      
      .tarjeta.color-secundario--claro.p-5(titulo="Impresión")
        h4 Impresión
        .row.justify-content-center
          .col-xl-6.mb-4.mb-xl-0
            p Una vez realizada y aprobada la prueba de color por parte del cliente, el centro de imprenta procede a la impresión de todas las cantidades solicitadas por el cliente. Este proceso puede variar según el formato y técnicas de impresión, por ejemplo:

            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | En el proceso de productos editoriales como libros, revistas, catálogos es frecuente la impresión litográfica.
              li
                i.fas.fa-check
                | En publicidad exterior de gran formato como vallas, pasacalles, pendones, se implementa la impresión digital.
          
          
          .col-8.col-xl
            img(src="@/assets/curso/t1-18.png")
      
      .tarjeta.color-secundario--claro.p-5(titulo="Acabados")
        h4 Acabados
        .row.justify-content-center
          .col-xl-6.mb-4.mb-xl-0
            p Los acabados cumplen una función importante en los impresos ya que ayudan a resaltar detalles del producto (dan valor agregado al producto, hacen que un producto se vea elegante), como:

            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Plastificados
              li
                i.fas.fa-check
                | Parciales de brillo UV
              li
                i.fas.fa-check
                | Estampados en relieve
              li
                i.fas.fa-check
                | Troquelado

            p.mb-0 Según las características del producto se debe manipular las unidades impresas, en varios casos hay que hacerlas manualmente y llevar un control de calidad en su aplicación, ejemplo en el plegado de un folleto, encuadernado de un libro, encolado, grapado, troquelado o guillotinado. Esto implica manejar un estándar de calidad con el fin de proteger cada ejemplar de una contaminación o daño por contacto.
          
          
          .col-8.col-xl
            img(src="@/assets/curso/t1-19.png")

      .tarjeta.color-secundario--claro.p-5(titulo="Entrega")
        h4 Entrega
        .row.justify-content-center
          .col-xl-6.mb-4.mb-xl-0
            p Por último, es importante coordinar con el cliente la fecha y el lugar pactado de entrega, verificar que los ejemplares impresos sean empacados y embalados de manera óptima. 
          .col-8.col-xl
            img(src="@/assets/curso/t1-20.png")
    
    p.mb-5 En la siguiente figura se aprecia un mapa conceptual del proceso de producción gráfica.

    .titulo-sexto.color-acento-contenido
      h5 Figura
      span Proceso de producción de la industria gráfica

    img(src="@/assets/curso/t1-21.svg")

    separador

    .titulo-segundo.color-secundario
      h2 1.2 Flujo de proceso

    p.mb-5 Este se puede definir como la ruta que se lleva a cabo desde el arribo de la materia prima hasta la elaboración del producto final. A continuación, se presenta un diagrama de flujo de proceso.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura
          span Proceso de producción de la industria gráfica
          
        img(src="@/assets/curso/t1-22.svg")

    p.mb-5 En el proceso está vinculada la tecnología de fabricación. Dicho en otras palabras, son las formas de división y colaboración del trabajo existente, como se muestra a continuación: 

    .tarjeta.color-secundario--claro.p-4.p-lg-5.mb-5.shadow
      LineaTiempoC.color-acento-contenido
        .row.justify-content-center(titulo="Parte 1°")
          .col-xl-6.mb-4.mb-xl-0
            p El flujo de trabajo debe garantizar el funcionamiento del proceso de producción y la utilización acertada de los elementos materiales y humanos, en un proceso de producción gráfica, se puede tomar como ejemplo el proceso en una imprenta,

            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | El punto de partida es la materia prima (sustratos, tintas).
              li
                i.fas.fa-check
                | Pasa por la mano de obra, maquinaria de imprenta, tecnología, digitalización de imagen, acabados.
              li
                i.fas.fa-check
                | Culmina con el producto final (revista).

          .col-10.col-xl-6
            figure
              img(src="@/assets/curso/t1-23.png")

        .row.justify-content-center(titulo="Parte 2°")
          .col-xl-6.mb-4.mb-xl-0
            p Un proceso de flujo se podría decir que es el punto de partida en un proceso de producción, el cual se caracteriza por incorporar dos elementos cruciales: 

            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Información
              li
                i.fas.fa-check
                | Materiales

          .col-10.col-xl-6
            figure
              img(src="@/assets/curso/t1-24.png")

        .row.justify-content-center(titulo="Parte 3°")
          .col-xl-6.mb-4.mb-xl-0
            p El flujo de los materiales se puede observar ya que es tangible, es decir se puede analizar físicamente, en cambio el flujo de la información es intangible, y requiere de más análisis en su seguimiento. 

          .col-10.col-xl-6
            figure
              img(src="@/assets/curso/t1-25.png")

        .row.justify-content-center(titulo="Parte 4°")
          .col-xl-6.mb-4.mb-xl-0
            p Es importante realizar un arduo análisis a los dos sin descuidar alguno de los dos tipos de flujo. En un proceso de flujo es importante tener claro la capacidad de producción ya que determina la cantidad de recursos tanto en mano de obra como en maquinaria que requiere el proceso productivo. 

          .col-10.col-xl-6
            figure
              img(src="@/assets/curso/t1-26.png")

        div(titulo="Parte 5°")
          p En un proceso de flujo continuo conlleva una secuencia de actividades establecida por las propiedades del producto. Entre los procesos de flujo continuo existen:
          .row.justify-content-center
            .col-xl-6
              ul.lista-ul--color.mb-0
                li
                  i.fas.fa-check
                  div
                    h5 En serie
                    p Están basados en una continua intervención donde tiene como característica la utilización de mano de obra e implementación de maquinaria de manera diferente en el proceso.
                li
                  i.fas.fa-check
                  div
                    h5 Continuos
                    p En estos procesos las operaciones se realizan sin tener alguna pausa ni transición alguna entre cada proceso, usualmente se implementan en productos estandarizados.
                li
                  i.fas.fa-check
                  div
                    h5 Flujo en lotes
                    p En estos procesos cualquier cambio o implantación que se realice está basado en lotes de la misma clase y necesita una organización inicial de la maquinaria. 

            .col-xl-6
              ul.lista-ul--color.mb-0
                li
                  i.fas.fa-check
                  div
                    h5 Flujo alternado
                    p Estos producen lotes relacionados con tirajes pequeños, se necesita que el tiempo de organización sea minimizado para que sea rentable.
                li
                  i.fas.fa-check
                  div
                    h5 Flujo intermitente
                    p En los procesos intermitentes la producción no tiene una secuencia fija de trabajos, simplemente está acondicionado en relación con el producto procesado, sin necesitar de maquinaria específica, sino varias máquinas que pueden realizar varias funciones.
                li
                  i.fas.fa-check
                  div
                    h5 Sin flujo
                    p Aquí los trabajos giran en relación con el producto, y no se necesita ningún flujo específico, es por esto que son útiles para productos por diseño.
    
    p.mb-5 El siguiente diagrama muestra el flujo de proceso utilizado para la producción gráfica:

    .titulo-sexto.color-acento-contenido
      h5 Figura
      span Producción gráfica, flujos de trabajo
      
    img(src="@/assets/curso/t1-tabla.svg")

    separador

    .titulo-segundo.color-secundario
      h2 1.3 Diseño

    .tarjeta.color-secundario--claro.p-5.mb-5.shadow
      SlyderA
        div
          h4 Diseño gráfico de persuasión
          .row
            .col-md-6.mb-4.mb-md-0
              p Su finalidad se basa en captar la atención de un nicho persuadiéndolo hacia el consumo de bienes o servicios. En la siguiente imagen se observa un catálogo de productos.
          
            .col-md-6
              figure
                img(src="@/assets/curso/t1-28.png")

        div
          h4 Diseño gráfico de administración
          .row
            .col-md-6.mb-4.mb-md-0
              p Esta categoría se enfoca hacia la imagen corporativa, su finalidad es crear la identidad gráfica de una empresa. Ejemplo: membretes, formularios, facturas, tarjetas de presentación, etc.
          
            .col-md-6
              figure
                img(src="@/assets/curso/t1-29.png")

        div
          h4 Diseño gráfico para la información
          .row
            .col-md-6.mb-4.mb-md-0
              p La finalidad es informar sobre algo o momentos puntuales, un ejemplo de esto puede ser el periódico, revistas, señales de tránsito, entre otras.  
          
            .col-md-6
              figure
                img(src="@/assets/curso/t1-30.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .cajon.color-acento-botones.p-4.mb-3
          p.mb-0 Con la evolución de la tecnología también se habla de diseño digital. El concepto del diseño digital está enfocado a todos los medios no tradicionales y a la nueva forma de comunicar en los medios digitales como las páginas web, aplicaciones móviles, catálogos digitales y videojuegos.
        p.mb-0 En la actualidad existen muchos programas de diseño gráfico, la compañía Adobe, ofrece una variedad de programas enfocados hacia el diseño gráfico, dependiendo la necesidad del proyecto gráfico se pueden implementar. Entre los principales programas de diseño gráfico están:
      .col-8.col-lg
        img(src="@/assets/curso/t1-31.png")

    
    .row.justify-content-center
      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-32.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Adobe Illustrator 
              p.text-center.mb-0 Especial para diagramar a partir de vectores.

      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-33.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Adobe Photoshop
              p.text-center.mb-0 Especial para retoque digital, edición de imágenes.

      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-34.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Adobe InDesign
              p.text-center.mb-0 Especial para diseño digital y maquetación.

    separador

    .titulo-segundo.color-secundario
      h2 1.4 Preprensa

    p.mb-5 La preprensa, también conocida como preimpresión, es la etapa en el proceso de producción gráfica, después del diseño, donde se organizan todos los elementos del diseño previos a la impresión. En esta etapa:


    .row.justify-content-center.mb-5
      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip2 = false")
          .indicador--hover(v-if="indicadorTarjetaFlip2")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-35.png')})`}")
              .tarjeta-flip__titulo.py-2
                .h1.m-0.text-center - 1 -
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.mb-0 El diseño pasa por varias revisiones.

      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip2 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-36.png')})`}")
              .tarjeta-flip__titulo.py-2
                .h1.m-0.text-center - 2 -
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.mb-0 Se hacen retoques, modificaciones.

      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip2 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-37.png')})`}")
              .tarjeta-flip__titulo.py-2
                .h1.m-0.text-center - 3 -

            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.mb-0 Se analiza la composición del diseño, es decir, lo que haya que mejorar para luego imprimirlo o si se requiere digitalizarlo para realizar las primeras pruebas de impresión.

      .col-8.col-sm-6.col-lg.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip2 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-38.png')})`}")
              .tarjeta-flip__titulo.py-2
                .h1.m-0.text-center - 4 -
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.mb-0 Se organizan los archivos en los formatos correctos para su correspondiente finalización.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p En el proceso de preprensa se deben organizar los archivos, los cuales normalmente se manejan en formato PDF en alta resolución, también se pueden suministrar en formatos heredados, es decir, en los programas originales donde se crearon los diseños, puede ser Illustrator, InDesign, entre otros.
        p Una vez son recibidos los archivos en la imprenta, una persona capacitada será la encargada de revisar todas las propiedades que conforman el diseño o arte para su correspondiente verificación, revisando que cumpla con todas las características específicas para su impresión.
        p.mb-0 Un ejemplo de algunas características del archivo que se deben revisar es el perfil de color, donde debe ser perfil CMYK; en ocasiones se detectan imágenes en perfil RGB, es aquí donde precisamente el profesional encargado de la revisión en la etapa de preprensa informará al cliente que debe realizar los correspondientes ajustes antes de continuar el proceso. Otro ejemplo que a menudo pasa es el cambio de las fuentes tipográficas, esto sucede porque en el proceso de diseño previo a exportar el archivo no se convierten las fuentes en contornos, así no habrá inconvenientes al abrir el archivo en otro computador y que se cambien las fuentes.
      .col-8.col-lg
        img(src="@/assets/curso/t1-39.png")

    p.mb-5 A continuación, se describen las principales etapas en la preprensa:

    .tarjeta.color-secundario--claro.p-5.shadow
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Revisión de archivos originales
            p.mb-0 Se trata del análisis general del archivo original para revisar sus condiciones actuales, como la resolución (archivos para impresión se deben manejar en 300 DPI en resolución), DPI significa la cantidad de puntos existentes en una pulgada de una imagen. También se verifican el formato y las fuentes del archivo. 
        
          .col-md-6
            figure
              img(src="@/assets/curso/t1-40.png")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Tratamientos
            p.mb-0 Los tratamientos que se realizan en este proceso dependerán de muchos factores técnicos como por ejemplo el tipo de impresión que se va a realizar, si es impresión offset, litográfica o digital, se verifica el color, el tamaño, la resolución, el formato y todo lo que implique cada técnica de impresión. 
        
          .col-md-6
            figure
              img(src="@/assets/curso/t1-41.png")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Maquetación
            p El proceso de maquetación hace referencia a la optimización del documento final con todos los elementos que la componen, textos e imágenes, y se procede a la correspondiente separación de colores y el formato de salida. En este punto intervienen varios aspectos como: 
        
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Maquetación de la página.
              li
                i.fas.fa-check
                | Montaje de la página.
              li
                i.fas.fa-check
                | Tramado y separación de color.
              li
                i.fas.fa-check
                | Generación del formato de salida en PDF. 

            p.mb-0 En el siguiente ejemplo gráfico se detalla la separación de colores CMYK.
          .col-md-6
            figure
              img(src="@/assets/curso/t1-42.png")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Obtención y validación de la impresión
            p el proceso de validación varía para cada forma de impresión e implica procesos diferentes, en las formas CTF y CTP, se deben aplicar en función del perfil CMYK, para que puedan ser transferidas en una plancha y película por cada color, en el caso de la forma CTPrint es diferente, ya que la tecnología que utiliza en la impresión es de información variable. Aquí se enumeran las formas de conseguir la forma impresa:
        
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Almacenamiento de datos.
              li
                i.fas.fa-check
                | CTF - Filmación de película.
              li
                i.fas.fa-check
                | CTP - Filmación de plancha.
              li
                i.fas.fa-check
                | CTPrint/Press (impresión digital).
          .col-md-6
            figure
              img(src="@/assets/curso/t1-43.png")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas de impresión
            p Se analizan pruebas de impresión para revisar varios aspectos como la prueba de imposición, es decir se verifica que estén en el orden que corresponda y que coincidan las márgenes, también se realiza el ferro que es la prueba de impresión que se hace en la imprenta de cada uno de los pliegos, completos para imposición. 
            p Esta muestra se caracteriza porque las imágenes como textos salen de color azul, debido al papel fotosensible, se hacen pruebas de color para revisar los detalles, tonalidades, texturas, sombras, verificando que la impresión sea igual a lo que se ve en una pantalla o lo más parecido posible, para que el cliente dé la aprobación final. 
            p.mb-0 Luego se realiza la prueba de contrato, esto hace referencia al proceso de control de calidad desde la preimpresión, la impresión hasta la postproducción en cada procedimiento que se realiza.
        
          .col-md-6
            figure
              img(src="@/assets/curso/t1-445.png")

    separador

    .titulo-segundo.color-secundario
      h2 1.5 Impresión

    .row.justify-content-center.mb-5
      .col-lg-10
        
        .bloque-texto-g.bloque-texto-g--reverse.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-44.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La impresión gráfica es el proceso mediante el cual se plasma un diseño previamente creado, en un material físico como el papel y cualquier acabado adicional que lleve. En las técnicas de impresión sobre papel existen tres (3) modelos tradicionales y bastante utilizados, está la impresión offset, la serigrafía y la impresión digital. Cada sistema de impresión se ajusta a las necesidades que requiere un proyecto y especialmente a los formatos de impresión. Los modelos de impresión que existen son:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    .titulo-segundo.color-secundario
      h2 1.6 Posimpresión

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p La posimpresión es la última fase del proceso, y requiere de mucha atención, esta fase encierra todas las anteriores fases del proceso final, es precisamente aquí donde se comienza el proceso de acabados del producto impreso y se le va dando una forma estética, por medio de:
        ul.lista-ul--color.ps-4.mb-0
          li
            i.fas.fa-check
            | Acabados.
          li
            i.fas.fa-check
            | Refilados.
          li
            i.fas.fa-check
            | Armados.
          li
            i.fas.fa-check
            | Plegados.
          li
            i.fas.fa-check
            | Encuadernado.
          li
            i.fas.fa-check
            | Empaquetado.
          li
            i.fas.fa-check
            | Almacenaje.
          li
            i.fas.fa-check
            | Se da el control de calidad para proceder con la entrega al cliente.
      
      .col-8.col-lg
        img(src="@/assets/curso/t1-45.png")


    .row.justify-content-center.mb-5
      .col-lg-10
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-46.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 
              b Explicado en un ejemplo: 
              | si se imprime un tiraje de un arte de folletos, en el proceso de posimpresión el producto pasaría por acabados: plastificado, brillo UV, luego por plegado y armado, después por refile, posteriormente revisión control de calidad es revisar que las unidades no estén contaminadas de tintas, partículas de suciedad, seguidamente empaquetado, almacenado y, por último, la correspondiente entrega al cliente ya sea en la imprenta o transportar el producto según como se haya pactado con el cliente.
    
    p.mb-5 Después de imprimir un producto quedan algunos detalles de acabados. El tratamiento de acabados suele definirse antes del inicio del proyecto, entre el cliente y la imprenta, para saber el presupuesto real de todo el proceso de producción gráfica a realizar. A continuación, se indican los procesos de posimpresión más comunes:

    .row.justify-content-center
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip3 = false")
          .indicador--hover(v-if="indicadorTarjetaFlip3")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-47.png')})`}")
              .tarjeta-flip__titulo.py-3
                .h3.m-0.text-center 1. Tratamiento de superficie
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center 1. Tratamiento de superficie
              p.text-center.mb-0 El diseño pasa por varias revisiones.

      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip3 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-48.png')})`}")
              .tarjeta-flip__titulo.py-3
                .h3.m-0.text-center 2. Tratamiento de protección
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center 2. Tratamiento de protección
              p.text-center.mb-0 Aquí se organiza el material para generar la correspondiente aplicación, organizar los pliegos para la aplicación de lacados, protección contra la humedad, etc.

      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip3 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-49.png')})`}")
              .tarjeta-flip__titulo.py-3
                .h3.m-0.text-center 3. Manipulados de estructura y encuadernación
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center 3. Manipulados de estructura y encuadernación
              p.text-center.mb-0 Esta tarea está relacionada con el proceso de manipulación y modificación del producto impreso, es decir, dar forma a su estructura un ejemplo de esto es el corte, plegado, encolado, engrapado, alzado, fresado.

      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip3 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-50.png')})`}")
              .tarjeta-flip__titulo.py-3
                .h3.m-0.text-center 4. Estructura de los pliegos
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center 4. Estructura de los pliegos
              p.text-center.mb-0 Consiste en el proceso de organizar las hojas o pliegos impresos que conforman una unidad gráfica, por ejemplo organizar las hojas que formas de una revista para su proceso de grapado.

      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip3 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-51.png')})`}")
              .tarjeta-flip__titulo.py-3
                .h3.m-0.text-center 5. Acabados especiales
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center 5. Acabados especiales
              p.text-center.mb-0 Aquí se pueden encontrar varios acabados a realizar como, por ejemplo, plegados, encuadernación, guillotinado, perforado, barnizado, troquelados grabados entre otros. En la siguiente imagen se detallan una serie de impresos con diferentes procesos de acabados como encuadernado, argollado, troquelados, plegados, etc.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaFlip2: true,
    indicadorTarjetaFlip3: true,
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
