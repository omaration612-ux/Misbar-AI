async function updateToolsCount() {
    try {
        const snap = await db.collection('tools').get();
        document.getElementById('toolsCount').innerText = snap.size.toLocaleString();
    } catch (e) { console.log("العداد يعمل افتراضياً"); }
}

document.onkeydown = (e) => {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) return false;
};

const pScript = document.createElement('script');
pScript.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
document.head.appendChild(pScript);
pScript.onload = () => {
    const div = document.createElement('div');
    div.id = 'particles-js';
    div.style = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:-1;";
    document.body.prepend(div);
    particlesJS('particles-js', {
        "particles": { "number": { "value": 40 }, "color": { "value": "#007aff" }, "opacity": { "value": 0.2 }, "move": { "speed": 1 } }
    });
};

window.onload = updateToolsCount;
