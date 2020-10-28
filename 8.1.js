let persons = [
    {navn: 'martin', alder: 37, tlfnr: '11223344'}, 
    {navn: 'jonas', alder: 23, tlfnr: '29601997'}, 
    {navn: 'mathias', alder: 24, tlfnr: '88776655'}]

let mobil = persons.find(element => element.tlfnr === '29601997')
console.log(mobil)

let minAlder = persons.reduce((a, e) => a < e.alder ? a : e.alder)
console.log(minAlder)

let id = persons.forEach((e, i, a) => a[i].id = ++i)
console.log(persons)

console.log(persons.sort((p1, p2) => p1.navn.localeCompare(p2.navn)).map(p => p.navn))

console.log(persons.filter(p => p.alder < 30).map(p => p.navn + ": " + p.tlfnr))

let array = ['ffffff', 'a', 'CCC', 'dddd', 'eeeee', 'BB']

function compareSort(array, c){
    return array.sort((p1, p2) => c(p1, p2)).map(p =>{
        return p
    })
}

function compLen(s1, s2){
    if(s1.length > s2.length){return 1}
    if(s1.length < s2.length){return -1}
    return 0
}

function compCase(s1, s2){
    if(s1.toUpperCase().localeCompare(s2.toUpperCase()) > 0){return 1}
    if(s1.toUpperCase().localeCompare(s2.toUpperCase()) < 0){return -1}
    return 0
}

console.log(compareSort(array, compCase))