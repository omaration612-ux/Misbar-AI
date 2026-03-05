/**
 * 🛰️ MISBAR AI - DATA PRO ENGINE
 * Integrated: Data Engine (Local) + Firebase Bridge (Cloud)
 * وظيفة الملف: إدارة الـ 30,000 أداة وتأمين تدفق البيانات من السحابة للواجهة
 */

// إعدادات فايربيس (مستخرجة من ملف bridge القديم)
const firebaseConfig = {
    apiKey: "AIzaSyBzG7ZeOr6uoKbCPoodlJiw2ZmiiVwTDxY",
    authDomain: "misbar-2026.firebaseapp.com",
    projectId: "misbar-2026",
    storageBucket: "misbar-2026.firebasestorage.app",
    messagingSenderId: "299387766091",
    appId: "1:299387766091:web:cd36930b732b85d82214ce"
};

const MisbarDataPro = {
    // 1. البيانات المحلية (Hardcoded للأدوات الأساسية)
    localTools: [
        { name: "ChatGPT", desc: "أقوى مساعد ذكي للكتابة والبحث وتحليل البيانات", link: "https://openai.com", price: "freemium", img: "https://logo.clearbit.com/openai.com", category: "Writing" },
        { name: "Sora", desc: "توليد فيديوهات واقعية من النصوص بدقة سينمائية", link: "https://openai.com/sora", price: "paid", img: "https://logo.clearbit.com/openai.com", category: "Video" },
        { name: "Midjourney", desc: "رائد توليد الصور الفنية والاحترافية بجودة فائقة", link: "https://midjourney.com", price: "paid", img: "https://logo.clearbit.com/midjourney.com", category: "Image" },
        { name: "Leonardo AI", desc: "توليد صور فنية مع ميزات يومية مجانية", link: "https://leonardo.ai", price: "freemium", img: "https://logo.clearbit.com/leonardo.ai", category: "Image" },
        { name: "Claude 3", desc: "مساعد ذكي يمتاز بدقة لغوية مذهلة في العربية", link: "https://anthropic.com", price: "freemium", img: "https://logo.clearbit.com/anthropic.com", category: "Writing" }
        // يمكنك إضافة المزيد هنا أو سحبها من JSON
    ],

    cloudTools: [],
    lastDoc: null,
    itemsPerPage: 50,

    /**
     * تشغيل المحرك وجلب أول دفعة من البيانات
     */
    init: async function() {
        console.log("🛰️ Data Pro: Awakening the Data Giant...");
        try {
            // دمج البيانات المحلية مع السحابية (اختياري)
            const cloudData = await this.fetchFromFirebase();
            this.cloudTools = [...this.localTools, ...cloudData];
            
            // إرسال إشارة للمحقن (Injector) بأن البيانات جاهزة
            if (typeof MisbarInjector !== 'undefined') {
                MisbarInjector.allTools = this.cloudTools;
                MisbarInjector.renderTools();
            }
        } catch (e) {
            console.error("🛰️ Data Pro Error:", e);
            // في حال فشل السحابة، اعتمد على البيانات المحلية
            if (typeof MisbarInjector !== 'undefined') {
                MisbarInjector.allTools = this.localTools;
                MisbarInjector.renderTools();
            }
        }
    },

    /**
     * جلب البيانات من Firebase Firestore
     */
    fetchFromFirebase: async function() {
        // ملاحظة: تأكد من استدعاء مكتبات Firebase في index.html قبل هذا الملف
        console.log("☁️ Data Pro: Fetching from Cloud...");
        // منطق جلب البيانات (Pagination) المستخلص من ملف bridge
        // يعود بمصفوفة الأدوات
        return []; // سيتم ملؤه من قاعدة بياناتك الحقيقية
    },

    /**
     * بوت إصلاح الصور المكسورة
     */
    fixImage: function(img) {
        img.onerror = null;
        const toolName = img.getAttribute('alt') || 'AI';
        img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(toolName)}&background=00f2ff&color=000&bold=true`;
    }
};

// تشغيل المحرك
MisbarDataPro.init();