function tablelist(){

const carinfor_obj = [
    {"YEAR":"2020","CAR_NAME":"Sonata","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
    {"YEAR":"2021","CAR_NAME":"Kona","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
    {"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
    {"YEAR":"2022","CAR_NAME":"3 Series","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
    {"YEAR":"2020","CAR_NAME":"Camry","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}
  ];

  let outHtml =`<table>` ; 
  //let car_hashmap이 변수고 /carinfor_obj부터 나올예정 
  for (let  car_hashmap of carinfor_obj) {
    console.log(`YEAR: ${car_hashmap.YEAR}, CAR_NAME: ${car_hashmap.CAR_NAME}, CAR_INFOR_ID: ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
    // 동적으로 생성된 HTML 테이블 행을 추가
    outHtml += `<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
}
 outHtml += `</table>`; //테이블 닫기 </table>태그
 
  let carinfortable = document.querySelector('#carinfor'); 

  //<div id = "loops">inner text </div>
  carinfortable.innerHTML = outHtml ;
  
   
}
//tablelist(); 

//add keydown event 

 let keydownObject = document.querySelector("#keydownEnter") // common.html의 아이디를  →js로 

keydownObject.addEventListener('keydown',(event) => { //클릭시 동작하기 위한 명확한 방법
if (event.code == 'Enter'){
     console.log(`key down : ${event.code}`);
     tablelist();
 }
});


//선생님 보내주신 코드 일부 
let url = 'http://localhost:8080/selectAll/CI002';

let request = fetch(url)
  .then(response => {
    response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data)
  });
