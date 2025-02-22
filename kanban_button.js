(function() {
    function addKanbanButton() {
        console.log("🔄 Проверяем, есть ли кнопка в UI...");
        let toolbar = document.querySelector(".ui-toolbar-right-buttons");

        if (!toolbar) {
            console.warn("⚠️ Контейнер для кнопки не найден! Пробуем снова через 1 секунду...");
            return;
        }

        // Проверяем, нет ли уже кнопки
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

    // Ждём появления контейнера, проверяя каждые 500 мс
    let checkExist = setInterval(() => {
        let toolbar = document.querySelector(".ui-toolbar-right-buttons");
        if (toolbar) {
            clearInterval(checkExist); // Останавливаем проверку, если контейнер найден
            addKanbanButton();
        }
    }, 500);
})();
