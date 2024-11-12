import dayjs from dayjs
console.log("This works")

var study_timer = dayjs();
var study_deadline = study_timer.minute(study_timer.minute() + 25)
console.log(study_deadline)
//Format('YYYY-MM-DD HH:mm:ss')