import Megjelenit from "./Megjelenit.js";
import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";

$(function(){
    const tarolo = $(".tarolo")
    const todo1 = new Megjelenit(TODOLIST2, tarolo)
    $(window).on("torles", (event)=>{
        console.log(event.detail)
    })
})