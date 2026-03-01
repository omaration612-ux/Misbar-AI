(function() {
    // 1. استدعاء مكتبة الجزيئات (Particles.js) من مصدر خارجي موثوق
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    document.head.appendChild(script);
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

    // 4. نظام اللغات (موسع ليشمل 10 لغات) ونصوص الواجهة
    const translations = {
        'ar': { name: 'رادار مِسبار', search: 'ابحث في 30,000 أداة...', free: 'مجاني', paid: 'مدفوع', try: 'جرب الآن', picked: 'مختارات اليوم', signup: 'Sign up', signin: 'Sign in', searchBtn: 'بحث', filterFree: 'مجاني فقط', guestAlert: 'يرجى التسجيل للحصول على ميزة البحث عن الأدوات المجانية فقط.' },
        'en': { name: 'AI RADAR', search: 'Search 30,000 tools...', free: 'Free', paid: 'Paid', try: 'Try Now', picked: 'TODAY\'S PICK', signup: 'Sign up', signin: 'Sign in', searchBtn: 'Search', filterFree: 'Free only', guestAlert: 'Please register to access the feature to search for free tools only.' },
        'fr': { name: 'RADAR IA', signup: 'S\'inscrire', signin: 'Se connecter' },
        'zh': { name: 'AI 雷达', signup: '注册', signin: '登录' },
        'hi': { name: 'एआई रडار', signup: 'साइन अप करें', signin: 'साइन इन करें' },
        'es': { name: 'RADAR IA', signup: 'Registrarse', signin: 'Iniciar sesión' },
        'de': { name: 'KI-RADAR', signup: 'Registrieren', signin: 'Anmelden' },
        'ja': { name: 'AIレーダー', signup: 'サインアップ', signin: 'サインイン' },
        'ru': { name: 'ИИ РАДАР', signup: 'Регистрация', signin: 'Войти' },
        'pt': { name: 'RADAR IA', signup: 'Inscrever-se', signin: 'Entrar' }
    };

    // قائمة الـ 10 لغات المنسدلة
    const languageList = [
        { code: 'ar', name: 'العربية' }, { code: 'en', name: 'English' },
        { code: 'fr', name: 'Français' }, { code: 'es', name: 'Español' },
        { code: 'de', name: 'Deutsch' }, { code: 'ja', name: '日本語' },
        { code: 'zh', name: '简体中文' }, { code: 'ru', name: 'Русский' },
        { code: 'pt', name: 'Português' }, { code: 'hi', name: 'हिन्दी' }
    ];

    const userLang = navigator.language.split('-')[0];
    const t = translations[userLang] || translations['en'];
    const isRtl = userLang === 'ar';

    // افتراض حالة المستخدم (غير مسجل) للتجربة
    let isUserRegistered = false;

    // 5. تصميم أبل ستور (Glassmorphism) مع الإضافات الجديدة
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
        body { background: transparent !important; color: #fff !important; font-family: ${isRtl ? "'Cairo', sans-serif" : "sans-serif"}; margin: 0; direction: ${isRtl ? 'rtl' : 'ltr'}; overflow-x: hidden; }
        .apple-nav { position: sticky; top: 0; backdrop-filter: blur(20px); background: rgba(0,0,0,0.6); display: flex; justify-content: space-between; align-items: center; padding: 10px 5%; z-index: 1000; border-bottom: 0.5px solid #333; height: 60px; }
        
        /* الشخبطة الحمراء: لوقو لغات ينسدل */
        .lang-dropdown { position: relative; display: inline-block; cursor: pointer; padding: 10px; }
        .lang-icon { width: 24px; height: 24px; filter: invert(1); /* أبيض وأسود */ }
        .lang-content { display: none; position: absolute; ${isRtl ? 'left: 0;' : 'right: 0;'} top: 100%; background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px); min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1001; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); overflow: hidden; }
        .lang-content a { color: #fff; padding: 12px 16px; text-decoration: none; display: block; font-size: 14px; transition: background 0.2s; text-align: ${isRtl ? 'right' : 'left'}; }
        .lang-content a:hover { background-color: rgba(255, 255, 255, 0.1); }
        .lang-dropdown:hover .lang-content { display: block; }

        /* منطقة البحث الوسطى */
        .search-container { display: flex; align-items: center; width: 45%; gap: 10px; }
        .search-bar { flex-grow: 1; background: rgba(44, 44, 46, 0.8); border: none; padding: 12px 20px; border-radius: 12px; color: #fff; outline: none; border: 1px solid #333; font-size: 14px; }
        
        /* الشخبطة المربع الأصفر: زر بحث خلفية سودا مكتوب بابيض */
        .search-btn { background-color: #000; color: #fff; border: 1px solid #333; padding: 11px 20px; border-radius: 12px; cursor: pointer; font-family: inherit; font-weight: bold; font-size: 14px; transition: background 0.2s; }
        .search-btn:hover { background-color: #1a1a1a; }

        /* منطقة الأزرار اليمنى */
        .nav-actions { display: flex; align-items: center; gap: 15px; }
        
        /* الشخبطة بالازرق والاخضر: sign up/in بخط صغير أنيق */
        .auth-link { text-decoration: none; font-size: 0.85rem; font-weight: 500; font-family: inherit; transition: opacity 0.2s; cursor: pointer; }
        .auth-link:hover { opacity: 0.8; }
        .signup-link { color: #007aff; /* لون مسبار الأزرار */ }
        .signin-link { color: #fff; /* أبيض */ }
        
        /* الشخبطة باللون الابيض: سويتش مجاني */
        .filter-container { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: #ccc; }
        .switch { position: relative; display: inline-block; width: 40px; height: 22px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.1); transition: .4s; border-radius: 22px; border: 1px solid rgba(255,255,255,0.2); }
        .slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        input:checked + .slider { background-color: #34c759; /* أبيض (أخضر أبل للمجاني) */ border-color: transparent; }
        input:checked + .slider:before { transform: translateX(18px); }

        /* الشعار الأصلي وباقي العناصر */
        .logo { font-size: 1.5rem; font-weight: 900; background: linear-gradient(to right, #00d1ff, #007aff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; white-space: nowrap; }
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

    // أيقونة عالميةSVG للغات
    const langIconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z'/%3E%3C/svg%3E`;

    // 6. بناء الهيكل الجديد للـ Nav
    document.body.innerHTML = `
        <nav class="apple-nav">
            <div class="logo">${t.name || 'AI RADAR'}</div>
            
            <div class="search-container">
                <input type="text" id="smartSearch" class="search-bar" placeholder="${t.search || 'Search tools...'}">
                <button class="search-btn">${t.searchBtn || 'Search'}</button>
            </div>

            <div class="nav-actions">
                <div class="filter-container">
                    <span>${t.filterFree || 'Free'}</span>
                    <label class="switch">
                        <input type="checkbox" id="freeFilterSwitch">
                        <span class="slider"></span>
                    </label>
                </div>
                <a class="auth-link signin-link">${t.signin || 'Sign in'}</a>
                <a class="auth-link signup-link">${t.signup || 'Sign up'}</a>
                
                <div class="lang-dropdown">
                    <img src="${langIconSvg}" class="lang-icon" alt="Language">
                    <div class="lang-content">
                        ${languageList.map(lang => `<a href="?lang=${lang.code}">${lang.name}</a>`).join('')}
                    </div>
                </div>
            </div>
        </nav>
        <div class="featured-slider" id="featuredZone"></div>
        <div class="grid" id="mainGrid"></div>
    `;

    // 7. منطق السويتش المقيد للتسجيل
    const freeSwitch = document.getElementById('freeFilterSwitch');
    freeSwitch.addEventListener('change', function(e) {
        if (!isUserRegistered) {
            e.preventDefault(); // منع التغيير ظاهرياً
            this.checked = false; // إعادة السويتش لوضعه
            alert(t.guestAlert || 'Please register to access this feature.');
        } else {
            // منطق التصفية الحقيقي للمسجلين (سيتم تنفيذه لاحقاً عند ربط البيانات)
            console.log("Filtering free tools for registered user...");
        }
    });

    // --- باقي السكريبت الأصلي (البيانات والمحرك) دون تغيير ---

    const colors = ['#FF3B30', '#34C759', '#007AFF', '#FF9500', '#AF52DE'];
    const mockData = Array.from({length: 40}, (_, i) => ({
        name: ['Jasper', 'ChatGPT', 'Midjourney', 'Claude', 'Sora', 'Luma', 'Canva'][i % 7] + ' ' + (i+1),
        price: i % 2 === 0 ? 'free' : 'paid',
        desc: isRtl ? 'أداة ذكاء اصطناعي احترافية متطورة' : 'Advanced professional AI tool'
    }));

    function render(data) {
        document.getElementById('mainGrid').innerHTML = data.map(item => `
            <div class="card">
                <span class="badge ${item.price}">${t[item.price] || item.price}</span>
                <div class="tool-logo" style="background:${colors[item.name.charCodeAt(0)%5]}">${item.name[0]}</div>
                <div style="font-weight:700; font-size:1rem; margin-bottom:5px;">${item.name}</div>
                <div style="color:#8e8e93; font-size:0.75rem; height:35px; overflow:hidden;">${item.desc}</div>
                <a href="#" class="btn">${t.try || 'Try Now'}</a>
            </div>
        `).join('');
    }

    document.getElementById('featuredZone').innerHTML = mockData.slice(0, 4).map(item => `
        <div class="hero-card" style="background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('https://picsum.photos/800/400?sig=${Math.random()}') center/cover;">
            <div style="color:#00d1ff; font-weight:bold; font-size:0.8rem;">${t.picked || 'TODAY\'S PICK'}</div>
            <h2 style="font-size:1.8rem; margin:10px 0;">${item.name}</h2>
            <p style="color:#ccc; font-size:0.9rem;">${item.desc}</p>
        </div>
    `).join('');

    document.getElementById('smartSearch').oninput = (e) => {
        const val = e.target.value.toLowerCase();
        render(mockData.filter(x => x.name.toLowerCase().includes(val)));
    };

    render(mockData);
    console.log("🚀 مِسبار انطلق في الفضاء! واجهة أبل المحدثة جاهزة.");
})();
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

    // 4. نظام اللغات (موسع ليشمل 10 لغات) ونصوص الواجهة
    const translations = {
        'ar': { name: 'رادار مِسبار', search: 'ابحث في 30,000 أداة...', free: 'مجاني', paid: 'مدفوع', try: 'جرب الآن', picked: 'مختارات اليوم', signup: 'Sign up', signin: 'Sign in', searchBtn: 'بحث', filterFree: 'مجاني فقط', guestAlert: 'يرجى التسجيل للحصول على ميزة البحث عن الأدوات المجانية فقط.' },
        'en': { name: 'AI RADAR', search: 'Search 30,000 tools...', free: 'Free', paid: 'Paid', try: 'Try Now', picked: 'TODAY\'S PICK', signup: 'Sign up', signin: 'Sign in', searchBtn: 'Search', filterFree: 'Free only', guestAlert: 'Please register to access the feature to search for free tools only.' },
        'fr': { name: 'RADAR IA', signup: 'S\'inscrire', signin: 'Se connecter' },
        'zh': { name: 'AI 雷达', signup: '注册', signin: '登录' },
        'hi': { name: 'एआई रडار', signup: 'साइन अप करें', signin: 'साइन इन करें' },
        'es': { name: 'RADAR IA', signup: 'Registrarse', signin: 'Iniciar sesión' },
        'de': { name: 'KI-RADAR', signup: 'Registrieren', signin: 'Anmelden' },
        'ja': { name: 'AIレーダー', signup: 'サインアップ', signin: 'サインイン' },
        'ru': { name: 'ИИ РАДАР', signup: 'Регистрация', signin: 'Войти' },
        'pt': { name: 'RADAR IA', signup: 'Inscrever-se', signin: 'Entrar' }
    };

    // قائمة الـ 10 لغات المنسدلة
    const languageList = [
        { code: 'ar', name: 'العربية' }, { code: 'en', name: 'English' },
        { code: 'fr', name: 'Français' }, { code: 'es', name: 'Español' },
        { code: 'de', name: 'Deutsch' }, { code: 'ja', name: '日本語' },
        { code: 'zh', name: '简体中文' }, { code: 'ru', name: 'Русский' },
        { code: 'pt', name: 'Português' }, { code: 'hi', name: 'हिन्दी' }
    ];

    const userLang = navigator.language.split('-')[0];
    const t = translations[userLang] || translations['en'];
    const isRtl = userLang === 'ar';

    // افتراض حالة المستخدم (غير مسجل) للتجربة
    let isUserRegistered = false;

    // 5. تصميم أبل ستور (Glassmorphism) مع الإضافات الجديدة
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
        body { background: transparent !important; color: #fff !important; font-family: ${isRtl ? "'Cairo', sans-serif" : "sans-serif"}; margin: 0; direction: ${isRtl ? 'rtl' : 'ltr'}; overflow-x: hidden; }
        .apple-nav { position: sticky; top: 0; backdrop-filter: blur(20px); background: rgba(0,0,0,0.6); display: flex; justify-content: space-between; align-items: center; padding: 10px 5%; z-index: 1000; border-bottom: 0.5px solid #333; height: 60px; }
        
        /* الشخبطة الحمراء: لوقو لغات ينسدل */
        .lang-dropdown { position: relative; display: inline-block; cursor: pointer; padding: 10px; }
        .lang-icon { width: 24px; height: 24px; filter: invert(1); /* أبيض وأسود */ }
        .lang-content { display: none; position: absolute; ${isRtl ? 'left: 0;' : 'right: 0;'} top: 100%; background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px); min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1001; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); overflow: hidden; }
        .lang-content a { color: #fff; padding: 12px 16px; text-decoration: none; display: block; font-size: 14px; transition: background 0.2s; text-align: ${isRtl ? 'right' : 'left'}; }
        .lang-content a:hover { background-color: rgba(255, 255, 255, 0.1); }
        .lang-dropdown:hover .lang-content { display: block; }

        /* منطقة البحث الوسطى */
        .search-container { display: flex; align-items: center; width: 45%; gap: 10px; }
        .search-bar { flex-grow: 1; background: rgba(44, 44, 46, 0.8); border: none; padding: 12px 20px; border-radius: 12px; color: #fff; outline: none; border: 1px solid #333; font-size: 14px; }
        
        /* الشخبطة المربع الأصفر: زر بحث خلفية سودا مكتوب بابيض */
        .search-btn { background-color: #000; color: #fff; border: 1px solid #333; padding: 11px 20px; border-radius: 12px; cursor: pointer; font-family: inherit; font-weight: bold; font-size: 14px; transition: background 0.2s; }
        .search-btn:hover { background-color: #1a1a1a; }

        /* منطقة الأزرار اليمنى */
        .nav-actions { display: flex; align-items: center; gap: 15px; }
        
        /* الشخبطة بالازرق والاخضر: sign up/in بخط صغير أنيق */
        .auth-link { text-decoration: none; font-size: 0.85rem; font-weight: 500; font-family: inherit; transition: opacity 0.2s; cursor: pointer; }
        .auth-link:hover { opacity: 0.8; }
        .signup-link { color: #007aff; /* لون مسبار الأزرار */ }
        .signin-link { color: #fff; /* أبيض */ }
        
        /* الشخبطة باللون الابيض: سويتش مجاني */
        .filter-container { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: #ccc; }
        .switch { position: relative; display: inline-block; width: 40px; height: 22px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.1); transition: .4s; border-radius: 22px; border: 1px solid rgba(255,255,255,0.2); }
        .slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        input:checked + .slider { background-color: #34c759; /* أبيض (أخضر أبل للمجاني) */ border-color: transparent; }
        input:checked + .slider:before { transform: translateX(18px); }

        /* الشعار الأصلي وباقي العناصر */
        .logo { font-size: 1.5rem; font-weight: 900; background: linear-gradient(to right, #00d1ff, #007aff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; white-space: nowrap; }
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

    // أيقونة عالميةSVG للغات
    const langIconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z'/%3E%3C/svg%3E`;

    // 6. بناء الهيكل الجديد للـ Nav
    document.body.innerHTML = `
        <nav class="apple-nav">
            <div class="logo">${t.name || 'AI RADAR'}</div>
            
            <div class="search-container">
                <input type="text" id="smartSearch" class="search-bar" placeholder="${t.search || 'Search tools...'}">
                <button class="search-btn">${t.searchBtn || 'Search'}</button>
            </div>

            <div class="nav-actions">
                <div class="filter-container">
                    <span>${t.filterFree || 'Free'}</span>
                    <label class="switch">
                        <input type="checkbox" id="freeFilterSwitch">
                        <span class="slider"></span>
                    </label>
                </div>
                <a class="auth-link signin-link">${t.signin || 'Sign in'}</a>
                <a class="auth-link signup-link">${t.signup || 'Sign up'}</a>
                
                <div class="lang-dropdown">
                    <img src="${langIconSvg}" class="lang-icon" alt="Language">
                    <div class="lang-content">
                        ${languageList.map(lang => `<a href="?lang=${lang.code}">${lang.name}</a>`).join('')}
                    </div>
                </div>
            </div>
        </nav>
        <div class="featured-slider" id="featuredZone"></div>
        <div class="grid" id="mainGrid"></div>
    `;

    // 7. منطق السويتش المقيد للتسجيل
    const freeSwitch = document.getElementById('freeFilterSwitch');
    freeSwitch.addEventListener('change', function(e) {
        if (!isUserRegistered) {
            e.preventDefault(); // منع التغيير ظاهرياً
            this.checked = false; // إعادة السويتش لوضعه
            alert(t.guestAlert || 'Please register to access this feature.');
        } else {
            // منطق التصفية الحقيقي للمسجلين (سيتم تنفيذه لاحقاً عند ربط البيانات)
            console.log("Filtering free tools for registered user...");
        }
    });

    // --- باقي السكريبت الأصلي (البيانات والمحرك) دون تغيير ---

    const colors = ['#FF3B30', '#34C759', '#007AFF', '#FF9500', '#AF52DE'];
    const mockData = Array.from({length: 40}, (_, i) => ({
        name: ['Jasper', 'ChatGPT', 'Midjourney', 'Claude', 'Sora', 'Luma', 'Canva'][i % 7] + ' ' + (i+1),
        price: i % 2 === 0 ? 'free' : 'paid',
        desc: isRtl ? 'أداة ذكاء اصطناعي احترافية متطورة' : 'Advanced professional AI tool'
    }));

    function render(data) {
        document.getElementById('mainGrid').innerHTML = data.map(item => `
            <div class="card">
                <span class="badge ${item.price}">${t[item.price] || item.price}</span>
                <div class="tool-logo" style="background:${colors[item.name.charCodeAt(0)%5]}">${item.name[0]}</div>
                <div style="font-weight:700; font-size:1rem; margin-bottom:5px;">${item.name}</div>
                <div style="color:#8e8e93; font-size:0.75rem; height:35px; overflow:hidden;">${item.desc}</div>
                <a href="#" class="btn">${t.try || 'Try Now'}</a>
            </div>
        `).join('');
    }

    document.getElementById('featuredZone').innerHTML = mockData.slice(0, 4).map(item => `
        <div class="hero-card" style="background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('https://picsum.photos/800/400?sig=${Math.random()}') center/cover;">
            <div style="color:#00d1ff; font-weight:bold; font-size:0.8rem;">${t.picked || 'TODAY\'S PICK'}</div>
            <h2 style="font-size:1.8rem; margin:10px 0;">${item.name}</h2>
            <p style="color:#ccc; font-size:0.9rem;">${item.desc}</p>
        </div>
    `).join('');

    document.getElementById('smartSearch').oninput = (e) => {
        const val = e.target.value.toLowerCase();
        render(mockData.filter(x => x.name.toLowerCase().includes(val)));
    };

    render(mockData);
    console.log("🚀 مِسبار انطلق في الفضاء! واجهة أبل المحدثة جاهزة.");
})();

