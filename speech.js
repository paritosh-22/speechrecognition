// // console.log(window.SpeechRecognition);
// window.SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.interimResults = true;
// const p = document.createElement('p');
// const words = document.querySelector('.words');
// words.appendChild(p);
// console.log(p);
// recognition.addEventListener('result', e=>{
//     console.log(e.result);
//     let transcript =[...e.result].map(result=> result[0]).map(result.transcript).join('')
//     console.log(transcript);
//     p.innerHTML= transcript;
// });
// recognition.start();
// console.log(recognition);


window.SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
 const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  const p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

// events
recognition.addEventListener('result',(e) => {
    console.log(e.results);
    const transcript = [...e.results].map(result => result[0])
    .map(result => result.transcript).join(" ");
    p.innerHTML = transcript;
    if (e.results[0].isFinal){
        P = document.createElement('p');
        words.appendChild(p);
        p.textContent = transcript;
    }

});
recognition.addEventListener('end', recognition.start);
recognition.start();
