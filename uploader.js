const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

const db = admin.firestore();

async function resumeMassUpload() {
    const data = JSON.parse(fs.readFileSync('tools-data.json', 'utf8'));
    const total = data.length;

    // نبدأ من 19,500 (Index 19500 هو فعلياً الأداة رقم 19,501)
    console.log(`📡 جاري استكمال ضخ البيانات من الأداة رقم 19,501 إلى ${total}...`);

    for (let i = 19500; i < total; i += 500) {
        const batch = db.batch();
        const chunk = data.slice(i, i + 500);

        chunk.forEach(tool => {
            const docRef = db.collection('ai_tools').doc(); 
            batch.set(docRef, {
                ...tool,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                source: "MISBAR_AI_RADAR" // تحديث الوسم للبراند الجديد
            });
        });

        await batch.commit();
        console.log(`✅ تم إكمال رفع ${Math.min(i + 500, total)} من أصل ${total}...`);
    }

    console.log("🏁 مبروك يا مدير! اكتمل الرفع النهائي لـ 30,000 أداة.");
}

resumeMassUpload().catch(err => {
    console.error("❌ خطأ أثناء الإكمال:", err);
});