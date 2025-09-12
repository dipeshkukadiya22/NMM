export const navbarHTML = `
        <nav class="py-4 relative sticky-element sticky top-0 bg-black bg-[url('/src/images/grid.svg')] z-500">
            <div class="container mx-auto flex items-center justify-between px-[15px] md:px-0">
                <div class="font-bold text-xl w-40 md:w-50">
                    <a href="/">
                        <img src="/src/images/NMM-Logo.svg" alt="Logo" class="inline-block w-50">
                    </a>
                </div>
                <ul class="hidden md:flex justify-center items-center space-x-8 text-white">
                    <li><a href="/about.html" class="p-2">About</a></li>
                    <li><a href="/about.html#team" class="p-2">Team</a></li>
                    <li><a href="/expertise.html" class="p-2">Expertise</a></li>
                    <li><a href="/clients.html" class="p-2">Clients</a></li>
                    <li><a href="/contact.html" class="p-2">Contact</a></li>
                </ul>
                <div class="hidden md:flex justify-end items-center font-bold text-xl">
                    <img src="/src/images/footer-1.svg" alt="Logo" class="inline-block w-15 h-15">
                </div>

                <!-- Hamburger (Mobile) -->
                <button id="openMenu" class="md:hidden pr-2">
                    <img src="/src/images/hamburger.svg" alt="Hamburger" class="inline-block w-10">
                </button>
            </div>

            <!-- Overlay Background -->
            <div id="menuOverlay"
                class="fixed inset-0 opacity-0 bg-black/50 transition-all duration-500 pointer-events-none z-40"></div>

            <!-- Side Menu -->
            <div id="mobileMenu"
                class="fixed top-0 right-0 w-4/5 h-full bg-gradient-to-b from-[#131313] to-[#262626] transform translate-x-full transition-transform duration-500 z-50 p-6 text-white shadow-lg overflow-y-auto">

                <!-- Header -->
                <div class="flex justify-between items-center border-b border-white/10 pb-4">
                    <a href="/"><img src="/src/images/NMM-Logo.svg" alt="Logo" class="h-10"></a>
                    <button id="closeMenu" class="text-white text-3xl">
                        &times;
                    </button>
                </div>

                <img src="/src/images/sidebar-bg.svg" alt="" class="absolute right-0 top-20 w-50">

                <!-- Menu List -->
                <ul class="flex flex-col space-y-4 mt-8 text-lg font-medium tracking-wide relative z-60">
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/about.html#team" class="">Team</a></li>
                    <li><a href="/expertise.html" class="">Expertise</a></li>
                    <li><a href="/clients.html" class="">Clients</a></li>
                    <li><a href="/contact.html" class="">Contact</a></li>
                </ul>
            </div>
        </nav>
`

