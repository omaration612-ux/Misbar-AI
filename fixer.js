/**
 * MISBAR AI - Ultimate Fixer v8.0
 * التعديلات: إعادة زر المزيد، توسيط الترقيم، وتفعيل انزلاق الصفحات
 */

function applyMisbarProTouch() {
    // 1. رفع اللوجو والسويتشر بجانب البحث (تأكيد الموقع العلوي)
    const brandZone = document.querySelector('.brand-zone');
    const searchBox = document.querySelector('.search-top-box');
    const header = document.querySelector('.main-header');
    
    if (brandZone && searchBox && header) {
        header.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 10px 5%;";
        brandZone.style.cssText = "order: 1; display: flex; align-items: center; gap: 10px; flex-direction: row-reverse;";
        searchBox.style.cssText = "order: 2; flex-grow: 1; margin: 0 20px; max-width: 500px;";
        
        if (!document.getElementById('topFreeSwitch')) {
            searchBox.insertAdjacentHTML('afterend', `
                <div id="topFreeSwitch" style="order: 3; display:flex; align-items:center; gap:8px;">
                    <span style="color:#888; font-size:12px;">مجاني</span>
                    <label style="position:relative; display:inline-block; width:30px; height:16px; background:#222; border-radius:20px; cursor:pointer;">
                        <input type="checkbox" style="opacity:0; width:0; height:0;" onchange="alert('سجل لتفعيل الفلترة')">
                        <span style="position:absolute; top:2px; left:2px; width:12px; height:12px; background:#555; border-radius:50%; transition:0.3s;"></span>
                    </label>
                </div>
            `);
        }
    }

    // 2. إعادة زر "المزيد +" المنسدل وتثبيته
    const tagsContainer = document.querySelector('.color-tags-pro');
    if (tagsContainer && !document.getElementById('btnMore')) {
        const moreWrapper = document.createElement('div');
        moreWrapper.style.cssText = "position:relative; display:inline-block; vertical-align:middle; margin-right:10px;";
        moreWrapper.innerHTML = `
            <button id="btnMore" class="tag-pro" style="background:#000; color:#fff; border:1px solid #333; cursor:pointer; padding: 5px 15px; border-radius: 20px;">المزيد +</button>
            <div id="menuMore" style="display:none; position:absolute; top:40px; right:0; background:#000; border:1px solid #222; width:150px; z-index:10000; border-radius:8px; box-shadow: 0 10px 20px rgba(0,0,0,0.5);">
                ${['SEO', 'Marketing', 'Video', 'Design', 'Coding', 'Writing', 'Audio', '3D', 'Data', 'Social'].map(cat => 
                    `<div style="padding:10px; color:#fff; border-bottom:1px solid #111; cursor:pointer; font-size:13px; text-align:right;">${cat}</div>`
                ).join('')}
            </div>
        `;
        tagsContainer.appendChild(moreWrapper);
        document.getElementById('btnMore').onclick = (e) => {
            const m = document.getElementById('menuMore');
            m.style.display = m.style.display === 'none' ? 'block' : 'none';
            e.stopPropagation();
        };
    }

    // 3. توسيط الترقيم وتفعيل الانزلاق (Pagination Slider)
    const paginationWrapper = document.querySelector('.pagination-glass-rolling');
    const rollingPages = document.querySelector('.rolling-pages');
    if (paginationWrapper && rollingPages) {
        // توسيط الحاوية
        paginationWrapper.style.cssText = "display: flex; justify-content: center; width: 100%; margin: 30px 0; overflow: hidden;";
        
        // تفعيل الانزلاق للسحب باليد
        rollingPages.style.cssText = "display: flex; gap: 10px; overflow-x: auto; cursor: grab; white-space: nowrap; padding: 10px 20px; scroll-behavior: smooth; max-width: 80%; scrollbar-width: none;";
        
        let isDown = false, startX, scrollLeft;
        rollingPages.onmousedown = (e) => { isDown = true; rollingPages.style.cursor = 'grabbing'; startX = e.pageX - rollingPages.offsetLeft; scrollLeft = rollingPages.scrollLeft; };
        window.onmouseup = () => { isDown = false; rollingPages.style.cursor = 'grab'; };
        window.onmousemove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - rollingPages.offsetLeft;
            const walk = (x - startX) * 2;
            rollingPages.scrollLeft = scrollLeft - walk;
        };
    }

    // 4. ضبط البطاقات (طويلة، 6 أعمدة، مجاني ومدفوع)
    const grid = document.getElementById('mainGrid');
    if (grid) {
        grid.style.cssText = "display:grid; grid-template-columns:repeat(6, 1fr); gap:20px; padding:20px 5%;";
        if (grid.children.length === 0) {
            for (let i = 1; i <= 60; i++) {
                const isFree = i % 2 === 0;
                grid.innerHTML += `
                    <div class="card" style="background:#080808; border:1px solid #111; border-radius:15px; padding:20px; min-height:220px; display:flex; flex-direction:column; justify-content:space-between; position:relative;">
                        <div style="position:absolute; top:12px; left:12px; background:${isFree?'#28a745':'#ffc107'}; color:#000; font-size:9px; padding:3px 7px; border-radius:5px; font-weight:bold;">${isFree?'FREE':'PAID'}</div>
                        <div style="width:45px; height:45px; background:#111; border-radius:10px; border:1px solid #222;"></div>
                        <div>
                            <h3 style="color:#fff; font-size:15px; margin:10px 0;">أداة مسبار ${i}</h3>
                            <p style="color:#666; font-size:11px; line-height:1.4;">وصف احترافي طويل يناسب تصميم البطاقة الجديد ويشمل المجاني والمدفوع.</p>
                        </div>
                    </div>`;
            }
        }
    }
}

// تشغيل الفكسر

applyMisbarProTouch();