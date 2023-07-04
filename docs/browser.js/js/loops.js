// string - string 
// 숫자 - Number
// ArrayList = Array []- 대괄호 이용 
// HashMap =   Object{}- 중괄호 이용 

//1) 동물들의 모임 animals은 class가 됨.
// let animals = ["dog", "cat", "bird", "fish", "lizard"];

// console.log(`Done`); // 실행됐는지 확인하기 위해. 7번라인 class가 형성됐다는 말.  

// for(let i =0; i<animals.length; i= i+1){
//     console.log(`${i+1} : ${animals[i]}`);
// }

// //<for each> animal 한칸씩 튀어나오도록 하고. 앞에 let animal 변수 선언 
// // for (String animal:  animals) {
// for (let animal of animals) {
//      console.log(`${animal}`);
// }`

const animals_obj = [ //carinfor 정보로 바꿔지고 
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];


let outHtml =`` ; 
//let animal_hashmap이 변수고 /name dog부터 나올예정 
for (let animal_hashmap of animals_obj ) {
      console.log(`name : ${animal_hashmap.name},species: ${animal_hashmap['species']}`); //.name하면 나옴 
      outHtml = `${outHtml} <div> name : ${animal_hashmap.name}, species:${animal_hashmap['species']}</div>`; //.name하면 나옴 
    } //div를 <tr><td>로 바껴짐 
console.log(outHtml);

//brower 자원중에 docs 
//특정한 것을 콕 찍으면 그 div 자원 전체를 가져올 수 있다. 
//loops.js는  commons.html에서  innertext를 담고있다. 
let loops_source = document.querySelector('#loops'); 

//loops_source
//<div id = "loops">inner text </div>
loops_source.innerHTML = outHtml