export const footerHTML = `
    <footer class="bg-gradient-to-b  text-[#e0e0e0]"
    style="background-image: linear-gradient(to bottom, #000000 0%, #131313 18%, #252525 37%, #262626 100%);">

    <div
        class="container mx-auto flex flex-col justify-between items-center pt-7  md:pt-20 pb-5 px-[15px] md:px-0">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

            <div clsss="">
                <div class="mb-8">
                    <a href="index.html">
                        <img src="/src/images/NMM-Logo.svg" alt="Logo" class="w-50">
                    </a>
                </div>
                <div>
                    <p class="ubuntu-regular mb-1 md:mb-4 max-w-[300px] text-[48px] md:text-[38px] leading-[1.1] lg:text-[48px]">Dekho magar pyar se</p>
                </div>
                <div>
                    <div id="logo-container" class="w-45 h-33 md:h-35 relative">
                        <img id="frame1" src="/src/images/Property-1-Group-20-1.svg"
                            class="absolute w-45 h-30 top-0 left-0" style="opacity: 1;">
                        <img id="frame2" src="/src/images/Property-1-Group-22-2.svg"
                            class="absolute w-45 h-30 top-0 left-0" style="opacity: 0;">
                        <img id="frame3" src="/src/images/Property-1-Group-20-3.svg"
                            class="absolute w-45 h-30 top-0 left-0" style="opacity: 0;">
                    </div>
                </div>
                <div class="flex gap-3 pb-4 max-md:mt-2">
                    <a href="https://www.instagram.com/nimbumirchimedia/" target="_blank"
                        class="group relative flex items-center justify-center bg-black rounded-lg p-2 w-12 h-12 md:w-11 md:h-11">

                        <img src="/src/images/instagram.svg" alt="Instagram"
                            class="object-cover group-hover:hidden">
                        <img src="/src/images/instagram_colored.svg" alt="Instagram"
                            class="object-cover hidden group-hover:inline">

                    </a>
                    <a href="https://www.facebook.com/people/Nimbu-Mirchi-Media-Solutions/100063895876433/?ref=br_tf#"
                        target="_blank"
                        class="group relative flex items-center justify-center bg-black rounded-lg p-2 w-12 h-12 md:w-11 md:h-11">

                        <img src="/src/images/facebook.svg" alt="Facebook"
                            class="object-cover group-hover:hidden">
                        <img src="/src/images/facebook_colored.svg" alt="Facebook"
                            class="object-cover hidden group-hover:inline-block">

                    </a>
                    <a href="https://x.com/nimbu_mirchi" target="_blank"
                        class="group relative flex items-center justify-center bg-black rounded-lg p-2 w-12 h-12 md:w-11 md:h-11">

                        <img src="/src/images/twitter.svg" alt="Twitter"
                            class="object-cover group-hover:hidden">
                        <img src="/src/images/x_colored.svg" alt="Twitter"
                            class="object-cover hidden group-hover:inline-block">

                    </a>
                    <a href="https://www.youtube.com/channel/UCSES31GyNYya9afpuVtvQQg" target="_blank"
                        class="group relative flex items-center justify-center bg-black rounded-lg p-2 w-12 h-12 md:w-11 md:h-11 ">

                        <img src="/src/images/youtube.svg" alt="YouTube"
                            class="object-cover group-hover:hidden">
                        <img src="/src/images/youtube_colored.svg" alt="YouTube"
                            class="object-cover hidden group-hover:inline-block">

                    </a>
                </div>
            </div>

            <div class="flex flex-row md:justify-between space-y-1 md:space-y-8 gap-20 md:gap-0">
                <div class="space-y-5 md:space-y-8">
                    <div>
                        <h4 class="uppercase opacity-50 font-semibold">Expertise</h4>
                    </div>
                    <div>
                        <ul class="text-sm space-y-2">
                            <li><a href="/expertise/documentaries.html" class="">Documentaries</a></li>
                            <li><a href="/expertise/ads.html" class="">Ads</a></li>
                            <li><a href="/expertise/branded-content.html" class="">Branded Content</a></li>
                            <li><a href="/expertise/after-movies.html" class="">After Movies</a></li>
                            <li><a href="/expertise/reality-shows.html" class="">Reality Shows</a></li>
                            <li><a href="/expertise/music-videos.html" class="">Music Videos</a></li>

                        </ul>
                    </div>
                </div>
                <div class="space-y-5 md:space-y-8">
                    <div>
                        <h4 class="uppercase opacity-50 font-semibold">Explore</h4>
                    </div>
                    <div>
                        <ul class="text-sm space-y-2">
                            <li><a href="/about.html" class="">About</a></li>
                            <li><a href="/about.html#team" class="">Team</a></li>
                            <li><a href="/clients.html" class="">Clients</a></li>
                            <li><a href="/contact.html" class="">Contact</a></li>

                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:justify-right md:text-right space-y-5">
                <div>
                    <h4 class="uppercase opacity-50 font-semibold">Contact</h4>
                </div>
                <div>
                    <p><a href="tel:(+91) 961-912-3595">(+91) 961-912-3595</a></p>
                    <p><a href="mailto:info@nimbumirchimedia.com">info@nimbumirchimedia.com</a></p>
                </div>
                <div>
                    <a href="/contact.html"
                        class="bg-white text-black px-4 py-2 font-bold hover:bg-[#235619] hover:text-white">
                        Request a Call</a>
                </div>
                <div class="flex flex-col md:items-end space-y-10 mt-6">
                    <img src="/src/images/footer-character.svg" alt="Logo" class="inline-block w-50">
                    <span>
                        &copy; 2025 — Copyright
                    </span>
                </div>
            </div>

        </div>

    </div>
    
    </footer>
`

export function setupJsScripts() {
    // Mobile Navbar
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');
    console.log('footer')

    // Open Menu
    document.getElementById('openMenu').addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        menuOverlay.classList.add('opacity-100', 'backdrop-blur-sm');
        menuOverlay.classList.remove('pointer-events-none')
        document.body.classList.add('no-scroll'); // unlock background
    });

    // Close Menu
    closeMenu.addEventListener('click', closeSideMenu);
    menuOverlay.addEventListener('click', closeSideMenu);

    function closeSideMenu() {
        mobileMenu.classList.add('translate-x-full');
        menuOverlay.classList.remove('opacity-100', 'backdrop-blur-sm');
        menuOverlay.classList.add('pointer-events-none')
        document.body.classList.remove('no-scroll'); // unlock background
    }

    const stickyElement = document.querySelector('.sticky-element');

    window.addEventListener("scroll", () => {
        if (window.scrollY > 3) {
            stickyElement.classList.add("border-b-2", "border-[#F47920]", "shadow-[0_0_10px_black]");
        } else {
            stickyElement.classList.remove("border-b-2", "border-[#F47920]", "shadow-[0_0_10px_black]");
        }
    })

    // Footer Image Animation
    const frames = [
        document.getElementById('frame1'),
        document.getElementById('frame2'),
        document.getElementById('frame3')
    ];

    let current = 0;

    setInterval(() => {
        frames[current].style.opacity = 0;
        current = (current + 1) % frames.length;
        frames[current].style.opacity = 1;
    }, 2000); // change frame every 1 second
}