// إعداد Firebase
const db = firebase.firestore();

// 1. تحديث العداد
async function loadCounter() {
    db.collection('stats').doc('global').onSnapshot(doc => {
        document.getElementById('toolsCount').innerText = (doc.data()?.total || 30016).toLocaleString();
    });
}

// 2. حقن الـ 60 بطاقة
async function fetchTools() {
    const grid = document.getElementById('toolsGrid');
    const snapshot = await db.collection('tools').limit(60).get();
    
    grid.innerHTML = snapshot.docs.map(doc => {
        const data = doc.data();
        return `
            <div class="tool-card">
                <div class="status-badge ${data.type}">${data.type}</div>
                <div class="icon-box">${data.name[0]}</div>
                <h4>${data.name}</h4>
            </div>`;
    }).join('');
}

// 3. حماية سويتش المجاني
document.getElementById('freeOnly').addEventListener('change', function() {
    if(this.checked) {
        alert("🔒 يتطلب تفعيل فلتر المجاني تسجيل الدخول أولاً.");
        this.checked = false;
    }
});

// تشغيل المحرك
window.onload = () => {
    loadCounter();
    fetchTools();
};
