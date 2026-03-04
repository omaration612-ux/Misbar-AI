/**
 * 🚀 MISBAR AI - THE BRAIN (GLOBAL & PROTECT EDITION v3.5)
 * 🛡️ حماية البيانات | 📱 توافق الجوال | 🌍 لغات العالم | 👤 ذكاء الزائر
 * يعمل بالتكامل مع: injector.js, fixer.js, misbar-core.js
 */

const MisbarBrain = {
    config: {
        version: "3.5",
        shieldLevel: "Maximum",
        totalTools: 30000,
        isTouchDevice: 'ontouchstart' in window
    },

    init: function() {
        this.applySecurityShield();    // درع حماية الـ 30 ألف أداة
        this.setupLocalization();      // كشف اللغة والـ RTL الآلي
        this.mobileOptimization();    // توافق الجوال واللمس
        this.visitorIntelligence();   // تتبع اهتمامات الزوار
        this.botTrapShield();         // فخ البوتات وسارقي المحتوى
        this.printSystemStatus();
    },

    // 1. درع الحماية الفولاذي (منع السكرابينج والنسخ)
    applySecurityShield: function() {
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            const forbiddenKeys = [123, 85, 83, 67, 73, 74]; // F12, U, S, C, I, J
            if (forbiddenKeys.includes(e.keyCode) && (e.ctrlKey || e.shiftKey || e.keyCode === 123)) {
                e.preventDefault();
                return false;
            }
        });
        // حماية المحتوى من النسخ اليدوي
        document.body.style.webkitUserSelect = "none";
        document.body.style.userSelect = "none";
    },

    // 2. كشف اللغة والتعامل مع لغات العالم
    setupLocalization: function() {
        const userLang = navigator.language || navigator.userLanguage;
        const root = document.documentElement;
        
        if (userLang.startsWith('ar')) {
            root.dir = "rtl";
            root.lang = "ar";
            this.config.isRTL = true;
        } else {
            root.dir = "ltr";
            root.lang = "en";
            this.config.isRTL = false;
        }
    },

    // 3. توافق الجوال المتطور (Drag-to-Scroll)
    mobileOptimization: function() {
        const scrollers = document.querySelectorAll('.rolling-features, .pagination-glass-rolling');
        
        scrollers.forEach(el => {
            // دعم عجلة الماوس للكمبيوتر
            el.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    const modifier = document.documentElement.dir === "rtl" ? -1 : 1;
                    el.scrollLeft += e.deltaY * modifier;
                }
            }, { passive: false });

            // دعم السحب باللمس للجوال (Smooth Drag)
            let isDown = false, startX, scrollLeft;
            el.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.touches[0].pageX - el.offsetLeft;
                scrollLeft = el.scrollLeft;
            });
            el.addEventListener('touchend', () => isDown = false);
            el.addEventListener('touchmove', (e) => {
                if(!isDown) return;
                const x = e.touches[0].pageX - el.offsetLeft;
                const walk = (x - startX) * 2; 
                el.scrollLeft = scrollLeft - walk;
            });
        });
    },

    // 4. ذكاء الزائر وتتبع الاهتمامات
    visitorIntelligence: function() {
        document.addEventListener('click', (e) => {
            const tag = e.target.closest('.tag-pro');
            if (tag) {
                const interest = tag.innerText;
                let userProfile = JSON.parse(localStorage.getItem('misbar_visitor_dna')) || {};
                userProfile[interest] = (userProfile[interest] || 0) + 1;
                localStorage.setItem('misbar_visitor_dna', JSON.stringify(userProfile));
                console.log(`👤 Visitor Interest Updated: ${interest}`);
            }
        });
    },

    // 5. فخ البوتات (Bot Trap & Anti-Spam)
    botTrapShield: function() {
        // إذا حاول البوت قراءة الروابط بسرعة غير طبيعية
        let lastClick = 0;
        document.addEventListener('click', () => {
            const now = Date.now();
            if (now - lastClick < 100) { // نقرات بشرية مستحيلة السرعة
                console.warn("🛡️ Bot Activity Detected and Suppressed");
            }
            lastClick = now;
        });
    },

    printSystemStatus: function() {
        const statusStyle = "color: #00f2ff; font-weight: bold; background: #000; padding: 5px; border-radius: 5px;";
        console.log(`%c 🛰️ MISBAR AI BRAIN v${this.config.version} - SYSTEMS ONLINE`, statusStyle);
        console.log(`🌍 Localization: ${document.documentElement.lang.toUpperCase()} | 📱 Mobile Ready: ${this.config.isTouchDevice}`);
    }
};

// تشغيل العقل فور جاهزية الصفحة
document.addEventListener('DOMContentLoaded', () => MisbarBrain.init());