// 1. تشغيل الفضاء (Particles)
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#00b4d8" },
    "line_linked": { "enable": true, "color": "#00b4d8", "opacity": 0.2 },
    "move": { "speed": 1 }
  }
});

// 2. محرك الترقيم الرولنق (Logic)
function generatePagination(totalItems, itemsPerPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const container = document.getElementById('rollingPage');
    container.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('div');
        btn.className = `page-btn ${i === 1 ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => {
            document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // هنا تضع وظيفة جلب البيانات للصفحة i
            console.log("الانتقال لصفحة: " + i);
        };
        container.appendChild(btn);
    }
}

// 3. تشغيل مِسبار عند التحميل
window.onload = () => {
    generatePagination(30016, 60); // بناء الرولنق لـ 30 ألف أداة
    // هنا تضع كود الـ Firebase الخاص بك لجلب الـ 60 بطاقة الأولى
    console.log("مِسبار جاهز للاستكشاف.");
};
