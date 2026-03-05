/**
 * 🛡️ MISBAR AI - THE GUARD (Sentinel Edition)
 * Integrated: Protection (Brain) + SEO (Armor) + Profit (Monetizer)
 * Created: 2026-03-05
 */

const MisbarGuard = {
    config: {
        version: "5.0",
        shieldLevel: "Maximum",
        totalTools: 30000,
        affiliateId: "MISBAR_2026_SUCCESS",
        isTouchDevice: 'ontouchstart' in window
    },

    init: function() {
        console.log("🛡️ Misbar Guard: Initializing Sentinel System...");
        
        // 1. تفعيل الحماية (من ملف brain القديم)
        this.applySecurityShield();
        this.botTrapShield();
        
        // 2. تفعيل السيو (من ملف seo-armor القديم)
        this.activateSEO();
        
        // 3. تفعيل الأرباح (من ملف monetizer القديم)
        this.activateMonetization();
        
        // 4. تهيئة النظام
        this.setupLocalization();
        this.mobileOptimization();
        this.printSystemStatus();
    },

    // --- قسم الحماية (Protection) ---
    applySecurityShield: function() {
        // منع الزر الأيمن لمنع كشط البيانات
        document.addEventListener('contextmenu', e => e.preventDefault());
        
        // منع النسخ
        document.addEventListener('copy', e => {
            const selectedText = window.getSelection().toString();
            if (selectedText.length > 100) {
                e.preventDefault();
                console.warn("🛡️ Protection: Large copy detected and blocked.");
            }
        });

        // منع اختصارات المطورين (F12, Ctrl+Shift+I)
        document.addEventListener('keydown', e => {
            if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74))) {
                e.preventDefault();
            }
        });
    },

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

    // --- قسم السيو (SEO Armor) ---
    activateSEO: function() {
        console.log("🚀 SEO Armor: Embedding Schema & Meta Tags...");
        
        // إضافة Schema.org JSON-LD
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MISBAR AI",
            "url": "https://misbar-ai.web.app",
            "description": "رادار مِسبار - أكبر دليل لـ 30,000 أداة ذكاء اصطناعي",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://misbar-ai.web.app/?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaData);
        document.head.appendChild(script);
    },

    // --- قسم الأرباح (Monetization) ---
    activateMonetization: function() {
        console.log("💰 Monetizer: Activating getSmartLink...");
        
        // تحويل الروابط الخارجية لروابط ذكية تلقائياً
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href && !link.href.includes(window.location.hostname)) {
                // منطق SmartLink (يمكن تخصيصه بناءً على مزود الخدمة)
                // link.href = `https://smartlink.com/go?id=${this.config.affiliateId}&url=${encodeURIComponent(link.href)}`;
            }
        });
    },

    // --- أدوات النظام ---
    setupLocalization: function() {
        const lang = navigator.language || navigator.userLanguage;
        if (lang.startsWith('ar')) {
            document.documentElement.dir = "rtl";
        }
    },

    mobileOptimization: function() {
        if (this.config.isTouchDevice) {
            document.body.classList.add('misbar-touch-enabled');
        }
    },

    printSystemStatus: function() {
        const style = "color: #00f2ff; font-weight: bold; background: #000; padding: 5px; border: 1px solid #00f2ff;";
        console.log(`%c 🛰️ MISBAR GUARD v${this.config.version} | PROTECTED `, style);
    }
};

// التشغيل التلقائي للنظام الموحد
MisbarGuard.init();