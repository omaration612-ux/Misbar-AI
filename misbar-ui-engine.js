/**
 * 🎨 MISBAR AI - UI ARCHITECT ENGINE (v5.5 - Ultra Fix)
 * Integrated: Injector + Fixer + Multi-Source Image Finder
 * الهدف: عرض 30,000 أداة بدقة 100% بدون فقدان بيانات أو اهتزاز
 */

const MisbarUI = {
    allTools: [],
    
    init: function() {
        console.log("🎨 UI Engine: Constructing Interface...");
        this.setupLayout();
        this.bindSearch();
        this.renderTools();
        
        // مراقبة حجم الشاشة لمنع القفز المفاجئ عند تدوير الجهاز
        window.addEventListener('resize', () => this.setupLayout());
    },

    // 1. إعداد شكل الشبكة (Grid) برمجياً لضمان الـ 6 أعمدة فوراً
    setupLayout: function() {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;

        // تطبيق القواعد: 2 للجوال (أصغر من 768) و 6 للكمبيوتر
        if (window.innerWidth < 768) {
            grid.style.display = "grid";
            grid.style.gridTemplateColumns = "repeat(2, 1fr)";
            grid.style.gap = "10px";
            grid.style.padding = "10px";
        } else {
            grid.style.display = "grid";
            grid.style.gridTemplateColumns = "repeat(6, 1fr)";
            grid.style.gap = "20px";
            grid.style.padding = "20px 5%";
        }
    },

    // 2. المحقن الذكي مع معالج الصور المرن (Smart Injector)
    renderTools: function(data = this.allTools) {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;

        // تحسين الأداء للمصفوفات الضخمة (30,000 أداة)
        const fragment = document.createDocumentFragment();
        grid.innerHTML = ""; 

        data.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'card';
            
            // تحديد الحالة المالية للأداة
            const isFree = tool.price === 'مجاني' || tool.price === 'freemium' || tool.price === 'free';
            const badgeColor = isFree ? '#00ff87' : '#ffc107';

            // مصفوفة احتمالات الصور لضمان عدم الاختفاء
            const toolImage = tool.img || tool.image || tool.logo || tool.URL || tool.image_url || 'https://via.placeholder.com/150';

            card.innerHTML = `
                <div class="card-content" style="position:relative; background:#080808; border:1px solid #111; border-radius:15px; padding:15px; min-height:220px; display:flex; flex-direction:column; justify-content:space-between;">
                    <div class="badge" style="position:absolute; top:10px; left:10px; background:${badgeColor}; color:#000; font-size:9px; padding:2px 6px; border-radius:4px; font-weight:bold;">
                        ${tool.price ? tool.price.toUpperCase() : 'AI'}
                    </div>
                    
                    <div class="tool-img" style="width:45px; height:45px; border-radius:10px; overflow:hidden; border:1px solid #222; background:#111;">
                        <img src="${toolImage}" 
                             alt="${tool.name}" 
                             style="width:100%; height:100%; object-fit:cover;" 
                             onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=00f2ff&color=000&bold=true'">
                    </div>

                    <div class="tool-info" style="margin-top:10px;">
                        <h3 style="font-size:14px; margin:0; color:#fff;">${tool.name}</h3>
                        <p style="font-size:11px; color:#888; margin:5px 0; line-height:1.4; height:32px; overflow:hidden;">
                            ${tool.desc || 'اكتشف قوة الذكاء الاصطناعي مع مِسبار'}
                        </p>
                    </div>

                    <div class="card-footer" style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #1a1a1a; padding-top:10px;">
                        <span style="font-size:9px; color:#00f2ff;">#${tool.category || 'AI Tools'}</span>
                        <button onclick="window.open('${tool.link}', '_blank')" 
                                style="background:#00f2ff; border:none; color:#000; padding:4px 10px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer;">
                            دخول
                        </button>
                    </div>
                </div>
            `;
            fragment.appendChild(card);
        });

        grid.appendChild(fragment);
    },

    // 3. محرك البحث اللحظي الفائق
    bindSearch: function() {
        const searchInput = document.getElementById('smartSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase().trim();
                const filtered = this.allTools.filter(t => 
                    (t.name && t.name.toLowerCase().includes(term)) || 
                    (t.category && t.category.toLowerCase().includes(term)) ||
                    (t.desc && t.desc.toLowerCase().includes(term))
                );
                this.renderTools(filtered);
            });
        }
    }
};

// التشغيل التلقائي للنظام
document.addEventListener('DOMContentLoaded', () => MisbarUI.init());