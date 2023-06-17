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
      colorClass: 'text-danger',
      NomeeCognome: 'Erminio Cicchetti'
    }
  },
  methods: {
    welcome() {
      alert(`Un signore entra in un negozio di abbigliamento e chiede al commesso:

      “Buongiorno, vorrei una camicia”.
      
      “Certamente signore, come la preferisce?”.
      
      “La vorrei da boscaiolo”.
      
      “Che taglia?”.
      
      “Alberi”.`)
    },

    lol() {
      alert(`Un gatto decide di mangiarsi un topo che gira nei paraggi da diversi giorni. 
      Si nasconde dietro una porta e comincia a fare: “Bau, bau, bau!”. Il topolino sente e,
       convinto che dietro la porta ci sia un cane, esce dalla tana senza preoccuparsi.
        Il gatto allora se lo mangia in un boccone. “Ma come hai fatto????” chiede allora
         la gatta al marito. “Eh, cara mia, oggi se non parli almeno due lingue sei spacciato…”.`)
    },















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