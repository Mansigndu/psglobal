const navbar = document.querySelector(".nav");

navbar.innerHTML = `

<nav id="navbar"
class="fixed top-0 left-0 w-full z-50 bg-[#081120]/70 backdrop-blur-xl border-b border-white/10 transition-all duration-300">

    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div class="flex items-center justify-between py-5">

            <!-- LOGO -->
            <a href="index.html"
class="flex items-center gap-3">

    <img src="./images/logo.jpeg"
    alt="PS Global Exports Logo"
    class="w-14 h-14 rounded-full object-cover border border-[#D4AF37] p-[2px]">

    <div class="flex flex-col leading-none">

        <span
        class="heading-font text-xl sm:text-2xl font-bold tracking-[0.18em] text-white">

            PS <span class="text-[#D4AF37]">GLOBAL</span>

        </span>

        <span
        class="text-[10px] uppercase tracking-[0.35em] text-gray-300 mt-1">

            EXPORTS

        </span>

    </div>

</a>


            <!-- DESKTOP MENU -->
            <div
            class="hidden lg:flex items-center gap-10 uppercase tracking-widest text-sm text-white">

                <a href="index.html"
                class="hover:text-[#D4AF37] transition duration-300">
                Home
                </a>

                <a href="about.html"
                class="hover:text-[#D4AF37] transition duration-300">
                About
                </a>

                <a href="products.html"
                class="hover:text-[#D4AF37] transition duration-300">
                Products
                </a>

                <a href="gallery.html"
                class="hover:text-[#D4AF37] transition duration-300">
                Gallery
                </a>

                <a href="services.html"
                class="hover:text-[#D4AF37] transition duration-300">
                Services
                </a>

                <a href="contact.html"
                class="hover:text-[#D4AF37] transition duration-300">
                Contact
                </a>

            </div>


            <!-- BUTTON -->
            <a href="contact.html"
            class="hidden lg:flex bg-[#D4AF37] hover:bg-yellow-500 text-black font-semibold px-7 py-3 rounded-full transition duration-300 hover:scale-105">

                Send Inquiry

            </a>


            <!-- MOBILE MENU BUTTON -->
            <button id="menu-btn"
            class="lg:hidden text-white text-3xl">

                ☰

            </button>

        </div>

    </div>


    <!-- MOBILE MENU -->

    <div id="mobile-menu"
    class="lg:hidden hidden bg-[#081120] border-t border-white/10">

        <div
        class="flex flex-col px-6 py-6 space-y-5 uppercase tracking-widest text-sm text-white">

            <a href="index.html" class="mobile-link">
            Home
            </a>

            <a href="about.html" class="mobile-link">
            About
            </a>

            <a href="products.html" class="mobile-link">
            Products
            </a>

            <a href="gallery.html" class="mobile-link">
            Gallery
            </a>

            <a href="services.html" class="mobile-link">
            Services
            </a>

            <a href="contact.html" class="mobile-link">
            Contact
            </a>

            <a href="contact.html"
            class="bg-[#D4AF37] text-center text-black font-semibold py-3 rounded-full">

                Send Inquiry

            </a>

        </div>

    </div>

</nav>

`;



/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


/* ================= CLOSE MENU ON LINK CLICK ================= */

const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


/* ================= CLOSE MENU ON SCROLL ================= */

window.addEventListener("scroll", () => {

    mobileMenu.classList.add("hidden");

});



/* ================= NAVBAR BG ON SCROLL ================= */

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");

    if(window.scrollY > 50){

        navbar.classList.add("bg-[#081120]");

    }

    else{

        navbar.classList.remove("bg-[#081120]");

    }

});