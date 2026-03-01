(function() {
    // 1. إعداد التصميم (CSS) داخل الجافا سكريبت لضمان النظافة
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Cairo', sans-serif; }
        .nav { position: sticky; top: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(20px); display: flex; justify-content: space-between; align-items: center; padding: 12px 5%; border-bottom: 1px solid #222; z-index: 1000; }
        .logo { font-size: 1.5rem; font-weight: 900; color: #00d1ff; }
        .search-area { display: flex; width: 40%; gap: 10px; }
        .in-s { flex: 1; background: #1c1c1e; border: 1px solid #333; padding: 10px; border-radius: 12px; color: #fff; outline: none; }
        .filter-bar { display: flex; gap: 10px; padding: 15px 5%; overflow-x: auto; scrollbar-width: none; background: rgba(0,0,0,0.3); }
        .filter-bar::-webkit-scrollbar { display: none; }
        .f-btn { background: #1c1c1e; border: 1px solid #2c2c2e; padding: 8px 20px; border-radius: 20px; font-size: 0.8rem; color: #8e8e93; cursor: pointer; white-space: nowrap; transition: 0.3s; }
        .f-btn.active { background: #007aff; color: #fff; border-color: #007aff; font-weight: bold; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px; padding: 20px 5%; }
        .card { background: rgba(20,20,22,0.8); border: 1px solid #222; border-radius: 25px; padding: 20px; text-align: center; transition: 0.3s; }
        .card:hover { border-color: #007aff; }
        .icon { width: 55px; height: 55px; background: #007aff; border-radius: 15px; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; }
    `;
    document.head.appendChild(style);

    // 2. بناء واجهة الموقع
    const cats = ['All', 'Writing', 'Image', 'Video', 'Coding', 'Audio', 'Design', 'Marketing', 'Data', '3D Render', 'Security', 'SEO', 'Email AI'];
    
    document.body.insertAdjacentHTML('beforeend', `
        <nav class="nav">
            <div class="logo">Misbar AI</div>
            <div class="search-area">
                <input type="text" id="sr" class="in-s" placeholder="ابحث في 15,000 أداة...">
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                <span style="color:#007aff; font-weight:bold; cursor:pointer; font-size:0.8rem;">تسجيل</span>
                <div style="border:1px solid #333; padding:5px 10px; border-radius:8px; color:#fff; font-size:0.8rem;">A文</div>
            </div>
        </nav>
        <div class="filter-bar" id="fBar">
            ${cats.map((c, i) => `<div class="f-btn ${i===0?'active':''}" data-cat="${c.toLowerCase()}">${c}</div>`).join('')}
        </div>
        <div class="grid" id="mainGrid"></div>
    `);

    // 3. بيانات وهمية (تمهيداً لحقن الـ 15,000 أداة من Firebase)
    const tools = Array.from({length: 60}, (_, i) => ({
        name: ['ChatGPT', 'Jasper', 'Claude', 'Luma'][i % 4] + ' ' + (i+1),
        cat: cats[(i % (cats.length - 1)) + 1].toLowerCase()
    }));

    const grid = document.getElementById('mainGrid');
    function draw(list) {
        grid.innerHTML = list.map(t => `
            <div class="card">
                <div class="icon">${t.name[0]}</div>
                <div style="font-weight:700; font-size:0.9rem;">${t.name}</div>
                <button style="background:#007aff; color:#fff; border:none; width:100%; padding:8px; border-radius:10px; margin-top:15px; cursor:pointer; font-size:0.8rem; font-weight:bold;">جرب الآن</button>
            </div>
        `).join('');
    }

    // 4. تفعيل الفلاتر والبحث
    document.getElementById('fBar').addEventListener('click', (e) => {
        if (e.target.classList.contains('f-btn')) {
            document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.getAttribute('data-cat');
            draw(cat === 'all' ? tools : tools.filter(x => x.cat === cat));
        }
    });

    document.getElementById('sr').oninput = (e) => {
        const val = e.target.value.toLowerCase();
        draw(tools.filter(x => x.name.toLowerCase().includes(val)));
    };

    // 5. تشغيل النجوم (Particles)
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": { "number": { "value": 80 }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5 }, "size": { "value": 3 }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 1 } }
        });
    }

    draw(tools);
    console.log("✅ Misbar AI Loaded Successfully!");
})();
