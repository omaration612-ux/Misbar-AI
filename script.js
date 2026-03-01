(function() {
    // 1. استدعاء مكتبة الجزيئات (Particles.js)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    document.head.appendChild(script);

    script.onload = function() {
        const particlesDiv = document.createElement('div');
        particlesDiv.id = 'particles-js';
        particlesDiv.style = 'position:fixed; top:0; left:0; width:100%; height:100%; z-index:-1; background:#000;';
        document.body.appendChild(particlesDiv);

        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": false },
                "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "out_mode": "out" }
            },
            "retina_detect": true
        });
    };

    // 2. نظام اللغات (تم تحديث الاسم إلى Misbar AI)
    const translations = {
        'ar': { name: 'Misbar AI', search: 'ابحث في 30,000 أداة...', free: 'مجاني', paid: 'مدفوع', try: 'جرب الآن', picked: 'مختارات اليوم', signup: 'تسجيل', signin: 'دخول', searchBtn: 'بحث', filterFree: 'مجاني فقط', guestAlert: 'يرجى التسجيل للوصول لهذه الميزة.' },
        'en': { name: 'Misbar AI', search: 'Search 30,000 tools...', free: 'Free', paid: 'Paid', try: 'Try Now', picked: 'TODAY\'S PICK', signup: 'Sign up', signin: 'Sign in', searchBtn: 'Search', filterFree: 'Free only', guestAlert: 'Please register to access this feature.' }
    };

    const userLang = navigator.language.split('-')[0];
    const t = translations[userLang] || translations['en'];
    const isRtl = userLang === 'ar';

    // 3. قائمة الفلاتر الـ 13 (طلبك الإضافي)
    const categories = ['All', 'Writing', 'Image', 'Video', 'Coding', 'Audio', 'Design', 'Marketing', 'Data', '3D Render', 'Security', 'SEO', 'Email AI'];

    // 4. التصميم (CSS) - دمجنا الفلاتر والستايل الجديد
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
        body { background: #000; color: #fff; font-family: 'Cairo', sans-serif; margin: 0; direction: ${isRtl ? 'rtl' : 'ltr'}; overflow-x: hidden; }
        .apple-nav { position: sticky; top: 0; backdrop-filter: blur(20px); background: rgba(0,0,0,0.7); display: flex; justify-content: space-between; align-items: center; padding: 10px 5%; z-index: 1000; border-bottom: 0.5px solid #333; }
        .logo { font-size: 1.5rem; font-weight: 900; color: #00d1ff; }
        .search-container { display: flex; width: 40%; gap: 10px; }
        .search-bar { flex-grow: 1; background: #1c1c1e; border: 1px solid #333; padding: 10px 15px; border-radius: 12px; color: #fff; outline: none; }
        .search-btn { background: #000; color: #fff; border: 1px solid #333; padding: 0 20px; border-radius: 12px; cursor: pointer; font-weight: bold; }
        
        /* شريط الفلاتر الـ 13 */
        .filter-bar { display: flex; gap: 10px; padding: 15px 5%; overflow-x: auto; scrollbar-width: none; background: #000; }
        .filter-bar::-webkit-scrollbar { display: none; }
        .filter-btn { background: #1c1c1e; border: 1px solid #2c2c2e; padding: 8px 20px; border-radius: 20px; font-size: 0.8rem; color: #8e8e93; cursor: pointer; white-space: nowrap; transition: 0.3s; }
        .filter-btn.active { background: #007aff; color: #fff; border-color: #007aff; font-weight: bold; }

        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px; padding: 20px 5%; }
        .card { background: rgba(28, 28, 30, 0.8); border-radius: 25px; padding: 20px; text-align: center; border: 0.5px solid #333; transition: 0.3s; }
        .card:hover { transform: translateY(-5px); border-color: #007aff; }
        .tool-logo { width: 60px; height: 60px; border-radius: 18px; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: bold; color: white; }
    `;
    document.head.appendChild(style);

    // 5. بناء الهيكل (Injection)
    document.body.innerHTML = `
        <nav class="apple-nav">
            <div class="logo">Misbar AI</div>
            <div class="search-container">
                <input type="text" id="smartSearch" class="search-bar" placeholder="${t.search}">
                <button class="search-btn">${t.searchBtn}</button>
            </div>
            <div style="display:flex; gap:15px; align-items:center;">
                <span style="color:#007aff; font-weight:bold; cursor:pointer;">${t.signup}</span>
                <div style="border:1px solid #333; padding:5px 10px; border-radius:8px; cursor:pointer;">A文</div>
            </div>
        </nav>
        <div class="filter-bar" id="filterBar">
            ${categories.map((c, i) => `<button class="filter-btn ${i===0?'active':''}" data-cat="${c.toLowerCase()}">${c}</button>`).join('')}
        </div>
        <div class="grid" id="mainGrid"></div>
    `;

    // 6. البيانات (حقن الـ 15,000 أداة)
    const mockData = Array.from({length: 15000}, (_, i) => ({
        name: ['Jasper', 'ChatGPT', 'Midjourney', 'Claude', 'Sora'][i %
