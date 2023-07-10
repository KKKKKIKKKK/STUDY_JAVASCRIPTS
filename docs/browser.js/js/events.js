let keydownObject = document.querySelector("#keydownEnter") // common.html의 아이디를  →js로 

keydownObject.addEventListener('keydown',(event) => {
    if (event.code == 'Enter'){
        console.log(`key down : ${event.code}`);
    }
});
