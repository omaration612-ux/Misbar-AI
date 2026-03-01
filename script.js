(function() {
    // إعدادات الـ Particles (لم يتم تغييرها لضمان استقرار الخلفية)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    document.head.appendChild(script);

    script.onload = function() {
        const particlesDiv = document.createElement('div');
        particlesDiv.id = 'particles-js';
        particlesDiv.style.position = 'fixed';
        particlesDiv.style.top = '0';
        particlesDiv.style.left = '0';
        particlesDiv.style.width = '100%';
        particlesDiv.style.height = '100%';
        particlesDiv.style.zIndex = '-1';
        particlesDiv.style.background = '#000';
        document.body.appendChild(particlesDiv);

        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "opacity": { "value": 0.3 },
                "move": { "enable": true, "speed": 1 }
            }
        });
    };

    const translations = {
        'ar': { name: 'رادار مِسبار', search: 'ابحث في 30,000 أداة...', free: 'مجاني', paid: 'مدفوع', try: 'جرب الآن', picked: 'مختارات اليوم', signup: 'إنشاء حساب', signin: 'دخول', searchBtn: 'بحث', filterFree: 'مجاني فقط', guestAlert: 'يرجى التسجيل للحصول على ميزة البحث عن الأدوات المجانية.' },
        'en': { name: 'AI RADAR', search: 'Search 30,000 tools...', free: 'Free', paid: 'Paid', try: 'Try Now', picked: 'TODAY\'S PICK', signup: 'Sign up', signin: 'Sign in', searchBtn: 'Search', filterFree: 'Free only', guestAlert: 'Please register to access the feature.' }
    };

    const userLang = navigator.language.split('-')[0];
    const t = translations[userLang] || translations['en'];
    const isRtl = userLang === 'ar';

    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
        body { background: transparent !important; color: #fff !important; font-family: 'Cairo', sans-serif; margin: 0; direction: ${isRtl ? 'rtl' : 'ltr'}; overflow-x: hidden; }
        
        /* الهيدر */
        .apple-nav { position: sticky; top: 0; backdrop-filter: blur(20px); background: rgba(0,0,0,0.7); display: flex; justify-content: space-between; align-items: center; padding: 10px 5%; z-index: 1000; border-bottom: 0.5px solid #333; height: 65px; }
        .logo { font-size: 1.6rem; font-weight: 900; background: linear-gradient(to right, #00d1ff, #007aff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

        /* البحث */
        .search-container { display: flex; align-items: center; width: 40%; gap: 10px; }
        .search-bar { flex-grow: 1; background: rgba(44, 44, 46, 0.8); border: 1px solid #333; padding: 10px 15px; border-radius: 12px; color: #fff; outline: none; }
        
        /* تحسين البطاقات (التعديل المطلوب) */
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 25px; padding: 40px 5%; }
        
        .card { 
            background: rgba(28, 28, 30, 0.7); 
            border-radius: 28px; 
            padding: 25px 20px; 
            text-align: center; 
            border: 1px solid rgba(255,255,255,0.1); 
            position: relative; 
            transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
            backdrop-filter: blur(10px);
            min-height: 320px; /* زيادة الطول لاستيعاب الاسم والوصف */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .card:hover { transform: translateY(-10px); border-color: #007aff; box-shadow: 0 15px 30px rgba(0,0,0,0.5); }
        
        .tool-logo { 
            width: 75px; 
            height: 75px; 
            border-radius: 20px; 
            margin: 0 auto 15px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 32px; 
            font-weight: bold; 
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .tool-name { font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: #fff; }
        
        .tool-desc { 
            color: #a1a1a6; 
            font-size: 0.85rem; 
            line-height: 1.4;
            height: 60px; /* تحديد طول ثابت للوصف لتوحيد شكل البطاقات */
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* عرض 3 أسطر بحد أقصى */
            -webkit-box-orient: vertical;
        }

        .badge { position: absolute; top: 15px; right: 15px; font-size: 10px; font-weight: bold; padding: 5px 12px; border-radius: 20px; text-transform: uppercase; }
        .free { background: rgba(52, 199, 89, 0.15); color: #34c759; border: 0.5px solid rgba(52, 199, 89, 0.3); }
        .paid { background: rgba(255, 59, 48, 0.15); color: #ff3b30; border: 0.5px solid rgba(255, 59, 48, 0.3); }
        
        .btn { background: #007aff; color: #fff; border: none; padding: 12px; border-radius: 16px; width: 100%; font-weight: 700; cursor: pointer; text-decoration: none; margin-top: 15px; transition: 0.3s; }
        .btn:hover { background: #0056b3; }
    `;
    document.head.appendChild(style);

    // بناء واجهة المستخدم والـ Render
    const mockData = Array.from({length: 40}, (_, i) => ({
        name: ['ChatGPT', 'Midjourney', 'Jasper', 'Claude', 'Sora'][i % 5] + ' Pro',
        price: i % 3 === 0 ? 'free' : 'paid',
        desc: isRtl ? 'أفضل أداة ذكاء اصطناعي لزيادة الإنتاجية وتحليل البيانات بدقة عالية.' : 'The best AI tool to increase productivity and analyze data with high accuracy.'
    }));

    function render(data) {
        const colors = ['#5856D6', '#007AFF', '#34C759', '#FF9500', '#FF2D55'];
        document.getElementById('mainGrid').innerHTML = data.map(item => `
            <div class="card">
                <span class="badge ${item.price}">${t[item.price]}</span>
                <div class="tool-logo" style="background: linear-gradient(135deg, ${colors[Math.floor(Math.random()*5)]}, #1c1c1e)">${item.name[0]}</div>
                <div class="tool-name">${item.name}</div>
                <div class="tool-desc">${item.desc}</div>
                <a href="#" class="btn">${t.try}</a>
            </div>
        `).join('');
    }

    // الحقن المباشر في الصفحة
    document.body.innerHTML = `
        <nav class="apple-nav">
            <div class="logo">${t.name}</div>
            <div class="search-container">
                <input type="text" id="smartSearch" class="search-bar" placeholder="${t.search}">
            </div>
            <div style="display:flex; gap:15px; align-items:center;">
                <span style="font-size:0.85rem; color:#8e8e93; cursor:pointer;">${t.signin}</span>
                <button style="background:#007aff; color:#fff; border:none; padding:8px 16px; border-radius:10px; font-weight:bold; cursor:pointer;">${t.signup}</button>
            </div>
        </nav>
        <div class="grid" id="mainGrid"></div>
    `;

    render(mockData);

    document.getElementById('smartSearch').oninput = (e) => {
        const val = e.target.value.toLowerCase();
        render(mockData.filter(x => x.name.toLowerCase().includes(val)));
    };

    console.log("🚀 مِسبار جاهز للبيانات الضخمة!");
})();
