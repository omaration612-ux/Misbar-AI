// تشغيل النجوم المتصلة (كما في صورتك الأولى)
particlesJS('particles-js', {
    "particles": { "number": { "value": 100 }, "size": { "value": 1 }, "line_linked": { "enable": true, "opacity": 0.1 }, "move": { "speed": 1 } }
});

// توليد البطاقات (5 أعمدة في 9 صفوف = 45 بطاقة)
const grid = document.getElementById('toolsGrid');
for(let i=1; i<=45; i++) {
    const status = i % 2 === 0 ? 'مجاني' : 'ادفع';
    grid.innerHTML += `
        <div class="card">
            <span class="status-tag">${status}</span>
            <div style="background:rgba(255,255,255,0.03); width:45px; height:45px; border-radius:10px; margin-bottom:15px; display:flex; align-items:center; justify-content:center; font-size:20px;">🚀</div>
            <h4 style="margin:5px 0;">أداة مِسبار ${i}</h4>
            <p style="font-size:11px; color:#666; line-height:1.4;">وصف ذكي مختصر يوضح إمكانيات هذه الأداة...</p>
            <button style="width:100%; margin-top:15px; padding:8px; border-radius:8px; border:none; background:#2c2c2e; color:#fff; cursor:pointer;">استكشف</button>
        </div>
    `;
}

// توليد 10 نقاط للعداد
const dots = document.getElementById('pageDots');
for(let i=1; i<=10; i++) {
    dots.innerHTML += `<div class="dot ${i===1?'active':''}"></div>`;
}
