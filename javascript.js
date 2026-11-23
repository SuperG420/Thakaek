
const places = [
    {
        id: 1,
        name: {la:"ພຣະທາດສີໂຄດຕະບອງ",en:"That Sikhottabong"},
        category:"culture",
        description:{
            la:"ປູຊະນີຍະສະຖານທາງພຸດທະສາສະໜາ ແລະ ມີຄຸນຄ່າທາງປະຫວັດສາດ.",
            en:"An important Buddhist monument with historical and cultural significance."
        },
        image:"https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=700",
        gps:"17.435982,104.740497"
    },
    {
        id: 2,
        name:{la:"ເຂດເມືອງເກົ່າທ່າແຂກ",en:"Old Thakhek Town"},
        category:"history",
        description:{
            la:"ຊົມອາຄານສະຖາປັດຕະຍະກຳເກົ່າ ແລະ ຮຽນຮູ້ປະຫວັດສາດເມືອງ.",
            en:"Explore historic architecture and learn about the history of Thakhek."
        },
        image:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700"
    },
    {
        id: 3,
        name:{la:"ທ່າຝຣັ່ງ",en:"Tha Falang"},
        category:"nature",
        description:{
            la:"ສະຖານທີ່ພັກຜ່ອນທ່າມກາງສາຍນ້ຳ ແລະ ພູຫີນປູນ.",
            en:"A natural recreation area surrounded by water and limestone scenery."
        },
        image:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=700"
    },
    {
        id: 4,
        name:{la:"ຖ້ຳນາງແອ່ນ",en:"Tham Nang Aen Cave"},
        category:"nature",
        description:{
            la:"ຖ້ຳທຳມະຊາດທີ່ມີຫີນງອກຫີນຍ້ອຍ.",
            en:"A natural cave featuring impressive limestone formations."
        },
        image:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=700"
    },
    {
        id: 5,
        name:{la:"ຖ້ຳພະ",en:"Tham Pha Fa Buddha Cave"},
        category:"culture",
        description:{
            la:"ຖ້ຳທີ່ມີພະພຸດທະຮູບບູຮານ ແລະ ມີຄຸນຄ່າທາງວັດທະນະທຳ.",
            en:"A cave known for ancient Buddha images and cultural significance."
        },
        image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=700"
    },
    {
        id: 6,
        name:{la:"ຖ້ຳຊຽງລຽບ",en:"Xieng Liap Cave"},
        category:"nature",
        description:{
            la:"ຖ້ຳຫີນປູນ ແລະ ທິວທັດທຳມະຊາດ.",
            en:"A limestone cave surrounded by natural scenery."
        },
        image:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=700"
    },
    {
        id: 7,
        name:{la:"ຖ້ຳຊ້າງ",en:"Tham Chang"},
        category:"nature",
        description:{
            la:"ແຫຼ່ງທ່ອງທ່ຽວຖ້ຳທຳມະຊາດ.",
            en:"A natural cave attraction in the limestone landscape."
        },
        image:"https://images.unsplash.com/photo-1511497584788-876760111969?w=700"
    },
    {
        id: 8,
        name:{la:"ອະນຸສອນວັນທີ 21 ມີນາ",en:"March 21 Memorial"},
        category:"history",
        description:{
            la:"ສະຖານທີ່ລະນຶກເຫດການສຳຄັນທາງປະຫວັດສາດ.",
            en:"A memorial commemorating an important historical event."
        },
        image:"https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=700"
    },
    {
        id: 9,
        name:{la:"ຂຸນນ້ຳດອນ",en:"Khoun Nam Don"},
        category:"nature",
        description:{
            la:"ສະຖານທີ່ທຳມະຊາດສຳລັບການສຳຫຼວດ.",
            en:"A natural destination for exploring the local environment."
        },
        image:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700"
    },
    {
        id: 10,
        name:{la:"ກຳແພງຫີນພູຄັນນາ",en:"Phu Khanna Great Wall"},
        category:"nature",
        description:{
            la:"ພູຫີນທຳມະຊາດ ແລະ ຈຸດຊົມວິວ.",
            en:"A natural rock formation and scenic viewpoint."
        },
        image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700"
    }
];

