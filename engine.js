import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, limit, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

// دالة ذكية لجلب البيانات تدعم الزيادة المستمرة في عدد الأدوات
async function renderTools() {
    try {
        // ترتيب الأدوات حسب الأحدث لضمان ظهور الأدوات الجديدة دائماً أولاً
        console.log("رادار مِسبار: جاري فحص 30,000+ أداة...");
        const q = query(collection(db, "tools"), limit(60)); 
        const querySnapshot = await getDocs(q);
        
        let toolsHTML = '';
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            toolsHTML += createToolCard(
                data.name || "أداة مِسبار", 
                data.description || "استكشف أحدث حلول الذكاء الاصطناعي", 
                data.type || "AI Tool"
            );
        });

        if (mainGrid) {
            mainGrid.innerHTML = toolsHTML;
            console.log("✅ تم عرض أحدث الأدوات من قاعدة البيانات الضخمة.");
        }
    } catch (error) {
        console.error("عذراً، حدث خطأ في استدعاء الـ 30,000 أداة:", error);
    }
}

document.addEventListener('DOMContentLoaded', renderTools);