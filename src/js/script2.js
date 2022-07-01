console.log("sadas");
//slider home

window.addEventListener("load", function(){//load het moi chay js

    //testimonial
    let dotTest = document.querySelectorAll(".dot--item");
    let testItem = document.querySelectorAll(".test__main >.item");
    let testItemWidth = testItem[0].offsetWidth;
    let testMain = document.querySelector(".test__main");
    console.log(testItemWidth);
    console.log(testItem);
    [...dotTest].forEach(item => item.addEventListener("click", function(e){// tao vong lap cho mang i co event click
        let testIndex = parseInt(e.target.dataset.index);//lay data index ttong mang
        [...dotTest].forEach(el => el.classList.remove("test--active"));
        e.target.classList.add("test--active");
        // console.log(testIndex);
        index = testIndex; // cho cai index bang cai dataindex li
        // console.log(index);
        testMain.style =`transform: translateX(${-1 * index * testItemWidth}px)`;
    } ));
    //counter
    let counters = document.querySelectorAll(".counter");
    console.log(counters)
    counters.forEach((counter) =>{
        counter.innerText = '0';//sua content  = 0 cho tat ca cac class counter

        let updateCounter = () =>{
            let target = Number(counter.getAttribute("data-target"));//lay attri tu dat  data-target, ep ve number
            console.log(typeof target, target);// kiem tra kieu du lieu
            let dem = Number(counter.innerText);
            console.log("dem",dem);
            let tang = target / 500;
            console.log("tang",tang);
            if ( dem< target){
                counter.innerText  = `${Math.ceil(dem + tang)}`;
                setTimeout(updateCounter, 0.25);
            }
        };
        updateCounter();
    });


    //partner
    let dotPartner = document.querySelectorAll(".dot--partner");
    let partnerItem = document.querySelectorAll(".partner__main > .item");
    let partnerItemWidth = partnerItem[0].offsetWidth;
    let partnerMain = document.querySelector(".partner__main");
    // console.log(partnerItemWidth);
    // console.log(partnerItem);
    [...dotPartner].forEach(item =>item.addEventListener("click", function(e){
        let partnerIndex = parseInt(e.target.dataset.index);
        // console.log(partnerIndex);
        [...dotPartner].forEach(el => el.classList.remove("partner--active"));
        e.target.classList.add("partner--active");
        index = partnerIndex;
        console.log(index);
        partnerMain.style = `transform: translateX(${-1 * index * partnerItemWidth}px)`
    }));

    //kiemtra email
    function validateEmail(email) {
        let count = 0;
        for (let i = 0; i < email.length; i++) {
          if (email[i] == "@") count++;
        }
        return count == 1;
      }
    function kiemTraEmail(){
        const subBtn = document.getElementsByClassName("button")[0];
        console.log(subBtn);// k the console
        subBtn.addEventListener("click", function(){
            let inputs = document.getElementsByTagName("input")
            let email = inputs[0];
            // let email = document.getElementsByClassName("email");
            console.log(email);
            let emailValue = email.value;
            let ketQuaKT = validateEmail(emailValue);
            if(ketQuaKT === true){
                window.alert("Dang ki thanh cong");
            }
            else{
                window.alert("Email chua dung");
            }
        });
    }
    kiemTraEmail();

   
})