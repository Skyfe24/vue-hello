console.log("JS OK");

console.log("Vue OK", Vue);


// Così si costruisce il metodo createApp
const { createApp } = Vue;

// Inizializziamo l'app Vue
const app = createApp({
  data() {
    return {
      letterainiziale: 'QUI il Testo da stampare con Vue, a destra il bonus: carica immagine con Vue',
      Imgsample: "img/christopher.jpg",
      traccia: 'inserisci il nome',
      colorClass: 'text-danger'
    }
  },
  methods: {
    
  }
})
// La monto nel mio id chiamato 'prova'
app.mount('#prova');

// Inizializziamo l'app Vue
const app2 = createApp({
  data() {
    return {
      letterainiziale: 'QUI il Testo da stampare con Vue, a destra il bonus: carica immagine con Vue',
      Imgsample: "img/christopher.jpg",
      traccia: 'inserisci il nome',
      colorClass: 'text-danger'
    }
  },
  methods: {
    
  }
})
// La monto nel mio id chiamato 'prova'
app2.mount('#grid');