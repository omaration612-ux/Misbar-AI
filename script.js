// 1. أتمتة العداد الديناميكي - يجلب العدد الحقيقي من Firebase
async function updateToolsCount() {
    try {
        const snapshot = await db.collection('tools').get();
        const total = snapshot.size;
        // إذا كانت القاعدة فارغة حالياً سيظهر 30,000 كاحتياط، وإذا فيها بيانات سيظهر الرقم الحقيقي
        document.getElementById('toolsCount').innerText = total > 0 ? total.toLocaleString() : "30,000";
    } catch (e) { 
        console.log("العداد يعمل بالوضع الافتراضي"); 
    }
}

// 2. درع الحماية (منع السكرابنج، النسخ، وفحص العنصر F12)
document.onkeydown = function(e) {
    // منع F12, Ctrl+Shift+I, Ctrl+U (رؤية السورس كود)
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};

// 3. أتمتة الربح (SmartLink) - سيتم استدعاؤه في engine.js عند بناء البطاقات
function getSmartLink(url) {
    const myID = "MISBAR_2026"; 
    // تحويل الرابط الأصلي إلى رابط ربحي تلقائياً
    return `https://smartlink.com/go?id=${myID}&url=${encodeURIComponent(url)}`;
}

// 4. خلفية النجوم الجمالية (Particles)
const pScript = document.createElement('script');
pScript.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
document.head.appendChild(pScript);
pScript.onload = () => {
    // التأكد من وجود Element قبل التشغيل لضمان عدم حدوث خطأ
    const partDiv = document.getElementById('particles-js');
    if (partDiv) {
        particlesJS('particles-js', {
            "particles": { 
                "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#007aff" }, 
                "opacity": { "value": 0.3 }, 
                "shape": { "type": "circle" },
                "move": { "speed": 1, "direction": "none", "out_mode": "out" } 
            }
        });
    }
};

// تشغيل العداد فور تحميل الصفحة
window.addEventListener('DOMContentLoaded', updateToolsCount);