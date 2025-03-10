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
