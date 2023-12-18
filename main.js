const data = {
    estar: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'],
    querer: ['quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron'],
    poder: ['pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron'],
    poner: ['puse', 'pusiste', 'puso', 'pusimos', 'pusisteis', 'pusieron'],
    tener: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'],
    saber: ['supe', 'supiste', 'supo', 'supimos', 'supisteis', 'supieron'],
    venir: ['vine', 'viniste', 'vino', 'vinimos', 'vinisteis', 'vinieron'],
    decir: ['dije', 'dijiste', 'dijo', 'dijimos', 'dijisteis', 'dijeron'],
    traer: ['traje', 'trajiste', 'trajimos', 'trajisteis', 'trajeron'],
    ver: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
    hacer: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
    irSer: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    dar: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron']
}

const per = ["yo", "tu", "él/ella", "nosotros", "vosotros", "ellos/ellas"]

let showNext = 0
next()

function getRandVerb() {
    rand = Math.round(Math.random() * (Object.keys(data).length - 1))
    return [data[Object.keys(data)[rand]], Object.keys(data)[rand]]
}

function getRandFromList(verbL, verb) {
    let rand = Math.round(Math.random() * (per.length - 1))
    return [verbL[rand], per[rand], verb]
}

function updateUi(s, per, v) {
    document.querySelector("#verb").innerHTML = v
    document.querySelector("#person").innerHTML = per
    document.querySelector("#result").innerHTML = s
    document.querySelector("#next").innerHTML = "?"
}

function next() {
    if (showNext == 0) {
        updateUi(...getRandFromList(...getRandVerb()))
        document.querySelector("#result").style.visibility = "hidden"
        showNext = 1
        return
    }
    if (showNext == 1) {
        document.querySelector("#result").style.visibility = "visible"
        document.querySelector("#next").innerHTML = "Weiter"
        showNext = 0
        return
    }
}