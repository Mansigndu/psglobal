const footer = document.querySelector(".footer");

footer.innerHTML = `

<footer class="relative border-t border-white/10 bg-[#07101d] overflow-hidden">

    <!-- Blur Effects -->
    <div
        class="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-[120px]">
    </div>

    <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]">
    </div>


    <div class="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">

        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-12">


            <!-- COMPANY INFO -->
            <div>

                <a href="index.html"
                    class="flex items-center gap-3">

                    <img src="./images/logo.jpeg"
                        alt="PS Global Exports Logo"
                        class="w-16 h-16 rounded-full object-cover border border-[#D4AF37] p-[2px]">

                    <div>

                        <h2
                            class="heading-font text-2xl font-bold tracking-[0.18em] text-white">

                            PS <span class="gold-text">GLOBAL</span>

                        </h2>

                        <p
                            class="text-[11px] uppercase tracking-[0.35em] text-gray-400 mt-1">

                            EXPORTS

                        </p>

                    </div>

                </a>


                <p class="text-gray-400 leading-8 mt-8">

                    Delivering premium export products worldwide with
                    quality assurance, trusted logistics and long-term
                    business partnerships.

                </p>


                

            

            </div>



            <!-- QUICK LINKS -->
            <div>

                <h3
                    class="text-2xl font-semibold text-white mb-8">

                    Quick Links

                </h3>

                <ul class="space-y-5 text-gray-400">

                    <li>
                        <a href="index.html"
                            class="hover:text-[#D4AF37] transition duration-300">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="about.html"
                            class="hover:text-[#D4AF37] transition duration-300">
                            About Us
                        </a>
                    </li>

                    <li>
                        <a href="products.html"
                            class="hover:text-[#D4AF37] transition duration-300">
                            Products
                        </a>
                    </li>

                    <li>
                        <a href="services.html"
                            class="hover:text-[#D4AF37] transition duration-300">
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="gallery.html"
                            class="hover:text-[#D4AF37] transition duration-300">
                            Gallery
                        </a>
                    </li>

                    <li>
                        <a href="contact.html"
                            class="hover:text-[#D4AF37] transition duration-300">
                            Contact Us
                        </a>
                    </li>

                </ul>

            </div>



            <!-- PRODUCTS -->
            <div>
            <a href="products.html"
                class="hover:text-[#D4AF37] transition duration-300">

                <h3
                    class="text-2xl font-semibold text-white mb-8">

                    Our Products

                </h3>

                <ul class="space-y-5 text-gray-400">

                    <li class="hover:text-[#D4AF37] transition duration-300">
                        Herbal Powders
                    </li>

                    <li class="hover:text-[#D4AF37] transition duration-300">
                        Textile Essentials
                    </li>

                    <li class="hover:text-[#D4AF37] transition duration-300">
                        Gemstones & Jewellery
                    </li>

                    <li class="hover:text-[#D4AF37] transition duration-300">
                        Beauty Products
                    </li>

                    <li class="hover:text-[#D4AF37] transition duration-300">
                        Fashion Apparel
                    </li>

                    <li class="hover:text-[#D4AF37] transition duration-300">
                        Handcrafted Decor
                    </li>

                </ul>
                </a>

            </div>



            <!-- CONTACT INFO -->
            <div>

                <h3
                    class="text-2xl font-semibold text-white mb-8">

                    Contact Info

                </h3>

                <div class="space-y-6">


                    <!-- ADDRESS -->
                    <div class="flex gap-4">

                        <div
                            class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">

                            <i class="ri-map-pin-line text-[#D4AF37] text-xl"></i>

                        </div>

                        <div>

                            <a href="https://maps.google.com/?q=Sunteck+Maxxworld+Naigaon+Mumbai"
                                target="_blank"
                                class="text-gray-300 hover:text-[#D4AF37] transition duration-300 leading-7">

                                Sunteck Maxxworld, Flat No 601 <br>
                                Tower Lakeshore, Naigaon (E), <br>
                                Mumbai 401208

                            </a>

                        </div>

                    </div>


                    <!-- PHONE -->
<div class="flex gap-4">

    <div
        class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">

        <i class="ri-phone-line text-[#D4AF37] text-xl"></i>

    </div>

    <div class="space-y-2">

        <a href="tel:+918554817294"
            class="block text-gray-300 hover:text-[#D4AF37] transition duration-300">

            +918554817294

        </a>

        <a href="tel:+917780231836"
            class="block text-gray-300 hover:text-[#D4AF37] transition duration-300">

            +917780231836

        </a>

    </div>

</div>



                    <!-- EMAIL -->
                    <div class="flex gap-4">

                        <div
                            class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">

                            <i class="ri-mail-line text-[#D4AF37] text-xl"></i>

                        </div>

                        <div>

                            <a href="mailto:contact@psglobalexports.co.in"
                                class="text-gray-300 hover:text-[#D4AF37] transition duration-300 break-all">

                                contact@psglobalexports.co.in

                            </a>

                        </div>

                    </div>



                    <!-- WEBSITE -->
                    <div class="flex gap-4">

                        <div
                            class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">

                            <i class="ri-global-line text-[#D4AF37] text-xl"></i>

                        </div>

                        <div>

                            <a href="https://www.psglobalexports.co.in"
                                target="_blank"
                                class="text-gray-300 hover:text-[#D4AF37] transition duration-300 break-all">

                                www.psglobalexports.co.in

                            </a>

                        </div>

                    </div>



                    

                </div>

            </div>

        </div>



        <!-- BOTTOM FOOTER -->
        <div
            class="border-t border-white/10 mt-14 pt-8 flex flex-col lg:flex-row gap-5 justify-between items-center">

            <p class="text-gray-500 text-center">

                © 2026 PS Global Exports. All Rights Reserved.

            </p>

            <div
                class="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">

                <a href="#"
                    class="hover:text-[#D4AF37] transition duration-300">
                    Privacy Policy
                </a>

                <a href="#"
                    class="hover:text-[#D4AF37] transition duration-300">
                    Terms & Conditions
                </a>

                <a href="#"
                    class="hover:text-[#D4AF37] transition duration-300">
                    Support
                </a>

            </div>

        </div>

    </div>

</footer>

`;