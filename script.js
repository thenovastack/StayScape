/*==================================================
                STAYSCAPE
                script.js
                PART 1
==================================================*/

"use strict";

/*==================================================
            ELEMENT SELECTORS
==================================================*/

const loader = document.getElementById("loader");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".navLinks");
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    if(loader){

        setTimeout(()=>{

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },1200);

    }

});

/*==================================================
            STICKY NAVBAR
==================================================*/

window.addEventListener("scroll", ()=>{

    if(!header) return;

    if(window.scrollY > 60){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*==================================================
            MOBILE MENU
==================================================*/

if(menu){

    menu.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

/* Close menu after clicking a link */

document.querySelectorAll(".navLinks a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});

/*==================================================
            CUSTOM CURSOR
==================================================*/

if(cursor && cursor2){

    window.addEventListener("mousemove",(e)=>{

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        cursor2.style.left = e.clientX + "px";
        cursor2.style.top = e.clientY + "px";

    });

}

/*==================================================
        CURSOR HOVER EFFECT
==================================================*/

const hoverItems = document.querySelectorAll(

    "button,a,.propertyCard,.destinationCard,.experienceCard,.statCard,.testimonialCard"

);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(cursor){

            cursor.style.transform="translate(-50%,-50%) scale(1.7)";
        }

        if(cursor2){

            cursor2.style.transform="translate(-50%,-50%) scale(1.4)";
        }

    });

    item.addEventListener("mouseleave",()=>{

        if(cursor){

            cursor.style.transform="translate(-50%,-50%) scale(1)";
        }

        if(cursor2){

            cursor2.style.transform="translate(-50%,-50%) scale(1)";
        }

    });

});

/*==================================================
            PARALLAX BLOBS
==================================================*/

const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove",(e)=>{

    blobs.forEach((blob,index)=>{

        const speed = (index + 1) * 0.015;

        const x = (window.innerWidth/2 - e.clientX) * speed;

        const y = (window.innerHeight/2 - e.clientY) * speed;

        blob.style.transform =
        `translate(${x}px, ${y}px)`;

    });

});

/*==================================================
            HERO BUTTON RIPPLE
==================================================*/

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.position = "absolute";
        circle.style.borderRadius = "50%";
        circle.style.background = "rgba(255,255,255,.35)";
        circle.style.pointerEvents = "none";

        circle.style.left =
        e.offsetX - diameter/2 + "px";

        circle.style.top =
        e.offsetY - diameter/2 + "px";

        circle.style.transform="scale(0)";
        circle.style.transition=".6s";

        this.appendChild(circle);

        requestAnimationFrame(()=>{

            circle.style.transform="scale(3)";
            circle.style.opacity="0";

        });

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.log(
"%cStayScape Loaded Successfully",
"color:#4cc9f0;font-size:16px;font-weight:bold;"
);
// part 2//
/*==================================================
                STAYSCAPE
                script.js
                PART 2
==================================================*/

/*==================================================
            BACK TO TOP BUTTON
==================================================*/

const backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () => {

    if(!backToTop) return;

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

if(backToTop){

    backToTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==================================================
            SCROLL PROGRESS BAR
==================================================*/

const progressBar = document.createElement("div");

progressBar.id = "scrollProgress";

document.body.appendChild(progressBar);

progressBar.style.position = "fixed";
progressBar.style.left = "0";
progressBar.style.top = "0";
progressBar.style.width = "0";
progressBar.style.height = "5px";
progressBar.style.zIndex = "99999";
progressBar.style.background =
"linear-gradient(90deg,#4cc9f0,#7b2cbf,#ff4d8d)";
progressBar.style.boxShadow =
"0 0 20px rgba(76,201,240,.5)";

window.addEventListener("scroll",()=>{

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop/height)*100;

    progressBar.style.width = percent + "%";

});

/*==================================================
            SCROLL REVEAL
==================================================*/

const revealItems = document.querySelectorAll(

".statCard,\
.propertyCard,\
.destinationCard,\
.experienceCard,\
.testimonialCard,\
.faqItem,\
.chooseImage,\
.chooseContent,\
.galleryGrid img,\
.newsletterContainer"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("showAnimation");

        }

    });

},

{

    threshold:0.15

}

);

revealItems.forEach(item=>{

    item.classList.add("fadeUp");

    revealObserver.observe(item);

});

