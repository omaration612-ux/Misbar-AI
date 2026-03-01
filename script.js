/* تصميم مِسبار - Apple Glassmorphism */
body {
    margin: 0; background: #000; color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    direction: rtl; overflow-x: hidden;
}

#particles-js { position: fixed; width: 100%; height: 100%; z-index: -1; }

.top-bar {
    display: flex; justify-content: flex-end; gap: 15px;
    padding: 10px 5%; background: rgba(255,255,255,0.03);
    border-bottom: 0.5px solid #222; font-size: 13px;
}
.auth-btn { color: #007aff; text-decoration: none; font-weight: bold; cursor: pointer; }
.signup-now { background: #007aff; color: #fff !important; padding: 5px 15px; border-radius: 10px; }

/* شريط البحث المتوازن */
.main-nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 5%; background: rgba(0,0,0,0.5); backdrop-filter: blur(20px);
}
.search-container { flex-grow: 1; display: flex; justify-content: center; margin: 0 40px; }
.search-in {
    width: 100%; max-width: 600px; padding: 12px 20px;
    border-radius: 12px; border: 1px solid #333;
    background: rgba(255,255,255,0.05); color: #fff; outline: none;
}

/* Today's Pick */
.special-section { padding: 20px 5%; }
.section-title { font-size: 22px; margin-bottom: 15px; }
.featured-card {
    background: linear-gradient(90deg, #1c1c1e, #2c2c2e);
    border-radius: 24px; padding: 40px; border: 1px solid #333;
    position: relative; overflow: hidden;
}
.badge { background: #ff9500; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: bold; }
.featured-btn { background: #fff; color: #000; border: none; padding: 10px 25px; border-radius: 10px; font-weight: bold; margin-top: 15px; cursor: pointer; }

/* الفلتر */
.filter-row { display: flex; justify-content: center; gap: 10px; padding: 20px; overflow-x: auto; }
.chip { background: rgba(255,255,255,0.08); padding: 8px 20px; border-radius: 20px; cursor: pointer; transition: 0.3s; }
.chip.active { background: #fff; color: #000; }

/* الشبكة الكبيرة - حل مشكلة البطاقات الصغيرة */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 30px; padding: 40px 5%;
}
.card {
    background: rgba(28,28,30,0.7); border-radius: 28px;
    padding: 30px 20px; text-align: center; border: 1px solid rgba(255,255,255,0.1);
    transition: 0.4s; backdrop-filter: blur(10px);
}
.card:hover { transform: translateY(-10px); border-color: #007aff; }
.card .icon {
    width: 70px; height: 70px; margin: 0 auto 20px;
    border-radius: 18px; display: flex; align-items: center; justify-content: center;
    font-size: 30px; color: #fff;
}
