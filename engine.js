
import { getFirestore, collection, query, limit, getDocs } from "firebase/firestore";
const db = getFirestore();

async function initMisbar() {
    const q = query(collection(db, "tools"), limit(60));
    const snapshot = await getDocs(q);
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = ''; 

    snapshot.forEach(doc => {
        const data = doc.data();
        grid.innerHTML += `<div class="card"><h3>${data.name || 'أداة'}</h3><p>${data.description ? data.description.substring(0,30) : 'مِسبار AI'}</p></div>`;
    });
}
initMisbar();