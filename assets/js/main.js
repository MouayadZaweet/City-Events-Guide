// eventsData.js - Contains all (( events )) data as a dictionary object containing arrays for each language
const eventsData = {
        ar : [{
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
            featured: true,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.831308411242!2d36.38838171958924!3d33.42764208408412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e2583fffffff%3A0x3cf379285bd36740!2sFairgrounds!5e0!3m2!1sen!2sde!4v1759883932858!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
            featured: true,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.317017081226!2d36.478827675493264!3d32.517679073773024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151bced7bd045a2b%3A0xadef0df71dcf588c!2sRoman%20Theater%2C%20Bosra%20Archaeological%20Site!5e0!3m2!1sen!2s!4v1759406453077!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
            featured: true,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17870.47614313175!2d36.24516000341931!3d33.50166461156043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0a63e0b83ad%3A0x29407d81f19a40f7!2sFayez%20Mansour%2C%20Syria!5e0!3m2!1sen!2sde!4v1759883994332!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 4,
            title: "مهرجان الوادي للسياحة",
            date: "2025-07-20",
            time: "08:00 صباحاً - 08:00 مساءً",
            location: "وادي النصارى",
            city: "حمص",
            category: "مهرجانات",
            price: "0",
            description: "مهرجان الوادي للسياحة يشمل معارض للصناعات التقليدية والحرف اليدوية، وعروض فنية وتراثية، وأنشطة ترفيهية للعائلة.",
            image: "wadi_festival.webp",
            featured: false,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26214.914032388417!2d36.26754355232001!3d34.78419249398931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YLZhNi52Kkg2KfZhNit2LXZhg!5e0!3m2!1sen!2s!4v1759406865268!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
            featured: true,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.5140569373916!2d36.28008118264441!3d33.514018004686456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7355fec23c1%3A0x3f951decdbfa1342!2sDama%20Rose%20Hotel!5e0!3m2!1sen!2s!4v1759406919997!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
            featured: false,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.320533528836!2d36.28589047553685!3d33.51905097336236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7371b99333b%3A0xa5b08ff9776cf675!2sSibky%20Park!5e0!3m2!1sen!2s!4v1759406973047!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
            featured: false,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.4969921067795!2d35.7742987756272!3d35.51671417264082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526adb646e9b765%3A0xa16794f09265fb20!2sNational%20Theatre%20Center%20of%20Lattakia!5e0!3m2!1sen!2s!4v1759407159615!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
            featured: false,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.831308411242!2d36.38838171958924!3d33.42764208408412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e2583fffffff%3A0x3cf379285bd36740!2sFairgrounds!5e0!3m2!1sen!2sde!4v1759883932858!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        }],
        en : [
            {
            id: 1,
            title: "Damascus International Exhibition",
            date: "2025-08-27",
            time: "10:00 am - 10:00 pm",
            location: "City Exhibition Grounds",
            city: "Damascus",
            category: "Exhibitions",
            price: "0",
            description: "The Damascus International Fair is one of the oldest and most important exhibitions in the region, featuring participation from various Arab and foreign countries and showcasing the latest products and technologies in various fields.",
            image: "damascus_exhibition.webp",
            featured: true,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.831308411242!2d36.38838171958924!3d33.42764208408412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e2583fffffff%3A0x3cf379285bd36740!2sFairgrounds!5e0!3m2!1sen!2sde!4v1759883932858!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 2,
            title: "Bosra International Festival",
            date: "2025-07-15",
            time: "07:00 pm - 11:00 pm",
            location: "Bosra Archaeological Theatre",
            city: "Daraa",
            category: "Arts",
            price: "0",
            description: "The Bosra International Festival of Theatre and Musical Arts is held at the ancient Roman Theatre in Bosra and features local, Arab, and international performances.",
            image: "bosra_festival.webp",
            featured: true,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.317017081226!2d36.478827675493264!3d32.517679073773024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151bced7bd045a2b%3A0xadef0df71dcf588c!2sRoman%20Theater%2C%20Bosra%20Archaeological%20Site!5e0!3m2!1sen!2s!4v1759406453077!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 3,
            title: "Damascus International Marathon",
            date: "2025-11-07",
            time: "07:00 am - 12:00 pm",
            location: "Fayez Mansour - Race Start",
            city: "Damascus",
            category: "Sports",
            price: "90000",
            description: "A sports marathon with local and international participation, including various tracks for professionals and amateurs, aiming to spread the culture of sports and health among all groups.",
            image: "damascus_marathon.webp",
            featured: true,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17870.47614313175!2d36.24516000341931!3d33.50166461156043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0a63e0b83ad%3A0x29407d81f19a40f7!2sFayez%20Mansour%2C%20Syria!5e0!3m2!1sen!2sde!4v1759883994332!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 4,
            title: "Wadi Tourism Festival",
            date: "2025-07-20",
            time: "08:00 am - 08:00 pm",
            location: "Wadi al-Nasara",
            city: "Homs",
            category: "Festivals",
            price: "0",
            description: "Wadi Tourism Festival includes exhibitions of traditional industries and handicrafts, artistic and heritage performances, and recreational activities for the family.",
            image: "wadi_festival.webp",
            featured: false,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26214.914032388417!2d36.26754355232001!3d34.78419249398931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YLZhNi52Kkg2KfZhNit2LXZhg!5e0!3m2!1sen!2s!4v1759406865268!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 5,
            title: "Technology and Innovation Conference",
            date: "2026-01-12",
            time: "09:00 am - 05:00 pm",
            location: "Dama Rose Hotel",
            city: "Damascus",
            category: "Conferences",
            price: "10000",
            description: "A conference that aims to showcase the latest technological developments and innovations in the field of information and communications technology, with the participation of local and international experts.",
            image: "tech_conference.webp",
            featured: true,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.5140569373916!2d36.28008118264441!3d33.514018004686456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7355fec23c1%3A0x3f951decdbfa1342!2sDama%20Rose%20Hotel!5e0!3m2!1sen!2s!4v1759406919997!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 6,
            title: "Flower and Plant Exhibition",
            date: "2025-06-12",
            time: "09:00 am - 08:00 pm",
            location: "Al-Sabki Garden",
            city: "Damascus",
            category: "Exhibitions",
            price: "500",
            description: "An exhibition specializing in flowers and plants of all kinds, featuring nurseries and local producers, as well as workshops on home gardening and plant care.",
            image: "flowers_exhibition.webp",
            featured: false,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.320533528836!2d36.28589047553685!3d33.51905097336236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7371b99333b%3A0xa5b08ff9776cf675!2sSibky%20Park!5e0!3m2!1sen!2s!4v1759406973047!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 7,
            title: "Lattakia Cinema Festival",
            date: "2025-09-25",
            time: "06:00 pm - 11:00 pm",
            location: "Dar Al Fayhaa Cultural Theater",
            city: "Lattakia",
            category: "Cinema",
            price: "2000",
            description: "A cinema festival that showcases Syrian, Arab, and international films, and includes seminars and workshops on the film industry. It is held at the Al-Fayhaa Cultural Center in Lattakia.",
            image: "cinema_festival.webp",
            featured: false,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.4969921067795!2d35.7742987756272!3d35.51671417264082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526adb646e9b765%3A0xa16794f09265fb20!2sNational%20Theatre%20Center%20of%20Lattakia!5e0!3m2!1sen!2s!4v1759407159615!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 8,
            title: "International Book Exhibition",
            date: "2025-10-10",
            time: "09:00 am - 09:00 pm",
            location: "City Exhibition Grounds",
            city: "Damascus",
            category: "Exhibitions",
            price: "1000",
            description: "The Damascus International Book Fair features hundreds of local, Arab, and international publishing houses and offers a variety of cultural activities, seminars, and workshops.",
            image: "book_fair.webp",
            featured: false,
            map_frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.831308411242!2d36.38838171958924!3d33.42764208408412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e2583fffffff%3A0x3cf379285bd36740!2sFairgrounds!5e0!3m2!1sen!2sde!4v1759883932858!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        }
        ]
    };


