input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.clearScreen()
    }
})
let lightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
