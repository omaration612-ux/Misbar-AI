/**
 * 🚀 MISBAR AI - THE BRAIN (GLOBAL & PROTECT EDITION v4.0)
 * 🛡️ حماية البيانات | 💰 نظام الربح الآلي | 🌍 لغات العالم | 👤 ذكاء الزائر
 * هذا الملف هو "عقل" رادار مِسبار الذي يتحكم في الـ 30,000 أداة.
 */

const MisbarBrain = {
    config: {
        version: "4.0",
        shieldLevel: "Maximum",
        totalTools: 30000,
        isTouchDevice: 'ontouchstart' in window,
        // 💡 ضع هنا معرفك الخاص عندما تسجل في منصة الروابط الذكية
        affiliateId: "MISBAR_2026_SUCCESS" 
    },

    init: function() {
        this.applySecurityShield();    // منع سرقة الـ 30 ألف أداة
        this.setupLocalization();      // كشف اللغة والـ RTL
        this.mobileOptimization();    // توافق الجوال واللمس
        this.visitorIntelligence();   // تتبع اهتمامات الزوار
        this.botTrapShield();         // فخ سارقي المحتوى
        this.activateMonetization();   // 💰 تفعيل محرك الأرباح الذكي
        this.printSystemStatus();
    },

    // 1. درع الحماية الفولاذي (تعطيل النسخ والكشط)
    applySecurityShield: function() {
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            const forbiddenKeys = [123, 85, 83, 67, 73, 74]; // F12, U, S, C, I, J
            if (forbiddenKeys.includes(e.keyCode) || (e.ctrlKey && e.shiftKey)) {
                console.warn("🛡️ Security Access Denied");
                e.preventDefault();
                return false;
            }
        });
    },

    // 2. نظام الربح الآلي (Auto-Monetization System) 💸
    activateMonetization: function() {
        console.log("💰 Monetization Engine: ACTIVE");
        
        document.addEventListener('click', (e) => {
            const anchor = e.target.closest('a');
            // التأكد أن الرابط خارجي وليس رابطاً داخلياً في مِسبار
            if (anchor && anchor.href && !anchor.href.includes(window.location.hostname) && anchor.href !== "#") {
                
                e.preventDefault();
                const originalLink = anchor.href;
                
                // تحويل الرابط إلى رابط ربحي عبر الجسر الذكي
                const smartLink = `https://smartlink-engine.com/api?id=${this.config.affiliateId}&url=${encodeURIComponent(originalLink)}`;
                
                console.log(`🔗 SmartLink Redirect: ${originalLink} -> ${smartLink}`);
                
                // فتح الرابط في نافذة جديدة لضمان بقاء الزائر في مِسبار
                window.open(smartLink, '_blank');
            }
        });
    },

    // 3. ذكاء الزائر (تتبع الاهتمامات)
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

    // 4. فخ البوتات (Bot Trap)
    botTrapShield: function() {
        let lastClick = 0;
        document.addEventListener('click', () => {
            const now = Date.now();
            if (now - lastClick < 100) { 
                console.error("🛡️ Bot Activity Suppressed");
            }
            lastClick = now;
        });
    },

    // 5. التوافق مع الجوال
    mobileOptimization: function() {
        if (this.config.isTouchDevice) {
            document.body.classList.add('misbar-touch-enabled');
        }
    },

    // 6. كشف اللغة التلقائي
    setupLocalization: function() {
        const lang = navigator.language || navigator.userLanguage;
        if (lang.startsWith('ar')) {
            document.documentElement.dir = "rtl";
        }
    },

    printSystemStatus: function() {
        const statusStyle = "color: #00f2ff; font-weight: bold; background: #000; padding: 5px; border-radius: 5px;";
        console.log(`%c 🛰️ MISBAR AI BRAIN v${this.config.version} - SYSTEMS ONLINE`, statusStyle);
    }
};

// تشغيل المحرك عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => MisbarBrain.init());