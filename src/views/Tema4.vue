<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Plan de comunicación interna
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.mb-5
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Toda organización es producto de la participación activa de varias partes de la empresa: objetivos, mecanismos organizativos y estructura económica. La comunicación es un mecanismo que atraviesa a la institución en diversas dimensiones. A raíz de ello, se pueden identificar diferentes ámbitos de la comunicación en las organizaciones.
            .col-lg-3(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema4/img1.svg', style="width: 280px", alt='').m-auto(data-aos="fade-right")
          .tarjeta.tarjeta--azul1(data-aos="fade-up")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Información]
                    p.mb-0 Este ámbito se compone de normas y datos utilizados por la empresa de acuerdo con sus funciones y el objetivo definido.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema4/img3.png', style="width: 450px", alt='').m-auto
                .row.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Divulgación]
                    p.mb-0 Se compone de elementos que buscan captar a las personas, convencerlas, persuadirlas y sumar su voluntad a los fines de la organización. Para este objetivo se utilizan boletines, publicaciones y comunicados.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema4/img4.png', style="width: 450px", alt='').m-auto
                .row.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Formación y socialización]
                    p.mb-0 Este ámbito permite reforzar de forma explícita la cultura institucional. Aquí se insertan todas las actividades de capacitación, recreación y eventos institucionales.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema4/img5.png', style="width: 450px", alt='').m-auto
                .row.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Participación]
                    p.mb-0 Expresarse mediante diversos modos de comunicación en la empresa permite que cada miembro se exprese libremente. Esta dinámica abre espacio para el reconocimiento y la colaboración de los diversos entes que conforman la empresa, involucrando el trabajo en equipo, el reconocimiento a las iniciativas, las sugerencias y las propuestas.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema4/img6.png', style="width: 450px", alt='').m-auto
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c6
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src='@/assets/curso/tema4/img3.svg', style="width: 80px", alt='').m-auto
                .col
                  p.mb-0 Para la ejecución del plan de comunicación interna, es pertinente una planificación previa que permita su correcta implementación y posterior evaluación. Todo plan de comunicación interna necesita contar con el respaldo de la máxima autoridad, de lo contrario, todo el esfuerzo y planificación serán en vano.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img2.svg', style="width: 450px", alt='').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
