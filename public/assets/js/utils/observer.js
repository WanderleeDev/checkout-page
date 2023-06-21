function observerMutation(observerTarget) {
  //identifica el objetivo a observar
  const target = document.querySelectorAll(observerTarget);
  let isObserving = true;

  //Crea la instancia de MutationObserver
  const observer = new MutationObserver((mutations)=>{
    mutations.forEach(() => {
      const boxEvent = document.querySelector(".card-productNumber").textContent;
      const counter = parseInt(boxEvent);
      console.log(boxEvent);

      if (isObserving) {
        if (counter === 10 || counter === 0){
          isObserving = false;
          //detiene la observación
          observer.disconnect();
          console.log('no');
        }
      }else{
        if (counter !== 10 && counter !== 0) {
          isObserving = true;
          //Reactiva la observación
          observerMutation(observerTarget);
          console.log('si');
        }
      }
      
    });
  });

  //configuración del observer
  const config = {
    childList: true, // incluye en la observación también a los nodos hijo
    characterData: true, // observar cambios ebn el contenido
    subtree: true
  };

  //llamado al observer con su método observe que recibe 2 parámetros el objetivo y la configuración de la observación
  target.forEach((t)=>{
    observer.observe(t, config);
  });
}

export default observerMutation