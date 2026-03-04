import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// مفاتيح الربط الحقيقية لمشروعك (هذا هو الخيط الرابط)
const firebaseConfig = {
    apiKey: "AIzaSyB...", // استبدل بالخاص بك من لوحة تحكم Firebase
    authDomain: "misbar-ai.firebaseapp.com",
    projectId: "misbar-ai",
    storageBucket: "misbar-ai.appspot.com",
    messagingSenderId: "721...",
    appId: "1:721..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function renderTools() {
    const mainGrid = document.getElementById('mainGrid');
    if (!mainGrid) return;

    try {
        const q = query(collection(db, "tools"), limit(60)); // جلب أول 60 أداة للـ 6x10
        const snapshot = await getDocs(q);
        
        let html = '';
        snapshot.forEach(doc => {
            const data = doc.data();
            html += `
                <div class="card">
                    <h3>${data.name || 'أداة ذكاء'}</h3>
                    <p>${data.description ? data.description.substring(0, 40) : 'وصف الأداة'}</p>
                    <span class="tag-label">${data.type || 'Free'}</span>
                </div>`;
        });
        mainGrid.innerHTML = html;
    } catch (e) {
        console.error("خطأ في الربط:", e);
    }
}

document.addEventListener('DOMContentLoaded', renderTools);
