// injector.js - محرك الحقن لـ 30,000 أداة
(function() {
    const firebaseConfig = {
        projectId: "misbar-2026",
        // ضع هنا مفاتيح Firebase الخاصة بك
    };

    // 1. الاتصال بـ Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    // 2. دالة الحقن (تستهدف mainGrid في تصميمك الأصلي)
    async function injectBigData() {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;

        try {
            // جلب البيانات من كولكشن tools
            const snapshot = await db.collection('tools').limit(1000).get(); 
            const tools = snapshot.docs.map(doc => doc.data());

            // الحقن داخل التصميم الجميل الخاص بك
            grid.innerHTML = tools.map(item => `
                <div class="card">
                    <span class="badge ${item.category === 'Free' ? 'free' : 'paid'}">
                        ${item.category || 'AI Tool'}
                    </span>
                    <div class="tool-logo" style="background: linear-gradient(135deg, #007aff, #1c1c1e)">
                        ${item.title ? item.title[0] : 'M'}
                    </div>
                    <div class="tool-name">${item.title}</div>
                    <div class="tool-desc">${item.description || 'أداة ذكية من رادار مسبار'}</div>
                    <a href="${item.original_link || '#'}" target="_blank" class="btn-try">جرب الآن</a>
                </div>
            `).join('');

            console.log("تم حقن البيانات بنجاح في رادار مِسبار");
        } catch (error) {
            console.error("فشل الحقن:", error);
        }
    }

    // تشغيل الحقن بعد تحميل الصفحة
    window.addEventListener('load', injectBigData);
})();