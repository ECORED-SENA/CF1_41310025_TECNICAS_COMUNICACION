<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .row.mb-4
            .col-lg-9(data-aos="fade-right")
              p La comunicación es la base de las relaciones dentro de la organización, tanto con sus colaboradores internos como con sus clientes reales y potenciales, e incluso con la sociedad en general. Toda actividad relacionada con la vida organizacional debe comunicarse para mantener activas las relaciones integrales, siempre a través de medios pensados para el receptor. El uso de información relevante y la personalización de los mensajes son los cimientos de una comunicación exitosa.
              p Las claves para la comunicación organizacional exitosa son:
              .row.mb-3
                .col-12
                  .p-4.bg-c2
                    .row
                      .col-md-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/intro/img1.svg', style="width: 150px", alt='').m-auto
                      .col
                        p.mb-0 #[b Asertividad]
                        p.mb-0 Para alcanzar niveles de asertividad en las comunicaciones, es necesario conocer la evolución de la comunicación organizacional, los elementos que la componen y los niveles presentes en las comunicaciones.
              .row
                .col-12
                  .p-4.bg-c2
                    .row
                      .col-md-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/intro/img2.svg', style="width: 150px", alt='').m-auto
                      .col
                        p.mb-0 #[b Comprensión y aplicación]
                        p.mb-0 Conocer estos aspectos permite comprender, interpretar y aplicar los fundamentos de la comunicación organizacional de manera efectiva.
            .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.png', style="width: 350px", alt='').m-auto
          p(data-aos="fade-right") Estos principios son esenciales para construir una comunicación organizacional sólida que contribuya al éxito y al buen funcionamiento de la organización.
    
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
