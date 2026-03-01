// تشغيل النجوم المتصلة
particlesJS('particles-js', {
    "particles": { "number": { "value": 100 }, "size": { "value": 1 }, "line_linked": { "enable": true, "opacity": 0.1 }, "move": { "speed": 1 } }
});

// توليد البطاقات (صفحة واحدة 5 في 9 = 45 بطاقة)
const grid = document.getElementById('toolsGrid');
for(let i=1; i<=45; i++) {
    const type = i % 2 === 0 ? 'مجاني' : 'ادفع';
    grid.innerHTML += `
        <div class="card">
            <span class="badge">${type}</span>
            <div style="background:var(--glass); width:50px; height:50px; border-radius:12px; margin-bottom:15px; display:flex; align-items:center; justify-content:center; font-size:24px;">🚀</div>
            <h4 style="margin:5px 0;">أداة مِسبار ${i}</h4>
            <p style="font-size:12px; color:#777;">وصف مختصر جداً للأداة وقوتها التقنية...</p>
            <button style="width:100%; margin-top:15px; padding:10px; border-radius:10px; border:none; background:#2c2c2e; color:#fff; cursor:pointer;">استكشف</button>
        </div>
    `;
}

// توليد نقاط العداد (10 نقاط)
const dots = document.getElementById('pageDots');
for(let i=1; i<=10; i++) {
    dots.innerHTML += `<div class="dot ${i===1?'active':''}" style="width:8px; height:8px; background:#333; border-radius:50%; display:inline-block; margin:0 5px; cursor:pointer;"></div>`;
}

// حماية السويتش (للمسجلين فقط)
document.getElementById('pricingToggle').addEventListener('change', function() {
    alert("عذراً، يجب تسجيل الدخول للتحكم في نوع الفلترة.");
    this.checked = false;
});
