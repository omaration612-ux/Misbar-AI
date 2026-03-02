// 1. إعدادات Firebase (تعريف واحد فقط للقاعدة)
const db = firebase.firestore();

// 2. العداد الحي (يحدث الرقم في الفوتر من Firebase)
async function updateToolsCount() {
    const toolsCounterDoc = db.collection('stats').doc('global');
    toolsCounterDoc.onSnapshot(doc => {
        const count = doc.data()?.total || 30016;
        const counterElement = document.getElementById('toolsCounter');
        if(counterElement) counterElement.innerText = count.toLocaleString();
    });
}

// 3. محرك الحقن (عرض 60 بطاقة بنظام 6 أعمدة × 10 صفوف)
async function injectTools() {
    const grid = document.getElementById('toolGrid');
    if(!grid) return;
    
    grid.innerHTML = '<div class="loader">جاري رصد الأدوات...</div>';
    
    // سحب أول 60 أداة من الـ 30,000
    try {
        const snapshot = await db.collection('tools').orderBy('createdAt', 'desc').limit(60).get();
        grid.innerHTML = snapshot.docs.map(doc => {
            const item = doc.data();
            return `
                <div class="tool-card">
                    <div class="tool-badge ${item.type}">${item.type === 'free' ? 'Free' : 'Paid'}</div>
                    <img src="${item.logo || 'placeholder.png'}" alt="${item.name}">
                    <h4>${item.name}</h4>
                    <p>${item.category}</p>
                    <a href="${getSmartLink(item.link)}" target="_blank" class="visit-btn">استكشف</a>
                </div>`;
        }).join('');
    } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
    }
}

// 4. حماية سويتش "المجاني" (بوابة التسجيل)
const freeSwitch = document.getElementById('freeOnly');
if(freeSwitch) {
    freeSwitch.addEventListener('change', function() {
        if(this.checked) {
            alert("🔒 ميزة حصرية: يرجى تسجيل الدخول أولاً لتصفية الأدوات المجانية.");
            this.checked = false;
            window.location.href = '#signin'; // توجيه للتسجيل
        }
    });
}

// 5. نظام الترقيم الزجاجي (الانزلاق باللمس يمين/يسار)
const pgBar = document.getElementById('rollingPage');
if(pgBar) {
    let isDown = false; let startX; let scrollLeft;
    pgBar.addEventListener('mousedown', (e) => {
        isDown = true; startX = e.pageX - pgBar.offsetLeft; scrollLeft = pgBar.scrollLeft;
    });
    pgBar.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - pgBar.offsetLeft;
        const walk = (x - startX) * 2; 
        pgBar.scrollLeft = scrollLeft - walk;
    });
    ['mouseup', 'mouseleave'].forEach(evt => window.addEventListener(evt, () => isDown = false));
}

// 6. الأرباح والأرشفة (SmartLink & SEO)
function getSmartLink(originalUrl) {
    return `https://misbar-ai.web.app/go?url=${encodeURIComponent(originalUrl)}`;
}

function changeLanguage(langCode) {
    document.documentElement.lang = langCode;
    console.log(`تم تغيير لغة الأرشفة إلى: ${langCode}`);
}

// 7. تشغيل كل الأنظمة مرة واحدة عند النشر
window.onload = () => {
    updateToolsCount(); // تشغيل العداد
    injectTools();      // حقن البيانات
    console.log("🚀 MISBAR AI: جميع الأنظمة (الحقن، الحماية، الأرباح) تعمل بنجاح.");
};
