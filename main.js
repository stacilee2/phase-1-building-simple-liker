// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded")

  const err = document.getElementById("modal")
  err.className = "hidden"

})
  
const hearts = document.querySelectorAll(".like-glyph")
console.log(hearts)

hearts.forEach (heart => {
  console.log(heart.innerText)
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.classList.add("activated-heart");
      }
      else if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART
        heart.classList.remove("activated-heart");
      }
    })
    .catch(() => {
      const err = document.getElementById("modal")
      console.log(err)
      
      err.className = ""

      function removeErr() {
        err.className = "hidden"
      }
      setTimeout(removeErr, 3000)
    })
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

