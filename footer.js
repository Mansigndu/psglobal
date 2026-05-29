const footer=document.querySelector('.footer');

footer.innerHTML=`

<footer class="bg-black text-white py-12">

    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div class="grid md:grid-cols-3 gap-10">

            <!-- BRAND -->
            <div>

                <h2 class="text-3xl font-semibold tracking-[0.2em]">
                    NIRVANA
                </h2>

                <p class="text-white/60 mt-5 leading-relaxed">
                    Premium commercial spaces crafted for modern businesses and investments.
                </p>

            </div>

            <!-- QUICK LINKS -->
            <div>

                <h3 class="text-3xl font-semibold mb-5">
                    Quick Links
                </h3>

                <div class="flex flex-col gap-3 text-white/70">

                    <a href="index.html" class="hover:text-premium-gold transition">
                        Home
                    </a>

                    <a href="properties.html" class="hover:text-premium-gold transition">
                        Properties
                    </a>

                    <a href="about.html" class="hover:text-premium-gold transition">
                        About
                    </a>

                    <a href="gallery.html" class="hover:text-premium-gold transition">
                        Gallery
                    </a>

                    <a href="contact.html" class="hover:text-premium-gold transition">
                        Contact
                    </a>

                </div>

            </div>

            <!-- CONTACT INFO -->
            <div>

                <h3 class="text-3xl font-semibold mb-5">
                    Contact Info
                </h3>

                <div class="space-y-5">

                    <!-- PHONE -->
                    <div class="flex items-start gap-4">

                        <div class="text-premium-gold text-lg mt-1">
                            <i class="fas fa-phone"></i>
                        </div>

                        <div>
                            <p class="text-sm text-white/40 mb-1">
                                Phone
                            </p>

                            <a href="tel:+918286834867"
                                class="text-white/70 hover:text-premium-gold transition">
                                +91 82868 34867
                            </a>
                        </div>

                    </div>

                    <!-- EMAIL -->
                    <div class="flex items-start gap-4">

                        <div class="text-premium-gold text-lg mt-1">
                            <i class="fas fa-envelope"></i>
                        </div>

                        <div>
                            <p class="text-sm text-white/40 mb-1">
                                Email
                            </p>

                            <a href="mailto:contact@nirvanaproperties.in"
                                class="text-white/70 hover:text-premium-gold transition break-all">
                                contact@nirvanaproperties.in
                            </a>
                        </div>

                    </div>

                    <!-- ADDRESS -->
                    <div class="flex items-start gap-4">

                        <div class="text-premium-gold text-lg mt-1">
                            <i class="fas fa-location-dot"></i>
                        </div>

                        <div>
                            <p class="text-sm text-white/40 mb-1">
                                Address
                            </p>

                            <p class="text-white/60 leading-relaxed">
                                Gala no.1, Jai Vijay Nagdi Apt.,<br>
                                Opposite Seven Square School,<br>
                                Naigaon East, Mumbai
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div class="border-t border-white/10 mt-12 pt-6 text-center text-white/50 text-sm">
            © 2026 NIRVANA Realty. All Rights Reserved.
        </div>

    </div>

</footer>

`;