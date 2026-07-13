document.addEventListener("DOMContentLoaded", () => {
    // Lucide 아이콘 초기화
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    // 커스텀 마우스 커서
    const customCursor = document.getElementById("custom-cursor");

    if (customCursor) {
        document.addEventListener("mousemove", (event) => {
            customCursor.style.left = `${event.clientX}px`;
            customCursor.style.top = `${event.clientY}px`;
            customCursor.style.opacity = "1";
        });

        document.addEventListener("mouseover", (event) => {
            const clickableElement = event.target.closest(
                "a, button, input, textarea, select, [role='button']"
            );

            if (clickableElement) {
                customCursor.classList.add("cursor-hover");
            }
        });

        document.addEventListener("mouseout", (event) => {
            const clickableElement = event.target.closest(
                "a, button, input, textarea, select, [role='button']"
            );

            if (clickableElement) {
                customCursor.classList.remove("cursor-hover");
            }
        });

        document.addEventListener("mouseleave", () => {
            customCursor.style.opacity = "0";
        });

        document.addEventListener("mouseenter", () => {
            customCursor.style.opacity = "1";
        });
    }
});

// 공통 모달 열기
function showCustomModal(icon, title, text) {
    const modal = document.getElementById("custom-modal");
    const modalIcon = document.getElementById("modal-icon");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");

    if (!modal || !modalIcon || !modalTitle || !modalText) {
        return;
    }

    modalIcon.innerText = icon;
    modalTitle.innerText = title;
    modalText.innerText = text;

    modal.classList.remove("hidden");
    modal.style.opacity = "1";
}

// 공통 모달 닫기
function closeCustomModal() {
    const modal = document.getElementById("custom-modal");

    if (!modal) {
        return;
    }

    modal.style.opacity = "0";

    setTimeout(() => {
        modal.classList.add("hidden");
    }, 300);
}