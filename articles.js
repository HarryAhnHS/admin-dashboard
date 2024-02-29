const descriptions = ["Blast! Crunches, swooshing dumbbells, sprinting treadmills, sweat rivers! Muscles quiver, powerlift, push-up frenzy, high-fiving air! Flex, flex, flex! Energy drink guzzle, protein shake waterfall, stretching, stretching, yoga pose pretzel, mirror flex again! Pump, pump, pump! Woosh!", 
"Hurdle leapfrog, bench press moonwalk, elliptical disco, jumping jack marathon! Kettlebell salsa, spin cycle rodeo, leg day pirouette, dumbbell opera! Sweaty symphony, treadmill tango, flexing flamenco, resistance band rock! Squat, lunge, crunch! Repeat, repeat, repeat! Victory dance, protein bar waltz, gym exit shimmy!",
"Turbocharged burpee, skipping rope rap battle, rowing machine rodeo, battle rope boogie! Muscle-up mambo, stair climber salsa, plank party, kettlebell chaos! Cardio ballet, tricep twist, resistance band rumba, gym floor shuffle! Water break jive, cooldown conga, post-workout power nap, dream of gains!"];

var tagsList = ["Bulk", "Cut", "Body Recomposition", "Strength", "Endurance", "Fat-Loss", "Powerlifting","Home Training", "Gym", "Machines", "Dumbbell", "BodyWeight", "Progressive Overload", "For Gym Rats"];

function randomBetween(min, max, numDecimals) {
    return (Math.random() * (max-min) + min).toFixed(numDecimals);
};

// Function to create list and randomly add n tags from tagList
function randomTags(numTags) {
    var tags = [];
    for (i = 0; i < numTags; i++) {
        var randomTag = tagsList[randomBetween(0,tagsList.length, 0)];
        
        // Make sure not duplicate
        while (tags.includes(randomTag)) {
            randomTag = tagsList[randomBetween(0,tagsList.length, 0)];
        };

        tags.push(randomTag);
    }
    return tags;
}

const cards = [
    {
        num: 1,
        name: 'The Arnold Split',
        postUser: '@ArnoldSwartzenegger',
        numDays: 6,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Medium',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 2,
        name: '5-Day Bro Split',
        postUser: '@ShreddedBro123',
        numDays: 5,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 3,
        name: 'Push Pull Legs',
        postUser: '@WorkSmarter',
        numDays: 3,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Medium',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 4,
        name: 'Left-Right Split',
        postUser: '@TikTokMemer',
        numDays: 2,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity: 'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 5,
        name: 'Full Body Goggins Split',
        postUser: '@DavidGoggins',
        numDays: 1,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity: 'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 6,
        name: 'Upper Lower Split',
        postUser: '@BasicGuy7',
        numDays: 2,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 7,
        name: 'Full Body Strength-Cardio Split',
        postUser: '@HealthyJack33',
        numDays: 2,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 8,
        name: 'Arnold Split',
        postUser: '@WannabeHuge23',
        numDays: 7,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 9,
        name: 'Push Pull Legs Core',
        postUser: '@JoeTheBro',
        numDays: 4,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 10,
        name: 'Quick Easy Split',
        postUser: '@BusySoftwareEngineer',
        numDays: 3,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        num: 11,
        name: 'Daily Weight-Loss Home Training',
        postUser: '@BusyAndHungry',
        numDays: 1,
        description: descriptions[randomBetween(0,2,0)],
        tags: randomTags(randomBetween(1,5,0)),
        intensity:'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
];