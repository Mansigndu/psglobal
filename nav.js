const nav=document.querySelector('.nav')
nav.innerHTML=` 
<nav id="navbar"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent">

    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div class="flex items-center justify-between py-4 lg:py-5">

            <!-- LOGO -->
            <a href="index.html"
                class="text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-white transition duration-300">
                NIRVANA
            </a>

            <!-- DESKTOP MENU -->
            <div class="hidden md:flex items-center gap-8 lg:gap-10">

                <a href="index.html"
                    class="text-white/90 hover:text-premium-gold transition duration-300 text-sm lg:text-base">
                    Home
                </a>

                <a href="properties.html"
                    class="text-white/90 hover:text-premium-gold transition duration-300 text-sm lg:text-base">
                    Properties
                </a>

                <a href="about.html"
                    class="text-white/90 hover:text-premium-gold transition duration-300 text-sm lg:text-base">
                    About
                </a>

                <a href="gallery.html"
                    class="text-white/90 hover:text-premium-gold transition duration-300 text-sm lg:text-base">
                    Gallery
                </a>

                <a href="contact.html"
                    class="text-white/90 hover:text-premium-gold transition duration-300 text-sm lg:text-base">
                    Contact
                </a>

            </div>

            <!-- CTA -->
            <a href="contact.html"
                class="hidden md:inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 lg:px-6 py-2.5 rounded-full hover:bg-premium-gold hover:text-black transition duration-300 text-sm font-medium">
                Schedule Visit
            </a>

            <!-- MOBILE BUTTON -->
            <button id="mobile-menu-btn"
                class="md:hidden text-white text-2xl transition duration-300">

                <i class="fas fa-bars"></i>

            </button>

        </div>

    </div>

   <div id="mobile-menu"
  class="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl z-50
  transform translate-x-full transition-transform duration-300">

  <!-- TOP -->
  <div class="flex justify-between items-center p-5 border-b">
    <h2 class="text-lg font-bold">Menu</h2>
    <button id="close-menu" class="text-2xl">✕</button>
  </div>

  <!-- LINKS -->
  <div class="flex flex-col gap-6 p-6 text-lg font-medium">

    <a href="index.html">Home</a>
    <a href="properties.html">Properties</a>
    <a href="about.html">About</a>
    <a href="gallery.html">Gallery</a>
    <a href="contact.html">Contact</a>

  </div>

</div>

    
    
`
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const close = document.getElementById("close-menu");

    if (!btn || !menu) return;

    // OPEN (slide in)
    btn.addEventListener("click", () => {
        menu.classList.remove("translate-x-full");
    });

    // CLOSE FUNCTION
    function closeMenu() {
        menu.classList.add("translate-x-full");
    }

    close?.addEventListener("click", closeMenu);

    // CLOSE ON LINK CLICK
    menu.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", closeMenu);
    });

    // 🔥 SCROLL CLOSE
    window.addEventListener("scroll", () => {
        if (!menu.classList.contains("translate-x-full")) {
            closeMenu();
        }
    });

});

