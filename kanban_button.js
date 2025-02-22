(function() {
    function addKanbanButton() {
        console.log("🔄 Проверяем, есть ли кнопка в UI...");
        let toolbar = document.querySelector(".ui-toolbar-right-buttons");

        if (!toolbar) {
            console.warn("⚠️ Контейнер для кнопки не найден!");
            return;
        }

        if (document.querySelector("#kanbanAppButton")) {
            console.log("✅ Кнопка уже есть, повторное добавление не требуется.");
            return;
        }

        console.log("➕ Добавляем кнопку...");
        let button = document.createElement("button");
        button.innerText = "Открыть приложение";
        button.className = "ui-btn ui-btn-primary";
        button.id = "kanbanAppButton";
        button.onclick = function() {
            console.log("🚀 Открываем приложение...");
            BX24.openApplication();
        };

        toolbar.appendChild(button);
        console.log("✅ Кнопка успешно добавлена!");
    }

    // Запускаем сразу после загрузки
    addKanbanButton();
})();
