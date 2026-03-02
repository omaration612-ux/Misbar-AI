:root { --accent: #007aff; --glass: rgba(255, 255, 255, 0.05); }
body { background: #000; color: #fff; font-family: 'Cairo', sans-serif; margin: 0; overflow-x: hidden; direction: rtl; }

/* الهيدر واللغات */
.apple-nav { display: flex; justify-content: space-between; align-items: center; padding: 10px 5%; background: rgba(0,0,0,0.8); backdrop-filter: blur(20px); position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid #1a1a1a; }
.logo { color: var(--accent); font-weight: 900; text-decoration: none; font-size: 1.6rem; }
.lang-dropdown { position: relative; cursor: pointer; display: flex; align-items: center; }
.lang-content { display: none; position: absolute; top: 25px; background: #111; border: 1px solid #222; border-radius: 8px; width: 100px; }
.lang-dropdown:hover .lang-content { display: block; }
.lang-content a { color: #fff; padding: 8px; display: block; text-decoration: none; font-size: 0.8rem; }

/* البحث الصافي */
.search-box { background: #111; border: 1px solid #333; border-radius: 12px; width: 40%; display: flex; padding: 2px; }
.search-box input { background: transparent; border: none; color: #fff; flex: 1; padding: 10px; outline: none; }
.search-btn { background: #000; color: #fff; border: 1px solid #444; padding: 0 20px; border-radius: 10px; cursor: pointer; font-weight: bold; }

/* الكروت المميزة (Rolling) */
.rolling-featured { display: flex; gap: 15px; padding: 25px 5%; overflow-x: auto; scrollbar-width: none; }
.featured-card { min-width: 260px; height: 130px; background: linear-gradient(145deg, #0d0d0d, #1a1a1a); border: 1px solid #222; border-radius: 20px; padding: 20px; flex-shrink: 0; transition: 0.3s; cursor: pointer; }
.featured-card:hover { border-color: var(--accent); transform: translateY(-5px); }

/* الشبكة (6x10) */
.main-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 15px; padding: 20px 5%; }
.tool-card { background: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 15px; padding: 15px; text-align: center; transition: 0.3s; }
.tool-card:hover { border-color: #333; background: #111; }

/* الترقيم الزجاجي */
.glass-pagination { display: flex; gap: 10px; padding: 30px; overflow-x: auto; scrollbar-width: none; justify-content: center; cursor: grab; }
.pg-num { min-width: 45px; height: 45px; background: var(--glass); border: 1px solid #333; border-radius: 12px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); }
.pg-num.active { background: var(--accent); border-color: var(--accent); }

/* سويتش المجاني */
.filter-bar { padding: 10px 5%; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #111; }
.tag { background: #121212; color: #888; border: 1px solid #222; padding: 8px 18px; border-radius: 20px; cursor: pointer; margin-left: 5px; }
.tag.active { background: var(--accent); color: #fff; }
