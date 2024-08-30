<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la base de las relaciones dentro de una organización?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La tecnología.', esCorrecta: false },
            { id: 'b', texto: 'La comunicación.', esCorrecta: false },
            {
              id: 'c',
              texto: 'El liderazgo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué elemento es el primero en el proceso comunicativo?',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El receptor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El mensaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El emisor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El canal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué actitud debe tener el emisor para lograr una comunicación efectiva?',
          imagen: require('@/assets/curso/img3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actitud negativa hacia el mensaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actitud positiva frente al mensaje y los receptores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Indiferencia hacia la comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actitud crítica hacia el receptor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué se necesita para que exista una empresa, según el documento?',
          imagen: require('@/assets/curso/img4.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un mercado competitivo.', esCorrecta: false },
            { id: 'b', texto: 'Personal que la conforme.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Una fuerte inversión de capital.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Una marca reconocida.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el propósito principal de una carta al personal dentro de una organización?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear redes sociales internas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Difundir información importante como cambios en la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Motivar la participación en eventos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar resultados financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué permite el ámbito de formación y socialización en la comunicación organizacional?',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reforzar la cultura institucional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Divulgar boletines.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manejar las relaciones públicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Coordinar la logística empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una ventaja del uso del correo electrónico en la comunicación organizacional?',
          imagen: require('@/assets/curso/img3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rapidez e interactividad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alta seguridad en la información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicación verbal eficiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Difusión limitada de mensajes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta de gestión interna es utilizada para captar, convencer y persuadir a las personas?',
          imagen: require('@/assets/curso/img4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reuniones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Publicaciones y comunicados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Buzón de sugerencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuadernillo de bienvenida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué deben realizar las organizaciones para adaptarse a los cambios sociales y tecnológicos?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar las estructuras organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollar nuevos productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la publicidad externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de evaluación es necesaria para mantener una estructura de comunicación interna efectiva?',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación anual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluación periódica del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluación financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluación externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
