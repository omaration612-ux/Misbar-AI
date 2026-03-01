// 1. توليد كروت الفيتشر الستة
const featuredTools = [
    {n: "Sora Video", d: "تحويل النص لفيديو واقعي"}, {n: "GPT-5 Turbo", d: "الجيل القادم من الذكاء"},
    {n: "Midjourney", d: "توليد صور سينمائية"}, {n: "Claude 3.5", d: "المساعد الأذكى للأعمال"},
    {n: "Gemini Pro", d: "قوة جوجل المتكاملة"}, {n: "Luma AI", d: "عالم ثلاثي الأبعاد"}
];

const featuredZone = document.getElementById('featuredZone');
featuredZone.innerHTML = featuredTools.map(t => `
    <div class="hero-card" style="background: linear-gradient(transparent, #000), url('https://picsum.photos/400/200?sig=${Math.random()}') center/cover;">
        <h3 style="margin:0; font-size:1.1rem;">${t.n}</h3>
        <p style="margin:5px 0 0; font-size:0.75rem; color:#ccc;">${t.d}</p>
    </div>
`).join('');

// 2. بيانات الأدوات (60 أداة محاكية)
const mockData = Array.from({length: 60}, (_, i) => ({
    name: "أداة " + (i + 1),
    desc: "أداة ذكية متطورة تساعدك على إنجاز مهامك في مجال " + ["التصميم", "الكتابة", "البرمجة"][i%3] + " بكفاءة.",
    price: i % 3 === 0 ? 'free' : 'paid',
    category: ["Writing", "Image", "Video", "Coding"][i % 4]
}));

function render(data) {
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = data.map(item => `
        <div class="card">
            <span class="badge ${item.price}">${item.price === 'free' ? 'مجاني' : 'مدفوع'}</span>
            <div class="tool-logo" style="background:hsl(${Math.random()*360}, 60%, 45%)">${item.name[0]}</div>
            <div style="font-weight:bold; margin-bottom:8px;">${item.name}</div>
            <p style="color:#8e8e93; font-size:0.75rem; line-height:1.4;">${item.desc}</p>
            <a href="#" class="btn-try">جرب الآن</a>
        </div>
    `).join('');
}

// 3. تفعيل الفلترة والبحث
document.querySelectorAll('.tag-btn, .more-content button').forEach(btn => {
    btn.addEventListener('click', function() {
        const cat = this.dataset.category;
        if(cat) render(cat === 'All' ? mockData : mockData.filter(x => x.category === cat));
    });
});

// 4. تنبيه مفتاح مجاني فقط
document.getElementById('freeOnlySwitch').onchange = function() {
    alert("عذراً! لاستخدام ميزة 'مجاني فقط'، يجب عليك تسجيل الدخول أولاً.");
    this.checked = false;
};

// تشغيل أولي
window.onload = () => {
    render(mockData);
    particlesJS('particles-js', { "particles": { "number": { "value": 30 }, "opacity": { "value": 0.2 } } });
};
