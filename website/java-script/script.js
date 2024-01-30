(() => {    //global expression

    //contains script that is used for all pages
    // mainly navbar and footer

    const openNavMenu = document.querySelector(".open-navbar"),
    closeNavMenu = document.querySelector(".close-navbar"),
    darkenedScreen = document.querySelector(".darkened-screen"),
    responsiveSize = 900;

    let navLinks = document.querySelector(".nav-links");

    
    let linksBoxPracownik = document.querySelector(".links-box1-inside");
    let linksBoxTranslate = document.querySelector(".links-box3-inside");


    // navbar start
    //navbar instruction when size for phones
    darkenedScreen.addEventListener("click", ()=>{
        darkenedScreen.classList.toggle("active");
        navLinks.style.right = "-100%";
    });

    openNavMenu.addEventListener("click", ()=>{
        navLinks.style.right = "0";
        darkenedScreen.classList.toggle("active");
        navLinks.classList.remove("show1");
        navLinks.classList.remove("show3");   
    });

    closeNavMenu.addEventListener("click", ()=>{
        navLinks.style.right = "-100%";
        darkenedScreen.classList.remove("active");
    });
    
    linksBoxPracownik.addEventListener("click", ()=>{
        navLinks.classList.toggle("show1");       
        windowResize();
    });

    linksBoxTranslate.addEventListener("click", ()=>{
        navLinks.classList.toggle("show3");
        windowResize();
    });
    

    // when scrolling navbar sticky and transparent
    const nav = document.querySelector('nav');
    const entireNav = document.createElement('div');

    entireNav.setAttribute('entire-nav', '');
    nav.before(entireNav);

    const navObserver = new IntersectionObserver((entries) => {
        nav.classList.toggle('sticking', !entries[0].isIntersecting); //inverted behavior, 'sticking' class popup when scrolling
    }, {rootMargin:"100px 0px 0px 0px"} );  //sticking class popup when scroll on specified length
    navObserver.observe(entireNav);

    // navbar end

    function windowResize(){
        if(window.innerWidth > 900){
            navLinks.classList.remove("show1");
            navLinks.classList.remove("show3");  
            navLinks.style.right = "-100%";
            darkenedScreen.classList.remove("active");
        }
        }

    window.addEventListener("resize", windowResize);
    windowResize();
    

    //Contact Card - ContactBox START
    const inputs = document.querySelectorAll(".input");
    function focusFunc(){
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc(){
        let parent = this.parentNode;
        if(this.value == ""){
        parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });


    document.addEventListener("DOMContentLoaded", function() {
        const contactLink = document.querySelector(".contact-link");
        const contactContent = document.querySelector(".contact_card");

        contactLink.addEventListener("click", function(e) {
            e.preventDefault();
    
                // Navigate to "index.html#contact" while preserving the current page
                window.location.href = "/index.html#contact";
                scrollContactIntoView();    //if you are on index.html#contact and click again u will scroll to contact-card
            // }
        
        });
        
        function scrollContactIntoView() {
            
            contactContent.scrollIntoView({ behavior: "smooth" });
            
        }
    
        // Function to handle scrolling if the fragment exists in the URL
        function scrollIfFragmentExists() {
            const fragment = window.location.hash;
            if (fragment === "#contact") {
                scrollContactIntoView();
                
            }
        }
        
        // // Call the function after the page is loaded.
        scrollIfFragmentExists();
        
});
        // Go to the CV page after clicking the CV-navbar button
        //If user click the CV-navbar button , it will not display which offer the user has selected in offers
        const sendCVnav = document.getElementById('CV-navbar');
        if (sendCVnav) {
            sendCVnav.addEventListener('click', redirectToCVnav);
        }
    
        function redirectToCVnav() {
            localStorage.clear();
            window.location.href = 'CV.html';
        }
    // });

    // scroll to contact when "contact" is clicked END

    

    
})();