// translation data (arabic and english)
const translations={
    ar: {
        "site title": "دليل فعاليات المدينة | الرئيسية",
            "home": "الرئيسية",
            "events": "الفعاليات",
            "about": "عن الدليل",
            "contact": "اتصل بنا",
            "team-title": "طاقم العمل",
            "mouayad zaweet": "مؤيد زعويط",
            "lead developer": "المطور الرئيسي والمنسق",
            "assistant developer": "مساعد تطوير",
            "assistant designer": "مساعد تصميم",
            "content creator": "تعبئة محتوى",
            "tester": "عمليات الاختبار",
            "mohammad idris": "محمد ادريس",
            "mona morad": "منى مراد",
            "alaa khedr": "علاء خضر",
            "kais abo-ras": "قيس أبو راس",
            "main events title": "أبرز الفعاليات",
            "explore button": "استكشف الفعاليات الآن!",
            "platform description": "منصة متخصصة في عرض الفعاليات الثقافية والترفيهية والتعليمية في مختلف مدن سوريا.",
            "copyright": "© 2025 دليل فعاليات المدينة. جميع الحقوق محفوظة.",
            "site name": "دليل فعاليات المدينة",
            "follow us": "تابعنا على",
            "quick links": "روابط سريعة",
            "syrian events": "الفعاليات في سوريا",
            "categories": "التصنيفات",
            "apply filters":"تطبيق الفلاتر",
            "clear filters":"مسح الفلاتر",
            "date":"التاريخ",
            "city":"المدينة",
            "all cities":"جميع المدن",
            "all cats":"جميع التصنيفات",
            "details":"التفاصيل",
            "related":"فعاليات ذات صلة",
            "contact info":"معلومات التواصل",
            "address":"العنوان",
            "full address":"دمشق، سوريا",
            "tele":"الهاتف",
            "email":"البريد الإلكتروني",
            "workhours":"ساعات العمل",
            "full workhours":"الأحد - الخميس: 9 ص - 5 م",
            "vacation":"الجمعة والسبت: مغلق",
            "sendmessage":"أرسل رسالة",
            "fullname":"الاسم الكامل *",
            "errorname":"الاسم الكامل مطلوب",
            "fullemail":"البريد الإلكتروني *",
            "erroremail":"البريد الإلكتروني مطلوب",
            "fulltele":"رقم الهاتف *",
            "errortele":"رقم الهاتف مطلوب ويجب أن يبدأ بـ 9",
            "fullmessage":"الرسالة *",
            "errormessage":"الرسالة مطلوبة",
            "sendmessage2":"إرسال الرسالة",
            "location":"موقعنا",
            "abouttitle":"عن دليل فعاليات سوريا",
            "aboutwelcome":"مرحباً بكم في دليل فعاليات سوريا",
            "aboutcontent1":"دليل فعاليات سوريا هو منصة رائدة تهدف إلى جمع ونشر المعلومات عن الفعاليات الثقافية والترفيهية والتعليمية في مختلف مدن سوريا. نسعى إلى إحياء الحركة الثقافية والفنية في سوريا بعد سنوات من التحديات، وإبراز الإبداع السوري في مختلف المجالات.",
            "aboutcontent2":"نؤمن بأن الثقافة والفنون هي جسر للتواصل بين الشعوب ووسيلة لإحياء التراث وتعزيز الهوية الوطنية. من خلال هذا الدليل، نتيح للجمهور فرصة الاستفادة من الفعاليات المتنوعة التي تقام في سوريا والمشاركة في بناء مجتمع مثقف وواعي.",
            "visionandgoal":"رؤيتنا ورسالتنا وهدفنا",
            "vision":"رؤيتنا",
            "visioncontent":"أن نكون المنصة الأولى في سوريا التي تجمع وتنظم وتعلن عن جميع الفعاليات الثقافية والترفيهية في مختلف المحافظات السورية.",
            "mission":"رسالتنا",
            "missioncontent":"نشر الثقافة والفنون في المجتمع السوري ودعم المبدعين والمواهب من خلال توفير منصة سهلة الوصول للتعريف بفعالياتهم وأنشطتهم.",
            "goal":"هدفنا",
            "goalcontent":"إحياء الحركة الثقافية في سوريا بعد التحرير والانفتاح على العالم، وتعزيز السياحة الداخلية من خلال الفعاليات المتنوعة.",
            "policytitle":"سياسات النشر والمعايير",
            "policycontent":"نلتزم في دليل فعاليات سوريا بمجموعة من السياسات والمعايير التي تضمن جودة المحتوى وملائمته لجميع الفئات:",
            "policy1":"نشر الفعاليات التي تلتزم بالأنظمة والقوانين السورية.",
            "policy2":"التحقق من صحة المعلومات قبل نشرها.",
            "policy3":"عدم نشر أي فعاليات تحتوي على محتوى مسيء أو غير أخلاقي.",
            "policy4":"التركيز على الفعاليات التي تثري الثقافة والفنون في سوريا.",
            "policy5":"إتاحة الفرصة للجميع لنشر فعالياتهم وفقاً لمعايير محددة.",
            "policy6":"الحفاظ على الحيادية وعدم التحيز لأي جهة أو تيار.",
            "policy7":"احترام حقوق الملكية الفكرية وذكر المصادر عند الاقتضاء."
    },

    en:{
        "site title": "City Events Guide | Home",
            "home": "Home",
            "events": "Events",
            "about": "About us",
            "contact": "Contact us",
            "team-title": "Meet Our Team",
            "mouayad zaweet": "Mouayad Zaweet",
            "lead developer": "Lead Developer",
            "assistant developer": "Assistant Developer",
            "assistant designer": "Assistant Designer",
            "content creator": "Content Creator",
            "tester": "Tester",
            "mohammad idris": "Mohammad Idris",
            "mona morad": "Mona Morad",
            "alaa khedr": "Alaa Khedr",
            "kais abo-ras": "Kais Abo-Ras",
            "main events title": "Main Events",
            "explore button": "Explore Events Now!",
            "platform description": "A platform specializing in showcasing cultural, entertainment, and educational events across various Syrian cities.",
            "copyright": "© 2025 City Events Guide. All rights reserved.",
            "site name": "City Events Guide",
            "follow us": "Follow Us",
            "quick links": "Quick Links",
            "syrian events": "Events in Syria",
            "categories": "Categories",
            "apply filters":"Apply Filters",
            "clear filters":"Clear Filters",
            "date":"Date",
            "city":"City",
            "all cities":"All Cities",
            "all cats":"All Categories",
            "details":"Details",
            "related":"Related Events",
            "contact info":"Contact Information",
            "address":"Address",
            "full address":"Damascus, Syria",
            "tele":"Telephone",
            "email":"Email",
            "workhours":"Working Hours",
            "full workhours":"Sunday - Thursday: 9 AM - 5 PM",
            "vacation":"Friday and Saturday: Closed",
            "sendmessage":"Send Message",
            "fullname":"Full Name *",
            "errorname":"Full name is required",
            "fullemail":"Email Address *",
            "erroremail":"Email address is required",
            "fulltele":"Phone Number *",
            "errortele":"Phone number is required and must start with 9",
            "fullmessage":"Message *",
            "errormessage":"Message is required",
            "sendmessage2":"Send Message",
            "location":"Our Location",
            "abouttitle":"About Syria Events Guide",
            "aboutwelcome":"Welcome to Syria Events Guide",
            "aboutcontent1":"Syria Events Guide is a leading platform that aims to collect and disseminate information about cultural, entertainment, and educational events in various Syrian cities. We strive to revive the cultural and artistic movement in Syria after years of challenges, highlighting Syrian creativity in various fields.",
            "aboutcontent2":"We believe that culture and arts are a bridge for communication between people and a mean to revive heritage and strengthen national identity. Through this guide, we provide the public with the opportunity to benefit from the diverse events held in Syria and participate in building an educated and Conscious society.",
            "visionandgoal":"Our Vision, Mission, and Goal",
            "vision":"Our Vision",
            "visioncontent":"To be a leading platform in Syria that collects, organizes, and announces all cultural and entertainment events across various Syrian provinces.",
            "mission":"Our Mission",
            "missioncontent":"To spread culture and arts in Syrian society and support creators and talents by providing an easily accessible platform to showcase their events and activities.",
            "goal":"Our Goal",
            "goalcontent":"To revive the cultural movement in Syria after liberation and support opening up to the world, and to promote domestic tourism through diverse events.",
            "policytitle":"Publishing Policies and Standards",
            "policycontent":"At Syria Events Guide, we adhere to a set of policies and standards that ensure the quality of content and its suitability for all audiences:",
            "policy1":"Publishing events that comply with Syrian regulations and laws.",
            "policy2":"Verifying the accuracy of information before publishing.",
            "policy3":"Not publishing any events that contain offensive or unethical content.",
            "policy4":"Focusing on events that enrich culture and arts in Syria.",
            "policy5":"Providing everyone the opportunity to publish their events according to specific standards.",
            "policy6":"Maintaining neutrality and not biasing towards any party or current.",
            "policy7":"Respecting intellectual property rights and citing sources when appropriate."

    }
}


    // Apply selected language to the page
    function applyLanguage(lang) {
        const data = translations[lang];
        document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = data[key] || key;
        });

        // Set direction and language attributes
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
    }
        
    // Language switcher
    const toggle = document.getElementById('languageToggle');
    lang = 'ar'; // Default language
    applyLanguage(lang);
    toggle.addEventListener('change', () => {
        lang = toggle.checked ? 'en' : 'ar';
        location.reload(false);
        applyLanguage(lang);
        localStorage.setItem('preferredLang', lang);
    });
        // Load saved or default language
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    toggle.checked = savedLang === 'en';
    applyLanguage(savedLang);
// Utility functions

/* Format date string to localized Arabic format */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-SY', options);
}

/* Get all featured events from eventsData */
function getFeaturedEvents() {
    return eventsData[lang].filter(event => event.featured);
}

/* Get events by specific category */
function getEventsByCategory(category) {
    return eventsData[lang].filter(event => event.category === category);
}

/* Get events by specific city */
function getEventsByCity(city) {
    return eventsData[lang].filter(event => event.city === city);
}

/* Find event by ID */
function getEventById(id) {
    return eventsData[lang].find(event => event.id == id);
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

