// تشغيل الفضاء (النجوم المتصلة)
particlesJS('particles-js', {
    "particles": { "number": { "value": 100 }, "size": { "value": 1.5 }, "line_linked": { "enable": true, "opacity": 0.1 }, "move": { "speed": 0.8 } }
});

// توليد 45 بطاقة (5 أعمدة في 9 صفوف لكل صفحة)
const grid = document.getElementById('toolsGrid');
for(let i=1; i<=45; i++) {
    const isFree = i % 2 === 0 ? 'مجاني' : 'ادفع';
    grid.innerHTML += `
        <div class="card">
            <span class="status-tag">${isFree}</span>
            <div class="icon" style="background:rgba(255,255,255,0.05); width:50px; height:50px; border-radius:12px; margin-bottom:15px; display:flex; align-items:center; justify-content:center; font-weight:bold; color:#007aff;">AI</div>
            <h4 style="margin:5px 0;">أداة مِسبار ${i}</h4>
            <p style="font-size:11px; color:#666;">وصف مختصر جداً للأداة وقوتها في مساعدة المستخدم.</p>
            <button style="width:100%; padding:8px; border-radius:8px; border:none; background:#2c2c2e; color:#fff; cursor:pointer; margin-top:10px;">استكشف الآن</button>
        </div>
    `;
}

// توليد العداد (10 نقاط)
const dotsContainer = document.getElementById('pageDots');
for(let i=1; i<=10; i++) {
    dotsContainer.innerHTML += `<div class="dot ${i===1?'active':''}"></div>`;
}

// تنبيه لمسجل الدخول فقط (السويتش)
document.getElementById('pricingToggle').addEventListener('change', function() {
    if(!localStorage.getItem('isLoggedIn')) {
        alert("عذراً، يجب تسجيل الدخول للتحكم في نوع الفلترة (مجاني/مدفوع)");
        this.checked = false;
    }
});
