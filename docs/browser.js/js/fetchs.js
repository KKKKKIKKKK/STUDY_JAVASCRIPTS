// 정부 데이터 포털 :대구 의료기 판매소 

function fetchDatagokr(){ //function 지정 
    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D&currentPage=1&perPage=10&SN=1';
    let request = fetch(url) //fetch(어떤 값을 url)에 신호를 보냄 
        .then((result) => {
            result.json();
        
        }) //1)fetch동작 후 return값으로.then을 실행(hashmap 뭉치가 respose.json으로 반응)
                                           //2)response 값을 result변경가능. return된 값을 파라미터로 받기 위해 지정한 것일 뿐.   
        .then((data) => { //then으로 받음. jason을 data로 받고 
            console.log(data); //data를 jason으로 출력 
        })
        .catch((errorMeg) => {    //fetch에 대한 문제시. catch하면 내부적으로 errorMeg를 출력 
            console.log(errorMeg); //errorMeg 출력. 
        });
    
    }

//자동차 정보 상세(기준)
function fetchCarInforDetail() {
    let url = 'http://127.0.0.1:8080/selectDetail/CI002'; //postman  상세 정보 링크 
    let request = fetch(url)  //fetch(어떤 값을 url)에 신호를 보냄
      .then((result) => {
        return result.json();  //1)fetch동작 후 return값으로.then을 실행(hashmap 뭉치가 respose.json으로 반응)
      })
      .then((data) => {    //then으로 받음. jason을 data로 받고 

        console.log(data);   //data를 jason으로 출력 
      })
      .catch((errorMeg) => {   //fetch에 대한 문제시. catch하면 내부적으로 errorMeg를 출력 
        console.log(errorMeg);   //errorMeg 출력. 
      });
  }
    
    //자동차 정보 업데이트 및 수정 
    function fetchCarInforUpdate(){ //function 지정 
        //192.168.0.42:8080/update
        // body - 
        //{
   
        //     "CAR_NAME": "코나",
        //     "CAR_INFOR_ID": "CAR-02"
        // }
        //heders- 
        //Content-Type: application/json
        let url = 'http://192.168.0.42:8080/update'; //postman  상세 정보 링크 
        let option = {
            method : "PUT", 
            headers : { "Content-Type" : "application/json" }, //앞 header 키 : 해쉬맵 안 value /구분자는 ,(쉼표)
            body : JSON.stringify({
                   "CAR_NAME": "요주랩",
                    "CAR_INFOR_ID": "CI002"
                })
            
        }
        let request = fetch(url) //fetch(어떤 값을 url)에 신호를 보냄 
            .then((result) => {
                return result.json();
            
            }) //1)fetch동작 후 return값으로.then을 실행(hashmap 뭉치가 respose.json으로 반응)
                                               //2)response 값을 result변경가능. return된 값을 파라미터로 받기 위해 지정한 것일 뿐.   
            .then((data) => { //then으로 받음. jason을 data로 받고 
                console.log(data); //data를 jason으로 출력 
            })
            .catch((errorMeg) => {    //fetch에 대한 문제시. catch하면 내부적으로 errorMeg를 출력 
                console.log(errorMeg); //errorMeg 출력. 
            });
        

        }