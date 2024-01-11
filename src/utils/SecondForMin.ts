

export const SecondForMin = (second = 0) => {
    const campoMinutos = String(Math.floor(second / 60))
    let campoSegundos = String(second % 60)

    if (Number(campoSegundos) < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos

}

export const sumDuration = (second = 0) => {
    const campoMinutos = String(Math.floor(second / 60))
    let campoSegundos = String(Math.floor(second % 60))

    if (Number(campoSegundos) < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return `${campoMinutos}min ${campoSegundos}seg `

}
