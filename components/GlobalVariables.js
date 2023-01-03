//////////////////////////////---VARIABLES---//////////////////////////////
export let userLife = 200;
export let userDamage = 5;
export const boardSize = 10;
export let boardRows = 0;
export let boardCols = 0;
export let moveAbility = 1;
export let pressed = false;
export const player = "<img src=\"assets/images/cookie.webp\" width=\"25px\" height=\"25px\"/>";
export const finishLine = "<img src=\"assets/images/finishLine.webp\" width=\"60px\" height=\"60px\"/>";

export function SetUserLife(num){
	userLife = num;
}
export function SetUserDamage(num){
	userDamage = num;
}
export function SetBoardRows(num){
	boardRows = num;
}
export function SetBoardCols(num){
	boardCols = num;
}
export function SetMoveAbility(num){
	moveAbility = num;
}
export function SetPressed(bool){
	pressed = bool;
}

export function CreateStat(userLife, userDamage)
{
	document.getElementById("stats").innerHTML = "<div style=\"display:flex; flex-direction:row; justify-content:center; align-items:flex-end; padding-top:2.5rem;\">" + "<div class=\"fightArgmntLeft\">Player Life: " + userLife + "<br /><img src=\"assets/images/cookie.webp\" height=\"50px\" /><br />Damage:" + userDamage + "</div>" + "</div>";
}

