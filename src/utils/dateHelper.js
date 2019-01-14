var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

var weeks = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000); // convert timestamp to ms

    var year = d.getFullYear();
    var month = months[d.getMonth()];
    var week = weeks[d.getDay()];
    var day = d.getDate();
    // var hour = d.getHours();

    return week + ', ' + month + ' ' + day;
}

module.exports = {
    convertTimestamp: convertTimestamp,
}
