console.log("JS OK");

console.log("Vue OK", Vue);


// Così si costruisce il metodo createApp
const { createApp } = Vue;

// Inizializziamo l'app Vue

const app = createApp({
  data() {
    return {
      letterainiziale: 'ffffffffffffff',
      Imgsample: <img src = "christopher.jpg"></img>

    }
  },
  methods: {
    
  }
})
// La monto nel mio id chiamato 'prova'
app.mount('#prova');