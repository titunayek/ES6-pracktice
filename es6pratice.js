const fish  = { id: 58, name: 'kalima ', price: 2211, phone: '677575759757', addrsh : 'chandur', drees: 'silver'};
// const phone = fish.phone ;
// console.log(phone);

//aktar mardhome akta variable rakha jay avabe //
const {phone ,price,drese,id} = fish;
console.log(price);
console.log(phone );


const compani = {
    name: 'gp', 
    web:{work: 'website',employee : 22, framework:'react'},
    ceo: {id: 3, name: 'ajmol',food: 'fuchka'}
    };
    console.log(compani.ceo.name);
//aktar mardhome akta variable rakha jay avabe //
    const { work, framework} = compani .web;
    console.log(work);

    //declare variable  the name of  an object property
    const myObject  = {x: 3, y: 43, z: 463, d: 65};
    const {x, z} = myObject;
    console.log(x);

    //destructuring array 
    const [p , q] = [32, 54, 65, 44];
    console.log(p,q);


    const [bast , faltu] = [234,32];
    console.log(bast );

const {sky, color} = {sky: 'blue', soil: 'math', color: 'red', money:252};
console.log(color,sky);


// map calkulation arror function diye total array dickliar kora ar ai map loop ar kaj kore dey .ar aita diye totai array jok biyok gun vag sob kora jay .

const numbers = [2, 32, 54, 22, 43];

const doubleOld = number => number *2;  // arrow function

const output = numbers.map(doubleOld);   //map 
console.log(output);


// mor map calculerasion aitar mardhome akta elemint ar koyta karektar ache seta ber kora jay 

const firends = [ 'amin', 'kholil', 'rohim', 'mamun' , 'anik'];
const flangth  = firends.map(friend => friend.length);
console.log(flangth);


// map diye array votor sob kisu khuje ber kora //
const products = [
    {namne : 'laptop', proce: '20000', color: 'block'},
    {namne : 'phone', proce: '2000', color: 'block'},
    {namne : 'watch', proce: '200', color: 'block'},
]
const productName = products.map(item => item.proce);
console.log(productName);

// products.forEach(x => console.log(x));


// filter ar kar hoilo akta array mordhe choto boro ber kora jay filter ar arrow function diye // shoto diye ar filter joto element pay sob diye dey

const numbers = [32, 43, 33, 4, 33,  33, 54, 33 ];
  const bognamber = numbers.filter(number => number > 40);
  console.log(bognamber);

  const products = [
    {namne : 'laptop', proce: '20000', color: 'block'},
    {namne : 'phone', proce: '2000', color: 'block'},
    {namne : 'watch', proce: '200', color: 'red'},
    {namne : 'watch', proce: '200', color: 'block'},
]
// const exp = products.filter(item => item.proce < 500);
// const exp = products.filter(item => item.color == 'block');
// console.log(exp);


// find ar kaj hoilo akta element ke dey 
const write = products.find(item => item.color == 'block');
console.log(write);



// class claculation

class Support {
    name ;
    designation = 'support web deb';
    address = 'bd'
    constructor (name){
        this.name = name ;
        this.address = address;
    }
    startSession (){
        console.log(this.neme, 'starat a support session');
    }
}


const aamir = new Support ('amir khan' );
const anik = new Support ('anik ray' );
// aamir.startSession();
console.log(anik);
console.log(aamir);


class StudentCare {

}



1.// templat string 
const address = ['boribari ,lalmonirhat sodor ,lalmonirhat.'];
const kemonAchis = ['how are you friend'];
const output = `amar moto ato shukhi noytu karo jibon ar ai ganti geyechen titu tar basa ${address} ar take se bolilo ${kemonAchis}`;
console.log(output);

// 2. arrow function  nwme chara variable diye function call
const add = (num1 , num2= 23) => num1 + num2 ; //defold value
const sum =add(23);
console.log(sum);
// three digit gun
const multiply = (num1 , num2, num3) => num1 * num2* num3 ;
const result = multiply(2, 4, 4);
console.log(result);
//one disit
const fiveTime = (num) => num * 5 ;
const output = fiveTime(32);
console.log(output);
// paramitar nai 
const getName = () => 'titu roy';
const names = getName();
console.log(names);




/* array maltiply */
const numbers =  [4, 5 ,8, 12, 65, 12,15];

/*prothom */
// const result = num => num *5;
// const maltiply = numbers.map(result);
// console.log(maltiply);

/*second */
const add = numbers.map(number => number * 5);
console.log(add);



const products = [
    {namne : 'laptop', proce: '20000', color: 'block'},
    {namne : 'phone', proce: '7000', color: 'block'},
    {namne : 'watch', proce: '5000', color: 'red'},
    {namne : 'watch', proce: '200', color: 'block'},
]
// const write = products.find(item => item.color == 'block');
const result = products.find(item => item.proce == 5000);
console.log(result);



