const questionsRoute = [
  {
    id: "customer-service",
    description: "servicio al cliente",
    next: "",
    apiUrl: "",
  },

  {
    id: "medical-service",
    description: "agendar servicio médico",
    next: "",
    apiUrl: "",
  },

  {
    id: "instant-attention",
    description: "consulta médica inmediata",
    next: "Cuéntanos tus 3 principales síntomas",
    apiUrl: "/ans2",
  },
  {
    id: "medical-emergency",
    description: "Urgencia médica, precisa de atención inmediata!",
    next: "",
    apiUrl: "",
  },
  {
    id: "virtual-doctor",
    description: "Vas a ser remitido a nuestro cuidador digital",
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
