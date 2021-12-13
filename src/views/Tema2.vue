<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Formatos de salida

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.h4.mb-3 Conocer los formatos que existen actualmente ayudará a escoger adecuada y sabiamente qué formato es más prudente y favorable a la hora de trabajar, visualizar y compartir información para la impresión. 
        p.mb-0 Es necesario, entonces, entender la diferencia entre una imagen vectorial y una imagen en mapa de bits:
      .col-8.col-lg
        img(src="@/assets/curso/t2-01.png")

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-secundario--claro")
      .row(titulo="Imágenes en mapa de bits")
        .col-md-7.mb-4.mb-md-0
          p.mb-0 Una imagen en mapa de bits es una imagen que está ubicada en un plano y está dividida por cuadros o pixeles, cada uno de ellos con unas características, que transforman cada píxel como elemento, no como conjunto. Las imágenes rasterizadas (ráster, de su traducción en inglés) por los surcos o canales que asemejan (filas y columnas de pixeles), son imágenes que están compuestas por pixeles, asignados a un color y unas coordenadas en una trama, formando así una imagen digital.
        .col-md-5
          figure
            img(src="@/assets/curso/t2-02.png")

      .row(titulo="Imágenes en vectores")
        .col-md-7.mb-4.mb-md-0
          p.mb-0 Debido a que no parte de la información contenida en cada píxel, sino, por el contrario, cada elemento que compone la imagen posee una información como distancia entre elementos, tamaños, colores, formas y posiciones, con texto o no, sus dimensiones, entre otros, no necesitan tanto espacio al momento del almacenamiento, permitiendo escalar sin perder resolución.
        .col-md-5
          figure
            img(src="@/assets/curso/t2-03.png")

      div(titulo="Ejemplo")
        p En las siguientes imágenes se observa cómo un grupo de personas se encuentra en dos formatos mapa de bits (pixeles) y en vector, cuando se amplía con zoom, en la imagen de mapa de bits se comenzará a pixelar, mientras que la imagen en vector seguirá con su calidad aun cuando se amplíe bastante.
        p En una imagen que haya sido rasterizada en una resolución alta tendrá más puntos de pixel lo cual se podrá ampliar mucho más que una imagen que haya sido rasterizada en una resolución baja, lo que significa que tendrá menos puntos de impresión. Hay que entender que cuando una imagen está en vectores, lo más seguro es que se encuentre en el programa de diseño nativo ejemplo Adobe Illustrator.
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/t2-04.png")
          .col-md-6
            figure
              img(src="@/assets/curso/t2-05.png")

    separador

    .titulo-segundo.color-secundario
      h2 2.1 Tipos y clasificación

    p.mb-5 Realizado el análisis correspondiente entre una imagen digital y una imagen vectorial, a continuación se describen los formatos gráficos en los cuales se pueden guardar las imágenes:

    ImagenInfograficaBB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2-06.jpg')

      .d-flex.align-items-center.justify-content-center.h-100(x="60%" y="24%" tooltip="Formato AI")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          .row.justify-content-center
            .col-6.col-md-2.mb-4.mb-md-0.d-none.d-md-block
              figure
                img(src='@/assets/curso/t2-07.svg')
            .col-md
              h5 Formato AI
              p.mb-0 El formato o extensión AI corresponde al programa de diseño de Adobe Illustrator, es un programa vectorial de los programas más utilizados por empresas de diseño gráfico y agencias de publicidad en la actualidad. Cuando se guarda un archivo en el formato nativo la extensión es AI. Se debe tener presente que para abrir un archivo AI, se requiere del mismo programa. Estando en Illustrator se podrán guardan los archivos en otros formatos que se desee como por ejemplo (EPS, PDF, mapa de bits, JPG, PNG, tiff) esto depende del proyecto que se realice.

      .d-flex.align-items-center.justify-content-center.h-100(x="92.5%" y="24%" tooltip="Formato PDF")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          .row.justify-content-center
            .col-6.col-md-2.mb-4.mb-md-0.d-none.d-md-block
              figure
                img(src='@/assets/curso/t2-10.svg')
            .col-md
              h5 Formato PDF
              p.mb-0 PDF (Portable Document Format) es un formato muy práctico a la hora de compartir archivos, publicar en internet y también para impresión de documentos, el programa usado para abrir los archivos es Adobe Acrobat, los archivos se pueden guardar vectorizados, es compatible con Illustrator y Photoshop, pues si un archivo se guarda vectorizado en PDF, al abrirlo con illustrator se encontrará vectorizado de la misma forma, es decir que al guardar un vector en PDF no se convertirá en una imagen rasterizada.

      .d-flex.align-items-center.justify-content-center.h-100(x="60%" y="96.7%" tooltip="Extensión SVG")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          .row.justify-content-center
            .col-6.col-md-2.mb-4.mb-md-0.d-none.d-md-block
              figure
                img(src='@/assets/curso/t2-08.svg')
            .col-md
              h5 Extensión SVG
              p.mb-0 La extensión SVG (Scalable Vector Graphics), se implementa en los navegadores como Chrome, Safari, Firefox, gracias a que es un formato no tan pesado y no pierde calidad, tiene una característica especial: permite incorporar animaciones en la misma imagen. Este formato es muy amigable con Google ya que permite indexar fácil y así mejorar el posicionamiento SEO.

      .d-flex.align-items-center.justify-content-center.h-100(x="92.5%" y="96.7%" tooltip="Formato EPS")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          .row.justify-content-center
            .col-6.col-md-2.mb-4.mb-md-0.d-none.d-md-block
              figure
                img(src='@/assets/curso/t2-09.svg')
            .col-md
              h5 Formato EPS
              p.mb-0 Este formato EPS (encapsulados PostScript), es un tipo de formato muy utilizado para subir archivos vectoriales en internet, estos archivos permiten abrirlos con Illustrator, Photoshop y demás programas vectoriales existentes, una vez se abre, se pueden realizar modificaciones en el programa, y si se necesitan imprimir los archivos pe pueden exportar a otros formatos especiales para impresión como PNG, JPG o PDF.

    .texto-adorno.px-4.py-2.mb-5
      h4.mb-0.me-3 Imágenes rasterizadas

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Formato JPG" :icono="require('@/assets/curso/t2-11.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Formato JPG
            p La extensión JPG (Joint Photographic Experts Group), es el formato más popular y talvez el más utilizado para guardar imágenes, es un formato de compresión de imágenes, a la hora de utilizarlo es importante saber la calidad de compresión que se va a utilizar, ya que comprime bastante haciendo que se pierda calidad en una imagen, es muy utilizado para subir imágenes optimizadas a internet en modo de color RGB, también se puede guardar una imagen para impresión e modo de color CMYK y darle una resolución óptima y luego guardar en formato JPG.
            p 
              b Ejemplo JPG: 
              | En el ejemplo se utiliza el programa Photoshop, una vez se cambia el modo de color se puede guardar el archivo en la extensión JPG para impresión, aunque a la hora de guardar un archivo óptimo para impresión existen otros formatos con menos compresión, así se ganará más calidad. Siempre es importante tener claro para que se va a utilizar una imagen, con ello se determinará la mejor opción del tipo de formato a utilizar.
        
          .col-lg-6
            figure
              img(src='@/assets/curso/t2-18.png')

      .py-4.py-md-5(titulo="Formato PNG" :icono="require('@/assets/curso/t2-12.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Formato PNG
            p El formato PNG (Portable Network Graphics) tiene una particularidad muy especial ya que permite guardar las imágenes con transparencia en sus fondos sin perder calidad, se utiliza para guardar logos. Este formato se puede utilizar para publicar imágenes en la web y también para impresión, se debe tener claro que para internet se deben utilizar imágenes óptimas de carga rápida, este formato no comprime tanto como el formato JPG.
            p En el formato PNG se pueden guardar los archivos en dos opciones PNG 8 y PNG 24. En la opción PNG 8, tiene color de 8 bits, muestra 256 colores, es menor el tamaño debido a la información. En la opción PNG 24, tiene 24 bits, muestra 16 millones de colores, es decir que la calidad de imagen es mejor, pero las imágenes son más pesadas.
            p 
              b Ejemplo PNG: 
              | Para guardar un formato PNG con transparencia, desde Illustrator se hace click en el menú Archivo - exportar se visualiza en la siguiente ventana, allí se definen la resolución, suavizado y color de fondo transparente. 
        
          .col-lg-6
            figure
              img(src='@/assets/curso/t2-19.png')

      .py-4.py-md-5(titulo="Formato BMP" :icono="require('@/assets/curso/t2-13.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Formato BMP
            p El formato BMP (bitmap) fue creado por Windows, el formato de mapa de bits posee una extensión simple; es un formato que comprime a una buena calidad la imagen, pero en la actualidad ha perdido protagonismo con los formatos JPG y PNG, ya que los archivos en BMP son más pesados.
        
          .col-lg-6
            .row.justify-content-center
              .col-6
                figure
                  img(src='@/assets/curso/t2-13.svg')

      .py-4.py-md-5(titulo="Formato TIFF" :icono="require('@/assets/curso/t2-14.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Formato TIFF
            p El formato TIFF (Tagged Image Filme Format) es un formato especial para impresión gracias a la capacidad de guardar imágenes con muchos colores y detalles, como fotografías de alta resolución; permite almacenar imágenes con 32 bits de colores, su tamaño es alto y no ocasiona pérdida en la calidad de imágenes al comprimirse. Este formato es adecuado para impresión de imágenes y no recomendado para imágenes que se quieran publicar en internet por su peso tan alto.
        
          .col-lg-6
            .row.justify-content-center
              .col-6
                figure
                  img(src='@/assets/curso/t2-14.svg')

      .py-4.py-md-5(titulo="Formato GIF" :icono="require('@/assets/curso/t2-15.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Formato GIF
            p El formato GIF (Graphics Interchange Format) es un formato muy utilizado ya que permite comprimir animaciones, es muy utilizado en internet, redes sociales, al crear una animación y luego exportarla al formato GIF, solo con dar clic se puede ver la animación creada. Usualmente se pueden encontrar emoticonos, stickers en algunas redes sociales en formato GIF.
            p 
              b Ejemplo GIF: 
              | Previamente se realiza la acción de movimiento en un programa como Photoshop y posteriormente se exporta con la extensión GIF.
        
          .col-lg-6
            .row.justify-content-center
              .col-6
                figure
                  img(src='@/assets/curso/t2-15.svg')

      .py-4.py-md-5(titulo="Formato PSD" :icono="require('@/assets/curso/t2-16.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Formato PSD
            p El formato PSD corresponde al formato original de Photoshop, tiene la posibilidad de crear vectores, pero es más utilizado para crear archivos de mapa de bits. Los archivos con extensión PSD solamente se pueden visualizar con Photoshop. 
        
          .col-lg-6
            .row.justify-content-center
              .col-6
                figure
                  img(src='@/assets/curso/t2-16.svg')

      .py-4.py-md-5(titulo="Formato RAW" :icono="require('@/assets/curso/t2-17.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Formato RAW
            p El formato RAW (en crudo), es creado para las cámaras digitales de formato réflex que captura la información de las cámaras tal cual se realiza la toma, es compatible con Photoshop y no comprime las fotografías, así que las procesa en alta calidad.

          .col-lg-6
            .row.justify-content-center
              .col-6
                figure
                  img(src='@/assets/curso/t2-17.svg')

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Resumiendo lo anterior, no se puede definir cuál formato es mejor, simplemente es utilizar el que mejor se adecúe a las necesidades de cada situación, teniendo claro que los programas de diseño brindan todas las posibilidades de exportar los archivos en los diferentes formatos que existen.

    separador

    .titulo-segundo.color-secundario
      h2 2.2 Medios impresos y digitales

    p.mb-5 Ahora, se estudiará cuál es la diferencia entre los medios impresos y los digitales.

    .texto-adorno.px-4.py-2.mb-5
      h4.mb-0.me-3 Medios impresos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Los medios impresos son una de las formas de comunicación más antiguas y básicas que han permitido a lo largo de los siglos transmitir el conocimiento, los usos y costumbres de los pueblos. Estos medios incluyen todo tipo de producto que lleve un impreso en su superficie como:

        .row.mb-2
          .col-md-6
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Periódicos.
              li
                i.fas.fa-check
                | Libros.
              li
                i.fas.fa-check
                | Semanarios.
              li
                i.fas.fa-check
                | Revistas.
          .col-md-6
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Publicaciones periódicas.
              li
                i.fas.fa-check
                | Carteles.
              li
                i.fas.fa-check
                | Catálogos.
        p En su producción se utilizan diferentes sistemas de impresión, diversos sustratos y acabados. La utilización de los medios impresos permite tener algunas ventajas que son importantes, debido a que son tangibles, durables y generan confianza respecto a la empresa o persona que los desarrolló.

      .col-8.col-lg
        img(src="@/assets/curso/t2-20.png")

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Los medios impresos exigen la impresión de un archivo por colores, para obtener la mayor calidad en los mismos, pues deben ser creados en modo CMYK, separación en cian, magenta, amarillo y key (negro). Analicemos algunos de estos tipos de impresión.

    .texto-adorno-pequeno.mb-5
      h4.mb-0 Libro

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p La palabra libro procede del latín Liber, que era el nombre que se le daba a la parte interna de la corteza de los árboles. Los pueblos antiguos utilizaban hojas de palma, corteza de árboles y papiros, hasta que en el 200 a.C. los chinos inventaron el papel. El libro se define como el conjunto compuesto por hojas de papel, pergamino, tela, vitela o de otro material similar, que se organizan uniéndose por un lado mediante la encuadernación y protegidas con una tapa o cubierta, creando un volumen.
        p 
          b Según la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura, Unesco, 
          | para hablar de libro es necesario que tenga más de 50 hojas, pues si tiene entre 5 y 49 hojas se habla de un folleto. La Unesco tiene como uno de sus objetivos, la protección del saber incluido en los libros, que son bienes culturales. También se denomina libro a una obra de gran extensión que se publica en varios tomos o volúmenes.
      
      .col-8.col-lg
        img(src="@/assets/curso/t2-21.png")

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.px-4.px-md-5.py-4
          .row.m-0.align-items-center.justify-content-around
            .col-6.col-lg-3.mb-4.mb-lg-0
              img(src="@/assets/curso/t2-22.png")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Históricamente fue en 1440, cuando el alemán Johannes Gensfleisch Zur Laden zum Gutenberg, inventó la imprenta, sin embargo, los avances tecnológicos han revolucionado los libros debido a los formatos digitales, en lo que conocemos hoy como libros electrónicos o e-books, que se pueden adaptar a formatos sonoros como en los audiolibros. 

    h4 Partes de un libro

    p.mb-5 El libro tiene elementos externos e internos, que dependiendo del propósito comunicativo pueden ser prescindibles, es decir, existen diferencias en cada libro, y se pueden clasificar en elementos externos e internos.

    ImagenInfograficaBB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2-23.svg')

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="4%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Página
          p.mb-0 Cada una de las hojas que conforman el libro, tiene anverso y reverso y están numeradas.

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="14.2%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Cuerpo de la obra
          p.mb-0 Es el conjunto de las hojas que constituyen la obra en sí, la cual puede contener varias partes como, índice, prólogo, prefacio, capítulos, epígrafes, bibliografía, colofón y epílogo.

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="24.5%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Índice
          p.mb-0 Se utiliza para que el lector pueda ver la estructura, organización y el contenido del libro. Si el libro es de literatura se ubica al final de la obra y si es científico se ubica al principio, aunque a veces puede sufrir variaciones.

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="34.5%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Prólogo
          p.mb-0 O introducción está ubicado al inicio del libro. Allí el autor explica las motivaciones que le llevaron a la creación de la obra, la idea principal sobre la que gira la historia, etc., aunque a veces lo escribe un tercero que puede ser el editor o un experto/crítico de la obra. 

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="45%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Prefacio
          p.mb-0 O preámbulo es una parte introductoria del libro, lo escribe el autor en donde explica las motivaciones que tuvo en su creación y anticipa cómo desarrollará la escritura de su obra.

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="55%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Epígrafes
          p.mb-0 Usualmente es una página en la que el autor de la obra expresa una sentencia, cita o frase que se relaciona con el contenido de un texto o un capítulo, como síntesis de las ideas principales que le siguen.

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="65%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Capítulos
          p.mb-0 La trama se divide en diversas partes que conforman los capítulos; preferencialmente se enumeran.

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="75.5%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Bibliografía
          p.mb-0 Consiste en el listado de las obras que se utilizaron o fueron consultadas por el autor durante su trabajo y que sirvieron como base de investigación o inspiración.

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="85.5%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Epílogo
          p.mb-0 Se ubica al final de la obra, con el fin de hacer una observación o comentario sobre ella o para resolver algún entramado de la obra.

      .d-flex.align-items-center.justify-content-center.h-100(x="7%" y="96%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Colofón
          p.mb-0 Es la anotación al final del libro en la que se coloca el nombre del impresor, lugar y fecha de la impresión, número de tirada y el logotipo del impresor.


      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="7.5%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Sobrecubierta
          p.mb-0 Usualmente tiene el mismo diseño, imágenes y texto que la cubierta o portada del libro, se elabora en papel o cartulina y no todos los libros la tienen.


      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="18.3%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Solapa
          p.mb-0 Es la prolongación de la sobrecubierta y está doblada hacia dentro, se utiliza generalmente para imprimir fotos del autor y una breve biografía.

      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="29%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Cubierta
          p.mb-0 Es la parte externa que recubre y a su vez protege el interior del libro y se elabora en un material más duro y resistente que el papel, por ejemplo, cartón, cuero o madera. Es fundamental su diseño a fin de atraer la curiosidad y atención del lector. Debe elaborarse con una estrategia que combine, colores, texto e imágenes, ya que los estudios han comprobado que es la parte más visible del libro y la más observada. La cubierta completa está formada por la tapa anterior, la tapa posterior y el lomo.

      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="39.5%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Portada
          p.mb-0 Es la parte frontal de la cubierta, allí se pone el título de la obra, el autor, la editorial y, casi siempre, se incluye el nombre del diseñador.

      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="50.2%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Lomo
          p.mb-0 Se refiere al lugar donde se sujetan las hojas del libro, en este espacio se puede observar que, generalmente, tiene un texto impreso que usualmente corresponde al título de la obra, nombre del autor, número de tomo o volumen, logotipo de la editorial, entre otros aspectos. Puede tener forma redondeada o cuadrada.

      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="60.5%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Contraportada
          p.mb-0 Es una página en blanco ubicada en seguida de la portada.

      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="71.5%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Faja
          p.mb-0 Es una tira de papel en la que se informa acerca de los premios que ha merecido la obra, el número de ediciones, número de ejemplares impresos y a veces frases relacionadas con la crítica de la obra.


      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="82%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Créditos
          p.mb-0 O página de derechos de propiedad está al reverso de la portada y en ella aparecen en texto los datos de la propiedad literaria, el copyright, el editor, la fecha de edición del libro, número de reimpresiones, depósito legal, si se trata de una traducción el título en original, créditos del diseñador, corrector de estilo, entre otros elementos. 

      .d-flex.align-items-center.justify-content-center.h-100(x="93%" y="92.5%")
        .tarjeta.tarjeta--blanca.p-4.p-lg-5
          h5 Guardas
          p.mb-0 Son las dos primeras y las dos últimas hojas del libro, y unen las tapas con el resto del libro, pero se clasifican como elemento externo del mismo. Generalmente están en blanco, aunque a veces pueden tener imágenes impresas como decoración, haciéndolo más atractivo. Si el libro es de tapa dura la primera hoja va pegada a ella.

    .texto-adorno-pequeno.mb-5
      h4.mb-0 Revista

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Es un tipo de publicación periódica, que trata uno o varios temas y que se caracteriza por tener gran variedad de textos e imágenes. Contienen artículos sobre diversos tópicos como, horóscopos, reseñas, entrevistas, infografías, ilustraciones y muchas fotografías. Las revistas pueden tratar temas diversos como espectáculos, religión, cine, cocina, notas científicas, etc. A veces van dirigidas a un público en particular –como revistas científicas, de derecho, de finanzas–, o para adolescentes, mujeres u hombres.
        p Se conocen también como magazín y se pueden publicar en forma semanal, mensual o bimensual, entre otros. Sus ediciones impresas son más cuidadas, usualmente se elaboran en papel de buena calidad, aunque actualmente existen revistas electrónicas que cuentan con funciones interactivas y utilizan internet para su difusión.
        p Las principales partes de la revista son:
      
      .col-8.col-lg
        img(src="@/assets/curso/t2-24.png")

    ImagenInfograficaBB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2-25.svg')

      .d-flex.align-items-center.justify-content-center.h-100(x="14.5%" y="41%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          .row
            .col-2.d-none.d-lg-block
              img(src="@/assets/curso/t2-26.svg")
            .col-lg
              h5 Portada
              p.mb-0 Es la primera página de la revista que, usualmente, contiene una excelente foto indicativa de alguno de los temas más importantes que contendrá la revista.

      .d-flex.align-items-center.justify-content-center.h-100(x="39%" y="41%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          .row
            .col-2.d-none.d-lg-block
              img(src="@/assets/curso/t2-27.svg")
            .col-lg
              h5 Páginas de cubierta
              p.mb-0 Aparecen en seguida de la portada, usualmente se elaboran con el mismo papel de la portada y generalmente contiene avisos publicitarios. La segunda página de cubierta es la página más cara en publicidad. La última página de portada es también muy cara desde el punto de vista publicitario.

      .d-flex.align-items-center.justify-content-center.h-100(x="63%" y="41%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          .row
            .col-2.d-none.d-lg-block
              img(src="@/assets/curso/t2-28.svg")
            .col-lg
              h5 Anuncios
              p.mb-0 La mayoría de las veces se relacionan con la temática que trata la revista, a veces constituyen hasta el 60% del contenido. Como el lector mira primero las páginas impares, generalmente se publican allí.

      .d-flex.align-items-center.justify-content-center.h-100(x="87%" y="41%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          .row
            .col-2.d-none.d-lg-block
              img(src="@/assets/curso/t2-29.svg")
            .col-lg
              h5 Tabla de contenido
              p.mb-0 índice o sumario le permite al lector observar la organización de los temas en la revista, en donde puede consultar el artículo relacionado con la fotografía de la portada. El diseño de esta tabla puede hacerse con o sin márgenes, pero es muy importante determinar la adecuada tipografía, así como la posible inclusión de fotografías o ilustraciones, ya que debe facilitar encontrar los títulos de los temas, así como la página donde se encuentran y a veces una breve descripción del tema.


      .d-flex.align-items-center.justify-content-center.h-100(x="14.5%" y="90%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          .row
            .col-2.d-none.d-lg-block
              img(src="@/assets/curso/t2-30.svg")
            .col-lg
              h5 Pie de imprenta
              p.mb-0 O masterhead a veces se pone en la parte delantera de la revista o en la posterior. Contiene la lista de todas las personas que intervienen en la revista, redacción, ventas, anuncios, editores, etc. El logo de la revista se ubica preferencialmente en la parte superior de la revista.

      .d-flex.align-items-center.justify-content-center.h-100(x="39%" y="90%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          .row
            .col-2.d-none.d-lg-block
              img(src="@/assets/curso/t2-31.svg")
            .col-lg
              h5 Carta del editor
              p.mb-0 Es una carta realizada por el editor en jefe, que contiene una breve explicación o reflexión sobre los temas. 

      .d-flex.align-items-center.justify-content-center.h-100(x="63%" y="90%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          .row
            .col-2.d-none.d-lg-block
              img(src="@/assets/curso/t2-32.svg")
            .col-lg
              h5 Artículos
              p.mb-0 es básicamente el cuerpo de la revista, algunos artículos son breves otros son extensos. Al organizar la revista se deben intercalar los artículos largos con los cortos, para hacer más amena la lectura.

      .d-flex.align-items-center.justify-content-center.h-100(x="87%" y="90%" claseBoton="color-secundario")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          .row
            .col-2.d-none.d-lg-block
              img(src="@/assets/curso/t2-33.svg")
            .col-lg
              h5 Parte posterior
              p.mb-0 contiene artículos muy cortos, noticias, horóscopo, anuncios clasificados siendo de una estructura rígida y su diseño cambia muy poco.  La última página se reserva casi siempre para el columnista, una entrevista corta o un contenido relajante.

    .texto-adorno-pequeno.mb-5
      h4.mb-0 Periódico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Es una publicación masiva, impresa o digital que se publica regularmente para mantener informados a sus lectores acerca de los aspectos, hechos y sucesos más importantes de la actualidad nacional e internacional; además de noticias, se publican opiniones y comentarios, se proporciona información en diferentes ámbitos, incluye tiras cómicas, crucigramas, sudokus y artículos literarios.
        p El periódico puede tener circulación nacional, regional o local. Conforme al intervalo de tiempo con el que se publique, tiene un nombre:
        ul.lista-ul--color.ps-4.mb-0
          li
            i.fas.fa-check
            | Si es todos los días: diario.
          li
            i.fas.fa-check
            | Si se publica cada semana: semanario.
          li
            i.fas.fa-check
            | Si se publica en la mañana, será matutino.
          li
            i.fas.fa-check
            | Si se publica en la tarde, será vespertino.

      .col-8.col-lg
        img(src="@/assets/curso/t2-24.png")

    p.mb-5 Así mismo, se puede clasificar dependiendo del formato que empleen:

    .row.justify-content-center.mb-3
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip3 = false")
          .indicador--hover(v-if="indicadorTarjetaFlip3")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t2-35.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Estándar
              p.text-center.mb-0 Es el más utilizado por los diarios más importantes del mundo y sus medidas son 38 x 58 centímetros. Está compuesto por ocho columnas.

      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.tarjeta-flip--cuadrada.color-acento-botones--borde(@mouseover="indicadorTarjetaFlip3 = false")
          .indicador--hover(v-if="indicadorTarjetaFlip3")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t2-36.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Tabloide
              p.text-center.mb-0 Es un formato más pequeño, que se utiliza en la creación de páginas digitales, el uso de este formato se ha incrementado en los últimos años.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 En la elaboración del periódico se realiza un proceso de redacción, edición, impresión y distribución, y cuenta con un gran equipo de trabajo, como periodistas, correctores, fotógrafos, diseñadores, técnicos, distribuidores y vendedores. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p El periódico se divide en varias secciones temáticas, como son:
        .row
          .col-md-6
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Política.
              li
                i.fas.fa-check
                | Economía.
              li
                i.fas.fa-check
                | Actualidad.
              li
                i.fas.fa-check
                | Sucesos.
              li
                i.fas.fa-check
                | Noticias internacionales o nacionales.
              li
                i.fas.fa-check
                | Problemática social.
          .col-md-6
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Deportes.
              li
                i.fas.fa-check
                | Ciencia.
              li
                i.fas.fa-check
                | Educación.
              li
                i.fas.fa-check
                | Vivienda.
              li
                i.fas.fa-check
                | En ocasiones incluye productos publicitarios.
        p Externamente tiene una serie de elementos distintivos, como el nombre del periódico, el logotipo, la fecha y el lugar de publicación, la edición, las noticias principales del día, fotos con su respectiva descripción, entre otros elementos.

      .col-8.col-lg
        img(src="@/assets/curso/t2-24.png")

    .texto-adorno-pequeno.mb-5
      h4.mb-0 El periódico digital

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Desde 1993, varios diarios estadounidenses publican su información en la plataforma de internet, creando sus propios sitios web; el primero de ellos fue 
          em The Chicago Tribune
          |, pero, poco a poco, numerosos diarios se fueron sumando a la presentación y distribución digital, ofreciendo la misma información que publican en los periódicos impresos.
        p Actualmente, el periódico digital, periódico en línea, o diario en línea, es la edición de un periódico que utiliza internet para su investigación, producción y difusión, y se presenta en formato electrónico, lo cual permite la actualización inmediata de su información o contenido, son gratuitos pero la tendencia sugiere el posible pago para poder acceder a ellos.

      .col-8.col-lg
        img(src="@/assets/curso/t2-38.png")

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Las características del periódico digital se fundamentan en las características de la plataforma de internet, como la multimedialidad, hipertextualidad e interactividad, aunadas a otros aspectos como accesibilidad, inmediatez, usabilidad, actualización inmediata en cualquier tiempo, opciones de personalización de acuerdo con los diferentes dispositivos.

    .texto-adorno.px-4.py-2.mb-5
      h4.mb-0.me-3 Medios digitales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p El medio digital es cualquier tipo de comunicación que se realice a través de una plataforma digital en internet. La rápida evolución tecnológica, ha cambiado las formas de comunicación de las personas, desde los años 70 cuando se creó Internet y los correos electrónicos aparecieron.
        p Los medios digitales son:
        .row
          .col-md-6
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Software.
              li
                i.fas.fa-check
                | Videos digitales.
              li
                i.fas.fa-check
                | Videojuegos.
              li
                i.fas.fa-check
                | Páginas y sitios web.
              li
                i.fas.fa-check
                | Redes sociales.
          .col-md-6
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Blogs.
              li
                i.fas.fa-check
                | Bases de datos.
              li
                i.fas.fa-check
                | Audios digitales.
              li
                i.fas.fa-check
                | Libros electrónicos o e-books.
              li
                i.fas.fa-check
                | Imágenes digitales.

        p Los medios digitales tienen unas características que son: actualización constante e incesante, una página online tiene que ser dinámica y cambiante, también debe tener en cuenta:
      .col-8.col-lg
        img(src="@/assets/curso/t2-39.png")

    .row.justify-content-center.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-0 La interactividad, ya que los intercambios de información son simultáneos y las personas quieren comunicarse en forma inmediata. 

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-0 La hipertextualidad es un sistema de organización y presentación de datos basados en vínculos de textos, gráficos o fragmentos que les permiten a los usuarios obtener información de forma no secuencial a través de los llamados hipervínculos. 

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-0 La multimedialidad hace referencia a la utilización de las nuevas tecnologías en los textos, pues se pueden introducir recursos gráficos y audiovisuales como imágenes, sonidos, videos, lo cual hace más fácil la comunicación. 

    p.mb-5 Entre los principales medios digitales están:

    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--claro.p-5(titulo="Página web")
        h4 Página web
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            p Es un medio digital muy importante en la actualidad, en este medio se realizan un sin número de acciones, una empresa puede dar a conocer su producto o servicio, las cadenas de noticias informan; las páginas web hacen parte de la imagen corporativa de una empresa y se puede encontrar páginas informativas, páginas corporativas con contenidos más amplios, hasta páginas para procesos de e-commerce o conocidas también como tiendas online. El diseño de las páginas web debe ser creativo, fácil de usar y navegar. Las páginas web tienen características independientes dependiendo del sector o la razón social de la empresa.
          .col-8.col-lg
            img(src="@/assets/curso/t2-40.png")

      .tarjeta.color-secundario--claro.p-5(titulo="Blog")
        h4 Blog
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            p Este medio digital tiene como finalidad la interacción con los usuarios a partir de la creación de contenidos, es muy usado en las estrategias de marketing digital para compartir información y fidelizar usuarios.
          .col-8.col-lg
            img(src="@/assets/curso/t2-41.png")

      .tarjeta.color-secundario--claro.p-5(titulo="Página de aterrizaje <em>(Landing Page)</em>")
        h4 Página de aterrizaje   
          em (Landing Page)
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            p En las estrategias de 
              em marketing 
              | digital se usan a menudo, es común verlas en la publicidad de tiendas online, por ejemplo, un usuario ingresa a Google y realiza una búsqueda de guitarras, en los resultados una página de aterrizaje puede llevar directamente valga la expresión a que el usuario aterrice directamente en la sección de guitarras, sin que previamente tenga que ingresar al home o inicio de la página y tener que buscar la sección de guitarras. Es llevar al usuario directamente a la acción, persuadirlo a la compra.
          .col-8.col-lg
            img(src="@/assets/curso/t2-42.png")

      .tarjeta.color-secundario--claro.p-5(titulo="Redes sociales")
        h4 Redes sociales
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            p Son aplicaciones para que los usuarios interactúen entre sí de forma virtual, hoy en día las redes sociales no solamente están creadas para ocio, también están en función del marketing digital, las empresas pueden diseñar campañas de publicidad para pautarlas en las redes sociales un ejemplo de esto es (Facebook, Instagram, Twitter, TikTok). Cada red social tiene sus propias características y formatos de diseño, esto es importante tenerlo en cuenta a la hora de diseñar piezas digitales. 
          .col-8.col-lg
            img(src="@/assets/curso/t2-43.png")

      .tarjeta.color-secundario--claro.p-5(titulo="Videos online")
        h4 Videos online
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            p En el marketing digital, los videos online juegan un papel importante como medio digital, ya que dentro de las estrategias de comunicación se implementan por empresas para persuadir y llegar al grupo objetivo.
          .col-8.col-lg
            img(src="@/assets/curso/t2-44.png")

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Resumiendo, el concepto de medios digitales, los tipos y sus características es importante saber la importancia que juega la producción digital, porque es aquí donde se crean todos los diseños que alimentarán los medios digitales.

    separador

    .titulo-segundo.color-secundario
      h2 2.3 Sustratos

    .row.justify-content-center.mb-5
      .col-lg-10
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-45.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El sustrato en diseño se refiere a la superficie (medio físico) sobre el cual se llevará a cabo la impresión, así, existen diversos gramajes, texturas, marcas y tamaños. El gramaje del papel hace referencia al espesor de este, a mayor espesor, mayor calidad, mayor peso. En artes gráficas existen diversos métodos de impresión, esto principalmente tiene que ver con el tamaño, pieza, material y uso.

    .texto-adorno.px-4.py-2.mb-5
      h4.mb-0.me-3 Papel

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p De conformidad con el tipo específico de libro a imprimir, se escoge el tipo de papel. La celulosa es la materia prima para la fabricación del papel y es una sustancia que está presente en las membranas de las células de las plantas. Aunque la celulosa es la base de papeles y cartones, actualmente se usan diferentes sustancias aplicadas en diversos tratamientos para darle el acabado deseado, por ejemplo, cuando se hace el blanqueamiento del papel, entonces se utiliza cloro, porque la celulosa es de color marrón o gris.

        .cajon.color-acento-botones.p-4
          p.mb-0 El papel fue inventado aproximadamente en el año 200 a.C. en China, luego fue llevado a Europa por los árabes para extenderse a todo el mundo. Este material es uno de los más utilizados, a pesar de los avances tecnológicos.

      .col-8.col-lg
        img(src="@/assets/curso/t2-46.png")

    .texto-adorno.px-4.py-2.mb-5
      h4.mb-0.me-3 Tipos de papel

    p.mb-5 En impresión existen diversidad de papeles, estos son los más utilizados de acuerdo con Angarita (s.f.):

    ImagenInfograficaBB.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2-47.svg')

      .d-flex.align-items-center.justify-content-center.h-100(x="19%" y="6.5%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel periódico
          p.mb-0 Este tipo de papel es el más utilizado en la impresión de periódicos. Su base principalmente está elaborada a partir de papel reciclado o pasta mecánica. Puede ser blanco o ligeramente coloreado y su gramaje habitual oscila entre los 40 y los 52 g/m2, aunque puede llegar a 65 g/m2. Este tipo de papel se utiliza en las artes gráficas para volantes, folletos y talonarios por ser muy liviano y económico.

      .d-flex.align-items-center.justify-content-center.h-100(x="19%" y="24%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel Bond
          p.mb-0 es un papel fuerte, de alta calidad y resistente. Es el papel utilizado comúnmente para las copias en las máquinas fotocopiadoras, siendo el de 75 gr, el más utilizado por estas. En las artes gráficas se utiliza para las hojas membretadas, volantes o flyers a una o varias tintas, sobres de correspondencia, también se utiliza para las notas, anuncios, manuales, folletos, boletines, informes, papelería personalizada, talonarios o factureros, catálogos, revistas, libros y anuncios, existen varios gramajes como se presenta a continuación:

      .d-flex.align-items-center.justify-content-center.h-100(x="19%" y="41.5%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel Bond extrablanco
          p.mb-0 Es el mismo papel bond, solamente que su blancura es más intensa, por lo que se utiliza para hojas membretadas de mejor presentación, obteniéndose un trabajo gráfico más elegante.

      .d-flex.align-items-center.justify-content-center.h-100(x="19%" y="58.5%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel químico
          p.mb-0 El papel químico o auto copiante es aquel que no requiere papel carbón para pasar del original a la copia al escribir. Su gramaje es 60. Viene en blanco para el original y en colores pasteles para la copia.

      .d-flex.align-items-center.justify-content-center.h-100(x="19%" y="76%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel propalcote – esmaltados
          p.mb-0 Es un papel muy liso en el que se puede trabajar muy bien la tinta, ya que tiene un acabado semisatinado; tiene la desventaja de que los trabajos a lápiz tienden a ensuciarse un poco. Se emplea principalmente en litografía, en etiquetas de envases, libros, revistas, folletos, volantes, papel regalo y empaques.

      .d-flex.align-items-center.justify-content-center.h-100(x="19%" y="93.5%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Cartulinas - Bristol
          p.mb-0 útil para tarjetas para contabilidad, carnets, separadores de libros, insertos en revistas, cuadernos de dibujo, álbumes para fotografía y trabajos manuales. Implementos de oficina: ficheros, kárdex, tarjetas de reloj. También usadas en plegadizas para alimentos, fósforos. Son vistas en moldes de modistería y, en ocasiones, son unidas para lograr un material más fuerte pero dobladizo.


      .d-flex.align-items-center.justify-content-center.h-100(x="81%" y="6.5%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel Kraft
          p.mb-0 Utilizado especialmente para elaborar sobres de manila, sacos de resistencia y envolturas. También es útil en la cobertura de talonarios y otras formas comerciales.

      .d-flex.align-items-center.justify-content-center.h-100(x="81%" y="24%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel adhesivo
          p.mb-0 Principalmente utilizados en etiquetas de empaques, envases y botellas, caramelos de cartillas y cualquier tipo de sticker, como: 

      .d-flex.align-items-center.justify-content-center.h-100(x="81%" y="41.5%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel Manila
          p.mb-0 Este papel, diseñado especialmente para el forrado de planchuelas y cables, tiene una gran resistencia al estiramiento, lo que permite un trabajo versátil en máquinas automáticas; es visto también en tapas de talonarios. Los papeles más gruesos suelen ser utilizados en sobres de radiografías.

      .d-flex.align-items-center.justify-content-center.h-100(x="81%" y="58.5%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel Opalina
          p.mb-0 papel relativamente nuevo, originalmente diseñado para todo tipo de impresión, elaborado de pulpa de madera, presenta un acabado liso y en algunos casos gofrado; se usa principalmente para tarjetería.

      .d-flex.align-items-center.justify-content-center.h-100(x="81%" y="76%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel Lino Belga
          p.mb-0 Papel fino utilizado especialmente para tarjetas de presentación y sociales.

      .d-flex.align-items-center.justify-content-center.h-100(x="81%" y="93.5%")
        .tarjeta.tarjeta--blanca.w-100.p-4.p-lg-5
          h3 Papel Kimberly
          p.mb-0 Papel fino especial para tarjetas de presentación y sociales, viene en múltiples colores y texturas.














    

</template>

<script>
import ImagenInfograficaBB from '../components/ImagenInfograficaB.vue'
export default {
  name: 'Tema2',
  components: { ImagenInfograficaBB },
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
