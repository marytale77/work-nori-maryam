const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const mainContent = document.querySelector(".main-content");

menuBtn.addEventListener("click", () => {
    // تحديد عرض القائمة الجانبية
    const menuWidth = sideMenu.style.width === "250px" ? "0" : "250px";
    sideMenu.style.width = menuWidth; // تغيير عرض القائمة الجانبية
    
    // تحريك المحتوى الرئيسي
    mainContent.style.marginLeft = menuWidth === "0" ? "0" : "-250px"; // تحريك المحتوى إلى اليمين
});

        // تغيير الوضع الليلي
        const toggleThemeBtn = document.getElementById("toggleTheme");
        toggleThemeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.querySelectorAll(".li4").forEach(item => item.classList.toggle("dark-mode"));
            toggleThemeBtn.textContent = document.body.classList.contains("dark-mode") ? "الوضع العادي" : "الوضع الليلي";
        });

        // عداد التكرار للأذكار
        document.querySelectorAll(".li4").forEach(item => {
            const counterElement = item.querySelector(".counter");
            let count = parseInt(item.querySelector("u").textContent.trim());

            item.addEventListener("click", () => {
                if (count > 0) {
                    count--;
                    counterElement.textContent =count;
                } else {
                    alert("تم الانتهاء من هذا الذكر!");
                }
            });
        });

            // جافا سكربت للبحث داخل الأذكار
    document.getElementById('searchInput').addEventListener('input', function() {
        let query = this.value.toLowerCase();
        document.querySelectorAll('.li4').forEach(item => {
            let text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

        // جافا سكربت لتخزين الذكر المفضل
// جافا سكربت لتخزين الذكر المفضل
document.querySelectorAll('.favoriteBtn').forEach((button, index) => {
    button.addEventListener('click', function() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let text = button.parentElement.textContent.trim(); // الحصول على نص الذكر

        // تحقق إذا كان الذكر موجودًا في المفضلة
        if (!favorites.includes(text)) {
            // إضافة الذكر إلى المفضلة إذا لم يكن موجود
            favorites.push(text);
            localStorage.setItem('favorites', JSON.stringify(favorites));

            // تغيير لون الزر ليدل على أنه تم إضافته للمفضلة
            button.style.backgroundColor = "yellow";
            button.textContent = "✅ "; // تغيير النص في الزر

            // إضافة الذكر داخل عنصر <p> في صفحة الأذكار المفضلة
            alert('تم إضافة الذكر للمفضلة');
        } else {
            // إذا كان الذكر موجود مسبقًا في المفضلة
            alert('الذكر موجود بالفعل في المفضلة');
        }
    });
});