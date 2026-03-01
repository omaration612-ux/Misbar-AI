// injector.js - الإصدار النهائي والمطور لـ "رادار مِسبار" 2026
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

    // 1. تفعيل Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    let allTools = []; // مخزن محلي لتمكين البحث الفوري فائق السرعة

    // 2. دالة عرض الأدوات (تحديث الشبكة)
    function displayTools(tools) {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;

        if (tools.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #8e8e93; padding: 50px;">لم يتم العثور على أدوات تطابق بحثك...</p>`;
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
                <div style="font-size:0.8rem; color:#8e8e93; height: 40px; overflow: hidden; margin-top:5px;">${item.description || 'أداة ذكاء اصطناعي من رادار مسبار'}</div>
                <a href="${item.link || '#'}" target="_blank" class="btn-try">جرب الآن</a>
            </div>
        `).join('');
    }

    // 3. دالة جلب البيانات الكبيرة (المهمة 1 في الجدول)
    async function loadData() {
        const grid = document.getElementById('mainGrid');
        try {
            // جلب حتى 1000 أداة في الدفعة الأولى مرتبة أبجدياً
            const snapshot = await db.collection('tools').orderBy('title').limit(1000).get();
            
            allTools = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            displayTools(allTools);
            console.log(`[رادار مِسبار] تم حقن ${allTools.length} أداة بنجاح.`);
            
        } catch (error) {
            console.error("خطأ في جلب البيانات:", error);
            if (grid) {
                grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color:
