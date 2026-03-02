// 1. تفعيل نظام جزيئات الفضاء (Particles AI)
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00b4d8" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00b4d8", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
  },
  "retina_detect": true
});

// 2. وظيفة بناء الترقيم الرولنق (التحفة الفنية)
function setupRollingPagination(totalItems) {
    const itemsPerPage = 60; // شبكة 6x10
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const container = document.getElementById('paginationContainer');
    
    if(!container) return;
    container.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('div');
        btn.className = `page-btn ${i === 1 ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => {
            // تحديث الشكل عند الضغط
            document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // تمرير الرولنق ليكون الرقم في المنتصف
            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            
            console.log("مِسبار يعرض الآن صفحة رقم: " + i);
            // هنا تضع كود جلب البيانات من Firebase بناءً على الصفحة i
        };
        container.appendChild(btn);
    }
}

// 3. تشغيل مِسبار عند تحميل الصفحة
window.onload = () => {
    // تحديث عداد الأدوات للرقم المستهدف
    const counterEl = document.getElementById('toolsCounter');
    if(counterEl) counterEl.innerText = "30,016";

    // بناء الرولنق
    setupRollingPagination(30016);
    
    console.log("نظام مِسبار جاهز للعمل بالفخامة الكاملة.");
};