/*==================================================
            ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navLinks a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 180;

        const height = section.clientHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href") ===
            "#" + current

        ){

            link.classList.add("active");

        }

    });

});

/*==================================================
            PARALLAX HERO
==================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    const value = window.scrollY;

    hero.style.backgroundPosition =
    `center ${value*0.45}px`;

});

/*==================================================
            IMAGE HOVER TILT
==================================================*/

const cards = document.querySelectorAll(

".propertyCard,.destinationCard"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY =
            ((x / rect.width)-0.5)*10;

        const rotateX =
            ((y / rect.height)-0.5)*-10;

        card.style.transform =

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
            HERO TITLE FLOAT
==================================================*/

const heroTitle = document.querySelector(".heroContent h1");

if(heroTitle){

    let direction = 1;

    setInterval(()=>{

        heroTitle.style.transform =
        `translateY(${direction*8}px)`;

        direction *= -1;

    },2000);

}

/*==================================================
            BUTTON GLOW
==================================================*/

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.classList.add("pulse");

    });

    btn.addEventListener("mouseleave",()=>{

        btn.classList.remove("pulse");

    });

});

/*==================================================
            PAGE READY
==================================================*/

console.log(
"%cScroll Animations Ready",
"color:#ffd166;font-size:14px;"
);
// part 3//
/*==================================================
                STAYSCAPE
                script.js
                PART 3
==================================================*/

/*==================================================
            ANIMATED COUNTERS
==================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        const duration = 2000;

        const step = target / (duration / 16);

        let current = 0;

        const updateCounter = ()=>{

            current += step;

            if(current >= target){

                counter.innerText = target.toLocaleString() + "+";
                return;

            }

            counter.innerText =
            Math.floor(current).toLocaleString()+"+";

            requestAnimationFrame(updateCounter);

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

},
{
    threshold:.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/*==================================================
            FAVORITE BUTTONS
==================================================*/

const favorites = document.querySelectorAll(".favorite");

favorites.forEach(button=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if(button.classList.contains("active")){

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            icon.style.color="#ff4d8d";

        }else{

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            icon.style.color="#ffffff";

        }

        button.animate([

            {transform:"scale(1)"},

            {transform:"scale(1.35)"},

            {transform:"scale(1)"}

        ],{

            duration:350

        });

    });

});

/*==================================================
                FAQ ACCORDION
==================================================*/

const faqItems = document.querySelectorAll(".faqItem");

faqItems.forEach(item=>{

    const question = item.querySelector(".faqQuestion");

    question.addEventListener("click",()=>{

        faqItems.forEach(faq=>{

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*==================================================
            PROPERTY CARD HOVER
==================================================*/

const propertyCards = document.querySelectorAll(".propertyCard");

propertyCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".4s";

        card.style.boxShadow=
        "0 35px 70px rgba(76,201,240,.25)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});

/*==================================================
            STAT CARD GLOW
==================================================*/

const statCards = document.querySelectorAll(".statCard");

statCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
            DESTINATION HOVER SOUND
==================================================*/

const hoverAudio = new Audio(
"assets/audio/hover.mp3"
);

hoverAudio.volume = 0.15;

document.querySelectorAll(".destinationCard").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        hoverAudio.currentTime = 0;

        hoverAudio.play().catch(()=>{});

    });

});

/*==================================================
            RANDOM FLOATING EFFECT
==================================================*/

const floatingCards = document.querySelectorAll(

".experienceCard,.testimonialCard"

);

floatingCards.forEach((card,index)=>{

    setInterval(()=>{

        card.animate([

            {transform:"translateY(0px)"},

            {transform:"translateY(-8px)"},

            {transform:"translateY(0px)"}

        ],{

            duration:3500 + index*300,

            iterations:1

        });

    },4200 + index*300);

});

/*==================================================
            PROPERTY BUTTON CLICK
==================================================*/

document.querySelectorAll(".priceRow button")
.forEach(button=>{

    button.addEventListener("click",()=>{

        button.innerHTML=
        '<i class="fa-solid fa-check"></i> Booked';

        button.disabled=true;

        button.style.opacity=".8";

    });

});

/*==================================================
            EXPERIENCE CARD ICON SPIN
==================================================*/

document.querySelectorAll(".experienceCard i")
.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {transform:"rotate(0deg)"},

            {transform:"rotate(360deg)"}

        ],{

            duration:600

        });

    });

});

/*==================================================
                LOG
==================================================*/

console.log(
"%cInteractive Components Loaded",
"color:#4cc9f0;font-weight:bold;"
);
// part 4 -- //
/*==================================================
                STAYSCAPE
                script.js
                PART 4
==================================================*/

