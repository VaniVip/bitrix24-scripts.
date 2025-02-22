BX24.init(function(){
    console.log("✅ kanban_button.js загружен через PHP!");

    window.addKanbanButton = function() {
        console.log("🔹 Функция addKanbanButton запущена");

        let kanbanRightPanel = document.querySelector(".ui-toolbar-right-buttons");

        if (kanbanRightPanel) {
            if (!document.getElementById("openAppButton")) {
                let openAppButton = document.createElement("button");
                openAppButton.innerText = "Открыть приложение";
                openAppButton.id = "openAppButton";
                openAppButton.className = "ui-btn ui-btn-primary";
                openAppButton.style.display = "block";
                openAppButton.onclick = function() {
                    BX24.openApplication();
                };
                kanbanRightPanel.appendChild(openAppButton);
                console.log("✅ Кнопка 'Открыть приложение' добавлена в Канбан.");
            } else {
                console.log("⚠️ Кнопка уже существует.");
            }
        } else {
            console.log("⏳ Канбан не найден, пробуем снова...");
            setTimeout(window.addKanbanButton, 2000);
        }
    };

    setTimeout(window.addKanbanButton, 3000);
});
