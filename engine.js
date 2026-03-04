import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// مفاتيح مشروعك misbar-2026 الحقيقية والنهائية
const firebaseConfig = {
  apiKey: "AIzaSyBzG7ZeOr6uoKbCPoodlJiw2ZmiiVwTDxY",
  authDomain: "misbar-2026.firebaseapp.com",
  databaseURL: "https://misbar-2026-default-rtdb.firebaseio.com",
  projectId: "misbar-2026",
  storageBucket: "misbar-2026.firebasestorage.app",
  messagingSenderId: "299387766091",
  appId: "1:299387766091:web:cd36930b732b85d82214ce",
  measurementId: "G-14VWCKVZYC"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const mainGrid = document.getElementById('mainGrid');

// دالة إنشاء البطاقة (متوافقة مع تصميمك 6x10)
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

// دالة جلب الـ 30,000 أداة (تعرض أول 60 أداة للتصميم)
async function renderTools() {
    try {
        console.log("رادار مِسبار متصل بـ misbar-2026... جاري جلب الأدوات");
        const q = query(collection(db, "tools"), limit(60)); 
        const querySnapshot = await getDocs(q);
        
        let toolsHTML = '';
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            toolsHTML += createToolCard(
                data.name || "أداة ذكاء اصطناعي", 
                data.description || "استكشف القوة الحقيقية مع مِسبار", 
                data.type || "AI Tool"
            );
        });

        if (mainGrid) {
            mainGrid.innerHTML = toolsHTML;
            console.log("✅ الموقع يعمل الآن بالبيانات الحقيقية!");
        }
    } catch (error) {
        console.error("خطأ في الربط: تأكد من إعدادات Firestore", error);
    }
}

document.addEventListener('DOMContentLoaded', renderTools);

