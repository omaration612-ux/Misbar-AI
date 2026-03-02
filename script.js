(function() {
    // 1. إعدادات الخلفية المتحركة (Particles)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    document.head.appendChild(script);

    script.onload = function() {
        // إنشاء حاوية الجزيئات إذا لم تكن موجودة
        if(!document.getElementById('particles-js')) {
            const pDiv = document.createElement('div');
            pDiv.id = 'particles-js';
            document.body.prepend(pDiv);
        }

        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.2 },
                "size": { "value": 3 },
                "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "out" }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "repulse" } }
            }
        });
    };

    // 2. تنسيقات إضافية لضمان ثبات شكل البطاقات الحقيقية
    const style = document.createElement('style');
    style.innerHTML = `
        .tool-name { font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: #fff; text-align: center; }
        .tool-desc { color: #a1a1a6; font-size: 0.85rem; line-height: 1.4; height: 60px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; text-align: center; }
        .card { min-height: 320px; display: flex; flex-direction: column; justify-content: space-between; background: rgba(28, 28, 30, 0.6) !important; border: 1px solid #333 !important; }
        #particles-js { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background: #000; }
    `;
    document.head.appendChild(style);

    console.log("✅ نظام التصميم والخلفية جاهز");
})();
