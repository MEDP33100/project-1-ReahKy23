document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!

    let tlCrawl = gsap.timeline();

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

tlCrawl.to(".spider-bottom", { x: () => 520 - screenWidth, duration: 8 });
tlCrawl.to(".spider-bottom", { rotate: 20, delay: 1 });
tlCrawl.to(".spider-bottom", { y: () => -screenHeight * 0.45, duration: 5 }); 
tlCrawl.to(".spider-bottom", { rotate: 90, delay: 1 });
tlCrawl.to(".spider-bottom", { x: () => "+=" + (screenWidth * 0.15), duration: 3 }); 
tlCrawl.to(".spider-bottom", { rotate: 145, delay: 1 });
tlCrawl.to(".spider-bottom", { y: () => "+=" + (screenHeight * 0.1), duration: 2 });
tlCrawl.to("#next-page", { opacity: 1, delay: 2, duration: 5 });


    // my originnal code to try and make button start new timeline (but it wouldn't disappear after)
    // document.getElementById("next-page").addEventListener("click", function() {
    //     let tlRain = gsap.timeline(); // Create a new GSAP timeline on click
    //     tlRain.to("#next-page", {opactiy: 0, duration: 1, ease: "power2.out"});
    //     tlRain.to("#overlay2", { opacity: 1, delay: 5, duration: 1, ease: "power2.out" });
    // });

    // revision from chatgpt

    let nextButton = document.querySelector("#next-page button");
    let overlay = document.querySelector("#overlay2");
    let clickSound = document.getElementById("clickSound"); // Select audio
    let rainSound = document.getElementById("rain-sound");
    let nextPage = document.querySelector("next-page2 button");
    let birdChirp = document.getElementById("birdChirp");

    if(rainSound){
        rainSound.loop = false;
    }


    if (nextButton) {
        nextButton.addEventListener("click", function() {
            let tlRain = gsap.timeline();

            // Play the sound effect using GSAP
            tlRain.to(nextButton, {opacity: 0, duration: 0.5,ease: "power2.out",
                onStart: () => {
                    clickSound.currentTime = 0; // Reset sound to start
                    clickSound.play(); // Play sound
                    rainSound.play({delay:2, repeat: -1});
                },
                onComplete: () => {
                    nextButton.style.display = "opcaity: 0";
                }
            });

            // Start the animation (Fade in the rain overlay)
            tlRain.to(overlay, {opacity: 1, duration: 1,ease: "power2.out", delay: 2,
                onStart: ()=> {
                    tlRain.to(".spider-bottom", {y: 500, rotate: 600, duration: 5,})
                    tlRain.to("#next-page2", {opacity: 1,});
                },
            
            });
             
            
            
        });
    }

document.addEventListener("DOMContentLoaded", () => {
   const words = [
       "The Itsy-bitsy spider climbed up the water spout",
       "Down came the rain and washed the spider out",
       "Out came the sun and dried up all the rain",
       "And the itsy-bitsy spider climbed up the spout again"
   ];

   const textElement = document.querySelector(".text");
   const cursorElement = document.querySelector(".cursor");

   let wordIndex = 0;
   let letterIndex = 0;
   let isTyping = false;
   let hasStarted = false; // Tracks if the animation has started

   function typeWord(word, callback) {
       isTyping = true;
       let interval = setInterval(() => {
           textElement.textContent = word.substring(0, letterIndex + 1);
           letterIndex++;

           if (letterIndex === word.length) {
               clearInterval(interval);
               setTimeout(() => {
                   callback(); // Proceed to the next step
               }, 15000); // Pause before allowing another click
           }
       }, 100);
   }

   function deleteWord(callback) {
       let interval = setInterval(() => {
           textElement.textContent = textElement.textContent.slice(0, -1);
           if (textElement.textContent.length === 0) {
               clearInterval(interval);
               callback();
           }
       }, 50);
   }

   function handleClick() {
       if (isTyping) return; // Prevent clicking while typing

       if (!hasStarted) {
           hasStarted = true;
           gsap.to(textElement, { opacity: 1, duration: 0.5 }); // Fade in text
           typeWord(words[wordIndex], () => {
               isTyping = false;
           });
       } else {
           deleteWord(() => {
               wordIndex = (wordIndex + 1) % words.length; // Cycle through words
               letterIndex = 0;
               typeWord(words[wordIndex], () => {
                   isTyping = false;
               });
           });
       }
   }

   document.addEventListener("click", handleClick);

   // Cursor animation (blinking effect)
   gsap.to(cursorElement, {
       opacity: 0,
       duration: 0.5,
       ease: "power2.inOut",
       repeat: -1
   });
});



});
