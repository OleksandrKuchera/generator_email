
const express = require('express');
const app = express();

app.use(express.json());

app.get('/generate-emails', function(req, res) {
  const {count, numberString, allowRandom,firstName,lastName,separator,allowNumbers,domen} = req.body
  const emails = generateEmails(count,numberString, allowRandom, firstName, lastName, separator, allowNumbers, domen);
  res.json(emails);

function generateEmails(count,numberString, allowRandom, firstName, lastName, separator, allowNumbers, domen) {
  const emails = [];

  for (let i = 0; i < count && i <= 20; i++) {
    let email = '';
    let separators = ''

    if(separator == '.' || separator == '_'){
      separators += separator
    }else if (separator == ''){
      separators += ''
    }else if(separator !== '' || separator !== '.' || separator !== '_'){
      separators += '.'
    }

    //Якщо є просто Ім'я та прізвище
    if (firstName && lastName) {
      email += firstName.toLowerCase() + separators + lastName.toLowerCase(); 
    }

    //якщо нема ім'я та прізвища і вкл рандомна генерація 
    if (allowRandom == true && !firstName && !lastName){
      email += generateRandomString(numberString);
    }

    //якщо є ім'я та прізвища і вкл рандомна генерація 
    if ((firstName && lastName) && allowRandom){
      email += separators + generateRandomString(numberString);
    }

    //якщо є ім'я та рандом
    if(firstName && allowRandom && lastName == '') {
      email += firstName +separators + generateRandomString(numberString);
    }

    //якщо є прізвище та рандом
    if(lastName && allowRandom  && firstName == '') {
      email += lastName +separators + generateRandomString(numberString);
    }

    // якщо є тільки ім'я та цифри
    if(allowRandom && firstName == '' && allowNumbers){
      email += lastName;
    }
    
    // якщо є тільки прізвище та цифри
    if(allowRandom == false && lastName == '' && allowNumbers == true){
      email += firstName;
    }

    //якщо ні числа ні рандому нема, лиш ім'я i прізвище
    if(allowRandom == false && allowNumbers == false && firstName && lastName){
      const dotPosition = Math.floor(Math.random() * (firstName.length + 1)); 
      email = `${firstName.toLowerCase().slice(0, dotPosition)}${separators}${firstName.toLowerCase().slice(dotPosition)}${lastName.toLowerCase().slice(0, dotPosition)}${separators}${lastName.toLowerCase().slice(dotPosition)}${i}`;
    }

    //якщо ні числа ні рандому нема, лиш ім'я
    if(allowRandom == false && allowNumbers == false && !lastName && firstName){
      email += `${firstName}${separators}${generateRandomString(numberString)}${i}`;
    }
    
    //якщо ні числа ні рандому нема, лиш прізвище
    if(allowRandom == false && allowNumbers == false && !firstName && lastName){
      email += `${lastName}${separators}${generateRandomString(numberString)}${i}`;
    }
    
    //добавлення числа 
    if (allowNumbers) {
      const randomNumber = Math.floor(Math.random() * 100);
      email += randomNumber;
    }


    //Добавлення домену
    if((allowRandom || firstName || lastName || allowNumbers) && !(numberString === 0 && !firstName && !lastName)){
      if(!(domen)){
        let emailName = ['@zenithmail','@nectarmail','@oceanicmail','@luminomail','@galaxymail','@orbitmail','@veritasmail','@quasarmail','@voyagermail','@celestialmail','@crimsonmail','@sapphiremail','@embermail','@jademail','@azuremail','@topazmail','@rubywave','@amethystmail','@silvermail','@goldmail'];
        let emailDomen = ['.ua','.ukd','.com','.net','.org','.ppshop'] 
        const randomEmailName= Math.floor(Math.random() * emailName.length);
        const randomDomen = Math.floor(Math.random() * emailDomen.length);
        email +=emailName[randomEmailName]+ emailDomen[randomDomen];
      } else if(domen.indexOf('@') !== -1){
        email += `${domen}`;
   }else{
    email += `@${domen}`;
   }
    emails.push(email);
  }
}
  return emails;
}

function generateRandomString(numberString) {
  let string = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < numberString; i++) {
    const randomChar = Math.floor(Math.random() * alphabet.length);
    string += alphabet[randomChar];
  }
  return string;
}
});



app.listen(5000, function() {
  console.log('Сервер запущено на порту 3000');
});
