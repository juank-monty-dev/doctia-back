const cohere = require("cohere-ai");
cohere.init(process.env.COHERE_API_KEY);

const examples = [
  { label: "customer-service", text: "Quiero hablar con un asesor" },
  { label: "customer-service", text: "Tengo una pregunta sin respuesta" },
  { label: "customer-service", text: "Con quien puedo hablar?" },
  {
    label: "customer-service",
    text: "Pueden proporcionarme con informacion?",
  },
  { label: "customer-service", text: "Necesito hablar con alguien " },
  {
    label: "customer-service",
    text: "Quisiera conocer mas sobre el servicio",
  },
  { label: "customer-service", text: "Dirigeme a un asesor" },
  {
    label: "customer-service",
    text: "Quiero comunicarme con servicio al cliente",
  },
  { label: "customer-service", text: "Estoy buscando asesoramiento" },
  { label: "customer-service", text: "Tengo una inquietud" },
  { label: "medical-service", text: "Quiero agendar una cita" },
  { label: "medical-service", text: "Necesito hacer uso de sus servicios" },
  { label: "medical-service", text: "Quiero ver al medico" },
  { label: "medical-service", text: "Necesito ayuda profesional" },
  { label: "medical-service", text: "Necesito reservar un servicio" },
  { label: "medical-service", text: "Quiero hacer un chequeo medico" },
  { label: "medical-service", text: "Tengo una orden de consulta" },
  { label: "medical-service", text: "No se que tengo y necesito ayuda" },
  { label: "medical-service", text: "No se que medicamento tomar" },
  { label: "medical-service", text: "Tengo una orden medica" },
  { label: "instant-attention", text: "Tengo mucho dolor " },
  { label: "instant-attention", text: "Necesito una consulta inmediata" },
  { label: "instant-attention", text: "Estoy desesperado" },
  { label: "instant-attention", text: "Necesito ayuda urgente" },
  { label: "instant-attention", text: "Tengo una herida grave" },
  { label: "instant-attention", text: "Necesito ver a un especialista" },
  { label: "instant-attention", text: "Tengo un malestar persistente" },
  { label: "instant-attention", text: "Me siento muy enfermo" },
  { label: "instant-attention", text: "Dirigime a un experto " },
  { label: "medical-service", text: "Quiero saber que medicamento tomar" },
  {
    label: "instant-attention",
    text: "Tengo un fuerte dolor y estoy asustado",
  },
  {
    label: "customer-service",
    text: "¿Puede ayudarme con un problema que tengo?\n",
  },
  {
    label: "customer-service",
    text: "Tengo una pregunta sobre mi pedido/cuenta/producto.",
  },
  {
    label: "customer-service",
    text: "Necesito asistencia con un tema y no estoy seguro/a de a quién preguntar.",
  },
  {
    label: "customer-service",
    text: "Estoy teniendo dificultades y necesito resolver un problema.",
  },
  {
    label: "customer-service",
    text: "¿Puede ponerme en contacto con el departamento de atención al cliente?\n",
  },
  {
    label: "customer-service",
    text: "Quisiera discutir un asunto y espero que puedan guiarme.",
  },
  {
    label: "customer-service",
    text: "Necesito que me guien y den instrucciones",
  },
  {
    label: "customer-service",
    text: "¿Quién puedo contactar para obtener ayuda con esto?",
  },
  {
    label: "customer-service",
    text: "Tengo un problema y me gustaría hablar con un representante.",
  },
  {
    label: "customer-service",
    text: "Necesito resolver un asunto y espero que el servicio al cliente pueda ayudarme.",
  },
  { label: "medical-service", text: "Quiero hacer una cita" },
  { label: "medical-service", text: "Quiero agendar unos de sus servicios" },
  { label: "medical-service", text: "Pueden ayudarme a coordinar una cita?" },
  {
    label: "medical-service",
    text: "Estoy interesado en reservar un servicio y quisiera saber como proceder",
  },
  {
    label: "medical-service",
    text: "Cual es su disponibilidad para el servicio",
  },
  {
    label: "medical-service",
    text: "Quier agendar una cita con su establecimiento. ¿Cuándo están disponibles?",
  },
  { label: "medical-service", text: "Cuando tienen horario libre" },
  {
    label: "medical-service",
    text: "Quiero hacer uso de algunos de sus servicios",
  },
  { label: "medical-service", text: "Necesito un servicio" },
  { label: "medical-service", text: "Que fechas estan disponibles " },
  { label: "medical-service", text: "Que medicamento necesito tomar?" },
  { label: "instant-attention", text: "Estoy experimentando sintomas graves" },
  { label: "instant-attention", text: "Tengo un dolor intenso" },
  { label: "instant-attention", text: " Mis sintomas han empeorado" },
  {
    label: "instant-attention",
    text: "Mis sintomas han cambiado rapidamente",
  },
  {
    label: "instant-attention",
    text: "Necesito atencion medica de emergencia",
  },
  {
    label: "instant-attention",
    text: "Estoy teniendo problemas para respirar",
  },
  {
    label: "instant-attention",
    text: "Tengo una herida profunda y requiero ayuda",
  },
  { label: "instant-attention", text: "Quiero la opinion de un experto" },
  { label: "instant-attention", text: "Estoy muy mal, no se que hacer " },
  { label: "instant-attention", text: "Mi condicion no esta mejorando" },
  {
    label: "medical-service",
    text: "Quisiera saber cuales son los sintomas de una enfermedad",
  },
  {
    label: "medical-service",
    text: "Como puedo saber los sintomas de cierta enfermedad?",
  },
  { label: "medical-service", text: "Como se que tipo de malestar tengo?" },
  { label: "instant-attention", text: "Siento que me voy a morir" },
  { label: "instant-attention", text: "Necesito ir al hospital urgente" },
  { label: "customer-service", text: "Tengo dudas sobre mi cuenta" },
  {
    label: "customer-service",
    text: "Tengo preguntas acerca de mi subscripcion",
  },
];

const getFirstAnswer = async (question) => {
  const response = await cohere.classify({
    model: "embed-multilingual-v2.0",
    inputs: [question],

    examples: examples,
  });

  return {
    prediction: response.body.classifications[0].prediction,
    labels: response.body.classifications[0].labels,
  };
};

module.exports = { getFirstAnswer };
