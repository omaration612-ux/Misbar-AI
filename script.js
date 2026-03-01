:root { --primary: #007aff; --bg: #000; --card-bg: #1c1c1e; }
body { margin: 0; background: var(--bg); color: #fff; font-family: -apple-system; direction: rtl; }
#particles-js { position: fixed; width: 100%; height: 100%; z-index: -1; }

/* Apple Header */
.apple-header { display: flex; justify-content: space-between; padding: 10px 5%; background: rgba(0,0,0,0.8); border-bottom: 0.5px solid #333; font-size: 13px; align-items: center; }
.header-left { display: flex; align-items: center; gap: 20px; }
.signup-btn { background: var(--primary); padding: 5px 15px; border-radius: 20px; color: #fff; text-decoration: none; }

/* Switch Style */
.switch { position: relative; display: inline-block; width: 40px; height: 20px; margin: 0 10px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #333; transition: .4s; border-radius: 34px; }
.slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%; }
input:checked + .slider { background-color: var(--primary); }
input:checked + .slider:before { transform: translateX(20px); }

/* Hero Section */
.hero-brand { padding: 80px 5% 40px; }
.hero-brand h1 { font-size: 60px; letter-spacing: 15px; margin: 0; color: rgba(255,255,255,0.9); }
.tagline { color: #888; font-size: 18px; margin-top: 10px; }

/* Grid 5x9 */
.grid-container { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; padding: 40px 5%; }
.card { background: rgba(30,30,32,0.6); border-radius: 24px; padding: 20px; position: relative; border: 1px solid #333; transition: 0.3s; }
.status-tag { position: absolute; top: 15px; right: 15px; font-size: 10px; padding: 3px 8px; border-radius: 5px; background: #333; }

/* Pagination Google Style */
.pagination-google { display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 40px; }
.page-dots { display: flex; gap: 15px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); cursor: pointer; }
.dot.active { background: var(--primary); transform: scale(1.3); }

/* Footer */
.footer-line { width: 100%; height: 2px; background: linear-gradient(90deg, transparent, var(--primary), transparent); margin-bottom: 20px; }
.pro-footer { padding: 60px; text-align: center; background: #050505; color: #555; }
