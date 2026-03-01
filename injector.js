// injector.js - الإصدار النهائي لـ "رادار مِسبار"
(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyBzG7ZeOr6uoKbCPoodlJiw2ZmiiVwTDxY",
        authDomain: "misbar-2026.firebaseapp.com",
        databaseURL: "https://misbar-2026-default-rtdb.firebaseio.com",
        projectId: "misbar-2026",
        storageBucket: "misbar-2026.firebasestorage.app",
        messagingSenderId: "299387766091",
        appId: "1:299387766091:web:f65b37196cb126612214ce",
        measurementId: "G-69P9GZFN1D"
    };

    // 1. تشغيل Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    let allTools = []; // مخزن للأدوات للبحث السريع

    // 2. دالة عرض الأدوات في الشبكة
    function displayTools(tools) {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;

        if (tools.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #8e8e93;">لم يتم العثور على نتائج...</p>`;
            return;
        }

        grid.innerHTML = tools.map(item => `
            <div class="card">
                <span class="badge ${item.category === 'Free' ? 'free' : 'paid'}">
                    ${item.category === 'Free' ? 'مجاني' : 'مدفوع'}
                </span>
                <div class="tool-logo" style="background: linear-gradient(135deg, #007aff, #1c1c1e)">
                    ${item.title ? item.title[0] : 'M'}
                </div>
                <div style="font-weight:900; margin-top:10px;">${item.title}</div>
                <div style="font-size:0.8rem; color:#8e8e93; height: 40px; overflow: hidden;">${item.description || ''}</div>
                <a href="${item.link || '#'}" target="_blank" class="btn-try">جرب الآن</a>
            </div>
        `).join('');
    }

    // 3. سحب البيانات من Firestore
    async function loadData() {
        try {
            const snapshot = await db.collection('tools').limit(500).get();
            allTools = snapshot.docs.map(doc => doc.data());
            displayTools(allTools);
            console.log("تم تحميل البيانات من رادار مِسبار!");
        } catch (error) {
            console.error("خطأ في جلب البيانات:", error);
        }
    }

    // 4. تفعيل البحث الفوري (المهمة 2 في الجدول)
    document.getElementById('smartSearch')?.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allTools.filter(t => 
            t.title?.toLowerCase().includes(term) || 
            t.description?.toLowerCase().includes(term)
        );
        displayTools(filtered);
    });

    // تشغيل عند تحميل الصفحة
    window.addEventListener('load', loadData);
})();