/*==================================================
            BACKGROUND MUSIC
==================================================*/

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

if(music && musicToggle){

    music.volume = 0.25;

    musicToggle.addEventListener("click",()=>{

        if(music.paused){

            music.play().catch(()=>{});
            musicToggle.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

        }else{

            music.pause();
            musicToggle.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

        }

    });

}

/*==================================================
                TOAST MESSAGE
==================================================*/

function showToast(message){

    const toast = document.querySelector(".toast");

    if(!toast) return;

    toast.innerHTML = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

/*==================================================
        NEWSLETTER SUBSCRIPTION
==================================================*/

const newsletterForm =
document.querySelector(".newsletterForm");

if(newsletterForm){

    newsletterForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email =
        newsletterForm.querySelector("input");

        if(email.value.trim()===""){

            showToast("⚠ Please enter your email.");

            return;

        }

        const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!pattern.test(email.value)){

            showToast("❌ Invalid email address.");

            return;

        }

        showToast("🎉 Successfully subscribed!");

        email.value="";

    });

}

/*==================================================
            SEARCH BUTTON
==================================================*/

const searchButton =
document.querySelector(".searchPanel button");

if(searchButton){

    searchButton.addEventListener("click",()=>{

        showToast("🔍 Searching luxury stays...");

    });

}

/*==================================================
            GALLERY LIGHTBOX
==================================================*/

const galleryImages =
document.querySelectorAll(".galleryGrid img");

const lightbox =
document.createElement("div");

lightbox.style.position="fixed";
lightbox.style.left="0";
lightbox.style.top="0";
lightbox.style.width="100%";
lightbox.style.height="100%";
lightbox.style.background="rgba(0,0,0,.92)";
lightbox.style.display="none";
lightbox.style.justifyContent="center";
lightbox.style.alignItems="center";
lightbox.style.zIndex="999999";

const lightImage =
document.createElement("img");

lightImage.style.maxWidth="90%";
lightImage.style.maxHeight="90%";
lightImage.style.borderRadius="18px";

lightbox.appendChild(lightImage);

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightImage.src = img.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

/*==================================================
            WELCOME MESSAGE
==================================================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        showToast("🏡 Welcome to StayScape!");

    },1800);

});

/*==================================================
            TIME GREETING
==================================================*/

const greeting =
document.querySelector(".greeting");

if(greeting){

    const hour = new Date().getHours();

    let text = "";

    if(hour<12){

        text="Good Morning ☀";

    }

    else if(hour<17){

        text="Good Afternoon 🌤";

    }

    else{

        text="Good Evening 🌙";

    }

    greeting.innerHTML=text;

}

/*==================================================
        BUTTON CLICK SOUND
==================================================*/

const clickAudio =
new Audio("assets/audio/click.mp3");

clickAudio.volume=.20;

document.querySelectorAll("button")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        clickAudio.currentTime=0;

        clickAudio.play().catch(()=>{});

    });

});

/*==================================================
        RANDOM DESTINATION TAG
==================================================*/

const destinationCards =
document.querySelectorAll(".destinationCard");

const tags=[

"Trending",

"Popular",

"Luxury",

"Editor's Pick",

"Top Rated",

"Best Value"

];

destinationCards.forEach(card=>{

    const badge = card.querySelector(".tag");

    if(badge){

        badge.innerText=

        tags[Math.floor(Math.random()*tags.length)];

    }

});

/*==================================================
        PROPERTY BOOK BUTTON
==================================================*/

document.querySelectorAll(".priceRow button")

.forEach(button=>{

    button.addEventListener("click",()=>{

        showToast("✅ Property added to booking!");

    });

});

/*==================================================
            PARALLAX IMAGES
==================================================*/

window.addEventListener("mousemove",(e)=>{

    galleryImages.forEach((img,index)=>{

        const move = (index+1)*0.4;

        img.style.transform=

        `translate(${e.clientX*move/1200}px,

        ${e.clientY*move/1200}px)`;

    });

});

/*==================================================
                END PART 4
==================================================*/

console.log(
"%cPremium Features Loaded",
"color:#7b2cbf;font-size:15px;font-weight:bold;"
);
// part 5 //
/*==================================================
                STAYSCAPE
                script.js
                PART 5 (FINAL POLISH)
==================================================*/

/*==================================================
            CONFETTI CELEBRATION (PAGE LOAD)
==================================================*/

