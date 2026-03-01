(function() {
    // 1. استدعاء مكتبة الجزيئات (Particles.js) من مصدر خارجي موثوق
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    document.head.appendChild(script);

    script.onload = function() {
        // 2. إعداد حاوية الجزيئات في الخلفية
        const particlesDiv = document.createElement('div');
        particlesDiv.id = 'particles-js';
        particlesDiv.style.position = 'fixed';
        particlesDiv.style.top = '0';
        particlesDiv.style.left = '0';
        particlesDiv.style.width = '100%';
        particlesDiv.style.height = '100%';
        particlesDiv.style.zIndex = '-1'; // خلف كل العناصر
        particlesDiv.style.background = '#000'; // لضمان الخلفية السوداء
        document.body.appendChild(particlesDiv);

        // 3. تكوين الجزيئات (Space/Star effect)
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" }, // لون النجوم (أبيض)
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
                "line_linked": { "enable": false }, // إيقاف الخطوط لجعلها تبدو كنجوم
                "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true },
                "modes": { "bubble": { "distance": 200, "size": 6, "duration": 2, "opacity": 0.8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 } }
            },
            "retina_detect": true
        });
    };

    // 4. نظام اللغات (عربي، إنجليزي، فرنسي، صيني، هندي)
    const translations = {
        'ar': { name: 'رادار مِسبار', search: 'ابحث في 30,000 أداة...', free: 'مجاني', paid: 'مدفوع', try: 'جرب الآن', picked: 'مختارات اليوم' },
        'en': { name: 'AI RADAR', search: 'Search 30,000 tools...', free: 'Free', paid: 'Paid', try: 'Try Now', picked: 'TODAY\'S PICK' },
        'fr': { name: 'RADAR IA', search: 'Chercher 30 000 outils...', free: 'Gratuit', paid: 'Payant', try: 'Essayer', picked: 'CHOIX DU JOUR' },
        'zh': { name: 'AI 雷达', search: '搜索 30,000 个工具...', free: '免费', paid: '付费', try: '现在试试', picked: '今日精选' },
        'hi': { name: 'एआई रडار', search: '30,000 टूल खोजें...', free: 'मुफ्त', paid: 'सशुल्क', try: 'अभी प्रयास करें', picked: 'आज की पसंद' }
    };

    const userLang = navigator.language.split('-')[0];
    const t = translations[userLang] || translations['en'];
    const isRtl = userLang === 'ar';

    // 5. تصميم أبل ستور (Glassmorphism)
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
        body { background: transparent !important; color: #fff !important; font-family: ${isRtl ? "'Cairo', sans-serif" : "sans-serif"}; margin: 0; direction: ${isRtl ? 'rtl' : 'ltr'}; overflow-x: hidden; }
        .apple-nav { position: sticky; top: 0; backdrop-filter: blur(20px); background: rgba(0,0,0,0.6); display: flex; justify-content: space-between; align-items: center; padding: 15px 5%; z-index: 1000; border-bottom: 0.5px solid #333; }
        .logo { font-size: 1.7rem; font-weight: 900; background: linear-gradient(to right, #00d1ff, #007aff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .search-bar { background: rgba(44, 44, 46, 0.8); border: none; padding: 12px 20px; border-radius: 12px; color: #fff; width: 45%; outline: none; border: 1px solid #333; }
        .featured-slider { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; padding: 20px 5%; gap: 20px; scrollbar-width: none; }
        .featured-slider::-webkit-scrollbar { display: none; }
        .hero-card { min-width: 85%; height: 260px; border-radius: 35px; scroll-snap-align: center; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; border: 1px solid #333; background: rgba(28, 28, 30, 0.6); backdrop-filter: blur(10px); }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px; padding: 30px 5%; }
        .card { background: rgba(28, 28, 30, 0.8); border-radius: 25px; padding: 20px; text-align: center; border: 0.5px solid #333; position: relative; transition: 0.3s; backdrop-filter: blur(5px); }
        .card:hover { transform: translateY(-5px); border-color: #007aff; background: rgba(44, 44, 46, 0.9); }
        .tool-logo { width: 70px; height: 70px; border-radius: 18px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold; color: white; box-shadow: 0 8px 20px rgba(0,0,0,0.5); }
        .badge { position: absolute; top: 12px; right: 12px; font-size: 9px; font-weight: bold; padding: 4px 10px; border-radius: 20px; }
        .free { background: rgba(52, 199, 89, 0.2); color: #34c759; }
        .paid { background: rgba(255, 59, 48, 0.2); color: #ff3b30; }
        .btn { background: #007aff; color: #fff; border: none; padding: 10px; border-radius: 14px; width: 100%; font-weight: bold; cursor: pointer; text-decoration: none; display: block; margin-top: 15px; font-size: 0.8rem; }
    `;
    document.head.appendChild(style);

    // 6. بناء الهيكل
    document.body.innerHTML = `
        <nav class="apple-nav">
            <div class="logo">${t.name}</div>
            <input type="text" id="smartSearch" class="search-bar" placeholder="${t.search}">
        </nav>
        <div class="featured-slider" id="featuredZone"></div>
        <div class="grid" id="mainGrid"></div>
    `;

    // 7. البيانات والمحرك (عينة من الـ 30,000)
    const colors = ['#FF3B30', '#34C759', '#007AFF', '#FF9500', '#AF52DE'];
    const mockData = Array.from({length: 40}, (_, i) => ({
        name: ['Jasper', 'ChatGPT', 'Midjourney', 'Claude', 'Sora', 'Luma', 'Canva'][i % 7] + ' ' + (i+1),
        price: i % 2 === 0 ? 'free' : 'paid',
        desc: isRtl ? 'أداة ذكاء اصطناعي احترافية متطورة' : 'Advanced professional AI tool'
    }));

    function render(data) {
        document.getElementById('mainGrid').innerHTML = data.map(item => `
            <div class="card">
                <span class="badge ${item.price}">${t[item.price]}</span>
                <div class="tool-logo" style="background:${colors[item.name.charCodeAt(0)%5]}">${item.name[0]}</div>
                <div style="font-weight:700; font-size:1rem; margin-bottom:5px;">${item.name}</div>
                <div style="color:#8e8e93; font-size:0.75rem; height:35px; overflow:hidden;">${item.desc}</div>
                <a href="#" class="btn">${t.try}</a>
            </div>
        `).join('');
    }

    document.getElementById('featuredZone').innerHTML = mockData.slice(0, 4).map(item => `
        <div class="hero-card" style="background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('https://picsum.photos/800/400?sig=${Math.random()}') center/cover;">
            <div style="color:#00d1ff; font-weight:bold; font-size:0.8rem;">${t.picked}</div>
            <h2 style="font-size:1.8rem; margin:10px 0;">${item.name}</h2>
            <p style="color:#ccc; font-size:0.9rem;">${item.desc}</p>
        </div>
    `).join('');

    document.getElementById('smartSearch').oninput = (e) => {
        const val = e.target.value.toLowerCase();
        render(mockData.filter(x => x.name.toLowerCase().includes(val)));
    };

    render(mockData);
    console.log("🚀 مِسبار انطلق في الفضاء! واجهة أبل + جزيئات الفضاء متحركة.");
})();
