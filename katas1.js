//Loop de 1 a 20

function oneThroughTwenty() {
  
  let array = [];
  let counter = 0;
  for (let i=1; i<=20; i++) {
      array[counter]=i;
     counter ++;
  }
  return array;
}
 
console.log(oneThroughTwenty())

//_____________________________________________________________
//Loop numeros pares de 1 a 20

function evensToTwenty() {

  let array = [];
  let counter = 0;
  for (let i=1; i<=20; i++) {
    if(i % 2 === 0) {  
    array[counter]=i;
     counter ++;
  }
}
  return array;
}
  
console.log(evensToTwenty())

//__________________________________________________________________
//Lool numeros Impares de 1 a 20
  
function numerosImpares() {
 
  let array = [];
  let counter = 0;
  for (let i=1; i<=20; i++) {
    if(i % 2 !== 0) {  
    array[counter]=i;
     counter ++;
  }
}
  return array;
}
 
console.log(numerosImpares())

//_____________________________________________________________________
//Loop numeros multiplos de 5 

function multiplesOfFive() {
   
  let array = [];
  let counter = 0;
  for (let i=1; i<=100; i++) {
    if(i % 5 === 0) {  
    array[counter]=i;
     counter ++;
  }
}
  return array;
}

console.log(multiplesOfFive())

//__________________________________________________________
//quadrados perfeitos
 function quadradosperfeitos() {

  let array = [];
  let counter = 0;
  for (let i=1; i<=100; i++) {
    let quadrado = i * i;
    if(quadrado<=100) {
       array[counter] = quadrado;
       counter++; 
    }
  }
  return array;
 }
 console.log(quadradosperfeitos())
//_____________________________________________________________
 // contagem de 20 a 1
function countingBackwards() {

  
  
    let array = [];
    let counter = 0;
    for (let i=20; i>=1; i--) {
        array[counter]=i;
       counter ++;
    }
    return array;
  }
 
console.log(countingBackwards())

//_______________________________________________________________
//numeros pares de 20 a 1

function evenNumbersBackwards() {
   
  let array = [];
  let counter = 0;
  for (let i=20; i>=1; i--) {
    if(i % 2 === 0) {  
    array[counter]=i;
     counter ++;
  }
}
  return array;
}

console.log(evenNumbersBackwards())

//___________________________________________________________________
//numeros impares de traz pra frente

 function imparesregressiva() {

  let array = [];
  let counter = 0;
  for (let i=20; i>=1; i--) {
    if(i % 2 !== 0) {  
    array[counter]=i;
     counter ++;
  }
}
  return array;
}
 
console.log(imparesregressiva())
//_____________________________________________________________________
//multiplos de 5 de traz pra frente

function multiplesOfFiveBackwards() {
   
  let array = [];
  let counter = 0;
  for (let i=100; i>=1; i--) {
    if(i % 5 === 0) {  
    array[counter]=i;
     counter ++;
  }
}
  return array;
}

console.log(multiplesOfFiveBackwards()) 
//____________________________________________________________________
//quadrados perfeitos de traz pra frente
  
function quadradosregresiva() {

  let array = [];
  let counter = 0;
  for (let i=100; i>=1; i--) {
    let quadrado = i * i;
    if(quadrado<=100) {
       array[counter] = quadrado;
       counter++; 
    }
  }
  return array;
 }
 console.log(quadradosregresiva())
