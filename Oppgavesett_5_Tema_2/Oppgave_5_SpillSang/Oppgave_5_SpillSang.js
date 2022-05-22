function spillTone(start, frekvens, varighet) {
    const ac = new AudioContext();
    const osc = ac.createOscillator();
    osc.connect(ac.destination);
    
    osc.frequency.value = frekvens;
    
    osc.start(start);
    osc.stop(start + varighet);
}

const toner = [
  {start: 1, frekvens: 523.25, varighet: 0.4},  
  {start: 1.5, frekvens: 587.33, varighet: 0.4},  
  {start: 2.0, frekvens: 659.26, varighet: 0.4},  
  {start: 2.5, frekvens: 698.46, varighet: 0.4},  
  {start: 3.0, frekvens: 783.99, varighet: 0.6},  
  {start: 3.7, frekvens: 783.99, varighet: 0.6},  
  {start: 4.4, frekvens: 880, varighet: 0.4},  
  {start: 4.9, frekvens: 880, varighet: 0.4},  
  {start: 5.4, frekvens: 880, varighet: 0.4},  
  {start: 5.9, frekvens: 880, varighet: 0.4},  
  {start: 6.4, frekvens: 783.99, varighet: 0.4},  
];

function spillSang() {
    for(const tone of toner) {
        spillTone(tone.start, tone.frekvens, tone.varighet);
    }
}

document.onclick = spillSang;