<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación interna y externa
    p.mb-5(data-aos="fade-up") Es fundamental comprender los niveles de la comunicación y su diferenciación en la práctica laboral, para que en las organizaciones cada actor actúe en el mismo nivel, desde lo interno hacia lo externo y viceversa. Así, tanto los planes de comunicación interna como las herramientas de gestión podrán producir los resultados esperados.
    .row.mb-5
      .col-lg-8.bg-c3.pe-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.h-100
          .row.align-items-center.h-100
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="width: 100px", alt='').m-auto
            .col
              p.mb-0 Uno de los aspectos más importantes en una organización es la comunicación. Por ello, #[b actividades lúdicas y recreativas pueden convertirse en herramientas de comunicación interna que fomenten el compañerismo, la creatividad y la motivación. De acuerdo con esto, se generan opiniones a partir de lo que piensan los miembros internos de la organización]. Este tipo de dinámica comunicativa se denomina comunicación interna y es vital para fortalecer la comunicación entre los diversos miembros de una empresa.
      .col-lg-4.ps-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 410px", alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img2.svg', style="width: 250px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Los empleados de la organización se convierten así en el público interno, que tiene tanta o más importancia que los avisos publicitarios. Ser parte de la realidad corporativa permite descubrir las virtudes y defectos de la empresa, y mediante estrategias de comunicación efectiva, se fortalece la imagen para compartirla con los demás.
        p.mb-0 Todo plan de comunicación externa debe estar alineado con la comunicación interna. La importancia de esta alineación radica en que permite:
    .row
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row.align-items-center(numero="1" titulo="Involucrar al personal")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Para que exista una empresa, debe haber un personal que la conforme. Este es el encargado de transmitir los valores y objetivos empresariales. Cada empleado tiene un papel vital en la organización, lo que lo hace sentir parte de ella.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img3.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="2" titulo="Coherencia y coordinación en el plan de acción")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Establecer un plan de acción coordinado exige que las estrategias de comunicación sean coherentes y mantengan un flujo constante de comunicación entre los diferentes departamentos de la organización.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img4.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="3" titulo="Participación y adaptación al cambio")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Para optimizar los procesos productivos, toda empresa necesita una comunicación adecuada y la participación del personal en los resultados de la organización. Es importante que cada empleado, colaborador o usuario de la empresa sepa no solo qué tiene que hacer y cómo hacerlo, sino también por qué y para qué lo hace.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img5.png', style="width: 250px", alt='').m-auto
          .row.align-items-center(numero="4" titulo="Activación de la productividad")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Para optimizar los procesos productivos, toda empresa necesita una comunicación adecuada y la participación del personal en los resultados de la organización. Es importante que cada empleado, colaborador o usuario de la empresa sepa no solo qué tiene que hacer y cómo hacerlo, sino también por qué y para qué lo hace.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img6.png', style="width: 250px", alt='').m-auto
          
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.png', style="width: 310px", alt='').m-auto

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
