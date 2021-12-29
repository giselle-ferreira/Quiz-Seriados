//displaying the first block of question
document.getElementsByClassName('quiz-container')[0].style.display = 'block'

//Defining the 'next' function
function next(id) {
  document.getElementsByClassName('quiz-container')[id - 1].style.display =
    'none'
  document.getElementsByClassName('quiz-container')[id].style.display = 'block'
}

//Function 'Result'
function final() {
  var score = 0

  if (document.getElementById('correct1').checked) {
    score++
  }
  if (document.getElementById('correct2').checked) {
    score++
  }
  if (document.getElementById('correct3').checked) {
    score++
  }
  if (document.getElementById('correct4').checked) {
    score++
  }
  if (document.getElementById('correct5').checked) {
    score++
  }
  if (document.getElementById('correct6').checked) {
    score++
  }
  if (document.getElementById('correct7').checked) {
    score++
  }
  if (document.getElementById('correct8').checked) {
    score++
  }

  // Condition for the final message on the modal
  if (score >= 5) {
    var result = `Parabéns! Você acertou ${score} de um total de 8 perguntas!`
    document.getElementById('myModal').innerHTML = result
  } else {
    var result = `Você assiste poucas séries, não? Você acertou apenas ${score} de um total de 8 perguntas!`
    document.getElementById('myModal').innerHTML = result
  }
}
