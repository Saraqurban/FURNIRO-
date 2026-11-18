const thumbnails = document.querySelectorAll('thumb');
const mainImage = document.getElementById('mainImage');
const productTitle = document.getElementById('productTitle');
const productPrice = document.getElementById('productPrice');
const productDesc = document.getElementById('productDesc');
const productSku = document.getElementById('productSku');
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        mainImage.src = this.getAttribute('data-img');
        productTitle.textContent = this.getAttribute('data-title');
        productPrice.textContent = this.getAttribute('data-price');
        productDesc.textContent = this.getAttribute('data-desc');
        productSku.textContent = this.getAttribute('data-sku');
    });
});
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const quantitySpan = document.getElementById('quantity');
let count = 1;
if (incrementBtn && quantitySpan) {
    incrementBtn.addEventListener('click', () => {
        count++;
        quantitySpan.textContent = count;
    });
}

if (decrementBtn && quantitySpan) {
    decrementBtn.addEventListener('click', () => {
        if (count > 1) {
            count--;
            quantitySpan.textContent = count;
        }
    });
}

var contactForm = document.getElementById("contactForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var subjectInput = document.getElementById("subject");
var messageInput = document.getElementById("message");
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var successMsg = document.getElementById("successMsg");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var message = messageInput.value.trim();
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMsg.textContent = "";
        var isValid = true;
        if (name == "") {
            nameError.textContent = "Please enter your name";
            isValid = false;
        }
        if (email == "") {
            emailError.textContent = "Please enter your email";
            isValid = false;
        } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
            emailError.textContent = "Please enter a valid email like Abc@def.com";
            isValid = false;
        }
        if (message == "") {
            messageError.textContent = "Please enter your message";
            isValid = false;
        }
        if (isValid == true) {
            var submitBtn = document.querySelector(".submit-btn");
            submitBtn.textContent = "Submitted";
            submitBtn.style.background = "green";
            submitBtn.disabled = true;
            successMsg.textContent = "Submitted";
            successMsg.style.color = "green";
            setTimeout(function() {
                contactForm.reset();
                submitBtn.textContent = "Submit";
                submitBtn.style.background = "#b88e2f";
                submitBtn.disabled = false;
                successMsg.textContent = "";
            }, 3000);
        }
    });
}

if (nameInput) {
    nameInput.addEventListener("input", function() {
        if (this.value.trim() != "") {
            nameError.textContent = "";
        }
    });
}

if (emailInput) {
    emailInput.addEventListener("input", function() {
        if (this.value.indexOf("@") != -1) {
            emailError.textContent = "";
        }
    });
}

if (messageInput) {
    messageInput.addEventListener("input", function() {
        if (this.value.trim() != "") {
            messageError.textContent = "";
        }
    });
}
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var current = 0;

function showSlide(n){

  for(var i=0; i<slides.length; i++){
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  current = n;
  if(current >= slides.length){
    current = 0;
  }
  if(current < 0){
    current = slides.length - 1;
  }
  slides[current].classList.add("active");
  dots[current].classList.add("active");
  console.log("Slide changed: " + (current+1));
}

function nextSlide(){
  var next = current + 1;
  if(next >= slides.length){
    next = 0;
  }
  showSlide(next);
}

function exploreMore(){
  alert("Explore More clicked!");
  window.location.href = "shop.html";
}


setInterval(nextSlide, 4000);

var shareSection = document.getElementById("shareSection");
var galleryGrid = document.getElementById("galleryGrid");
var shareTitle = document.getElementById("shareTitle");


if(galleryGrid){
  console.log("Gallery mil gayi: " + galleryGrid.id);

  
  galleryGrid.innerHTML = galleryGrid.innerHTML + galleryGrid.innerHTML;

  var pos = 0; 

  setInterval(function(){
    pos = pos + 1; 
    if(pos >= galleryGrid.scrollWidth / 2){
      pos = 0;
    }

    galleryGrid.style.transform = "translateX(-" + pos + "px)";
    galleryGrid.style.display = "flex";
    galleryGrid.style.width = "max-content";

  }, 30);
  var items = document.querySelectorAll(".gallery-item");
  for(var i=0; i<items.length; i++){
    items[i].addEventListener("mouseenter", function(){
      this.style.transform = "translateY(-10px) scale(1.05)";
      this.style.transition = "all 0.3s ease";
      this.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
    });
    items[i].addEventListener("mouseleave", function(){
      this.style.transform = "translateY(0px) scale(1)";
      this.style.boxShadow = "none";
    });

    
    items[i].addEventListener("click", function(){
      var img = this.querySelector("img");
      if(img){
        window.open(img.src, "_blank"); 
        console.log("Image opened: " + img.src);
      }
    });
  }

  console.log("Gallery infinite started - images kabhi khatam nahi hongi");
} else {
  console.log("Gallery nahi mili - id check karo");
}
var subscribeBtn = document.getElementById("subscribeBtn");
var newsletterForm = document.getElementById("newsletterForm");
var newsletterEmail = document.getElementById("newsletterEmail");
var newsletterMsg = document.getElementById("newsletterMsg");

subscribeBtn.addEventListener("click", function(){
  var email = newsletterEmail.value.trim();

  if(email == "" || email.indexOf("@") == -1){
    newsletterMsg.textContent = "Please enter valid email";
    newsletterMsg.style.color = "red";
    return;
  }

  
  newsletterForm.classList.add("subscribed");
  newsletterMsg.textContent = "Subscribed successfully!";
  newsletterMsg.classList.add("success");
  console.log("Subscribed: " + email);
});