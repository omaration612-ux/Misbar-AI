const fs = require('fs');

async function grabHugeData() {
    console.log("🚀 جاري تحضير 30,000 أداة ذكاء اصطناعي لـ رادار مِسبار...");
    
    const categories = ["Writing", "Image", "Video", "Audio", "Coding", "Marketing", "Chat", "3D", "Social Media", "SEO"];
    const tools = [];

    for (let i = 1; i <= 30000; i++) {
        const cat = categories[Math.floor(Math.random() * categories.length)];
        tools.push({
            name: `أداة ذكاء ${i}`,
            desc: `هذه هي الأداة رقم ${i} المتخصصة في ${cat}. تساعدك في أتمتة مهامك في مشروع مسبار العالمي.`,
            link: "https://misbar-ai.web.app",
            price: i % 2 === 0 ? "مجاني" : "مدفوع",
            img: `https://ui-avatars.com/api/?name=AI+${i}&background=random&color=fff`,
            category: cat,
            tags: [cat, "AI", "Misbar"]
        });
    }

    try {
        fs.writeFileSync('tools-data.json', JSON.stringify(tools, null, 2));
        console.log("✅ تم إنشاء ملف tools-data.json بالكامل (30,000 أداة)!");
        console.log("💡 الآن نفذ الأمر التالي: node uploader.js");
    } catch (err) {
        console.error("❌ خطأ في إنشاء الملف الضخم:", err);
    }
}

grabHugeData();