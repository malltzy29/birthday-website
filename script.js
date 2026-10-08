function mulaiCerita() {
    document.getElementById("cerita").scrollIntoView({
        behavior: "smooth"
    });
}

function scrollKeMemory() {
    document.getElementById("memory").scrollIntoView({
        behavior: "smooth"
    });
}
function scrollKeSurprise() {
    document.getElementById("surprise").scrollIntoView({
        behavior: "smooth"
    });
}
function bukaSurprise() {

    const pesan = document.getElementById("pesanSurprise");
    const tombol = document.getElementById("tombolSurprise");

    tombol.style.display = "none";

    // Pastikan posisi awal
    pesan.classList.add("opacity-0", "translate-y-5");

    // Biar browser sempat membaca posisi awal
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {

            pesan.classList.remove(
                "opacity-0",
                "translate-y-5",
                "pointer-events-none"
            );

        });
    });
}
// Animasi memory saat di-scroll
const memoryItems = document.querySelectorAll("#memory .grid");

const memoryObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.remove(
                "opacity-0",
                "translate-y-6"
            );

            memoryObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});

memoryItems.forEach((item) => {
    memoryObserver.observe(item);
});
// Animasi surat saat mulai masuk ke layar
const suratSection = document.getElementById("surat");
const suratCard = document.querySelector("#surat .bg-white");

if (suratSection && suratCard) {

    const suratObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    suratCard.classList.remove(
                        "opacity-0",
                        "translate-y-6"
                    );
                }, 900);

                suratObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    suratObserver.observe(suratSection);
}