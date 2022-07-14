'use strict';


//========================================================================================================================================================
// Переменные
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Диапазон рандома между 1 и 20
console.log(secretNumber);
let score = 10;
let highscore = 0;

const headerQuestion = document.querySelector('.header__question');
const message = document.querySelector('.game-left__message');
const number = document.querySelector('.game-right__number');
const scoreDoc = document.querySelector('.score');


// Логика

// Полное обнуление (Перезагрузка страницы)
document.querySelector('.reset').addEventListener('click', function(){
   location.reload () // - Перезагрузить страницу
});

// Обнуление (Заново). Сохраняет лучший результат
document.querySelector('.again').addEventListener('click', function(){
   document.querySelector('body').style.backgroundColor = '#505050';
   headerQuestion.style.fontSize = '40px';
   headerQuestion.textContent = '???';
   headerQuestion.style.padding = '20px 80px';
   number.value = '';
   secretNumber = (Math.trunc(Math.random() * 20) + 1);
   console.log(secretNumber);
   score = 10;
   scoreDoc.textContent = score;
   message.textContent = 'Начните угадывать!';
});

// Если поле ввода пустое
document.querySelector('.check').addEventListener('click', function () {
const guessNumber = Number(number.value);
   if (!guessNumber) {
      message.textContent = 'Введите число!';
   }

// Победа
   else if (guessNumber === secretNumber) {
      message.textContent = 'Правильно!';
      headerQuestion.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#70cc75';
      headerQuestion.style.fontSize = '40px';
      headerQuestion.style.padding = '3rem 20rem';
      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }
   } 
   // Число слишком большое, маленькое, проигрыш
   else if (guessNumber !== secretNumber){
      if (score > 1) {
         message.textContent = guessNumber > secretNumber ? 'Число слишком большое!' : 'Число слишком маленькое!';
         score--;
         scoreDoc.textContent = score;
      }
      else {
         document.querySelector('body').style.backgroundColor = '#000';
         message.textContent = 'Game Over!';
         scoreDoc.textContent = 0;
      }
   }

});


