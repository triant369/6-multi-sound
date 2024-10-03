input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
