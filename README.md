# Counter App (Vanilla JavaScript & CSS3)

Una semplice ed efficiente **Counter App** realizzata in **JavaScript** e **CSS3**, rifattorizzata seguendo le migliori pratiche dello sviluppo web moderno (sincronizzazione reattiva dello stato, accessibilità e prevenzione dei problemi di layout).

---

## Overview

L'applicazione gestisce un contatore numerico con valori compresi tra un minimo (`MIN_VALUE = 0`) e un massimo (`MAX_VALUE = 99`). Il valore del contatore viene salvato sul browser tramite **LocalStorage**, mantenendo lo stato anche dopo la chiusura o il ricaricamento della pagina.

---

## Caratteristiche Principali

- **Persistenza dei Dati:** Salvataggio automatico dello stato del contatore in `localStorage`.
- **Validazione e Limiti:** Limiti impostabili tramite costanti (`MIN_VALUE` e `MAX_VALUE`).
- **Accessibilità:** Disabilitazione nativa dei pulsanti (`disabled`) ai limiti per una migliore UX e compatibilità con gli screen reader.


## Guida all'Installazione e Uso

1. **Clona la repository** o scarica i file del progetto:
   ```bash
   git clone https://github.com/tuo-username/counter-app.git
   ```

2. **Assicurati che le icone siano presenti:**
   Verifica che la cartella `assets/img/` contenga i file `minus.svg`, `plus.svg` e `reset.svg`.

3. **Apri l'applicazione:**
   Non sono richieste dipendenze o server Node.js. È sufficiente aprire il file `index.html` con un qualsiasi browser moderno o utilizzare un'estensione come **Live Server** su VS Code.

---

## Tecnologie Utilizzate

- **HTML5:** Elementi semantici generati dinamicamente.
- **CSS3:** Flexbox, CSS Nesting, Transizioni ed Effetti Filtro SVG.
- **JavaScript (ES6+):** Arrow functions, `localStorage` API, manipolazione reattiva del DOM, Switch Statement.