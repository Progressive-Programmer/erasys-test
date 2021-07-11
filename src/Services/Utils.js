import moment from "moment"

export const lastLoginDuration = (last_login)=>{
// last login format is in UTC
let _last_login = moment(last_login)
let diff = moment().utc().diff(_last_login)
let duration = moment.duration(diff);

let months = duration.months()
let days = duration.days()
let hours = duration.hours()
let minutes = duration.minutes()
let seconds = duration.seconds()

// adding 's' if the number is greater than 1. e.g hrs ago  
const timeText = (input, text) =>{
    let inputR = Math.round(input);
    if (inputR > 1) {
        let _text = text.replace(/(?:^|(?:\.\s))(\w+)/, "$1s")
        return inputR+" "+_text
    } else {
        return inputR+" "+text
    }
}

if (months == 0){
    if (days == 0){
        if(hours == 0){
            if (minutes == 0){
                if (seconds == 0){
                    return timeText(duration.asSeconds(),'sec ago')
                } else {
                    return "LIVE"
                }
            } else {
                return timeText(duration.asMinutes(),'min ago')
            }
        } else {
            return timeText(duration.asHours(),'hr ago')
        }
    } else {
        return timeText(duration.asDays(),'day ago')
    }
} else {
    return timeText(duration.asMonths(),'month ago')
}


//    let duration = moment.duration(moment().utc().diff(moment(last_login))).asDays()
}