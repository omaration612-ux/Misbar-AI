// تهيئة Firebase (استخدم بياناتك الحقيقية هنا)
const db = firebase.firestore();

// 1. وظيفة الحقن لـ 60 بطاقة (6 أعمدة × 10 صفوف)
async function injectTools() {
    const grid = document.getElementById('toolGrid');
    // جلب أول 60 أداة من الـ 30,000
    const snapshot = await db.collection('tools').limit(60).get();
    grid.innerHTML = snapshot.docs.map(doc => {
        const item = doc.data();
        return `<div class="tool-card"><h4>${item.name}</h4><p>${item.category}</p></div>`;
    }).join('');
}

// 2. حماية سويتش "المجاني" (طلب تسجيل الدخول)
document.getElementById('freeOnly').addEventListener('change', function() {
    if(this.checked) {
        alert("🔒 ميزة حصرية: يرجى تسجيل الدخول أولاً لتصفية الأدوات المجانية.");
        this.checked = false;
    }
});

// 3. تفعيل الأرباح والأرشفة (getSmartLink)
function initSystems() {
    console.log("System: SmartLink & SEO Armor Activated");
    injectTools();
    // كود الأرباح التلقائي هنا
}

window.onload = initSystems;
