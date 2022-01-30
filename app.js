var button = document.querySelector("#btn");
var fname = document.querySelector("#first_name");
var lname = document.querySelector("#last_name");
var mail = document.querySelector("#email");
var phone = document.querySelector("#number");
var message = document.querySelector("#message");
button.addEventListener("click", (e) => {
  alert("Thanks for contacting me, You will get a reply soon!");
  e.preventDefault();
  var person = {
    "First Name": fname.value,
    "Last Name": lname.value,
    "E-mail": mail.value,
    "Phone Number": phone.value,
    "Message": message.value,
  };
  console.log(person);
  fname.value = "";
  lname.value = "";
  mail.value = "";
  phone.value = "";
  message.value = "";
});
const navSlide=()=>{
    const burger=document.querySelector(".burger")
    const nav=document.querySelector(".right")
   

    burger.addEventListener("click",()=>{
        console.log("hel")
        nav.classList.toggle('nav-active');

        
       burger.classList.toggle("toggle")
    });
}
navSlide();
const sct=()=>{
  const scrollTotop=document.querySelector(".scrolltotop");
      scrollTotop.addEventListener("click",()=>{
      window.scrollTo({
          top:0,
          behavior:"smooth"
      });
  })

  window.addEventListener("scroll",()=>{
      window.pageYOffset>100   
      ? (scrollTotop.style.display="flex")
      : (scrollTotop.style.display="none");
  })
}

sct();

