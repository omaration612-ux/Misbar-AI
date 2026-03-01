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

    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
    const db = firebase.firestore();
    let allTools = [];

    function displayTools(tools) {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;
        if (tools.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #8e8e93; padding: 50px;">بانتظار رفع الأدوات أو لم يتم العثور على نتائج...</p>`;
            return;
        }
        grid.innerHTML = tools.map(item => `
            <div class="card">
                <span class="badge ${item.category === 'Free' || item.price === 'free' ? 'free' : 'paid'}">
                    ${item.category === 'Free' || item.price === 'free' ? 'مجاني' : 'مدفوع'}
                </span>
                <div class="tool-logo" style="background: linear-gradient(135deg, #007aff, #1c1c1e)">
                    ${item.title ? item.title[0] : (item.name ? item.name[0] : 'M')}
                </div>
                <div style="font-weight:900; margin-top:10px;">${item.title || item.name || 'أداة بدون عنوان'}</div>
                <div style="font-size:0.8rem; color:#8e8e93; height: 40px; overflow: hidden; margin-top:5px;">${item.description || item.desc || ''}</div>
                <a href="${item.link || item.url || '#'}" target="_blank" class="btn-try">جرب الآن</a>
            </div>
        `).join('');
    }

    async function loadData() {
        try {
            // أزلنا .orderBy مؤقتاً لضمان ظهور البيانات حتى لو لم تكن مفهرسة
            const snapshot = await db.collection('tools').limit(100).get();
            allTools = snapshot.docs.map(doc => doc.data());
            displayTools(allTools);
            console.log("تم جلب " + allTools.length + " أداة");
        } catch (error) {
            console.error("خطأ:", error);
        }
    }

    document.getElementById('smartSearch')?.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allTools.filter(t => 
            (t.title || t.name || "").toLowerCase().includes(term)
        );
        displayTools(filtered);
    });

    window.addEventListener('load', loadData);
})();
