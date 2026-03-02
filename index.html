// مصفوفة تجريبية لمحاكاة البيانات الحقيقية (حتى يتم جلبها من Firestore)
const mockTools = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    name: ["Jasper", "Midjourney", "Claude", "Sora", "Luma", "GPT-5"][i % 6] + " AI",
    desc: "أداة احترافية تستخدم تقنيات الذكاء الاصطناعي المتطورة لتوليد المحتوى وتحسين جودة العمل.",
    category: ["Writing", "Image Generation", "Video Editing", "Coding AI"][i % 4],
    price: i % 3 === 0 ? 'free' : 'paid',
    color: `hsl(${i * 50}, 70%, 50%)`
}));

// دالة عرض البطاقات في الشبكة (Grid)
function renderGrid(data) {
    const grid = document.getElementById('mainGrid');
    if (!grid) return;

    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:100px; color:#8e8e93;">جاري البحث في الرادار... لا توجد نتائج مطابقة.</div>`;
        return;
    }

    grid.innerHTML = data.map(item => `
        <div class="card" style="background: rgba(28,28,30,0.5); border: 1px solid #222; border-radius: 22px; padding: 25px 15px; text-align: center; min-height: 280px; display: flex; flex-direction: column; justify-content: space-between; transition: 0.3s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="background: ${item.price === 'free' ? '#34c759' : '#5856d6'}; color: #fff; font-size: 0.65rem; padding: 3px 10px; border-radius: 20px;">${item.price === 'free' ? 'مجاني' : 'مدفوع'}</span>
                <span style="color: #8e8e93; font-size: 0.7rem;">★ 4.9</span>
            </div>
            <div style="width: 60px; height: 60px; background: ${item.color}; border-radius: 15px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #fff; box-shadow: 0 10px 20px rgba(0,0,0,0.3);">${item.name[0]}</div>
            <div style="font-weight: bold; font-size: 1rem; color: #fff; margin-bottom: 5px;">${item.name}</div>
            <p style="color: #8e8e93; font-size: 0.75rem; line-height: 1.4; margin-bottom: 15px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${item.desc}</p>
            <a href="#" style="background: #fff; color: #000; text-decoration: none; padding: 10px; border-radius: 12px; font-size: 0.85rem; font-weight: bold; transition: 0.3s;">جرب الآن</a>
        </div>
    `).join('');
}

// تشغيل المحرك الرئيسي
function startMisbarEngine() {
    // 1. عرض البيانات الأولية
    renderGrid(mockTools);

    // 2. تفعيل البحث الذكي
    const searchInput = document.getElementById('smartSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const filtered = mockTools.filter(t => 
                t.name.toLowerCase().includes(val) || 
                t.category.toLowerCase().includes(val)
            );
            renderGrid(filtered);
        });
    }

    // 3. تفعيل الفلترة بالتصنيفات
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.innerText;
            if (category === 'الكل') {
                renderGrid(mockTools);
            } else {
                const filtered = mockTools.filter(t => t.category === category);
                renderGrid(filtered);
            }
        });
    });

    // 4. تفعيل سويتش "مجاني فقط" مع التنبيه للمسجلين
    const freeSwitch = document.getElementById('freeOnlySwitch');
    if (freeSwitch) {
        freeSwitch.addEventListener('change', function() {
            if (this.checked) {
                // محاكاة تنبيه عدم التسجيل
                alert("عذراً! ميزة الفلترة المتقدمة (مجاني فقط) متاحة للأعضاء المسجلين. يرجى تسجيل الدخول.");
                this.checked = false;
            }
        });
    }

    // 5. تفعيل قائمة اللغات
    document.querySelectorAll('.lang-menu a').forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            alert("سيتم توفير نسخة " + link.innerText + " قريباً في تحديث الرادار القادم.");
        };
    });
}
