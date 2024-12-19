let a;

function createBlocks(container, count) {
    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.className = "block";
        container.appendChild(div);
    }
}

document.querySelectorAll('.Box').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.containplay').style.display = 'block';
        document.querySelector('.contain').style.display = 'none';
        a = a + 800;
        const container = document.getElementById("container");
        createBlocks(container, a);
    });
});

document.querySelector(`.goback`).addEventListener('click', function () {
    document.querySelector('.containplay').style.display = 'none';
    document.querySelector('.contain').style.display = 'block';
    a = 1800;
    const container = document.getElementById("container");
    createBlocks(container, a);
});


const container = document.getElementById("container");
a = 1800;
createBlocks(container, a);

document.querySelector('.notecontainer').onclick = function () {
    document.querySelector('.notecontainer').style.display = 'none';
}
document.querySelector('.goback').onclick = function () {
    document.querySelector('.containplay').style.display = 'none';
    document.querySelector('.contain').style.display = 'block';
    let a = 1800;
}
for (let i = 1; i <= 32; i++) {
    document.querySelector(`.game${i}`).addEventListener('click', function () {
        const controlsDiv = document.querySelector('.controls');
        if (controlsDiv) {
            controlsDiv.innerHTML = `<img src="controls img/${i}.png" alt="Controls">`;
            if (i === 1) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2021/unity/stack-fire-ball/index.html"
                title="Stack Fire Ball" allowfullscreen>
            </iframe>`;
            }
            if (i === 2) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2021/unity3/mob-city/index.html"
                title="Mob City" allowfullscreen>
            </iframe>`;
            }
            if (i === 3) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html"
                title="GTA Simulator" allowfullscreen>
            </iframe>`;
            }
            if (i === 4) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2024/construct/233/state-io-wars/index.html"
                title="State-io-wars" allowfullscreen>
            </iframe>`;
            }
            if (i === 5) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/unity3/8-ball-pool-billiard/index.html"
                title="8 Ball Pool Billiard" allowfullscreen>
            </iframe>`;
            }
            if (i === 6) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/construct/153/kick-the-dummy/index.html"
                title="Kick The Dummy" allowfullscreen>
            </iframe>`;
            }
            if (i === 7) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2023/construct/198/car-football/index.html"
                title="Car Football" allowfullscreen>
            </iframe>`;
            }
            if (i === 8) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2021/unity/rome-simulator/index.html"
                title="Rome Simulator" allowfullscreen>
            </iframe>`;
            }
            if (i === 9) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2021/unity/moto-trials/index.html"
                title="Moto Trial" allowfullscreen>
            </iframe>`;
            }
            if (i === 10) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2023/construct/200/snake-football/index.html"
                title="Snake Football" allowfullscreen>
            </iframe>`;
            }
            if (i === 11) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2023/unity/hero-dragon-power/index.html"
                title="Hero Dragon Power" allowfullscreen>
            </iframe>`;
            }
            if (i === 12) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/unity2/masked-special-forces/index.html"
                title="Masked Special Forces" allowfullscreen>
            </iframe>`;
            }
            if (i === 13) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://cloud.onlinegames.io/games/2024/unity2/super-car-driving/index-og.html"
                title="Super Car Driving" allowfullscreen>
            </iframe>`;
            }
            if (i === 14) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html"
                title="Stickman Parkour" allowfullscreen>
            </iframe>`;
            }
            if (i === 15) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2021/unity3/stickman-destruction/index.html"
                title="Stickman Destruction" allowfullscreen>
            </iframe>`;
            }
            if (i === 16) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://cloud.onlinegames.io/games/2024/unity3/warstrike/index-og.html"
                title="Warstrike" allowfullscreen>
            </iframe>`;
            }
            if (i === 17) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/unity/survival-craft/index.html"
                title="Survival Craft" allowfullscreen>
            </iframe>`;
            }
            if (i === 18) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2024/construct/226/football-king/index.html"
                title="Football King" allowfullscreen>
            </iframe>`;
            }
            if (i === 19) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html"
                title="Troll Level" allowfullscreen>
            </iframe>`;
            }
            if (i === 20) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2023/q2/geometry-dash-freezenova/index.html"
                title="Geometry Dash" allowfullscreen>
            </iframe>`;
            }
            if (i === 21) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/unity2/soul-essence-adventure/index.html"
                title="Soul Essence Adventure" allowfullscreen>
            </iframe>`;
            }
            if (i === 22) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/construct/144/truck-racing/index.html"
                title="Truck Racing" allowfullscreen>
            </iframe>`;
            }
            if (i === 23) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2024/unity/drift-king/index.html"
                title="Drift King" allowfullscreen>
            </iframe>`;
            }
            if (i === 24) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/unity2/urban-sniper/index.html"
                title="Urban Sniper" allowfullscreen>
            </iframe>`;
            }
            if (i === 25) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2023/unity2/cs-online/index.html"
                title="CS Online" allowfullscreen>
            </iframe>`;
            }
            if (i === 26) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2021/unity3/legendary-sniper/index.html"
                title="Legendary Sniper" allowfullscreen>
            </iframe>`;
            }
            if (i === 27) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2023/unity2/guerrillas-io/index.html"
                title="Guerrillas io" allowfullscreen>
            </iframe>`;
            }
            if (i === 28) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://cloud.onlinegames.io/games/2024/unity/burnout-city/index-og.html"
                title="Burn out City" allowfullscreen>
            </iframe>`;
            }
            if (i === 29) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/unity3/battle-royale-simulator/index.html"
                title="Battle Royal Simulator" allowfullscreen>
            </iframe>`;
            }
            if (i === 30) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2021/unity3/armedforces-io/index.html"
                title="Armed Forces 0" allowfullscreen>
            </iframe>`;
            }
            if (i === 31) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2023/unity/dark-ninja-hanjo/index.html"
                title="Dark Ninja Hero" allowfullscreen>
            </iframe>`;
            }
            if (i === 32) {
                const box = document.querySelector('.playgame');
                box.style.display = 'block';
                box.innerHTML = `<iframe 
                src="https://www.onlinegames.io/games/2022/unity3/war-of-ships-io/index.html"
                title="War Of Ships" allowfullscreen>
            </iframe>`;
            }
        }
    });
}

