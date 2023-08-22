const cohere = require("cohere-ai");
cohere.init(process.env.COHERE_API_KEY);

const examples = [
  {
    text: "Me siento enfermo y necesito ver a un doctor",
    label: "virtual-doctor",
  },
  {
    text: "Tengo una emergencia médica y necesito ayuda",
    label: "medical-emergency",
  },
  {
    text: "Tengo fiebre y escalofríos y no puedo dejar de temblar",
    label: "virtual-doctor",
  },
  {
    text: "No puedo dejar de estornudar y tengo la nariz congestionada",
    label: "virtual-doctor",
  },
  {
    text: "Me duele la garganta cada vez que trago saliva",
    label: "virtual-doctor",
  },
  { text: "Me siento caliente y luego frío ", label: "virtual-doctor" },
  {
    text: "Tengo dolor en los ojos y me siento muy sensible a la luz",
    label: "virtual-doctor",
  },
  {
    text: "No tengo apetito en absoluto la comida no me interesa",
    label: "virtual-doctor",
  },
  {
    text: "Mi garganta está tan irritada que hablar se ha vuelto doloroso",
    label: "virtual-doctor",
  },
  {
    text: "Estoy sudando profusamente incluso si la temperatura es baja",
    label: "virtual-doctor",
  },
  {
    text: "Me duele tragar incluso líquidos simples como agua",
    label: "virtual-doctor",
  },
  {
    text: "Necesito ayuda médica de inmediato estoy experimentando un intenso dolor en el pecho",
    label: "medical-emergency",
  },
  {
    text: "Por favor llamen a una ambulancia estoy teniendo dificultades para respirar",
    label: "medical-emergency",
  },
  {
    text: "Esto es urgente he tenido un accidente y estoy sangrando profusamente",
    label: "medical-emergency",
  },
  {
    text: "Estoy teniendo un fuerte dolor de cabeza junto con visión borrosa ",
    label: "medical-emergency",
  },
  {
    text: "Mi pierna está fracturada y está torcida",
    label: "medical-emergency",
  },
  {
    text: "Ayuda estoy teniendo una reacción alérgica grave mi cara está hinchada",
    label: "medical-emergency",
  },
  {
    text: "Rápido necesito ver a un médico estoy perdiendo la vista en un ojo",
    label: "medical-emergency",
  },
  {
    text: " estoy perdiendo el equilibrio y tengo dolor de cabeza",
    label: "medical-emergency",
  },
  { text: "Tengo mucho dolor en el torax", label: "medical-emergency" },
  { text: "dolor en el pecho", label: "medical-emergency" },
  { text: "siento taticardia", label: "medical-emergency" },
  { text: "siento mareos al pararme ", label: "medical-emergency" },
  { text: "Mareos al caminar", label: "medical-emergency" },
  { text: "Vomito sangre", label: "medical-emergency" },
  { text: "Necesito una consulta inmediata", label: "virtual-doctor" },
  { text: "Estoy desesperado", label: "medical-emergency" },
  { text: "Necesito ayuda urgente", label: "medical-emergency" },
  { text: "Tengo una herida grave", label: "medical-emergency" },
  { text: "Necesito ver a un especialista", label: "medical-emergency" },
  { text: "Tengo un malestar persistente", label: "medical-emergency" },
  { text: "Me siento muy enfermo", label: "medical-emergency" },
  { text: "Dirigime a un experto ", label: "virtual-doctor" },
  { text: "Quiero saber que medicamento tomar", label: "virtual-doctor" },
  { text: "Quiero hacer una cita", label: "medical-emergency" },
  { text: "Quiero agendar unos de sus servicios", label: "medical-emergency" },
  { text: "Pueden ayudarme a coordinar una cita?", label: "medical-emergency" },
  { text: "Necesito un servicio", label: "medical-emergency" },
  { text: "Que fechas estan disponibles ", label: "medical-emergency" },
  { text: "Que medicamento necesito tomar?", label: "virtual-doctor" },
  { text: "Estoy experimentando sintomas graves", label: "medical-emergency" },
  { text: "Tengo un dolor intenso", label: "medical-emergency" },
  { text: " Mis sintomas han empeorado", label: "medical-emergency" },
  { text: "Mis sintomas han cambiado rapidamente", label: "medical-emergency" },
  {
    text: "Necesito atencion medica de emergencia",
    label: "medical-emergency",
  },
  {
    text: "Estoy teniendo problemas para respirar",
    label: "medical-emergency",
  },
  {
    text: "Tengo una herida profunda y requiero ayuda",
    label: "medical-emergency",
  },
  { text: "Quiero la opinion de un experto", label: "virtual-doctor" },
  { text: "Estoy muy mal, no se que hacer ", label: "medical-emergency" },
  { text: "Mi condicion no esta mejorando", label: "virtual-doctor" },
  {
    text: "Quisiera saber cuales son los sintomas de una enfermedad",
    label: "virtual-doctor",
  },
  {
    text: "Como puedo saber los sintomas de cierta enfermedad?",
    label: "medical-emergency",
  },
  { text: "Necesito ir al hospital urgente", label: "medical-emergency" },
];

const getInstantAttentionAnswer = async (question) => {
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

module.exports = { getInstantAttentionAnswer };
