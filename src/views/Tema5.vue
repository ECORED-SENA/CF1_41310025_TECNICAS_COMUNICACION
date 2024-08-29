<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Herramientas de gestión
    p.mb-5(data-aos="fade-right") La creación de distintos soportes de comunicación interna agiliza la gestión y enriquece la comunicación. Estos soportes pueden ser orales, escritos, audiovisuales o digitales.
    .row
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row.align-items-center(numero="1" titulo="Carta al personal")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Exige brevedad y claridad, y su función es difundir información importante como resultados o cambios en la organización. Se recomienda personalizar las cartas en lugar de enviarlas a múltiples destinatarios comunes.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img2.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="2" titulo="Carteleras")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Su efectividad como medio de comunicación es contundente. Deben colocarse en lugares de tránsito seguro para el personal y seguir un orden lógico para una rápida comprensión. Incluyen remitentes y fecha para evitar malentendidos.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img3.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="3" titulo="Cuadernillo de bienvenida")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Sirve como guía para nuevas incorporaciones, incluyendo una síntesis histórica, normas internas, organigrama, y otros detalles relevantes de la institución.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img4.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="4" titulo="Manuales de estilo")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Guías sistematizadas de procedimientos institucionales, abarcando información técnica, organizativa e histórica de la empresa. Ayudan a organizar y coordinar actividades, contribuyendo a la imagen de la empresa.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img5.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="5" titulo="Folletos")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Cubren temas específicos, como procedimientos ante accidentes laborales, y suelen diseñarse como trípticos sencillos y prácticos para el personal en campañas de concientización interna.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img6.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="6" titulo="Publicación institucional")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Una revista interna que informa, motiva y cohesiona al personal, generando una comunicación ascendente, descendente y lateral. Fomenta la valoración personal y un sentimiento de pertenencia.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img7.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="7" titulo="Reuniones")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Espacios de comunicación para informar, capacitar, reflexionar y tomar decisiones. Es fundamental un espacio adecuado y convocar a los participantes con antelación.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img8.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="8" titulo="Línea abierta o línea directa")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Una línea telefónica para que los integrantes de la organización dejen preguntas, sugerencias o preocupaciones, que serán revisadas y respondidas posteriormente. Es obligatorio dejar nombre y sector junto al mensaje.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img9.png', style="width: 250px", alt='').m-auto
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.png', style="width: 260px", alt='').m-auto
    Separador
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width: 40px", alt='').m-auto
      .col
        h2.txt-c1.mb-0 #[u Medios electrónicos]
    .row.bg-c1
      .col-12
        .px-5
          .row.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12
                  .p-4.bg-c7
                    p.mb-0 En el contexto de la Revolución Científico-Tecnológica, las interacciones cara a cara han disminuido. Un número creciente de redes intermedias organiza la interacción. Por ello, resulta necesario establecer nuevas relaciones de intercambio, no solo entre individuos, sino también entre estos y la organización como espacio de pertenencia. Entre las herramientas que una empresa puede utilizar se incluyen:
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema5/img1.svg', style="width: 250px", alt='').m-auto
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema5/img10.png', style="width: 260px", alt='').m-auto
            .col-lg-9(data-aos="fade-left")
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema5/img11.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Correo electrónico (E-mail)]
                        p.text-center.mb-0 Ofrece rapidez, interactividad, multidifusión y facilidad para dirigir mensajes a destinatarios específicos.
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema5/img12.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Intranet]
                        p.text-center.mb-0 Una red interna que permite comunicación rápida e instantánea entre los miembros de la organización, facilitando la interconexión de computadoras.
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema5/img13.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Listas y foros de discusión]
                        p.text-center.mb-0 Recursos que pueden motivar a los integrantes a utilizar herramientas digitales, fomentando su sentido de pertenencia. Los temas pertinentes serían de carácter institucional.
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema5/img14.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Página web institucional]
                        p.text-center.mb-0 Se puede crear un área restringida para los integrantes de la institución e implementar foros de discusión.
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema5/img15.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Evaluación]
                        p.text-center.mb-0 La evaluación periódica del proceso es necesaria para analizar posibles ajustes y asegurar la efectividad de la comunicación interna. Métodos comunes incluyen encuestas y sondeos de opinión internos.
          p.mb-0(data-aos="fade-right") También es importante realizar evaluaciones previas al inicio de un proyecto o plan, durante su ejecución y posteriormente, para medir su impacto. Esto permitirá determinar si se cumplieron los objetivos, metas y resultados esperados.

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
