export function showScene(id) {
    document.querySelectorAll(".scene").forEach(
        element => element.classList.remove("ative")
    );
    document.getElementById(id).classList.add("active");
}