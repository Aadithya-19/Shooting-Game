AFRAME.registerComponent("player-sound",{

    init: function () {
        this.walk();
      },
      walk: function () {
        console.log("hi")
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
                console.log("hi")
                var entity = document.querySelector("#sound2")
                entity.components.sound.playSound()
            }
        }
        )

    }
})