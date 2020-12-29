function regenerateCity() {
    let gardenPercentage = document.getElementById("gardenNumber").value;
    let roadWidth = document.getElementById("roadWidthNumber").value;
    let buildingWidthVariation = document.getElementById("buildingWidthNumber").value;
    let emptyCenterPercentage = document.getElementById("emptyCenterNumber").value;
    let groundFloorPercentage = document.getElementById("groundFloorNumber").value;
    let minBuildingHeight = document.getElementById("minBuildingNumber").value;
    let maxBuildingHeight = document.getElementById("maxBuildingNumber").value;

    clearScene();
    generateCity({
        gardenPercentage: gardenPercentage,
        roadWidth: roadWidth,
        buildingWidthVariation: buildingWidthVariation,
        emptyCenterPercentage: emptyCenterPercentage,
        groundFloorPercentage: groundFloorPercentage,
        minBuildingHeight: minBuildingHeight,
        maxBuildingHeight: maxBuildingHeight,
    });
}

function setDefaults() {
    document.getElementById("gardenNumber").value = PARAMETER_DEFAULTS.gardenPercentage;
    document.getElementById("roadWidthNumber").value = PARAMETER_DEFAULTS.roadWidth;
    document.getElementById("buildingWidthNumber").value = PARAMETER_DEFAULTS.buildingWidthVariation;
    document.getElementById("emptyCenterNumber").value = PARAMETER_DEFAULTS.emptyCenterPercentage;
    document.getElementById("groundFloorNumber").value = PARAMETER_DEFAULTS.groundFloorPercentage;
    document.getElementById("minBuildingNumber").value = PARAMETER_DEFAULTS.minBuildingHeight;
    document.getElementById("maxBuildingNumber").value = PARAMETER_DEFAULTS.maxBuildingHeight;
}

setDefaults();