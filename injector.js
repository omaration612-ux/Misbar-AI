// injector.js - محرك رادار مِسبار المحدث
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

    // الاتصال بـ Firebase (نسخة التوافق)
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    async function injectBigData() {
        const grid = document.getElementById('mainGrid'); // استهداف الشبكة في تصميمك
        if (!grid) return;

        try {
            const snapshot = await db.collection('tools').limit(100).get(); 
            const tools = snapshot.docs.map(doc => doc.data());

            // الحقن مع الحفاظ على تنسيقات الـ CSS الأصلية
            grid.innerHTML = tools.map(item => `
                <div class="card">
                    <span class="badge ${item.category === 'Free' ? 'free' : 'paid'}">
                        ${item.category === 'Free' ? 'مجاني' : 'مدفوع'}
                    </span>
                    <div class="tool-logo" style="background: linear-gradient(135deg, #007aff, #1c1c1e)">
                        ${item.title ? item.title[0] : 'M'}
                    </div>
                    <div class="tool-name" style="font-weight:900; margin-top:10px;">${item.title}</div>
                    <div class="tool-desc" style="font-size:0.8rem; color:#8e8e93;">${item.description || ''}</div>
                    <a href="${item.link || '#'}" target="_blank" class="btn-try">جرب الآن</a>
                </div>
            `).join('');
            console.log("تم الاتصال وحقن البيانات بنجاح!");
        } catch (e) { console.error("خطأ في الحقن:", e); }
    }

    window.addEventListener('load', injectBigData);
})();
