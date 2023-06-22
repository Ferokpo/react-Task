export const task = [
  {
    id: 0,
    title: "Economia",
    desc: "tarena numero 1",
  },
  {
    id: 1,
    title: "Historiador",
    desc: "tarena numero 2",
  },
  {
    id: 2,
    title: "Religion",
    desc: "tarena numero 3",
  },
  {
    id: 3,
    title: "Universo",
    desc: "tarena numero 4",
  },
  
];






const hacerTarea = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Podría ser false en caso de error
      if (exito) {
        resolve("¡Tarea completada con éxito!");
      } else {
        reject("¡Oops! Algo salió mal...");
      }
    }, 2000); // Simulamos una tarea que demora 2 segundos
  });
};

hacerTarea()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });


  