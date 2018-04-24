const audioBoom = document.querySelector('audio[src = "sounds/boom.wav"]');
const audioClap = document.querySelector('audio[src = "sounds/clap.wav"]');
const audioHihat = document.querySelector('audio[src = "sounds/hihat.wav"]');
const audioKick = document.querySelector('audio[src = "sounds/kick.wav"]');
const audioOpenHat = document.querySelector(
  'audio[src = "sounds/openhat.wav"]'
);
const audioRide = document.querySelector('audio[src = "sounds/ride.wav"]');
const audioSnare = document.querySelector('audio[src = "sounds/snare.wav"]');
const audioTink = document.querySelector('audio[src = "sounds/tink.wav"]');
const audioTom = document.querySelector('audio[src = "sounds/tom.wav"]');

const removeFocus = (soundClass) => {
  setTimeout(() => {
    soundClass.classList.remove("focus");
  }, 300);
}

const keyPressHandler = e => {
  if (e.key.toLowerCase() === "a") {
    audioBoom.play();
    const boom = document.querySelector(".boom");
    boom.classList.add("focus");
    removeFocus(boom);
  }
  if (e.key.toLowerCase() === "s") {
    audioClap.play();
    const clap = document.querySelector(".clap");
    clap.classList.add("focus");
    removeFocus(clap);
  }
  if (e.key.toLowerCase() === "d") {
    audioHihat.play();
    const hihat = document.querySelector(".hihat");
    hihat.classList.add("focus");
    removeFocus(hihat);
  }
  if (e.key.toLowerCase() === "f") {
    audioKick.play();
    const kick = document.querySelector(".kick");
    kick.classList.add("focus");
    removeFocus(kick);    
  }
  if (e.key.toLowerCase() === "g") {
    audioOpenHat.play();
    const openHat = document.querySelector(".openhat");
    openHat.classList.add("focus");
    removeFocus(openHat);    
  }
  if (e.key.toLowerCase() === "h") {
    audioRide.play();
    const ride = document.querySelector(".ride");
    ride.classList.add("focus");
    removeFocus(ride);    
  }
  if (e.key.toLowerCase() === "j") {
    audioSnare.play();
    const snare = document.querySelector(".snare");
    snare.classList.add("focus");
    removeFocus(snare);    
  }
  if (e.key.toLowerCase() === "k") {
    audioTink.play();
    const tink = document.querySelector(".tink");
    tink.classList.add("focus");
    removeFocus(tink);    
  }
  if (e.key.toLowerCase() === "l") {
    audioTom.play();
    const tom = document.querySelector(".tom");
    tom.classList.add("focus");
    removeFocus(tom);    
  }
};

document.body.addEventListener("keydown", keyPressHandler);

console.log(document);
