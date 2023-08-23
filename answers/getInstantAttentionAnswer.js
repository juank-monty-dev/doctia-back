const cohere = require("cohere-ai");
cohere.init(process.env.COHERE_API_KEY);

const examples = [
  { text: 'Me siento enfermo y necesito ver a un doctor.' , label: 'virtual-doctor'},
{ text: 'Tengo una emergencia médica y necesito ayuda' , label: 'medical-emergency'},
{ text: 'Tengo fiebre y escalofríos y no puedo dejar de temblar' , label: 'virtual-doctor'},
{ text: 'No puedo dejar de estornudar y tengo la nariz congestionada' , label: 'virtual-doctor'},
{ text: 'Me duele la garganta cada vez que trago saliva' , label: 'virtual-doctor'},
{ text: 'Me siento caliente y luego frío ' , label: 'virtual-doctor'},
{ text: 'Tengo dolor en los ojos y me siento muy sensible a la luz' , label: 'virtual-doctor'},
{ text: 'No tengo apetito en absoluto la comida no me interesa' , label: 'virtual-doctor'},
{ text: 'Mi garganta está tan irritada que hablar se ha vuelto doloroso' , label: 'virtual-doctor'},
{ text: 'Estoy sudando profusamente incluso si la temperatura es baja' , label: 'virtual-doctor'},
{ text: 'Me duele tragar incluso líquidos simples como agua' , label: 'virtual-doctor'},
{ text: ' intenso dolor en el pecho' , label: 'medical-emergency'},
{ text: 'tengo dificultades para respirar' , label: 'medical-emergency'},
{ text: 'estoy sangrando profundamente' , label: 'medical-emergency'},
{ text: 'Esto es urgente he tenido un accidente ' , label: 'medical-emergency'},
{ text: 'Estoy teniendo un fuerte dolor de cabeza junto con visión borrosa ' , label: 'medical-emergency'},
{ text: 'Mi pierna está fracturada y está torcida' , label: 'medical-emergency'},
{ text: 'Ayuda estoy teniendo una reacción alérgica grave mi cara está hinchada' , label: 'medical-emergency'},
{ text: ' estoy perdiendo la vista en un ojo' , label: 'medical-emergency'},
{ text: ' estoy perdiendo el equilibrio y tengo dolor de cabeza' , label: 'medical-emergency'},
{ text: 'Tengo mucho dolor en el torax' , label: 'medical-emergency'},
{ text: 'dolor en el pecho' , label: 'medical-emergency'},
{ text: 'siento taticardia' , label: 'medical-emergency'},
{ text: 'siento mareos al pararme ' , label: 'medical-emergency'},
{ text: 'Mareos al caminar' , label: 'medical-emergency'},
{ text: 'Vomito sangre' , label: 'medical-emergency'},
{ text: 'Tengo una herida que no para de sangrar' , label: 'medical-emergency'},
{ text: 'Necesito ver a un especialista' , label: 'medical-emergency'},
{ text: 'Tengo un malestar persistente' , label: 'medical-emergency'},
{ text: 'Estoy experimentando sintomas graves' , label: 'medical-emergency'},
{ text: 'Tengo un dolor intenso en la espalda al moverme' , label: 'virtual-doctor'},
{ text: ' Mis sintomas han empeorado' , label: 'medical-emergency'},
{ text: 'no siento los pies' , label: 'medical-emergency'},
{ text: 'Estoy teniendo problemas para respirar' , label: 'medical-emergency'},
{ text: 'Tengo una herida profunda ' , label: 'medical-emergency'},
{ text: 'Quisiera saber cuales son los sintomas de una enfermedad' , label: 'virtual-doctor'},
{ text: 'congestion nasal' , label: 'virtual-doctor'},
{ text: 'tengo tos seca' , label: 'virtual-doctor'},
{ text: 'estornudo muy seguido' , label: 'virtual-doctor'},
{ text: 'me arde la garganta' , label: 'virtual-doctor'},
{ text: 'tengo fiebre y toz' , label: 'virtual-doctor'},
{ text: 'tengo dolor de muela' , label: 'virtual-doctor'},
{ text: 'me dule un diente' , label: 'virtual-doctor'},
{ text: 'estoy insolado y me arde la piel' , label: 'virtual-doctor'},
{ text: 'sudo demasiado' , label: 'virtual-doctor'},
]

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
