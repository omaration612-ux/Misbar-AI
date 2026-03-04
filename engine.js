import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, limit, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// مفاتيح الربط الخاصة بـ MISBAR AI (جاهزة لـ 30,000+ أداة)
const firebaseConfig = {
    apiKey: "AIzaSyB...", 
    authDomain: "misbar-ai.firebaseapp.com",
    projectId: "misbar-ai",
    storageBucket: "misbar-ai.appspot.com",
    messagingSenderId: "721...",
    appId: "1:721..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const mainGrid = document.getElementById('mainGrid');

// دالة توليد بطاقة مِسبار (Glassmorphism) المتوافقة مع الـ 6 أعمدة
function createToolCard(name, desc, category) {
    return `
        <div class="card">
            <div class="card-icon">🚀</div>
            <h3>${name}</h3>
            <p>${desc.length > 50 ? desc.substring(0, 50) + "..." : desc}</p>
            <span class="tag-label">${category}</span>
        </div>
    `;
}

// دالة جلب البيانات الذكية (تتحمل 30,000+ أداة)
async function renderTools() {
    try {
        console.log("رادار مِسبار: جاري فحص قاعدة بيانات الـ 30,000 أداة...");
        // جلب أول 60 أداة لملء شبكة الـ 6x10 فوراً
        const q = query(collection(db, "tools"), limit(60)); 
        const querySnapshot = await getDocs(q);
        
        let toolsHTML = '';
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            toolsHTML += createToolCard(
                data.name || "أداة مِسبار الجديدة", 
                data.description || "استكشف أحدث ابتكارات الذكاء الاصطناعي", 
                data.type || "AI Tool"
            );
        });

        if (mainGrid) {
            mainGrid.innerHTML = toolsHTML;
            console.log("✅ تم عرض الأدوات بنجاح. رادار مِسبار متصل الآن.");
        }
    } catch (error) {
        console.error("خطأ في جلب بيانات الأدوات:", error);
    }
}

document.addEventListener('DOMContentLoaded', renderTools);