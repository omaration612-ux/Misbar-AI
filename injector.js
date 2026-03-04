/**
 * MISBAR Ai - Smart Data Injector (v2.1 - Custom Field Edition)
 * تم التعديل ليناسب حقول قاعدة بيانات عمر: title, desc, link, price
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, limit, getDocs, startAfter, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 1. إعدادات الفايربيس (مشروع misbar-2026)
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let lastVisible = null;

// 2. دالة حقن الأدوات المحدثة
async function injectTools(isNextPage = false) {
    const grid = document.getElementById('mainGrid');
    if (!grid) return;

    try {
        console.log("📡 جارٍ جلب البيانات الحقيقية من رادار مِسبار...");
        
        // جلب 60 أداة مرتبة حسب العنوان
        let q = query(collection(db, "tools"), orderBy("title"), limit(60));

        if (isNextPage && lastVisible) {
            q = query(collection(db, "tools"), orderBy("title"), startAfter(lastVisible), limit(60));
        }

        const querySnapshot = await getDocs(q);
        
        if (!isNextPage) {
            grid.innerHTML = ''; // مسح البطاقات التجريبية
        }

        querySnapshot.forEach((doc) => {
            const tool = doc.data();
            
            // الربط مع حقول قاعدة بياناتك الحقيقية
            const name = tool.title || "أداة ذكاء اصطناعي";
            const description = tool.desc || "اكتشف القوة عبر مِسبار Ai";
            const url = tool.link || "#";
            const isFree = tool.price === 'free' || tool.price === 'FREE';

            // حل ذكي للصور (أيقونات ملونة باسم الأداة)
            const imgPath = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128`;

            grid.innerHTML += `
                <div class="card" onclick="window.open('${url}','_blank')" 
                     style="background:#080808; border:1px solid #111; border-radius:15px; padding:20px; min-height:220px; display:flex; flex-direction:column; justify-content:space-between; position:relative; cursor:pointer; text-align:right;">
                    
                    <div style="position:absolute; top:12px; left:12px; background:${isFree ? '#28a745' : '#ffc107'}; color:#000; font-size:9px; padding:3px 7px; border-radius:5px; font-weight:bold; z-index:2;">
                        ${(tool.price || 'AI').toUpperCase()}
                    </div>
                    
                    <div style="width:45px; height:45px; background:#111; border-radius:10px; border:1px solid #222; overflow:hidden; display:flex; align-items:center; justify-content:center;">
                        <img src="${imgPath}" style="width:100%; height:100%; object-fit:cover;">
                    </div>
                    
                    <div>
                        <h3 style="color:#fff; font-size:15px; margin:10px 0; font-weight:bold;">${name}</h3>
                        <p style="color:#666; font-size:11px; line-height:1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                            ${description}
                        </p>
                    </div>
                </div>`;
        });

        lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    } catch (error) {
        console.error("❌ فشل في جلب البيانات. تأكد من إعدادات Firestore:", error);
    }
}

// 3. التشغيل عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    injectTools();

    // تشغيل الترقيم (Pagination)
    const pageButtons = document.querySelectorAll('.p-num');
    pageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            injectTools(true); 
        });
    });
});