const students = [
    {
        name: "João",
        PrimeiraNota: 10,
        SegundaNota: 8
    },

    {
        name: "Leticia",
        PrimeiraNota: 7,
        SegundaNota: 7
    },

    {
        name: "Diego",
        PrimeiraNota: 5, 
        SegundaNota: 5
    },

    {
        name: "Julia",
        PrimeiraNota: 8, 
        SegundaNota: 4
    },

    {
        name: "Renan",
        PrimeiraNota: 10, 
        SegundaNota: 10
    },

    {
        name: "Miguel",
        PrimeiraNota: 3, 
        SegundaNota: 2
    },

    {
        name: "Ravi",
        PrimeiraNota: 8, 
        SegundaNota: 9
    },

    {
        name: "Felipe",
        PrimeiraNota: 1, 
        SegundaNota: 2
    },

    {
        name: "Vitor",
        PrimeiraNota: 3, 
        SegundaNota: 4
    },

    {
        name: "Sophia",
        PrimeiraNota: 6, 
        SegundaNota: 7
    },

    {
        name: "Heloísa",
        PrimeiraNota: 6, 
        SegundaNota: 7
    },

    {
        name: "Luísa",
        PrimeiraNota: 9, 
        SegundaNota: 8
    },

    {
        name: "Manuela",
        PrimeiraNota: 6, 
        SegundaNota: 8
    },

    {
        name: "Mariana",
        PrimeiraNota: 10, 
        SegundaNota: 4
    },

]

let studentsName = []
let studentsPrimeiraNota = []
let studentsSegundaNota = []

for(let student of students){
    studentsName.push(student.name)
    studentsPrimeiraNota.push(student.PrimeiraNota)
    studentsSegundaNota.push(student.SegundaNota)
}

function mediaConcurso (notaUm,notaDois){
    let media = ((notaUm + notaDois) / 2)

    if(media >7){
        return "Aprovado"
    }
    else{
        return "Reprovado"
    }
}

function media (notaUm,notaDois){
    let media = ((notaUm + notaDois) / 2)

    return media
}


for (let i=0; i<students.length; i++){
    let resultado = mediaConcurso(studentsPrimeiraNota[i],studentsSegundaNota[i])
    let y = media(studentsPrimeiraNota[i],studentsSegundaNota[i])

    if(y>=7){
        alert(`
        A média do(a) aluno(a) ${studentsName[i]} é: ${y}
        Parabéns ${studentsName[i]}! Você foi: ${resultado} no concurso
        `)
    }
    else{
        alert(`
        A média do(a) aluno(a) ${studentsName[i]} é: ${y}
        Não foi dessa vez, ${studentsName[i]}! Tente novamente!
        `)
    }

}



