function updateValues(updatedComponent) {
    let gardenRange = document.getElementById("gardenRange");
    let gardenNumber = document.getElementById("gardenNumber");
    if (updatedComponent == 'gardenRange') {
        gardenNumber.value = gardenRange.value;
    } else if (updatedComponent == 'gardenNumber') {
        gardenRange.value = gardenNumber.value;
    }
}