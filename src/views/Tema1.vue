<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Comunicación organizacional
    .row
      .col-lg-8.bg-c3.pe-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.h-100
          .row.align-items-center.h-100
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width: 100px", alt='').m-auto
            .col
              p.mb-0 En la sociedad del conocimiento actual, la comunicación moderna es una combinación de #[b gestión, medios de comunicación, y habilidades verbales y no verbales de los protagonistas], pero, sobre todo, una gran capacidad creativa. Bajo este nuevo enfoque, las organizaciones deben adoptar un pensamiento sistémico, tanto a nivel organizacional como individual, siendo la comunicación el factor determinante.
      .col-lg-4.ps-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: 410px", alt='').m-auto
    Separador
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width: 40px", alt='').m-auto
      .col
        h2.txt-c1.mb-0 #[u Estrategias de comunicación organizacional]
    p.mb-5(data-aos="fade-down") Las organizaciones actuales desarrollan estrategias de comunicación robustas que se adaptan a los cambios en la gestión empresarial. La comunicación permite a los directivos generar procesos internos que faciliten el logro de los objetivos organizacionales. Esto convierte la comunicación en una aliada clave en los procesos de cambio estructural dentro de la organización.
    .row.justify-content-center
      .col-11.col-md-8.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .p-3.bg-c4
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img3.png', style="width: 260px", alt='').m-auto
            .col-lg-6
              p.mb-0 #[b Motivación y seguridad]
              p.mb-0 La comunicación mantiene motivados a los protagonistas organizacionales, proporcionando seguridad en la gestión y cultivando relaciones basadas en empatía, mejorando la efectividad en el logro de objetivos.
      .col-11.col-md-8.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .p-3.bg-c4
          .row.align-items-center.h-100
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img4.png', style="width: 260px", alt='').m-auto
            .col-lg-6
              p.mb-0 #[b Calidad de relaciones]
              p.mb-0 Mejora las relaciones públicas, incrementa el desempeño social, y contribuye a la calidad de vida, fidelidad de clientes y cohesión social.
    Separador
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width: 40px", alt='').m-auto
      .col
        h2.txt-c1.mb-0 #[u Relaciones con clientes]
    p.mb-5(data-aos="fade-down") Cuando se trata de relaciones con los clientes organizacionales, las estrategias de mercadeo no son suficientes. Es crucial diseñar medios de comunicación efectivos, ofrecer un excelente servicio y mantener relaciones activas con los clientes.
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-c5
          figure
            img(src='@/assets/curso/tema1/img5.png', style="width: 310px", alt='').m-auto
          .row
            .col-12
              .p-4
                p.mb-0 #[b Obtención de información]
                p.mb-0 Es necesario obtener y utilizar información del entorno para conocer mejor a los clientes y adaptar las propuestas a sus necesidades.
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .bg-c5
          figure
            img(src='@/assets/curso/tema1/img6.png', style="width: 310px", alt='').m-auto
          .row
            .col-12
              .p-4
                p.mb-0 #[b Circulación interna de información]
                p.mb-0 La organización debe ser permeable para que la información circule internamente y se aproveche eficazmente.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-up")
        .bg-c5
          figure
            img(src='@/assets/curso/tema1/img7.png', style="width: 310px", alt='').m-auto
          .row
            .col-12
              .p-4
                p.mb-0 #[b Medios alternativos]
                p.mb-0 Generar medios alternativos de comunicación que promuevan una sociedad más comunicada y participativa.
      .col-10.col-md-6.col-lg-3(data-aos="fade-left")
        .bg-c5
          figure
            img(src='@/assets/curso/tema1/img8.png', style="width: 310px", alt='').m-auto
          .row
            .col-12
              .p-4
                p.mb-0 #[b Control de flujos de información]
                p.mb-0 Alinear los flujos de información emitidos con los objetivos del proceso, asegurando un impacto positivo en el entorno.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .p-4.bg-c6
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img2.svg', style="width: 150px", alt='').m-auto
            .col
              p.mb-0 #[b Promoción de cambios y habilidades informativas]
              p.mb-0 Las organizaciones y la sociedad en general necesitan promover cambios que permitan a las personas ser más hábiles en el manejo de la información, convirtiéndola en procesos de comunicación efectivos. Estos cambios son necesarios para adaptar las estructuras organizacionales a la globalización y las nuevas necesidades sociales.
      
</template>

<script>
export default {
  name: 'Tema1',
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
