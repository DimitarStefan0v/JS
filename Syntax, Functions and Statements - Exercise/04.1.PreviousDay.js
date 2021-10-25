function previousDay(year, month, day) {
    const result = new Date(year, month - 1, day);
    result.setDate(result.getDate() - 1);
    console.log(result.getUTCFullYear() + '-' + Number(result.getMonth() + 1) + '-' + result.getDate());
    
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);