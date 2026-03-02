async function updateToolsCount() {
    try {
        const snap = await db.collection('tools').get();
        const toolsElement = document.getElementById('toolsCount');
        if (toolsElement) toolsElement.innerText = snap.size.toLocaleString();
    } catch (e) { console.log("العداد يعمل افتراضياً"); }
}

const freeToggle = document.getElementById('freeOnly');
if(freeToggle) {
    freeToggle.addEventListener('change', function() {
        if(this.checked) {
            alert("🔒 ميزة الفلترة المجانية حصرية للأعضاء المسجلين فقط.");
            this.checked = false;
        }
    });
}

const pScript = document.createElement('script');
pScript.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
document.head.appendChild(pScript);
pScript.onload = () => {
    particlesJS('particles-js', {
        "particles": { "number": { "value": 45 }, "color": { "value": "#007aff" }, "opacity": { "value": 0.2 }, "move": { "speed": 1.2 } }
    });
};

document.addEventListener('keydown', (e) => {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) e.preventDefault();
});

window.onload = updateToolsCount;
