/**
 * 💉 MISBAR AI - SMART NEON INJECTOR v5.0
 * المحرك المولد للصور + مصلح الروابط + طارد الأشباح
 */

const MisbarInjector = {
    allTools: [],
    
    // 1. محرك توليد الصور النيون (حل مشكلة الشفافية)
    generateSmartLogo: function(name) {
        const colors = ['00f2ff', '7000ff', 'ff007a', '00ff87'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${randomColor}&color=fff&size=128&bold=true&format=svg`;
    },

    // 2. دالة رسم البطاقات فائقة الدقة
    renderTools: function(data = this.allTools) {
        // نستخدم ID موقعك الحقيقي "mainGrid"
        const grid = document.getElementById('mainGrid'); 
        if (!grid) return;

        // فوراً: مسح أي بطاقات قديمة أو شفافة
        grid.innerHTML = ''; 

        data.forEach(tool => {
            // استخدام الصورة الحقيقية أو توليد شعار نيون احترافي
            const smartImage = tool.img || tool.image || this.generateSmartLogo(tool.name);
            
            const card = document.createElement('div');
            card.className = 'card'; // الكلاس المستخدم في ستايل موقعك
            card.style.cursor = 'pointer';
            
            // الهيكل الجديد: صورة دائرية + اسم + وصف + زر حقيقي
            card.innerHTML = `
                <div class="card-content" onclick="window.open('${tool.link || tool.url || '#'}', '_blank')">
                    <img src="${smartImage}" 
                         onerror="this.src='logo-misbar.png'" 
                         alt="${tool.name}" 
                         style="width:60px; height:60px; border-radius:12px; margin-bottom:15px; object-fit:cover; border: 2px solid #00f2ff;">
                    
                    <h3 style="margin:0 0 10px 0; font-size:18px; color:#fff;">${tool.name}</h3>
                    <p style="font-size:13px; color:#aaa; line-height:1.4; height:40px; overflow:hidden;">
                        ${tool.desc || tool.description || 'أداة ذكاء اصطناعي متطورة مضافة حديثاً لرادار مسبار.'}
                    </p>
                    
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px; border-top:1px solid #1a1a1a; padding-top:10px;">
                        <span style="font-size:11px; color:#00f2ff; font-weight:bold;">#${tool.category || 'AI'}</span>
                        <button class="visit-btn" style="background:#00f2ff; border:none; color:#000; padding:5px 15px; border-radius:20px; font-size:12px; font-weight:bold;">تجربة</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // تشغيل لمسة مسبار الاحترافية (Fixer) بعد الرسم لضبط الصفوف
        if (typeof applyMisbarProTouch !== 'undefined') applyMisbarProTouch();
    },

    // 3. التشغيل والربط ببيانات الـ 30,000 أداة
    init: function() {
        console.log("🛰️ Misbar Radar: Syncing 30,000 tools...");
        if (typeof MisbarData !== 'undefined' && MisbarData.tools) {
            this.allTools = MisbarData.tools;
            this.renderTools();
        } else {
            console.error("❌ Error: MisbarData not found!");
        }
    }
};

// تشغيل المحرك عند جاهزية الصفحة
document.addEventListener('DOMContentLoaded', () => MisbarInjector.init());