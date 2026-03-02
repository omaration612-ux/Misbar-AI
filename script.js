// 1. تهيئة Firebase
const db = firebase.firestore();

// 2. الرصد التلقائي للغة الزائر (الذكاء اللغوي)
function autoDetectLanguage() {
    const userLang = navigator.language || navigator.userLanguage; 
    const shortLang = userLang.slice(0, 2); 
    const supportedLangs = ['ar', 'en', 'ja', 'fr', 'de', 'es', 'ru', 'ko', 'tr', 'zh'];
    
    if (supportedLangs.includes(shortLang)) {
        applyLanguageSettings(shortLang);
    } else {
        applyLanguageSettings('en');
    }
}

// 3. تطبيق إعدادات اللغة والأرشفة (SEO Armor)
function applyLanguageSettings(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = (lang === 'ar') 
            ? "رادارك الخاص للبحث الفوري عن أفضل حلول الذكاء الاصطناعي." 
            : "Your private radar for instant search of the best AI solutions.";
    }
    console.log("MISBAR AI: تفعيل اللغة والأرشفة لـ: " + lang);
}

// 4. العداد الحي في الفوتر
async function updateCounter() {
    db.collection('stats').doc('global').onSnapshot(doc => {
        const countElement = document.getElementById('toolsCounter');
        if (countElement) {
            countElement.innerText = (doc.data()?.total || 30016).toLocaleString();
        }
    });
}

// 5. حقن الأدوات (6 أعمدة × 10 صفوف)
async function injectTools() {
    const grid = document.getElementById('mainGrid');
    if (!grid) return;
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center;">جاري رصد الأدوات...</div>';
    
    try {
        const snapshot = await db.collection('tools').orderBy('createdAt', 'desc').limit(60).get();
        grid.innerHTML = snapshot.docs.map(doc => {
            const item = doc.data();
            return `
                <div class="tool-card">
                    <div style="background:${item.color || '#333'}; width:50px; height:50px; border-radius:12px; margin:0 auto"></div>
                    <h4>${item.name}</h4>
                    <p style="font-size:0.7rem; color:#666">${item.category}</p>
                </div>`;
        }).join('');
    } catch (error) {
        console.error("خطأ في الحقن:", error);
    }
}

// 6. حماية سويتش المجاني
const freeOnlySwitch = document.getElementById('freeOnly');
if (freeOnlySwitch) {
    freeOnlySwitch.addEventListener('change', function() {
        if(this.checked) {
            alert("🔒 ميزة حصرية: يرجى تسجيل الدخول أولاً.");
            this.checked = false;
        }
    });
}

// 7. تشغيل المحرك (التشغيل الموحد)
window.onload = () => {
    autoDetectLanguage(); // الرصد والذكاء اللغوي أولاً
    updateCounter();      // تحديث العداد الحي
    injectTools();        // حقن الـ 60 بطاقة
};
