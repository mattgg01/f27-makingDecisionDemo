/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack){
    console.log('Jon Has been slain')
}else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25 //jonSnowDefense = jonSnowDefense + 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log('Jon has been slain')
} else {
    console.log(`Jon's health is down to ${jonSnowHealth}`)
}