const translations = {
    la:{
        navHome:"ໜ້າຫຼັກ",
        navAbout:"ກ່ຽວກັບ",
        navPlaces:"ສະຖານທີ່",
        navGallery:"ຮູບພາບ",
        navContact:"ຕິດຕໍ່",
        heroEyebrow:"ຄົ້ນພົບຄຳມ່ວນ",
        heroTitle:"ພຣະທາດ<br>ເມືອງເກົ່າ",
        heroDescription:"ຄົ້ນພົບຄວາມງາມ ວັດທະນະທຳ ແລະ ປະຫວັດສາດແຫ່ງເມືອງທ່າແຂກ.",
        explore:"ຄົ້ນພົບສະຖານທີ່ →",
        aboutTitle:"ຄວາມງາມທີ່ມີເລື່ອງລາວ",
        aboutText:"ເມືອງທ່າແຂກ ເປັນເມືອງເອກຂອງແຂວງຄຳມ່ວນ ທີ່ມີຄວາມໂດດເດັ່ນດ້ານວັດທະນະທຳ ສະຖາປັດຕະຍະກຳ ແລະ ທຳມະຊາດ.",
        aboutText2:"ເວັບໄຊທ໌ນີ້ຈັດທຳຂຶ້ນເພື່ອແນະນຳ ແລະ ເຜີຍແຜ່ຂໍ້ມູນແຫຼ່ງທ່ອງທ່ຽວ.",
        destinationEyebrow:"ສຳຫຼວດເມືອງ",
        destinationTitle:"ແຫຼ່ງທ່ອງທ່ຽວ",
        destinationSubtitle:"ຄົ້ນພົບສະຖານທີ່ສຳຄັນໃນເມືອງທ່າແຂກ",
        filterAll:"ທັງໝົດ",
        filterCulture:"ວັດທະນະທຳ",
        filterNature:"ທຳມະຊາດ",
        filterHistory:"ປະຫວັດສາດ",
        search:"ຄົ້ນຫາສະຖານທີ່...",
        map:"ເບິ່ງແຜນທີ່ ↗",
        educationalNote:"ໝາຍເຫດ: ເວັບໄຊທ໌ນີ້ສ້າງຂຶ້ນເພື່ອຈຸດປະສົງດ້ານການສຶກສາເທົ່ານັ້ນ.",
        galleryTitle:"ຮູບພາບຄວາມປະທັບໃຈ",
        locationTitle:"ມາຄົ້ນພົບຄຳມ່ວນ",
        locationText:"ເມືອງທ່າແຂກ · ແຂວງຄຳມ່ວນ · ສປປ ລາວ",
        mapButton:"ເປີດ Google Maps ↗",
        footerText:"ເວັບໄຊທ໌ແນະນຳແຫຼ່ງທ່ອງທ່ຽວເມືອງທ່າແຂກ.",
        copyright:"© 2026 ໂຄງການເພື່ອການສຶກສາ."
    },

    en:{
        navHome:"Home",
        navAbout:"About",
        navPlaces:"Destinations",
        navGallery:"Gallery",
        navContact:"Contact",
        heroEyebrow:"DISCOVER KHAMMOUANE",
        heroTitle:"THAT<br>MUANG KAO",
        heroDescription:"Discover the beauty, culture and history of Thakhek.",
        explore:"Explore Destinations →",
        aboutTitle:"Beauty with a Story",
        aboutText:"Thakhek is the capital of Khammouane Province, known for its culture, architecture and natural attractions.",
        aboutText2:"This website was created to introduce and share information about local tourist attractions.",
        destinationEyebrow:"EXPLORE THE CITY",
        destinationTitle:"Tourist Destinations",
        destinationSubtitle:"Discover interesting places in Thakhek.",
        filterAll:"All",
        filterCulture:"Culture",
        filterNature:"Nature",
        filterHistory:"History",
        search:"Search destinations...",
        map:"View on Map ↗",
        educationalNote:"Note: This website was created for educational purposes only.",
        galleryTitle:"Photo Gallery",
        locationTitle:"Discover Khammouane",
        locationText:"Thakhek · Khammouane Province · Lao PDR",
        mapButton:"Open Google Maps ↗",
        footerText:"A tourism information website about Thakhek.",
        copyright:"© 2026 Educational Project."
    }
};

