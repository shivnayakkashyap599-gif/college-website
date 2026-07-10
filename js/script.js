// ===============================
// SHRI SHAKTI DEGREE COLLEGE
// script.js
// ===============================

// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#002b6f";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
    } else {
        header.style.background = "#003b8f";
        header.style.boxShadow = "none";
    }
});

// Scroll To Top Button
const topBtn = document.createElement("div");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

window.onscroll = function () {

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

};

topBtn.onclick=function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};


// Welcome Message

window.addEventListener("load",()=>{

console.log("Welcome to Shri Shakti Degree College");

});


// Hero Button Animation

const btn=document.querySelector(".btn");

if(btn){

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

}



// Course Card Hover

const cards=document.querySelectorAll(".course-box div");

cards.forEach(card=>{

card.addEventListener("click",()=>{

alert("Course Selected : "+card.innerText);

});

});



// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(60px)";
sec.style.transition=".8s";

observer.observe(sec);

});



// Admission Form

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Admission Form Submitted Successfully");

form.reset();

});

}



// Current Year Footer

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Shri Shakti Degree College. All Rights Reserved.";

}



// Mobile Menu

const nav=document.querySelector("nav");

const menu=document.createElement("button");

menu.innerHTML="☰";

menu.style.position="absolute";
menu.style.right="20px";
menu.style.top="20px";
menu.style.fontSize="28px";
menu.style.background="transparent";
menu.style.color="#fff";
menu.style.border="none";
menu.style.cursor="pointer";
menu.style.display="none";

document.querySelector("header").appendChild(menu);

function mobileMenu(){

if(window.innerWidth<900){

menu.style.display="block";

nav.style.display="none";

}else{

menu.style.display="none";
nav.style.display="block";

}

}

mobileMenu();

window.addEventListener("resize",mobileMenu);

menu.onclick=function(){

if(nav.style.display==="none"){

nav.style.display="block";

}else{

nav.style.display="none";

}

};



// Image Gallery Popup

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";
popup.style.left="0";
popup.style.top="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.9)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";
popup.style.zIndex="9999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.border="5px solid white";
image.style.borderRadius="10px";

popup.appendChild(image);

popup.onclick=function(){

popup.remove();

};

document.body.appendChild(popup);

});

});



// Notice Auto Scroll

const notice=document.querySelector(".notice-box");

if(notice){

let y=0;

setInterval(()=>{

y--;

notice.scrollTop=Math.abs(y);

if(notice.scrollTop+notice.clientHeight>=notice.scrollHeight){

y=0;

}

},50);

}



// Dark Mode

const dark=document.createElement("button");

dark.innerHTML="🌙";

dark.style.position="fixed";
dark.style.left="20px";
dark.style.bottom="20px";
dark.style.width="60px";
dark.style.height="60px";
dark.style.borderRadius="50%";
dark.style.border="none";
dark.style.cursor="pointer";
dark.style.fontSize="24px";
dark.style.zIndex="999";

document.body.appendChild(dark);

dark.onclick=function(){

document.body.classList.toggle("dark");

};

const slides = document.querySelectorAll(".slide");

let current = 0;

function slider() {
    slides[current].classList.remove("active");

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add("active");
}

setInterval(slider, 3000);
const noticeBoard = document.getElementById("noticeBoard");

if(noticeBoard){

const data = localStorage.getItem("collegeNotice");

if(data){

noticeBoard.innerHTML = data
.split("\n")
.map(n => `<p>📢 ${n}</p>`)
.join("");

}else{

noticeBoard.innerHTML="<p>📢 No Notice Available</p>";

}

}
// End
