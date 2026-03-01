:root { --primary: #007aff; --bg: #000; --card: #1c1c1e; }
body { margin: 0; background: var(--bg); color: #fff; font-family: -apple-system; direction: rtl; }
#particles-js { position: fixed; width: 100%; height: 100%; z-index: -1; }

/* Header Fix */
.apple-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 5%; background: rgba(0,0,0,0.8); border-bottom: 0.5px solid #333; }
.header-left, .header-right { display: flex; align-items: center; gap: 20px; }
.auth-btn { color: #fff; text-decoration: none; font-size: 13px; }
.signup-now { background: var(--primary); padding: 6px 16px; border-radius: 20px; text-decoration: none; color: #fff; }

/* Switch Style */
.switch { position: relative; display: inline-block; width: 40px; height: 20px; margin: 0 10px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #333; transition: .4s; border-radius: 34px; }
.slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%; }
input:checked + .slider { background-color: var(--primary); }
input:checked + .slider:before { transform: translateX(20px); }

/* Hero Branding */
.hero-brand { padding: 100px 5% 40px; text-align: right; }
.hero-brand h1 { font-size: 70px; letter-spacing: 15px; margin: 0; opacity: 0.9; }
.tagline { color: #888; font-size: 18px; margin-top: 15px; border-right: 3px solid var(--primary); padding-right: 15px; }

/* Slider & Grid */
.featured-section { padding: 20px 5%; }
.slider-container { display: flex; gap: 15px; overflow-x: auto; padding: 20px 0; scrollbar-width: none; }
.f-card { min-width: 250px; height: 130px; background: rgba(255,255,255,0.05); border: 1px solid #333; border-radius: 20px; padding: 20px; }

.grid-container { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; padding: 40px 5%; }
.card { background: var(--card); border-radius: 24px; padding: 20px; border: 1px solid #333; position: relative; }
.status-tag { position: absolute; top: 15px; left: 15px; font-size: 10px; color: var(--primary); font-weight: bold; }

/* Pagination & Footer */
.google-pagination { display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 40px; }
.dots { display: flex; gap: 10px; }
.dot { width: 8px; height: 8px; background: #333; border-radius: 50%; }
.dot.active { background: var(--primary); transform: scale(1.3); }
.footer-line { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--primary), transparent); margin-bottom: 20px; }
.pro-footer { padding: 40px; text-align: center; color: #555; }