let currentLanguage = localStorage.getItem("websiteLanguage") || "la";
let currentFilter = "all";

const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");

function displayPlaces(){

    const keyword = searchInput.value.toLowerCase().trim();

    const filtered = places.filter(place => {

        const name = place.name[currentLanguage].toLowerCase();
        const englishName = place.name.en.toLowerCase();
        const description = place.description[currentLanguage].toLowerCase();

        const matchesFilter =
            currentFilter === "all" || place.category === currentFilter;

        const matchesSearch =
            name.includes(keyword) ||
            englishName.includes(keyword) ||
            description.includes(keyword);

        return matchesFilter && matchesSearch;
    });

    if(filtered.length === 0){
        grid.innerHTML = `<p class="no-results">${currentLanguage === "la" ? "ບໍ່ພົບສະຖານທີ່" : "No destinations found."}</p>`;
        return;
    }

    grid.innerHTML = filtered.map(place => {

        const query = place.gps || `${place.name.en}, Thakhek, Laos`;

        const mapUrl =
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

        const categoryNames = {
            la:{
                culture:"ວັດທະນະທຳ",
                nature:"ທຳມະຊາດ",
                history:"ປະຫວັດສາດ"
            },
            en:{
                culture:"Culture",
                nature:"Nature",
                history:"History"
            }
        };

        return `
            <article class="destination-card">
                <img src="${place.image}"
                     alt="${place.name[currentLanguage]}"
                     loading="lazy">

                <div class="destination-info">

                    <span class="destination-category">
                        ${categoryNames[currentLanguage][place.category]}
                    </span>

                    <h3>${place.name[currentLanguage]}</h3>

                    <p>${place.description[currentLanguage]}</p>

                    ${place.gps ? `<p>GPS: ${place.gps}</p>` : ""}

                    <a href="${mapUrl}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="map-link">
                       ${translations[currentLanguage].map}
                    </a>
                </div>
            </article>
        `;
    }).join("");
}

function changeLanguage(language){

    currentLanguage = language;

    document.documentElement.lang = language === "la" ? "lo" : "en";

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if(translations[language][key]){
            element.textContent = translations[language][key];
        }
    });

    // Preserve HTML line breaks in the hero title
    document.querySelectorAll("[data-i18n='heroTitle']").forEach(element => {
        element.innerHTML = translations[language].heroTitle;
    });

    searchInput.placeholder = translations[language].search;

    document.getElementById("laBtn").classList.toggle("active",language === "la");
    document.getElementById("enBtn").classList.toggle("active",language === "en");

    localStorage.setItem("websiteLanguage",language);

    displayPlaces();
}

document.getElementById("laBtn").addEventListener("click",() => {
    changeLanguage("la");
});

document.getElementById("enBtn").addEventListener("click",() => {
    changeLanguage("en");
});

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click",() => {

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        currentFilter = button.dataset.filter;

        displayPlaces();
    });
});

searchInput.addEventListener("input",displayPlaces);

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click",() => {
    navMenu.classList.toggle("active");
});

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click",() => {
        navMenu.classList.remove("active");
    });
});

// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",() => {
    topBtn.classList.toggle("show",window.scrollY > 400);
});

topBtn.addEventListener("click",() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// INITIALIZE

changeLanguage(currentLanguage);
