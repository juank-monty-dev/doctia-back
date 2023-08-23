const questionsRoute = [
  {
    id: "customer-service",
    description: "Creo que necesita comunicarse con servicio al cliente, en un momento alguien se contactará con Usted",
    next: "",
    apiUrl: "",
  },

  {
    id: "medical-service",
    description: "Quiere agendar un servicio médico? en un momento será contactado para coordinar todo lo necesario",
    next: "",
    apiUrl: "",
  },

  {
    id: "instant-attention",
    description: "Necesitamos más información de sus síntomas, haga click fuera de este modal para continuar",
    next: "Cuales son sus principales síntomas?",
    apiUrl: "/ans2",
  },
  {
    id: "medical-emergency",
    description: "Usted tiene una urgencia médica, precisa de atención inmediata!",
    next: "",
    apiUrl: "",
  },
  {
    id: "virtual-doctor",
    description: "Nuestro CUIDADOR DIGITAL está disponible para ayudarte",
    next: "",
    apiUrl: "",
  },
];
//TODO: adicionar opciones para nuevo end-point (urgencia / no urgencia)

const getNextQuestion = (prediction) => {
  console.log(prediction);
  const question = questionsRoute.find(
    (question) => question.id === prediction
  );
  // TODO: en el else retornar algo que no sea NULL, un objeto template
  if (question) {
    return question;
  } else {
    return null;
  }
};

module.exports = { getNextQuestion };
