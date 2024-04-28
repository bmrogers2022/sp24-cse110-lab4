let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (i in statistics) {
    // Check if property name starts with 'r' or value is odd
    if (i.startsWith('r') || statistics[i] % 2 !== 0) {
        console.log(statistics[i]);
    }
}