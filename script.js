// 1. الفئات والبيانات
const categories = ['All', 'Writing', 'Image', 'Video', 'Coding', 'Audio', 'Design', 'Marketing', 'Data', '3D Render', 'Security', 'SEO', 'Email AI'];
const mockTools = Array.from({length: 30}, (_, i) => ({
    name: ['ChatGPT', 'Claude', 'Luma', 'Midjourney', 'Jasper'][i % 5] + ' Pro',
    cat: categories[(i % (categories.length - 1)) + 1].toLowerCase()
}));

// 2. بناء أزرار الفلترة الـ 13
const fBar = document.getElementById('filterBar');
if (fBar) {
    fBar.innerHTML = categories.map((c, i) => `
        <button class="f-btn ${i===0?'active':''}" onclick="filterTools('${c.toLowerCase()}', this)">${c}</button>
    `).join('');
}

// 3. عرض الأدوات
const grid = document.getElementById('toolsGrid');
function display(list) {
    if (grid) {
        grid.innerHTML = list.map(t => `
            <div class="card">
                <div class="tool-icon">${t.name[0]}</div>
                <div style="font-weight:700; font-size:0.9rem;">${t.name}</div>
                <button class="try-btn">جرب الآن</button>
            </div>
        `).join('');
    }
}

// 4. وظائف الفلترة والبحث (window عشان يوصل لها الـ HTML)
window.filterTools = (cat, btn) => {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    display(cat === 'all' ? mockTools : mockTools.filter(x => x.cat === cat));
};

const sInput = document.getElementById('searchInput');
if (sInput) {
    sInput.oninput = (e) => {
        const val = e.target.value.toLowerCase();
        display(mockTools.filter(t => t.name.toLowerCase().includes(val)));
    };
}

// 5. تشغيل النجوم
if (window.particlesJS) {
    particlesJS('particles-js', {
        "particles": { "number": { "value": 80 }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5 }, "size": { "value": 2 }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 1 } }
    });
}

// البدء بالعرض
display(mockTools);
