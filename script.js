// Лёгкий 3D-наклон карточки при движении мыши
const card = document.getElementById("card");

if (card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 6; // наклон вверх/вниз
    const rotateY = (x / rect.width) * 6;   // наклон влево/вправо

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  });
}

// Копирование телефона по клику
const phoneBtn = document.querySelector(".btn-phone");

if (phoneBtn) {
  phoneBtn.addEventListener("click", async () => {
    const phone = phoneBtn.dataset.phone || "";
    try {
      await navigator.clipboard.writeText(phone);
      phoneBtn.classList.add("show-copy-hint");
      setTimeout(() => phoneBtn.classList.remove("show-copy-hint"), 1500);
    } catch {
      // если нет доступа к clipboard – просто ничего
    }
  });
}
