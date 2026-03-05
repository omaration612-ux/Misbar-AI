/**
 * 🛰️ MISBAR AI - FIREBASE BRIDGE PRO (v2.5)
 * الأتمتة: نظام جلب البيانات الضخمة (30,000+) + بوت الإصلاح التلقائي
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, limit, startAfter, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

// متغير لحفظ آخر وثيقة تم جلبها (لدعم التصفح السريع للـ 30 ألف أداة)
let lastVisibleDoc = null;

export const MisbarCloud = {
    /**
     * 1. جلب الأدوات مع نظام "التمرير اللانهائي" (Infinite Scroll Support)
     */
    fetchTools: async function(itemsPerPage = 12, isNextPage = false) {
        try {
            console.log(`📡 CEO Status: Fetching ${itemsPerPage} tools...`);
            const toolsRef = collection(db, "ai_tools");
            
            let q;
            if (isNextPage && lastVisibleDoc) {
                // جلب الصفحة التالية بدءاً من حيث توقفنا
                q = query(toolsRef, orderBy("name"), startAfter(lastVisibleDoc), limit(itemsPerPage));
            } else {
                // جلب الصفحة الأولى
                q = query(toolsRef, orderBy("name"), limit(itemsPerPage));
            }

            const querySnapshot = await getDocs(q);
            lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1]; // تحديث علامة الوقوف
            
            let cloudTools = [];
            querySnapshot.forEach((doc) => {
                cloudTools.push({ id: doc.id, ...doc.data() });
            });
            
            return cloudTools;
        } catch (error) {
            console.error("❌ Cloud Error:", error);
            return [];
        }
    },

    /**
     * 🤖 بوت الصور (AI Image Bot)
     * يضمن عدم ظهور أي صورة مكسورة في الـ 30,000 أداة
     */
    fixBrokenImage: function(imgElement) {
        console.warn("🎨 Image Bot: Fixing UI Glitch...");
        // وضع شعار مسبار الموحد المولد بالذكاء الاصطناعي
        imgElement.src = 'https://ui-avatars.com/api/?name=Misbar+AI&background=00f2ff&color=000&bold=true&fontset=itc';
        imgElement.style.boxShadow = "0 0 10px rgba(0, 242, 255, 0.5)";
        imgElement.style.borderRadius = "12px";
    }
};

export { db };