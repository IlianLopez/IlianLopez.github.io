//Imperativa
const hola = "pedro";
const decirHola =()=>{
    //console.log(`Hi ${hola}`);
}
//decirHola();

//const dHi=(name)=>`Hi ${hola}`;

//console.log( dHi("jose") );

const sum = (a,b) => a + b;
const sum2 = (a,b) => a - b;

//let cachar= sum(2,2); 
const suma= (a,b,rrrr) =>rrrr(a,b);
console.log(suma(2,2,sum2));