function createConfetti(){

    const colors = ["#4cc9f0","#7b2cbf","#ff4d8d","#ffd166"];

    for(let i=0;i<60;i++){

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.background = colors[Math.floor(Math.random()*colors.length)];
        confetti.style.zIndex = "99999";
        confetti.style.opacity = "0.8";

        confetti.style.transform = "rotate(45deg)";

        document.body.appendChild(confetti);

        const fall = confetti.animate([

            { transform: "translateY(0) rotate(0deg)", opacity: 1 },

            { transform: `translateY(100vh) rotate(360deg)`, opacity: 0 }

        ],{

            duration: 3000 + Math.random()*2000,
            easing: "ease-out"

        });

        fall.onfinish = () => confetti.remove();

    }

}

window.addEventListener("load",()=>{

    setTimeout(createConfetti, 1200);

});

/*==================================================
            KEYBOARD SHORTCUTS
==================================================*/

window.addEventListener("keydown",(e)=>{

    // Press "S" → scroll to search
    if(e.key.toLowerCase() === "s"){

        const search = document.querySelector(".searchPanel");

        if(search){

            search.scrollIntoView({behavior:"smooth"});

        }

    }

    // Press "T" → back to top
    if(e.key.toLowerCase() === "t"){

        window.scrollTo({top:0,behavior:"smooth"});

    }

});

/*==================================================
            ONLINE / OFFLINE STATUS
==================================================*/

function showConnectionStatus(status){

    const msg = status === "online"
        ? "🟢 Back Online"
        : "🔴 You are Offline";

    const toast = document.querySelector(".toast");

    if(!toast) return;

    toast.innerHTML = msg;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

window.addEventListener("online",()=>{

    showConnectionStatus("online");

});

window.addEventListener("offline",()=>{

    showConnectionStatus("offline");

});

/*==================================================
            SMOOTH SECTION HIGHLIGHT FIX
==================================================*/

function smoothNavFix(){

    const links = document.querySelectorAll(".navLinks a");

    links.forEach(link=>{

        link.addEventListener("click",(e)=>{

            const target = document.querySelector(link.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({behavior:"smooth"});

            }

        });

    });

}

smoothNavFix();

/*==================================================
            LOADING COMPLETE MESSAGE
==================================================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        console.log(
            "%cStayScape Fully Loaded 🚀",
            "color:#ff4d8d;font-size:16px;font-weight:bold;"
        );

    },2000);

});

/*==================================================
            PERFORMANCE CLEANUP
==================================================*/

window.addEventListener("load",()=>{

    // Remove unused hover lag on mobile
    if(window.innerWidth < 768){

        document.querySelectorAll("*").forEach(el=>{

            el.style.transitionDuration = "0.2s";

        });

    }

});

/*==================================================
            BUTTON CLICK HANDLERS
==================================================*/

// Sign In Button
const signInBtn = document.querySelector(".loginBtn");
if(signInBtn) {
    signInBtn.addEventListener("click", () => {
        showToast("🔐 Sign In - Page would load here");
    });
}

// Book Now (Navigation Header)
const navBookBtn = document.querySelector(".bookBtn");
if(navBookBtn) {
    navBookBtn.addEventListener("click", () => {
        showToast("📅 Opening booking...");
        setTimeout(() => {
            const featured = document.querySelector("#destinations");
            if(featured) {
                featured.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    });
}

// Search Button
const searchBtn = document.querySelector(".searchBtn");
if(searchBtn) {
    searchBtn.addEventListener("click", () => {
        const destination = document.querySelector('.searchPanel input[type="text"]').value || "properties";
        showToast(`🔍 Searching for ${destination}...`);
    });
}

// Explore Button (Hero Section)
const exploreBtn = document.querySelector(".exploreBtn");
if(exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        showToast("🌍 Exploring luxury stays...");
        setTimeout(() => {
            const featured = document.querySelector("#destinations");
            if(featured) {
                featured.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    });
}

// Watch Video Button
const watchBtn = document.querySelector(".watchBtn");
if(watchBtn) {
    watchBtn.addEventListener("click", () => {
        showToast("🎥 Video player opening...");
    });
}

// Navigation Links
function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if(href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if(target) {
                const navLinksEl = document.querySelector(".navLinks");
                if(navLinksEl) {
                    navLinksEl.classList.remove("active");
                }
                
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", setupNavigation);
} else {
    setupNavigation();
}

/*==================================================
                FINAL INIT CHECK
==================================================*/

(function initCheck(){

    console.log("StayScape JS Initialized ✔");

})();

/*==================================================
                    END FILE
==================================================*/