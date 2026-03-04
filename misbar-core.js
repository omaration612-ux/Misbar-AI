/**
 * MISBAR AI - THE CORE ENGINE (v2.0)
 * المحرك المركزي الشامل: حل المشاكل الـ 10 + قائمة اللغات الفاخرة
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Misbar Core: System Initializing...");

    // دالة الانتظار لضمان عمل الكود بعد رسم ملف fixer.js للبطاقات
    setTimeout(() => {
        console.log("🛠️ Misbar Core: Activating features after UI load...");

        // 1. إصلاح مشكلة الجوال (Responsive Bridge)
        const adjustForMobile = () => {
            const grid = document.getElementById('mainGrid');
            if (window.innerWidth < 768 && grid) {
                grid.style.cssText = "display:grid; grid-template-columns:repeat(2, 1fr) !important; gap:10px !important; padding:10px !important;";
            } else if (grid) {
                grid.style.cssText = "display:grid; grid-template-columns:repeat(6, 1fr); gap:20px; padding:20px 5%;";
            }
        };
        window.addEventListener('resize', adjustForMobile);
        adjustForMobile();

        // 2. تفعيل البحث الذكي (Search Connector)
        const searchInput = document.getElementById('smartSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                const cards = document.querySelectorAll('.card');
                cards.forEach(card => {
                    const text = card.innerText.toLowerCase();
                    card.style.display = text.includes(term) ? 'flex' : 'none';
                });
            });
        }

        // 3. إحياء الأزرار (Auth & Nav Activation)
        const activateButtons = () => {
            document.querySelector('.signin-btn')?.addEventListener('click', () => alert('نافذة تسجيل الدخول قيد التجهيز...'));
            document.querySelector('.signup-link')?.addEventListener('click', () => alert('صفحة إنشاء الحساب قيد التجهيز...'));
            
            // روابط الفوتر (اتصل بنا والخصوصية)
            const footerLinks = document.querySelectorAll('.f-col a');
            footerLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert(`جاري فتح صفحة ${link.innerText}...`);
                });
            });
        };
        activateButtons();

        // 4. تفعيل قائمة اللغات الـ 10 (Elegant Dark Dropdown)
        const setupLanguageMenu = () => {
            const langBtn = document.querySelector('.lang-selector');
            if (!langBtn) return;

            const langMenu = document.createElement('div');
            langMenu.style.cssText = `
                position: absolute; top: 60px; left: 5%; background: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px; padding: 10px; display: none; flex-direction: column;
                z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.8); width: 150px;
            `;

            const languages = ['العربية', 'English', 'Français', 'Deutsch', 'Español', '中文', '日本語', 'Русский', 'Türkçe', 'हिन्दी'];
            languages.forEach(lang => {
                const item = document.createElement('div');
                item.innerText = lang;
                item.style.cssText = "color:white; padding:8px; cursor:pointer; font-size:13px; text-align:center; transition:0.3s; border-radius:5px;";
                item.onmouseover = () => item.style.background = "rgba(255,255,255,0.1)";
                item.onmouseout = () => item.style.background = "transparent";
                langMenu.appendChild(item);
            });

            document.body.appendChild(langMenu);
            langBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                langMenu.style.display = langMenu.style.display === 'flex' ? 'none' : 'flex';
            });
            document.addEventListener('click', () => langMenu.style.display = 'none');
        };
        setupLanguageMenu();

        // 5. تفعيل النقر على البطاقات (Card Interaction)
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            if (card) {
                const url = card.getAttribute('data-url') || "https://misbar-ai.web.app";
                window.open(url, '_blank');
            }
        });

        // 6. تفعيل الترقيم (Pagination Logic)
        const pages = document.querySelectorAll('.p-num');
        pages.forEach(page => {
            page.addEventListener('click', () => {
                pages.forEach(p => p.classList.remove('active'));
                page.classList.add('active');
                alert(`تحميل الصفحة ${page.innerText}...`);
            });
        });

        console.log("✅ Misbar Core: All systems are now live and connected.");
    }, 500); // تأخير نصف ثانية لضمان استقرار الواجهة
});