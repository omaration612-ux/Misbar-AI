// 1. بيانات كروت التميز الستة (التي طلبتها)
const featuredData = [
    { name: "Sora Video", desc: "تحويل النصوص لفيديوهات واقعية.", img: "https://picsum.photos/400/200?sig=1" },
    { name: "Claude 3.5", desc: "المساعد الأذكى لتحليل البيانات.", img: "https://picsum.photos/400/200?sig=2" },
    { name: "GPT-5 Turbo", desc: "مستقبل المحادثة الذكية القادم.", img: "https://picsum.photos/400/200?sig=3" },
    { name: "Midjourney", desc: "الفن التوليدي بأعلى دقة سينمائية.", img: "https://picsum.photos/400/200?sig=4" },
    { name: "Luma AI", desc: "إنشاء عوالم ثلاثية الأبعاد من النص.", img: "https://picsum.photos/400/200?sig=5" },
    { name: "Gemini Pro", desc: "قوة جوجل المتكاملة في يدك.", img: "https://picsum.photos/400/200?sig=6" }
];

// 2. مصفوفة الأدوات (الرادار) - تأكد أنها تحتوي على بيانات لكي لا تظهر رسالة "جاري التحديث"
const toolsData = Array.from({ length: 40 }, (_, i) => ({
    name: ["Jasper", "Copy.ai", "Leonardo", "Runway", "Synthesia"][i % 5] + " " + (i + 1),
    desc: "أداة ذكاء اصطناعي احترافية تساعدك في تطوير أعمالك وإنجاز مهامك بسرعة فائقة وبجودة عالية جداً.",
    price: i % 3 === 0 ? 'free' : 'paid',
    category: ["Writing", "Image Generation", "Video Editing", "Coding AI"][i % 4],
    color: `hsl(${i * 40}, 60%, 50%)`
}));

// 3. وظيفة عرض كروت التميز (Top Slider)
function renderFeatured() {
    const zone = document.getElementById('featuredZone');
    if (!zone) return;
    zone.innerHTML = featuredData.map(t => `
        <div class="hero-card" style="background: linear-gradient(transparent, #000), url('${t.img}') center/cover;">
            <h3 style="margin:0; font-size:1.1rem;">${t.name}</h3>
            <p style="margin:5px 0 0; font-size:0.75rem; color:#ccc;">${t.desc}</p>
        </div>
    `).join('');
}

// 4. وظيفة عرض شبكة الرادار (Main Grid)
function renderGrid(data) {
    const grid = document.getElementById('mainGrid');
    if (!grid) return;
    
    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:50px; color:#8e8e93;">جاري تحديث الرادار... لا توجد أدوات حالياً.</div>`;
        return;
    }

    grid.innerHTML = data.map(item => `
        <div class="card">
            <span class="badge ${item.price}">${item.price === 'free' ? 'مجاني' : 'مدفوع'}</span>
            <div class="tool-logo" style="background:${item.color}">${item.name[0]}</div>
            <div style="font-weight:bold; margin-bottom:8px; color:#fff;">${item.name}</div>
            <p class="tool-desc" style="color:#8e8e93; font-size:0.75rem; line-height:1.4;">${item.desc}</p>
            <a href="#" class="btn-try">جرب الآن</a>
        </div>
    `).join('');
}

// 5. تفعيل البحث والفلترة واللغات
window.onload = () => {
    // تشغيل الجزيئات
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', { "particles": { "number": { "value": 40 }, "opacity": { "value": 0.2 }, "move": { "speed": 0.6 } } });
    }

    // العرض الأولي
    renderFeatured();
    renderGrid(toolsData);

    // تفعيل البحث
    const searchInput = document.getElementById('smartSearch');
    if (searchInput) {
        searchInput.oninput = (e) => {
            const val = e.target.value.toLowerCase();
            const filtered = toolsData.filter(x => x.name.toLowerCase().includes(val) || x.category.toLowerCase().includes(val));
            renderGrid(filtered);
        };
    }

    // تفعيل أزرار الفلترة (بما فيها قائمة المزيد)
    document.querySelectorAll('.tag-btn, .more-content button').forEach(btn => {
        btn.addEventListener('click', function() {
            const cat = this.dataset.category || this.innerText;
            if (cat === 'الكل' || cat === 'All') {
                renderGrid(toolsData);
            } else {
                renderGrid(toolsData.filter(x => x.category.includes(cat) || cat.includes(x.category)));
            }
            // تمييز الزر النشط
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // تفعيل مفتاح "مجاني فقط" مع التنبيه
    const freeSwitch = document.getElementById('freeOnlySwitch');
    if (freeSwitch) {
        freeSwitch.onchange = function() {
            alert("عذراً! ميزة 'مجاني فقط' متاحة للمسجلين فقط. يرجى تسجيل الدخول.");
            this.checked = false;
        };
    }
};
