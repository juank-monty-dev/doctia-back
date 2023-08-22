const cohere = require("cohere-ai");
cohere.init(process.env.COHERE_API_KEY);

const examples = [
  { text: 'He perdido mi acceso al portal virtual' , label: 'customer-service'},
  { text: 'Hola quisiera verificar el estado de mi suscripción.' , label: 'customer-service'},
  { text: 'Quiero cambiar mi método de pago para la suscripción.' , label: 'customer-service'},
  { text: 'He olvidado mi contraseña y no puedo acceder a mi cuenta.' , label: 'customer-service'},
  { text: 'Mi suscripción fue renovada automáticamente pero no deseaba continuarla.' , label: 'customer-service'},
  { text: '¿Cómo puedo actualizar mi plan de suscripción?' , label: 'customer-service'},
  { text: 'Necesito cancelar mi suscripción ¿cuáles son los pasos?' , label: 'customer-service'},
  { text: '¿Pueden proporcionarme una factura para mi suscripción?' , label: 'customer-service'},
  { text: 'Me gustaría cambiar mi dirección de correo electrónico asociada a la cuenta.' , label: 'customer-service'},
  { text: 'He cambiado de tarjeta de crédito ¿cómo actualizo los detalles de pago?' , label: 'customer-service'},
  { text: 'Mi suscripción caduca pronto' , label: 'customer-service'},
  { text: '¿Pueden ayudarme a configurar mi perfil en la plataforma?' , label: 'customer-service'},
  { text: 'Quiero cambiar mi plan de suscripción a uno más económico.' , label: 'customer-service'},
  { text: '¿Puedo pausar temporalmente mi suscripción?' , label: 'customer-service'},
  { text: 'Mi cuenta fue bloqueada sin previo aviso' , label: 'customer-service'},
  { text: 'He cambiado mi número de teléfono ¿cómo actualizo la información?' , label: 'customer-service'},
  { text: 'Me gustaría saber más sobre las características adicionales de mi suscripción.' , label: 'customer-service'},
  { text: 'Tengo problemas para acceder a la aplicación móvil ¿pueden ayudarme?' , label: 'customer-service'},
  { text: '¿Puedo cambiar de plan de facturación mensual a anual?' , label: 'customer-service'},
  { text: 'Mi suscripción venció pero aún estoy siendo facturado ¿qué hago?' , label: 'customer-service'},
  { text: 'Quiero agendar una cita con el doctor.' , label: 'medical-service'},
  { text: 'Me siento enfermo y necesito ver a un doctor.' , label: 'medical-service'},
  { text: 'Tengo una emergencia médica y necesito ayuda' , label: 'medical-service'},
  { text: 'Tengo una cita programada con el doctor, pero no puedo ir.' , label: 'medical-service'},
  { text: 'Me gustaría cambiar mi cita con el doctor.' , label: 'medical-service'},
  { text: 'Necesito cancelar uhna cita con el doctor.' , label: 'medical-service'},
  { text: 'Como se que especialista necesito' , label: 'medical-service'},
  { text: 'Me gustaría pedir una cita con un especialista.' , label: 'medical-service'},
  { text: 'Me gustaría obtener información sobre un procedimiento médico.' , label: 'medical-service'},
  { text: 'Me gustaría obtener información sobre una condición médica.' , label: 'medical-service'},
  { text: 'Necesito programar un procedimiento medico' , label: 'medical-service'},
  { text: 'Necesito unos exámenes de laboratorio' , label: 'medical-service'},
  { text: 'Me gustaría saber más sobre los servicios médicos que ofrece su clínica.' , label: 'medical-service'},
  { text: 'Debo programar uno exámenes médicos' , label: 'medical-service'},
  { text: 'Los resultados de mis exámenes no han llegado' , label: 'medical-service'},
  { text: 'donde puedo consultar los resultados de los examenes' , label: 'medical-service'},
  { text: 'Tengo fiebre y escalofríos y no puedo dejar de temblar' , label: 'instant-attention'},
  { text: 'No puedo dejar de estornudar y tengo la nariz congestionada' , label: 'instant-attention'},
  { text: 'Me duele la garganta cada vez que trago saliva' , label: 'instant-attention'},
  { text: 'Me siento caliente y luego frío ' , label: 'instant-attention'},
  { text: 'Tengo dolor en los ojos y me siento muy sensible a la luz' , label: 'instant-attention'},
  { text: 'No tengo apetito en absoluto la comida no me interesa' , label: 'instant-attention'},
  { text: 'Mi garganta está tan irritada que hablar se ha vuelto doloroso' , label: 'instant-attention'},
  { text: 'Estoy sudando profusamente incluso si la temperatura es baja' , label: 'instant-attention'},
  { text: 'Me duele tragar incluso líquidos simples como agua' , label: 'instant-attention'},
  { text: 'Necesito ayuda médica de inmediato estoy experimentando un intenso dolor en el pecho' , label: 'instant-attention'},
  { text: 'Por favor llamen a una ambulancia estoy teniendo dificultades para respirar' , label: 'instant-attention'},
  { text: 'Esto es urgente he tenido un accidente y estoy sangrando profusamente' , label: 'instant-attention'},
  { text: 'Estoy teniendo un fuerte dolor de cabeza junto con visión borrosa ' , label: 'instant-attention'},
  { text: 'Mi pierna está fracturada y está torcida' , label: 'instant-attention'},
  { text: 'Ayuda estoy teniendo una reacción alérgica grave mi cara está hinchada' , label: 'instant-attention'},
  { text: 'Rápido necesito ver a un médico estoy perdiendo la vista en un ojo' , label: 'instant-attention'},
  { text: ' estoy perdiendo el equilibrio y tengo dolor de cabeza' , label: 'instant-attention'},
];

const getAnswer = async (quest) => {
  const response = await cohere.classify({
    inputs: [quest],
    examples: examples,
    model: "embed-multilingual-v2.0",
  });

  return {
    prediction: response.body.classifications[0].prediction,
    labels: response.body.classifications[0].labels,
  };
};

module.exports = { getAnswer };
