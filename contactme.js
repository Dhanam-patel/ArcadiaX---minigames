const container = document.getElementById("container");

for (let i = 1; i <= 1600; i++) {
    const div = document.createElement("div");
    div.className = "block";
    container.appendChild(div);
}
