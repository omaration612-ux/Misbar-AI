// تشغيل الخلفية
particlesJS('particles-js', {"particles":{"number":{"value":50},"opacity":{"value":0.2},"move":{"speed":0.8}}});

// عرض كروت التميز
document.getElementById('featuredZone').innerHTML = featuredTools.map(t => `
    <div class="hero-card" style="background: linear-gradient(transparent, #000), url('https://picsum.photos/500/300?sig=${t.img}') center/cover;">
        <h3 style="margin:0;">${t.name}</h3>
        <p style="margin:5px 0 0; font-size:0.8rem; color:#ccc;">${t.desc}</p>
    </div>
`).join('');

// دالة عرض الشبكة
function render(data) {
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = data.map(item => `
        <div class="card">
            <span class="badge ${item.price}">${item.price === 'free' ? 'مجاني' : 'مدفوع'}</span>
            <div class="tool-logo" style="background:${item.color}">${item.name[0]}</div>
            <strong>${item.name}</strong>
            <p style="color:#8e8e93; font-size:0.75rem; line-height:1.5;">أفضل أداة في تصنيف ${item.category} لمساعدتك في إنجاز مهامك.</p>
            <a href="#" class="btn-try">جرب الآن</a>
        </div>
    `).join('');
}

// تشغيل البحث
document.getElementById('smartSearch').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = allTools.filter(t => t.name.toLowerCase().includes(val));
    render(filtered);
});

// تشغيل الفلترة
document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.onclick = function() {
        document.querySelector('.tag-btn.active').classList.remove('active');
        this.classList.add('active');
        const cat = this.dataset.category;
        render(cat === 'All' ? allTools : allTools.filter(t => t.category === cat));
    };
});

// تشغيل سويتش المجاني
document.getElementById('freeOnlySwitch').onchange = function() {
    if(this.checked) {
        alert("يرجى تسجيل الدخول في مسبار AI لتفعيل هذه الميزة.");
        this.checked = false;
    }
};

// العرض الأولي
render(allTools);
