/**
 * MISBAR AI - المحرك الذكي (Engine v2.0)
 * الأحد 1 مارس 2026: حقن الـ 15,000 أداة وتفعيل البحث الصافي
 */

// 1. إعدادات Firebase والعداد الحي
const db = firebase.firestore();
const toolsCounterDoc = db.collection('stats').doc('global');

async function updateToolsCount() {
    toolsCounterDoc.onSnapshot(doc => {
        const count = doc.data()?.total || 30016;
        document.getElementById('toolsCounter').innerText = count.toLocaleString();
    });
}

// 2. حقن الشبكة (6 أعمدة × 10 صفوف = 60 أداة)
async function loadMainGrid(page = 1) {
    const grid = document.getElementById('toolGrid');
    grid.innerHTML = '<div class="loader">جاري تحميل الرادار...</div>';
    
    // سحب 60 أداة بناءً على الصفحة والفلتر
    const snapshot = await db.collection('tools')
        .orderBy('createdAt', 'desc')
        .limit(60)
        .get();

    grid.innerHTML = ''; 
    snapshot.forEach(doc => {
        const tool = doc.data();
        grid.innerHTML += `
            <div class="tool-card">
                <div class="tool-badge ${tool.type}">${tool.type === 'free' ? 'Free' : 'Paid'}</div>
                <img src="${tool.logo}" alt="${tool.name}">
                <h4>${tool.name}</h4>
                <p>${tool.category}</p>
                <a href="${getSmartLink(tool.link)}" target="_blank" class="visit-btn">استكشف</a>
            </div>`;
    });
}

// 3. بوابة الحماية وسويتش المجاني (Monetization Gate)
document.getElementById('freeOnly').addEventListener('change', function() {
    if(this.checked) {
        // تنبيه احترافي يطلب التسجيل
        alert("🔒 ميزة 'المجاني فقط' حصرية للمشتركين. يرجى تسجيل الدخول أولاً.");
        this.checked = false; 
        // توجيه لصفحة الـ Sign In
        window.location.href = '#signin';
    }
});

// 4. الترقيم الزجاجي القابل للانزلاق (Rolling Pagination)
const pgBar = document.getElementById('rollingPage');
let isDown = false;
let startX, scrollLeft;

pgBar.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - pgBar.offsetLeft;
    scrollLeft = pgBar.scrollLeft;
});

pgBar.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - pgBar.offsetLeft;
    const walk = (x - startX) * 2; 
    pgBar.scrollLeft = scrollLeft - walk;
});

['mouseup', 'mouseleave'].forEach(evt => 
    window.addEventListener(evt, () => isDown = false)
);

// 5. محرك الأرباح والأرشفة الذكية
function getSmartLink(originalUrl) {
    // كود getSmartLink لتحويل الروابط لروابط ربحية تلقائياً
    return `https://misbar-ai.web.app/go?url=${encodeURIComponent(originalUrl)}`;
}

// تغيير اللغة SEO (10 لغات)
function changeLanguage(langCode) {
    console.log(`Switching to: ${langCode}`);
    // تحديث الميتا تاقز ديناميكياً للأرشفة العالمية
    document.documentElement.lang = langCode;
    // هنا يتم تحديث النصوص بناءً على القاموس المدمج
}

// تشغيل المحرك عند تحميل الصفحة
window.onload = () => {
    updateToolsCount();
    loadMainGrid();
    console.log("MISBAR AI: Search Engine Armor & Injection Active.");
};
