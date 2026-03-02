:root { 
    --bg: #000; 
    --accent: #00b4d8; 
    --card: rgba(20, 20, 20, 0.9); 
}

body { 
    background: var(--bg); 
    color: #fff; 
    font-family: 'Cairo', sans-serif; 
    margin: 0; 
}

/* الأزرار الدائرية الملونة (نفس الصورة) */
.tags { display: flex; gap: 10px; padding: 20px 5%; overflow-x: auto; scrollbar-width: none; }
.tag { 
    background: #1a1a1a; color: #888; border: none; 
    padding: 10px 25px; border-radius: 50px; cursor: pointer; 
}
.tag.active { 
    background: #007bff; color: #fff; 
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.5); 
}

/* شريط الترقيم الرولنق الأنيق */
.glass-pagination {
    display: flex; gap: 15px; padding: 20px; 
    overflow-x: auto; justify-content: center;
    background: rgba(255, 255, 255, 0.03); 
    backdrop-filter: blur(15px);
    scrollbar-width: none;
}
.page-btn {
    min-width: 45px; height: 45px; border-radius: 50%;
    background: #111; border: 1px solid #333;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: 0.3s;
}
.page-btn.active { 
    background: var(--accent); 
    box-shadow: 0 0 15px var(--accent); 
}
