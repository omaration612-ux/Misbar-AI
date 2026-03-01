(function() {
    // 1. تحميل المكتبات والخطوط
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    document.head.appendChild(script);

    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;900&display=swap');
        body { background: #000; color: #fff; font-family: 'Cairo', sans-serif; margin: 0; direction: rtl; overflow-x: hidden; }
        #particles-js { position: fixed; width: 100%; height: 100%; z-index: -1; }
        
        /* Header & Switch */
        .apple-nav { position: sticky; top: 0; backdrop-filter: blur(20px); background: rgba(0,0,0,0.7); display: flex; justify-content: space-between; align-items: center; padding: 10px 5%; z-index: 1000; border-bottom: 0.5px solid #333; }
        .switch-box { display: flex; align-items: center; gap: 10px; font-size: 12px; }
        .switch { position: relative; width: 34px; height: 18px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #333; transition: .4s; border-radius: 20px; }
        .slider:before { content: ""; position: absolute; height: 14px; width: 14px; left: 2px; bottom: 2px; background: white; transition: .4s; border-radius: 50%; }
        input:checked + .slider { background: #007aff; }
        input:checked + .slider:before { transform: translateX(16px); }

        /* Branding Hero */
        .hero { padding: 60px 5%; text-align: center; }
        .hero h1 { font-size: 4rem; letter-spacing: 12px; margin: 0; background: linear-gradient(#fff, #444); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 900; }
        .tagline { color: #888; margin-top: 10px; }

        /* Grid 5x9 */
        .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; padding: 20px 5%; }
        .card { background: rgba(28, 28, 30, 0.6); border-radius: 20px; padding: 20px; text-align: center; border: 1px solid #333; transition: 0.3s; position: relative; }
        .card:hover { border-color: #007aff; transform: translateY(-5px); }
        .status-badge { position: absolute; top: 10px; left: 10px; font-size: 9px; padding: 2px 8px; border-radius: 10px; background: rgba(255,255,255,0.1); }

        /* Google Pagination */
        .pagination { display: flex; justify-content: center; gap: 10px; padding: 40px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: #333; cursor: pointer; }
        .dot.active { background: #007aff; transform: scale(1.3); }
    `;
    document.head.appendChild(style);

    script.onload = function() {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 100 },
                "color": { "value": "#ffffff" },
                "line_linked": { "enable": true, "distance": 150, "opacity": 0.1 },
                "move": { "speed": 1 }
            }
        });

        document.body.innerHTML += `
            <div id="particles-js"></div>
            <nav class="apple-nav">
                <div class="switch-box">
                    <span>مجاني</span>
                    <label class="switch"><input type="checkbox"><span class="slider"></span></label>
                    <span>مدفوع</span>
                </div>
                <input type="text" placeholder="ابحث في 30,000 أداة..." style="background:rgba(255,255,255,0.05); border:1px solid #333; color:#fff; padding:8px 20px; border-radius:10px; width:40%;">
                <div style="font-weight:900; color:#007aff;">MISBAR</div>
            </nav>
            <section class="hero">
                <h1>M I S B A R</h1>
                <p class="tagline">مِسبار يرقب أدوات الذكاء الاصطناعي في مكان واحد...</p>
            </section>
            <div class="grid" id="mainGrid"></div>
            <div class="pagination" id="pageDots"></div>
        `;

        // توليد 45 بطاقة (5 في 9)
        const grid = document.getElementById('mainGrid');
        for(let i=1; i<=45; i++) {
            grid.innerHTML += `
                <div class="card">
                    <span class="status-tag">${i % 2 === 0 ? 'مجاني' : 'مدفوع'}</span>
                    <div style="width:50px; height:50px; background:linear-gradient(45deg,#007aff,#00d1ff); border-radius:12px; margin:0 auto 15px;"></div>
                    <div style="font-weight:bold; font-size:14px;">أداة مِسبار ${i}</div>
                    <button style="width:100%; margin-top:15px; background:#fff; color:#000; border:none; padding:8px; border-radius:8px; font-weight:bold; cursor:pointer;">استكشف</button>
                </div>
            `;
        }

        // توليد نقاط قوقل العشرة
        const dots = document.getElementById('pageDots');
        for(let i=1; i<=10; i++) {
            dots.innerHTML += `<div class="dot ${i===1?'active':''}"></div>`;
        }
    };
})();
