// kanban_button.js - обновленный код с кнопкой в карточке сделки
BX.ready(function () {
    console.log("🔍 Проверяем окружение...");

    if (typeof BX24 !== "undefined") {
        console.log("🚀 BX24 найден. Добавляем кнопку через API...");
        
        BX24.callMethod(
            "ui.button.add",
            {
                ID: "customDealButton",
                TEXT: "Открыть приложение",
                CLASS: "ui-btn ui-btn-primary",
                ONCLICK: function () {
                    BX24.openApplication();
                }
            },
            function (result) {
                if (result.error()) {
                    console.error("❌ Ошибка добавления кнопки:", result.error());
                } else {
                    console.log("✅ Кнопка успешно добавлена через API!");
                }
            }
        );
    } else {
        console.warn("⚠️ BX24 не найден. Пробуем добавить кнопку вручную...");

        let actionsContainer = document.querySelector(".crm-entity-actions-container");
        if (!actionsContainer) {
            console.warn("⚠️ Контейнер для кнопки не найден!");
            return;
        }
        
        console.log("➕ Добавляем кнопку вручную...");

        let button = document.createElement("button");
        button.innerText = "Открыть приложение";
        button.className = "ui-btn ui-btn-primary";
        button.onclick = function () {
            console.log("🚀 Открываем приложение...");
            BX24.openApplication();
        };

        actionsContainer.appendChild(button);
        console.log("✅ Кнопка успешно добавлена в карточку сделки!");
    }
});
