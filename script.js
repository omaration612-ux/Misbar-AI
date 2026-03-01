// تشغيل النجوم في الخلفية
particlesJS('particles-js', {
    "particles": { "number": { "value": 80 }, "color": { "value": "#ffffff" }, "size": { "value": 2 }, "move": { "speed": 1 } }
});

const gradients = [
    'linear-gradient(45deg, #ff3b30, #ff9500)',
    'linear-gradient(45deg, #34c759, #32ade6)',
    'linear-gradient(45deg, #007aff, #00d1ff)',
    'linear-gradient(45deg, #af52de, #ff2d55)'
];

const grid = document.getElementById('toolsGrid');

// توليد البطاقات بالحجم الكبير
for(let i=1; i<=48; i++) {
    grid.innerHTML += `
        <div class="card">
            <div class="icon" style="background:${gradients[i%4]}">AI</div>
            <div style="font-weight:bold; font-size:16px; margin-bottom:15px;">أداة ذكاء مِسبار ${i}</div>
            <button style="background:rgba(255,255,255,0.1); color:#fff; border:1px solid #444; border-radius:10px; padding:10px; width:100%; cursor:pointer; font-weight:bold;" onclick="alert('سوف يتم التوجه للأداة')">استكشف الآن</button>
        </div>
    `;
}
