function playAudio(e){
// console.log(e.keyCode);
let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
// console.log(audio);
// console.log(key)
if(!audio){
    return;
}
audio.currentTime=0;
audio.play();
key.classList.add('play');
}

function removeTransition(e){
    // console.log(e);
    // console.log(e.propertyName);
    if(e.propertyName!=='transform')
    return;
    
    // console.log(this);
    this.classList.remove('play');
}


document.addEventListener('DOMContentLoaded',function(){



window.addEventListener('keydown',playAudio);


const keys=document.querySelectorAll(`.key`);
// console.log(keys);

keys.forEach((key)=>{
key.addEventListener('transitionend',removeTransition);
})

})