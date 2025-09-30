// eventsData.js - Contains all (( events )) data
var eventsData = [
    {
        id: 1,
        title: "معرض دمشق الدولي",
        date: "2025-08-27",
        time: "10:00 صباحاً - 10:00 مساءً",
        location: "أرض المعارض - مدينة المعارض",
        city: "دمشق",
        category: "معارض",
        price: "0",
        description: "معرض دمشق الدولي هو أحد أقدم وأهم المعارض في المنطقة، يضم مشاركات من مختلف الدول العربية والأجنبية ويعرض أحدث المنتجات والتقنيات في مجالات متعددة.",
        image: "damascus_exhibition.webp",
        featured: true
    },
    {
        id: 2,
        title: "مهرجان بصرى الدولي",
        date: "2025-07-15",
        time: "07:00 مساءً - 11:00 مساءً",
        location: "مسرح بصرى الأثري",
        city: "درعا",
        category: "فنون",
        price: "0",
        description: "مهرجان بصرى الدولي للفنون المسرحية والموسيقية، يقام في المسرح الروماني الأثري ببصرى ويضم عروضاً محلية وعربية ودولية.",
        image: "bosra_festival.webp",
        featured: true
    },
    {
        id: 3,
        title: "ماراثون دمشق الدولي",
        date: "2025-11-07",
        time: "07:00 صباحاً - 12:00 ظهراً",
        location: "فايز منصور - بداية السباق",
        city: "دمشق",
        category: "رياضة",
        price: "90000",
        description: "ماراثون رياضي بمشاركة محلية ودولية، يشمل مسارات مختلفة للمحترفين والهواة، ويهدف إلى نشر ثقافة الرياضة والصحة بين جميع الفئات.",
        image: "damascus_marathon.webp",
        featured: true
    },
    {
        id: 4,
        title: "مهرجان الوادي للسياحة",
        date: "2025-07-20",
        time: "08:00 صباحاً - 08:00 مساءً",
        location: "وادي النضارة",
        city: "حمص",
        category: "مهرجانات",
        price: "0",
        description: "مهرجان الوادي للسياحة يشمل معارض للصناعات التقليدية والحرف اليدوية، وعروض فنية وتراثية، وأنشطة ترفيهية للعائلة.",
        image: "wadi_festival.webp",
        featured: false
    },
    {
        id: 5,
        title: "مؤتمر التكنولوجيا والابتكار",
        date: "2026-01-12",
        time: "09:00 صباحاً - 05:00 مساءً",
        location: "فندق داما روز",
        city: "دمشق",
        category: "مؤتمرات",
        price: "10000",
        description: "مؤتمر يهدف إلى عرض أحدث التطورات التكنولوجية والابتكارات في مجال تكنولوجيا المعلومات والاتصالات، بمشاركة خبراء محليين ودوليين.",
        image: "tech_conference.webp",
        featured: true
    },
    {
        id: 6,
        title: "معرض الزهور والنباتات",
        date: "2025-06-12",
        time: "09:00 صباحاً - 08:00 مساءً",
        location: "حديقة السبكي",
        city: "دمشق",
        category: "معارض",
        price: "500",
        description: "معرض متخصص بالزهور والنباتات بمختلف أنواعها، يضم مشاتل ومنتجين محليين، وورش عمل عن الزراعة المنزلية والعناية بالنباتات.",
        image: "flowers_exhibition.webp",
        featured: false
    },
    {
        id: 7,
        title: "مهرجان اللاذقية السينمائي",
        date: "2025-09-25",
        time: "06:00 مساءً - 11:00 مساءً",
        location: "مسرح دار الفيحاء للثقافة",
        city: "اللاذقية",
        category: "سينما",
        price: "2000",
        description: "مهرجان سينمائي يعرض أفلاماً سورية وعربية ودولية، ويشمل ندوات وورش عمل عن صناعة السينما، ويقام في دار الفيحاء للثقافة باللاذقية.",
        image: "cinema_festival.webp",
        featured: false
    },
    {
        id: 8,
        title: "معرض الكتاب الدولي",
        date: "2025-10-10",
        time: "09:00 صباحاً - 09:00 مساءً",
        location: "أرض المعارض - مدينة المعارض",
        city: "دمشق",
        category: "معارض",
        price: "1000",
        description: "معرض الكتاب الدولي في دمشق يضم مئات دور النشر المحلية والعربية والعالمية، ويقدم أنشطة ثقافية متنوعة وندوات وورش عمل.",
        image: "book_fair.webp",
        featured: false
    }
];

// Utility functions

/* Format date string to localized Arabic format */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-SY', options);
}

/* Get all featured events from eventsData */
function getFeaturedEvents() {
    return eventsData.filter(event => event.featured);
}

/* Get events by specific category */
function getEventsByCategory(category) {
    return eventsData.filter(event => event.category === category);
}

/* Get events by specific city */
function getEventsByCity(city) {
    return eventsData.filter(event => event.city === city);
}

/* Find event by ID */
function getEventById(id) {
    return eventsData.find(event => event.id == id);
}

// Common functions used across all pages
function initCommonFunctionality() {
    // Landing Page logic
    if (!sessionStorage.getItem('landingShown')) {
        $('header, main, footer').hide();
        $('#landingPage').show();
        
        setTimeout(function () {
            $('#landingPage').fadeOut(600, function () {
                $('header, main, footer').fadeIn(600);
            });
            sessionStorage.setItem('landingShown', 'true');
        }, 4000); // Duration of Landing Page is 4s
    } else {
        $('#landingPage').remove();
    }

    // Mobile menu toggle
    $('#hamburger').click(function () {
        $('#navMenu').toggleClass('active');
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });

    $('#backToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Prevent right-click
    $(document).bind('contextmenu', function (e) {
        showToast('الحقوق محفوظة © دليل فعاليات المدينة');
        return false;
    });
}

// Show toast message
function showToast(message) {
    // Create toast element
    var toast = $('<div>', {
        class: 'toast-message',
        text: message,
        css: {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: 'rgb(207,244,252)',
            color: 'rgb(5,81,96)',
            padding: '10px 20px',
            borderRadius: '4px',
            zIndex: '9999',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            fontWeight: 'bold'
        }
    });

    // Append to body
    $('body').append(toast);

    // Remove after 3 seconds
    setTimeout(function () {
        toast.fadeOut(function () {
            $(this).remove();
        });
    }, 3000);
}

// Initialize common functionality when document is ready
$(document).ready(function () {
    initCommonFunctionality();
    console.log("دليل فعاليات المدينة - لقد تم تحميل الموقع بنجاح");

});

