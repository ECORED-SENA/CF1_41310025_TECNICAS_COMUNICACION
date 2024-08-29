<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Elementos de la comunicación
    p(data-aos="fade-right") La comunicación está presente en todas las formas de manifestación, tanto en los animales como en los seres humanos. En el caso de los humanos, es indispensable para establecer relaciones con su entorno.
    p.mb-0(data-aos="fade-right") Los elementos clave de la comunicación son:
    .row.bg-c1.mb-0.mb-lg-5
      .col-12
        .p-5
          .row
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width: 350px", alt='').m-auto
            .col-lg-9(data-aos="fade-left")
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema2/img3.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Emisor]
                        p.text-center.mb-0 La persona u organización que emite o envía un mensaje, eligiendo tanto el canal como la forma adecuada para transmitirlo.
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema2/img4.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Mensaje]
                        p.text-center.mb-0 La información o contenido que se desea comunicar.
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema2/img5.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Canal]
                        p.text-center.mb-0 El medio o vía a través del cual se transmite el mensaje.
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema2/img6.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Receptor]
                        p.text-center.mb-0 La persona o entidad que recibe el mensaje, siendo capaz de descifrarlo y adaptarlo a un contexto significativo.
                .tarjeta.color-acento-contenido
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema2/img7.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-3
                        p.text-center #[b Código]
                        p.text-center.mb-0 El sistema de signos o símbolos utilizado para codificar el mensaje.
    .row.justify-content-center
      .col-md-10.col-lg-6.bg-c3.pe-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.h-100
          .row.align-items-center.h-100
            .col-12
              p.mb-0 #[b Dinámica de la comunicación]
              p.mb-0 La recepción de la comunicación no siempre coincide con el mensaje generado. Las características propias del individuo pueden distorsionar la información, lo que convierte al receptor activo en un transformador de los mensajes, ya que los percibe y los almacena de manera subjetiva.
      .col-lg-4.ps-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img8.png', style="width: 410px", alt='').m-auto
    Separador
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width: 40px", alt='').m-auto
      .col
        h2.txt-c1.mb-0 #[u Emisor y receptor]
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c7
              p.mb-0 Emisor y receptor deben analizarse de manera conjunta, ya que la función de ambos es de constante intercambio dentro del proceso comunicativo. La interacción entre estos elementos es fundamental para que el proceso de comunicación sea efectivo, asegurando que el mensaje transmitido sea comprendido y contextualizado adecuadamente por el receptor.
        p.mb-0 El emisor es quien inicia el proceso comunicativo, y para lograr una comunicación efectiva, debe cumplir con las siguientes características:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 350px", alt='').m-auto
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-4(data-aos="fade-right")
        .p-4.bg-c5
          figure.mb-4
            img(src='@/assets/curso/tema2/img2.svg', style="width: 90px", alt='')
          p.mb-0 Actitud positiva hacia el mensaje que se quiere transmitir, asi como hacia los receptores y la misma comunicación.
      .col-10.col-md-6.col-lg-4.mb-4(data-aos="fade-down")
        .p-4.bg-c5
          figure.mb-4
            img(src='@/assets/curso/tema2/img3.svg', style="width: 90px", alt='')
          p.mb-0 Comprensión clara del contenido del mensaje.
      .col-10.col-md-6.col-lg-4.mb-4(data-aos="fade-up")
        .p-4.bg-c5
          figure.mb-4
            img(src='@/assets/curso/tema2/img4.svg', style="width: 90px", alt='')
          p.mb-0 Habilidad para codificar o convertir el contenido del mensaje en palabras comprensibles para el receptor.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c5
          figure.mb-4
            img(src='@/assets/curso/tema2/img5.svg', style="width: 90px", alt='')
          p.mb-0 Actitud positiva hacia la recepción del mensaje.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-down")
        .p-4.bg-c5
          figure.mb-4
            img(src='@/assets/curso/tema2/img6.svg', style="width: 90px", alt='')
          p.mb-0 Capacidad cultural, en relación con la naturaleza y el nivel del mensaje recibido, para poder integrarlo en contexto siéntficativo.
      .col-10.col-md-6.col-lg-4(data-aos="fade-up")
        .p-4.bg-c5
          figure.mb-4
            img(src='@/assets/curso/tema2/img7.svg', style="width: 90px", alt='')
          p.mb-0 Facilidad para descifrar el mensaje, basada en el conocimiento de los signos o símbolos a través de los cuales se va a comunicar algo.
    p.mb-5(data-aos="fade-right") A través de una comunicación efectiva y adaptativa, estas empresas navegan las complejidades del mundo empresarial, asegurando no solo su supervivencia, sino también su crecimiento. Están invitados a descubrir cómo la comunicación se convierte en el timón que guía a las organizaciones hacia el éxito en tiempos de cambio constante:
    .row
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c8.h-100
          .row.align-items-center.h-100
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img8.svg', style="width: 300px", alt='').m-auto
            .col-lg-8
              p.text-white #[b Pódcast]
              p.text-white Todo plan de comunicación externa debe estar alineado con la comunicación interna. La importancia de esta alineación radica en que permite:
              TarjetaAudio.color-primario(
                texto="Comunicación el timón del éxito organizacional"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img9.png', style="width: 450px", alt='').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
