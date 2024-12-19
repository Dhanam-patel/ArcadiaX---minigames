const container = document.getElementById("container");

for (let i = 1; i <= 1950; i++) {
    const div = document.createElement("div");
    div.className = "block";
    container.appendChild(div);
}

$(document).ready(function () {
    var words = [
        "Dive into fun—mini-games for maximum joy! 🎮😄✨",
        "Click, play, repeat—endless games, endless fun! 🔄🤩🎯",
        "Arcade classics and new hits, all in one place! 🕹️😎🔥",
        "Your ultimate stop for boredom-busting fun! 🚀😁🎉",
        "Press start to play and never look back! ▶️😃🏆",
        "No downloads, no hassle—just pure gaming! ⬇️❌😌🎮",
        "Games for everyone, anytime, anywhere! 🌍😋🎮",
        "Where your browser becomes your playground. 🌐🤓✨",
        "Instant fun, just a click away! 🖱️🤩⚡",
        "Mini-games for major entertainment on the go! 🎮🤠📱",
        "Play, compete, and share the fun! 🕹️🤝😁✨",
        "Your arena for gaming glory! 🏟️😤🏆🎮",
        "Challenge friends, break records, and win bragging rights! 🏅😜🎯🎉",
        "Join the mini-game revolution—one score at a time! 🌟🤩🎮",
        "Unite with gamers worldwide—right here! 🌍😊🎮🤝",
        "Puzzle, action, adventure—we've got it all! 🧩😏⚔️🚀",
        "A new mini-game for every mood. 🕹️😄🎭",
        "Big thrills in bite-sized games! 🎉😆🎮🍬",
        "Pick a game, make it yours, master the leaderboard! 🏆😈🎮📈",
        "From classics to the latest hits, play them all! 🕹️🤓🔥🎯",
        "Small games, big fun, endless possibilities! 🤏😃🎮🌟",
        "Why choose one game when you can have them all? 🎮😲🤩",
        "Hit pause on life and play for a while! ⏸️😊🎮😌",
        "Ready, set, play—your adventure starts here! 🚦😁🎮✨",
        "Think quick, click faster—your high score awaits! 🧠😎⚡🎯",
    ];
    var part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 70;

    function wordflick() {
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    skip_count++;
                    if (skip_count === skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset === 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }

            part = words[i].substr(0, offset);
            if (skip_count === 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }

            $('.word').text(part);
        }, speed);
    }

    wordflick();
});