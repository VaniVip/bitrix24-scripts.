(function () {
    function addDealButton() {
        console.log("🔄 Проверяем, есть ли кнопка в карточке сделки...");
        let dealToolbar = document.querySelector(".crm-entity-section-control");

        if (!dealToolbar) {
            console.warn("⚠️ Контейнер для кнопки не найден!");
            return;
        }

        if (document.querySelector("#dealAppButton")) {
            console.log("✅ Кнопка уже есть, повторное добавление не требуется.");
            return;
        }

        console.log("➕ Добавляем кнопку в карточку сделки...");
        let button = document.createElement("button");
        button.innerText = "Открыть приложение";
        button.className = "ui-btn ui-btn-primary";
        button.id = "dealAppButton";
        button.onclick = function() {
            console.log("🚀 Открываем приложение...");
            BX24.openApplication();
        };

        dealToolbar.appendChild(button);
        console.log("✅ Кнопка успешно добавлена в карточку сделки!");
    }

    // Ждём загрузки DOM перед выполнением
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(addDealButton, 3000); // Ждём 3 секунды
    });

    // Если пользователь открывает карточку сделки, добавляем кнопку снова
    let observer = new MutationObserver(() => {
        addDealButton();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
