/**
 * 💉 MISBAR AI - ULTIMATE CLOUD INJECTOR v4.0
 * المحرك النهائي: ربط الفلاتر السحابية + بوت الصور + أتمتة الـ 30,000 أداة
 */

import { MisbarCloud } from './firebase-bridge.js';

const MisbarInjector = {
    itemsPerPage: 12,
    allTools: [], // المخزن الرئيسي للبيانات القادمة من السحابة

    init: async function() {
        console.log("🚀 Injector: Activating Misbar Cloud Engine...");
        
        // 1. جلب أول دفعة من البيانات من Firebase
        const cloudData = await MisbarCloud.fetchTools(this.itemsPerPage);
        
        if (cloudData && cloudData.length > 0) {
            this.allTools = cloudData;
            console.log(`✅ Success: Connected to Cloud. ${cloudData.length} tools active.`);
        } else {
            // حل احتياطي في حال فشل السحابة
            console.warn("⚠️ Fallback: Using Local Data Engine...");
            this.allTools = typeof MisbarData !== 'undefined' ? MisbarData.tools : [];
        }

        this.renderTools();
        this.setupSearch();
        this.bindYourExistingFilters(); // ربط الفلاتر التي تمتلكها "من زمان"
        this.setupPagination();
    },

    /**
     * 🖼️ رسم البطاقات (تفعيل بوت الصور + التصنيفات)
     */
    renderTools: function(toolsToRender = null) {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;

        grid.innerHTML = ""; 
        const targetTools = toolsToRender || this.allTools;

        if (targetTools.length === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:50px; color:#555;">🔍 لم نجد أدوات في هذا القسم حالياً..</div>`;
            return;
        }

        targetTools.forEach(tool => {
            const isFree = tool.price?.toLowerCase() === 'free' || tool.price?.toLowerCase() === 'freemium';
            
            const card = `
                <div class="card" data-url="${tool.link}" onclick="window.open('${tool.link}', '_blank')">
                    <div style="position:absolute; top:12px; left:12px; background:${isFree?'#28a745':'#ffc107'}; color:#000; font-size:9px; padding:3px 7px; border-radius:5px; font-weight:bold; z-index:2;">
                        ${tool.price?.toUpperCase() || 'PRO'}
                    </div>
                    
                    <div class="card-content">
                        <img src="${tool.img}" 
                             onerror="MisbarCloud.fixBrokenImage(this)" 
                             alt="${tool.name}" 
                             style="width:50px; height:50px; border-radius:10px; margin-bottom:15px; object-fit:cover;">
                        
                        <h3 style="margin:0 0 10px 0; font-size:18px; color:#fff;">${tool.name}</h3>
                        <p style="font-size:13px; color:#aaa; line-height:1.4; height:40px; overflow:hidden;">${tool.desc}</p>
                        
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px; border-top:1px solid #1a1a1a; padding-top:10px;">
                            <span style="font-size:11px; color:#00f2ff;">#${tool.category || 'AI'}</span>
                            <button style="background:transparent; border:1px solid #333; color:#fff; padding:5px 12px; border-radius:15px; font-size:12px;">تجربة</button>
                        </div>
                    </div>
                </div>
            `;
            grid.innerHTML += card;
        });
    },

    /**
     * 🔗 ربط الفلاتر القديمة (الأزرار التي لديك من زمان)
     */
    bindYourExistingFilters: function() {
        // نبحث عن أي عنصر يحمل كلاس cat-btn أو tag-pro (حسب ملفاتك)
        const filters = document.querySelectorAll('.cat-btn, .tag-pro');
        console.log(`🎯 Found ${filters.length} existing filters. Linking now...`);

        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                // إزالة الحالة النشطة من الجميع وإضافتها للزر المضغوط
                filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const category = btn.getAttribute('data-category') || btn.innerText.trim();
                
                if (category === 'الكل' || category === 'all' || category === '🛰️ الكل') {
                    this.renderTools(this.allTools);
                } else {
                    const filtered = this.allTools.filter(t => 
                        t.category?.toLowerCase().includes(category.toLowerCase()) || 
                        category.includes(t.category)
                    );
                    this.renderTools(filtered);
                }
            });
        });
    },

    setupSearch: function() {
        const searchInput = document.getElementById('smartSearch');
        if (!searchInput) return;

        searchInput.oninput = (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = this.allTools.filter(t => 
                t.name.toLowerCase().includes(term) || 
                (t.category && t.category.toLowerCase().includes(term))
            );
            this.renderTools(filtered);
        };
    },

    setupPagination: function() {
        const pages = document.querySelectorAll('.p-num');
        pages.forEach(p => {
            p.onclick = async () => {
                pages.forEach(pg => pg.classList.remove('active'));
                p.classList.add('active');
                // جلب الصفحة التالية من السحابة
                const nextSet = await MisbarCloud.fetchTools(12, true);
                if (nextSet.length > 0) {
                    this.allTools = nextSet;
                    this.renderTools();
                }
            };
        });
    }
};

// تشغيل المحرك
document.addEventListener('DOMContentLoaded', () => MisbarInjector.init());

export { MisbarInjector };