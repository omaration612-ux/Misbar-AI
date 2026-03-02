// 1. تعريف قاعدة البيانات (تأكد من تهيئة Firebase في index.html أولاً)
const db = firebase.firestore();

// 2. دالة تشغيل المحرك
async function startMisbarEngine() {
    console.log("🚀 محرك مِسبار يمشط الرادار بحثاً عن الأدوات...");
    const grid = document.getElementById('mainGrid');
    
    try {
        // جلب آخر 100 أداة تم حقنها كمرحلة أولى
        const snapshot = await db.collection('tools')
                                 .orderBy('createdAt', 'desc')
                                 .limit(100)
                                 .get();
        
        const tools = [];
        snapshot.forEach(doc => {
            tools.push({ id: doc.id, ...doc.data() });
        });

        if (tools.length === 0) {
            grid.innerHTML = '<p style="text-align:center; width:100%;">جاري تحديث الرادار... لا توجد أدوات حالياً.</p>';
            return;
        }

        renderTools(tools);
        setupLiveSearch(tools); // تفعيل البحث الفوري في النتائج المحملة

    } catch (error) {
        console.error("⚠️ عطل في المحرك:", error);
        grid.innerHTML = '<p style="text-align:center; color:red;">خطأ في الاتصال بالرادار. تأكد من إعدادات Firebase.</p>';
    }
}

// 3. دالة بناء البطاقات (تستخدم نفس هيكل index.html)
function renderTools(data) {
    const grid = document.getElementById('mainGrid');
    if (!grid) return;

    grid.innerHTML = data.map(item => `
        <div class="card">
            <span class="badge ${item.price === 'free' ? 'free' : 'paid'}">
                ${item.price === 'free' ? 'مجاني' : 'مدفوع'}
            </span>
            <div class="tool-logo" style="background: linear-gradient(135deg, #007aff, #00d1ff)">
                ${item.title ? item.title[0].toUpperCase() : 'AI'}
            </div>
            <div class="tool-name">${item.title || 'أداة ذكية'}</div>
            <div class="tool-desc">${item.desc || 'وصف الأداة متاح قريباً في مِسبار.'}</div>
            <a href="${item.link || '#'}" target="_blank" class="btn-try">جرب الآن</a>
        </div>
    `).join('');
}

// 4. نظام البحث الحي (Live Search)
function setupLiveSearch(allTools) {
    const searchInput = document.getElementById('smartSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allTools.filter(t => 
            (t.title && t.title.toLowerCase().includes(term)) || 
            (t.desc && t.desc.toLowerCase().includes(term))
        );
        renderTools(filtered);
    });
}

// انطلاق!
document.addEventListener('DOMContentLoaded', startMisbarEngine);