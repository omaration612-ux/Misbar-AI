// 1. بيانات الفيتشر كاردز (6 كروت)
const heroes = [
    {n: "Sora", d: "مستقبل الفيديو من OpenAI"}, {n: "GPT-5", d: "الذكاء الخارق القادم"},
    {n: "Midjourney", d: "الفن التوليدي بأبهى صوره"}, {n: "Claude", d: "المساعد الأكثر أماناً"},
    {n: "Gemini", d: "قوة جوجل المطلقة"}, {n: "Luma AI", d: "تحويل النص لواقع"}
];

document.getElementById('featuredZone').innerHTML = heroes.map(h => `
    <div class="hero-card" style="background: linear-gradient(transparent, #000), url('https://picsum.photos/400/250?sig=${Math.random()}') center/cover;">
        <h3>${h.n}</h3><p>${h.d}</p>
    </div>
`).join('');

// 2. بيانات الأدوات (60 أداة)
const mockData = Array.from({length: 60}, (_, i) => ({
    name: "أداة ذكية " + (i + 1),
    desc: "وصف تفصيلي للأداة يوضح كيفية الاستفادة منها في مشاريعك اليومية.",
    price: i % 3 === 0 ? 'free' : 'paid',
    category: ["Writing", "Image", "Video", "Coding", "SEO"][i % 5]
}));

function render(data) {
    document.getElementById('mainGrid').innerHTML = data.map(item => `
        <div class="card">
            <span class="badge ${item.price}">${item.price === 'free' ? 'مجاني' : 'مدفوع'}</span>
            <div class="tool-logo" style="background:hsl(${Math.random()*360}, 60%, 50%)">${item.name[0]}</div>
            <div class="tool-name">${item.name}</div>
            <p class="tool-desc">${item.desc}</p>
            <a href="#" class="btn-try">جرب الآن</a>
        </div>
    `).join('');
}

// 3. تفعيل الفلترة والبحث
document.querySelectorAll('.tag-btn, .more-content button').forEach(btn => {
    btn.addEventListener('click', function() {
        const cat = this.dataset.category;
        render(cat === 'All' ? mockData : mockData.filter(x => x.category === cat));
    });
});

// 4. تفعيل مفتاح "مجاني فقط" مع التنبيه
document.getElementById('freeOnlySwitch').onchange = function() {
    alert("عذراً! لاستخدام ميزة الفلترة المتقدمة (مجاني فقط)، يجب عليك التسجيل أولاً.");
    this.checked = false;
};

// تشغيل أولي
window.onload = () => {
    render(mockData);
    particlesJS('particles-js', { "particles": { "number": { "value": 40 }, "opacity": { "value": 0.2 } } });
};
