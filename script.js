// تشغيل الجزيئات (الفضاء)
particlesJS('particles-js', {
    "particles": { "number": { "value": 80 }, "color": { "value": "#ffffff" }, "size": { "value": 2 }, "move": { "speed": 1 } }
});

// مصفوفة الألوان المتدرجة (هوية مِسبار)
const gradients = [
    'linear-gradient(45deg, #ff3b30, #ff9500)',
    'linear-gradient(45deg, #34c759, #32ade6)',
    'linear-gradient(45deg, #007aff, #00d1ff)',
    'linear-gradient(45deg, #af52de, #ff2d55)'
];

// توليد الـ 48 بطاقة (6 في 8)
const grid = document.getElementById('toolsGrid');
for(let i=1; i<=48; i++) {
    grid.innerHTML += `
        <div class="card">
            <div class="icon" style="background:${gradients[i%4]}">${String.fromCharCode(64+(i%26||1))}</div>
            <div style="font-weight:bold; font-size:14px;">أداة ذكاء ${i}</div>
            <button style="background:#fff; border:none; border-radius:8px; padding:8px; width:100%; margin-top:12px; font-weight:bold; cursor:pointer;">استكشف</button>
        </div>
    `;
}

// توليد العداد
const nums = document.getElementById('pageNumbers');
for(let i=1; i<=10; i++) {
    nums.innerHTML += `<span class="num ${i===1?'active':''}">${i}</span>`;
}