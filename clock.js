
let displayBox = document.querySelector(".display-box");
let dayMonth = document.querySelector(".dayMonth");


function clockFun() {
        let date = new Date();
        let mndate = date.getDate();
        let month = date.getMonth();
        let day = date.getDay();
        switch(day){
            case 0 :
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2 :
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4 :
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
            
        }

        switch(month){
            case 0:
                month = "January";
                break;
            case 1:
                month = "February";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "December";
                break;
        };
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        if(hour>12){
            hour-=12;
            if(hour<10){
                hour = "0" + hour;
            }
        }
        if(min<10){
            min = "0" + min
        }
        if(sec<10){
            sec = "0" + sec
        }
        displayBox.innerHTML=`${hour} : ${min} : ${sec}`;
        dayMonth.innerHTML=`${day } ${mndate }  ${month} `
    }

setInterval(clockFun,1000)
// setInterval(clockFun,3000)