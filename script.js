// وظيفة بناء الترقيم الرولنق
function setupRollingPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / 60);
    const container = document.getElementById('paginationContainer');
    container.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('div');
        btn.className = `page-btn ${i === 1 ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => {
            // كود جلب الصفحة i من Firebase
            document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        container.appendChild(btn);
    }
}

// تشغيل عند التحميل
window.onload = () => {
    setupRollingPagination(30016);
    console.log("مِسبار استعاد فخامته.");
};
