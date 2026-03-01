// injector.js
(function() {
    // 1. إعدادات Firebase الخاصة بك
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

    // 2. تفعيل الاتصال
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // 3. دالة سحب وحقن البيانات
    async function fetchTools() {
        const grid = document.getElementById('mainGrid');
        try {
            // سحب البيانات من كولكشن tools
            const snapshot = await db.collection('tools').limit(100).get();
            const tools = snapshot.docs.map(doc => doc.data());

            if (tools.length === 0) {
                grid.innerHTML = "<p style='text-align:center;'>بانتظار رفع الأدوات لقاعدة البيانات...</p>";
                return;
            }

            // حقن الأدوات في التصميم
            grid.innerHTML = tools.map(item => `
                <div class="card">
                    <span class="badge ${item.category === 'Free' ? 'free' : 'paid'}">
                        ${item.category === 'Free' ? 'مجاني' : 'مدفوع'}
                    </span>
                    <div class="tool-logo" style="background: linear-gradient(135deg, #007aff, #1c1c1e)">
                        ${item.title ? item.title[0] : 'M'}
                    </div>
                    <div style="font-weight:900; margin-top:10px;">${item.title}</div>
                    <div style="font-size:0.8rem; color:#8e8e93;">${item.description || ''}</div>
                    <a href="${item.link || '#'}" target="_blank" class="btn-try">جرب الآن</a>
                </div>
            `).join('');
        } catch (error) {
            console.error("خطأ في الاتصال:", error);
        }
    }

    window.onload = fetchTools;
})();
