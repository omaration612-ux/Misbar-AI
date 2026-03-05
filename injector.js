/**
 * 💉 MISBAR AI - NEON INJECTOR (FINAL VERSION)
 * المحرك النهائي: ربط البيانات الحقيقية + صور النيون + الروابط الصحيحة
 */

const MisbarInjector = {
    allTools: [],

    // 1. توليد شعار نيون احترافي (حل مشكلة الصور المفقودة)
    generateSmartLogo: function(name) {
        const colors = ['00f2ff', '7000ff', 'ff007a', '00ff87'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${randomColor}&color=fff&size=128&bold=true&format=svg`;
    },

    // 2. رسم البطاقات الحقيقية
    renderTools: function(data = this.allTools) {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;

        grid.innerHTML = ""; // مسح الأشباح والبيانات التجريبية
        
        data.forEach(tool => {
            // تحديد الصورة: إما الموجودة في البيانات أو نيون مولد
            const smartImage = tool.img || tool.image || this.generateSmartLogo(tool.name);
            const toolLink = tool.link || tool.url || '#';

            const card = `
                <div class="card" onclick="window.open('${toolLink}', '_blank')">
                    <div class="card-content">
                        <img src="${smartImage}" 
                             onerror="this.src='logo-misbar.png'" 
                             alt="${tool.name}" 
                             style="width:55px; height:55px; border-radius:12px; margin-bottom:15px; object-fit:cover; border:1px solid #00f2ff;">
                        
                        <h3 style="margin:0 0 10px 0; font-size:17px; color:#fff;">${tool.name}</h3>
                        <p style="font-size:12px; color:#aaa; line-height:1.4; height:36px; overflow:hidden;">
                            ${tool.desc || tool.description || 'أداة ذكاء اصطناعي متطورة مضافة لرادار مسبار.'}
                        </p>
                        
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px; border-top:1px solid #1a1a1a; padding-top:10px;">
                            <span style="font-size:10px; color:#00f2ff; font-weight:bold;">#${tool.category || 'AI'}</span>
                            <button class="visit-btn" style="background:#00f2ff; border:none; color:#000; padding:4px 12px; border-radius:10px; font-size:11px; font-weight:bold;">استكشف</button>
                        </div>
                    </div>
                </div>
            `;
            grid.innerHTML += card;
        });

        // تشغيل المصلح لضبط الصفوف (الـ 6 صفوف والصفين)
        if (typeof applyMisbarProTouch !== 'undefined') applyMisbarProTouch();
    },

    // 3. التشغيل الأولي وربط البيانات الحقيقية
    init: function() {
        console.log("🛰️ Misbar Engine: Connecting to Data Engine...");
        // التأكد من قراءة مصفوفة الأدوات من ملف data-engine.js
        if (typeof MisbarData !== 'undefined' && MisbarData.tools) {
            this.allTools = MisbarData.tools;
            this.renderTools();
        }
    }
};

// تشغيل عند جاهزية المتصفح
// وضع هذا مكانه في نهاية ملف injector.js:
MisbarInjector.init();