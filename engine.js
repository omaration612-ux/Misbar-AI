
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, limit, getDocs, enableIndexedDbPersistence, startAfter } from "firebase/firestore";

const db = getFirestore();

// تفعيل الـ Caching لتقليل القراءات لصفر عند العودة للموقع
enableIndexedDbPersistence(db).catch(err => console.error("Cache Error:", err));

let lastVisibleDoc = null;

// دالة الجلب المحدود (20 أداة فقط) لسرعة التحميل ومنع الشاشة السوداء
async function fetchTools(isNextPage = false) {
    let q = isNextPage && lastVisibleDoc 
        ? query(collection(db, "tools"), startAfter(lastVisibleDoc), limit(20))
        : query(collection(db, "tools"), limit(20));

    const snapshot = await getDocs(q);
    lastVisibleDoc = snapshot.docs[snapshot.docs.length - 1];
    
    console.log("تم جلب 20 أداة بنجاح. استهلاك الكوتة آمن.");
}
fetchTools();