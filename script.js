// 1. إعداد خلفية الجزيئات (Particles)
particlesJS('particles-js', { "particles": { "number": { "value": 40 }, "opacity": { "value": 0.2 }, "move": { "speed": 0.6 } } });

// 2. بيانات كروت التميز الستة (Featured Cards)
const featuredTools = [
    { name: "Sora Video", desc: "تحويل النصوص لفيديوهات واقعية.", color: "#ff3b30" },
    { name: "Claude 3.5", desc: "المساعد الأذكى لتحليل البيانات.", color: "#007aff" },
    { name: "GPT-5 Turbo", desc: "مستقبل المحادثة الذكية القادم.", color: "#34c759" },
    { name: "Midjourney", desc: "الفن التوليدي بأعلى دقة سينمائية.", color: "#ff9500" },
    { name: "Luma AI", desc: "إنشاء عوالم ثلاثية الأبعاد من النص.", color: "#5856d6" },
    { name: "Gemini Pro", desc: "قوة جوجل المتكاملة في يدك.", color: "#00d1ff" }
];

// 3. قاعدة بيانات تجريبية (60 أداة) لملء الرادار
const mockData = Array.from({ length: 60 }, (_, i) => ({
    name: ["Jasper", "Copy.ai", "Leonardo", "Runway", "Synthesia", "Canva AI"][i % 6] + " " + (i + 1),
    desc: "أداة ذكاء اصطناعي احترافية تساعدك في تطوير أعمالك وإنجاز مهامك بسرعة فائقة.",
    price: i % 3 === 0 ? 'free' : 'paid',
    category: ["Writing", "Image Generation", "Video Editing", "Coding AI"][i % 4],
    color: `hsl(${i * 15}, 60%, 45%)`
}));

// 4. وظيفة عرض كروت التميز
const renderFeatured = () => {
    const zone = document.getElementById('featuredZone');
    zone.innerHTML = featuredTools.map(t => `
        <div class="hero-card" style="background: linear-gradient(transparent, #000), url('https://picsum.photos/400/200?sig=${Math.random()}') center/cover;">
            <h3 style="margin:0; font-size:1.1rem;">${t.name}</h3>
            <p style="margin:5px 0 0; font-size:0.75rem; color:#ccc;">${t.desc}</p>
        </div>
    `).join('');
};

// 5. وظيفة عرض شبكة الأدوات (الرادار)
function renderGrid(data) {
    const grid = document.getElementById('mainGrid');
    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:50px;">جاري تحديث الرادار... لا توجد أدوات حالياً.</div>`;
        return;
    }
    grid.innerHTML = data.map(item => `
        <div class="card">
            <span class="badge ${item.price}">${item.price === 'free' ? 'مجاني' : 'مدفوع'}</span>
            <div class="tool-logo" style="background:${item.color}">${item.name[0]}</div>
            <div style="font-weight:bold; margin-bottom:8px;">${item.name}</div>
            <p class="tool-desc">${item.desc}</p>
            <a href="#" class="btn-try">جرب الآن</a>
        </div>
    `).join('');
}

// 6. تفعيل البحث والفلترة
document.getElementById('smartSearch').oninput = (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = mockData.filter(x => x.name.toLowerCase().includes(val));
    renderGrid(filtered);
};

document.querySelectorAll('.tag-btn, .more-content button').forEach(btn => {
    btn.addEventListener('click', function() {
        const cat = this.dataset.category;
        if (cat === 'All') renderGrid(mockData);
        else if (cat) renderGrid(mockData.filter(x => x.category === cat));
    });
});

// 7. تفعيل مفتاح "مجاني فقط" مع التنبيه
document.getElementById('freeOnlySwitch').onchange = function() {
    alert("عذراً! لاستخدام ميزة 'مجاني فقط'، يجب عليك تسجيل الدخول أولاً.");
    this.checked = false;
};

// التشغيل عند تحميل الصفحة
window.onload = () => {
    renderFeatured();
    renderGrid(mockData);
};
