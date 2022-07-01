console.log("asdasd");
//slider home

window.addEventListener("load", function(){//load het moi chay js
    let slider = document.querySelector(".slider");//select th con dau tien
    let sliderMain = document.querySelector(".slider__main");
    let left = document.querySelector(".left");//nut left
    let right = document.querySelector(".right");//nut right
    let sliderItem = document.querySelectorAll(".item");//chon het th con
    let sliderItemWidth =sliderItem[0].offsetWidth;
    // console.log("sliderItemWidth", sliderItemWidth);
    let sliderLength = sliderItem.length;
    let posX = 0; //vi tri theo chiu ngang
    let index = 0;
    left.addEventListener("click", function(){//click img left 
        clickSlide(-1);
    });
    right.addEventListener("click", function(){
        clickSlide(1);
    });

    function clickSlide(dir){ 
        if (dir === 1){
            if (index >= sliderLength - 1){
                index = sliderLength -1;
                return;
            }
            posX = posX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${posX}px)`;
            index++;
            console.log("right", posX);
            console.log(index);
        }
        else if(dir === -1){
            if (index <= 0 ){
                index = 0;
                return;
            }
            console.log(index);
            posX = posX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${posX}px)`;
            index--;
            console.log("prev", posX);
            console.log(index);
        }
    }
    // autoSlide();
    // function autoSlide(){
    //     let thoiGian = setInterval(function(){
    //         let autoSlide = document.querySelector('.slider__main .active--slide');
    //         let posSlide = 0;
    //         for (let i = 0; autoSlide = autoSlide.previousElementSibling; posSlide++){
    //         }
    //         for(var i = 0; i < sliderItem.length; i++){
    //             sliderItem[i].classList.remove('active--slide'); // xoa class active-slide ra khoi item slide
    //         }
    //         if(posSlide == sliderItem.length-1){
    //             sliderItem[0].classList.add('active--slide'); //sau khi tự động chuyển đến slide cuối cùng nó quay lại thằng 0
    //         }
    //         else{
    //             sliderItem[posSlide].nextElementSibling.classList.add('active--slide');// chuyen class active qua thang tiep theo -> thang tiep theo nahy ra
    //         }
    //     },2000);
    // }
    // console.log(autoSlide);


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
    
    //   function setValidateFormEvent() {
    //     const signBtn = document.getElementsByClassName("button")[0];
    //     console.log(signBtn);
    //     signBtn.addEventListener("click", function () {
    //     //   // Hãy viết code của bạn ở đây ...
      
    //     //   // buoc 1: lay the input cua email
    //     //   // buoc 2: lay gia tri khi nhap vao
    //     //   // buoc 3: goi ham kiem tra email
    //     //   // buoc 4: xu li khi ham kiem tra tra true hoac false
          
    //     //   let inputs = document.getElementsByTagName("input");
    //     //   let email = inputs[0];
    //     //   let emailValue = email.value;
    //     //   let ketQuaKiemTraEmail = validateEmail(emailValue);
    //     //   let thongBaoLoiEmail = document.getElementById("err-email");
    //     //   if (ketQuaKiemTraEmail === true) {
    //     //     thongBaoLoiEmail.innerHTML = "<span style='color: green'>Email hợp lệ</span>";
    //     //   }
    //     //   else {
    //     //     thongBaoLoiEmail.innerHTML = "Email chưa đúng";
    //     //   }
    //         function validateEmail(){
    //             let form = document.getElementById('news--email');
    //             console.log(form);
    //             let email = document.getElementsByClassName(".email").value;
    //             console.log(email);
    //             let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //             let err = document.getElementById('err-email');
    //             if(email.match(pattern)){
    //                 form.classList.add("valid");
    //                 form.classList.remove("invalid");
    //                 err.innerHTML ="adasda";
    //             }
    //             else{
    //                 form.classList.add("invalid");
    //                 form.classList.remove("valid");
    //                 err.innerHTML ="zxdzxdzxdzxdzx";
    //             }
    //         };
    //     });
      
    //   }
    //   setValidateFormEvent();
    // // console.log(kiemTraEmail);

})