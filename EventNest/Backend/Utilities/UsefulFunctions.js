function formatDateToDDMMMYYYY(dateInput) {
    const date= new Date(dateInput)
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')}-${monthNames[monthIndex]}-${year}`;
}

function getDateString(isoString) {
    return isoString.split('T')[0];
}


module.exports = {
    formatDateToDDMMMYYYY,
    getDateString
};