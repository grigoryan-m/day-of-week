document.addEventListener("DOMContentLoaded", ()=>{
    const input = document.getElementById("date")
    ,     output = document.getElementById("output");

    input.addEventListener("input", ()=>{
        if(input.value.length === 10){
            output.innerText = getDayOfWeek(input.value);
        }else{
            output.innerText = "";
        }
    });

    function getDayOfWeek(date){
        const splittedDate = date.split(".");
        for(let element of splittedDate){
            if(element == 0){
                return "error";
            }
        }
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        if(splittedDate.length === 3){
            const dateObject = new Date(splittedDate[2], splittedDate[1]-1, splittedDate[0]);
            return typeof daysOfWeek[dateObject.getDay()] != "undefined" ? daysOfWeek[dateObject.getDay()] : "error";
        }
        return "error";
    }

});