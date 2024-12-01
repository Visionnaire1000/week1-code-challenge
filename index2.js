
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        console.log(`Demerit Points: ${demeritPoints}`);
    }
}

checkSpeed(80);
checkSpeed(65); 
checkSpeed(90);
