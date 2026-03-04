const fs = require('fs');

const indexHTML = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>MISBAR AI | رادار مِسبار</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
</head>
<body>
    <div id="particles-js"></div>
    <header class="main-header">
        <div class="auth-btns">
            <button class="signup-txt">Sign up</button>
            <button class="signin-btn">Sign in</button>
        </div>
        <div class="search-top">
            <input type="text" placeholder="...Search 15,000 tools">
        </div>
        <div class="brand-nav">
            <span class="world-icon">🌐 ▼</span>
            <h1 class="main-logo">Misbar <span class="ai-glow">AI</span></h1>
        </div>
    </header>

    <section class="rolling-features">
        <div class="feat-track">
            <div class="f-card gold-grad"><span>مختارات اليوم</span><h2>Midjourney 2</h2><p>اكتشف القوة الحقيقية</p></div>
            <div class="f-card glass-grad"><span>مختارات اليوم</span><h2>ChatGPT 1</h2><p>مستقبل الذكاء الاصطناعي</p></div>
            <div class="f-card blue-grad"><span>مختارات اليوم</span><h2>Claude 3</h2><p>تحليل بيانات ذكي</p></div>
            <div class="f-card purple-grad"><span>مختارات اليوم</span><h2>Sora AI</h2><p>فيديو من الخيال</p></div>
            <div class="f-card green-grad"><span>مختارات اليوم</span><h2>Gemini Pro</h2><p>محرك البحث المطور</p></div>
            <div class="f-card red-grad"><span>مختارات اليوم</span><h2>Runway</h2><p>إبداع بلا حدود</p></div>
        </div>
    </section>

    <div class="filters-bar">
        <button class="tag active">All</button>
        <button class="tag">Writing</button><button class="tag">Image</button>
        <button class="tag">Video</button><button class="tag">Coding</button>
        <button class="tag">Audio</button>
    </div>

    <main id="mainGrid" class="grid-6x10"></main>

    <div class="pagination-glass-rolling">
        <div class="rolling-pages">
            <span class="p-btn active">1</span><span class="p-btn">2</span><span class="p-btn">3</span>
            <span class="p-btn">4</span><span class="p-btn">5</span><span class="p-btn">6</span>
        </div>
    </div>

    <footer class="mega-footer-dark">
        <div class="f-content">
            <h2>Misbar <span class="ai-glow">AI</span></h2>
            <p>أكبر دليل أدوات ذكاء اصطناعي في الوطن العربي</p>
        </div>
    </footer>

    <script>
        particlesJS('particles-js', {
            "particles": { "number": { "value": 100 }, "color": { "value": "#00f2ff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.3 }, "size": { "value": 2 }, "line_linked": { "enable": true, "distance": 150, "color": "#00f2ff", "opacity": 0.2, "width": 1 }, "move": { "enable": true, "speed": 2 } }
        });
    </script>
    <script src="engine.js" type="module"></script>
</body>
</html>`;

const styleCSS = `
:root { --main-cyan: #00f2ff; }
body { background: #000; color: #fff; margin: 0; font-family: 'Segoe UI', sans-serif; direction: rtl; overflow-x: hidden; }
#particles-js { position: fixed; width: 100%; height: 100%; z-index: -1; }

.main-header { display: flex; justify-content: space-between; padding: 20px 5%; align-items: center; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); }
.ai-glow { color: var(--main-cyan); font-weight: 900; text-shadow: 0 0 15px var(--main-cyan); }
.signin-btn { background: #fff; color: #000; border-radius: 20px; border: none; padding: 8px 20px; font-weight: bold; cursor: pointer; }
.signup-txt { color: #007bff; background: none; border: none; font-weight: bold; cursor: pointer; margin-left: 15px; }

.rolling-features { overflow-x: auto; padding: 40px 5%; scrollbar-width: none; }
.feat-track { display: flex; gap: 20px; width: max-content; }
.f-card { width: 480px; height: 250px; border-radius: 35px; padding: 30px; border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0; }
.gold-grad { background: linear-gradient(135deg, #2b2213, #000); border-color: #4d3d22; }
.glass-grad { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); }

.pagination-glass-rolling { background: rgba(255,255,255,0.03); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.05); padding: 15px 40px; border-radius: 50px; width: fit-content; margin: 40px auto; }
.rolling-pages { display: flex; gap: 25px; overflow-x: auto; scrollbar-width: none; }
.p-btn { font-size: 1.3rem; color: #444; cursor: pointer; transition: 0.3s; }
.p-btn.active { color: var(--main-cyan); transform: scale(1.2); font-weight: bold; }

.mega-footer-dark { background: #050505; padding: 80px 10%; border-top: 1px solid #111; margin-top: 100px; text-align: center; }
`;

fs.writeFileSync('index.html', indexHTML);
fs.writeFileSync('style.css', styleCSS);
console.log('🚀 تم إنتاج النسخة الاحترافية بنجاح يا عمر!');