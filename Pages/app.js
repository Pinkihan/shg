/*document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

document.onkeydown=function(e){
  if (event.keyCode == 123){
    return false;
  }

  if(e.ctrlKey && e.shiftKey  && e.keyCode == "I".charCodeAt(0)){
    return false;
  }

  if(e.ctrlKey && e.shiftKey  && e.keyCode == "C".charCodeAt(0)){
    return false;
  }

  if(e.ctrlKey && e.shiftKey  && e.keyCode == "J".charCodeAt(0)){
    return false;
  }

  if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
    return false;
  }
}*/





const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu-list");
    const menuBtn = document.querySelector(".menu-btnn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const links = document.querySelector(".shop-links");
    const menuHome = document.querySelector(".forR1")
    const menuMenu = document.querySelector(".forR2")
    const menuGallery = document.querySelector(".forR3")
    const miniLinks=document.querySelector(".shop-links")
  



    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      miniLinks.classList.add("itago");
      body.classList.add("disabledScroll");


    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
 
    }

    menuHome.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    menuGallery.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    menuMenu.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
      miniLinks.classList.add("iparang");
      
    }



    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
      this.scrollY > 20 ? links.classList.add("stickie") : links.classList.remove("stickie");
  
    }


    var counter = 1;
    setInterval(function(){
      document.getElementById('radiod' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);


window.addEventListener('scroll',()=>{
  const scrolled = window.scrollY;
  const tago = document.querySelector('.slider')

  if(scrolled >= 700){
tago.classList.add('tago')
  }else{
    tago.classList.remove('tago')
  }
})


    const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "featured";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}



var mixer = mixitup('.consts');


const btn = document.querySelector('.read-more-btn')
    const text = document.querySelector('.card_read-more')
    const cardHolder = document.querySelector('.card-holder')

    cardHolder.addEventListener('click', e=>{
	const current = e.target
	const isReadMoreBtn = current.className.includes('read-more-btn')
	if (!isReadMoreBtn)
		return
	const currentText = e.target.parentNode.querySelector('.card_read-more')
	currentText.classList.toggle('card_read-more--open')
	current.textContent = current.textContent.includes('Read More...') ? 'Read Less' : 'Read More...'
});



const btn2 = document.querySelector('.read-more-btn2')
const text2 = document.querySelector('.card_read-more2')
const cardHolder2 = document.querySelector('.card-holder2')

cardHolder2.addEventListener('click', e=>{
const current = e.target
const isReadMoreBtn2 = current.className.includes('read-more-btn2')
if (!isReadMoreBtn2)
return
const currentText = e.target.parentNode.querySelector('.card_read-more2')
currentText.classList.toggle('card_read-more2--open')
current.textContent = current.textContent.includes('Read More...') ? 'Read Less' : 'Read More...'
});
    
const btn3 = document.querySelector('.read-more-btn3')
const text3 = document.querySelector('.card_read-more3')
const cardHolder3 = document.querySelector('.card-holder3')

cardHolder3.addEventListener('click', e=>{
const current = e.target
const isReadMoreBtn3 = current.className.includes('read-more-btn3')
if (!isReadMoreBtn3)
return
const currentText = e.target.parentNode.querySelector('.card_read-more3')
currentText.classList.toggle('card_read-more3--open')
current.textContent = current.textContent.includes('Read More...') ? 'Read Less' : 'Read More...'
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzN1ITL9WXu25RwCbUuqsqVEQkxIyFI93qjAbsXDcTO23Hzy9IyEb86WJNhidkIcbQD/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thank You For Subscribing!"
      setTimeout(function(){
   msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});



