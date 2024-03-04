const descriptions = ["Blast! Crunches, swooshing dumbbells, sprinting treadmills, sweat rivers! Muscles quiver, powerlift, push-up frenzy, high-fiving air! Flex, flex, flex! Energy drink guzzle, protein shake waterfall, stretching, stretching, yoga pose pretzel, mirror flex again! Pump, pump, pump! Woosh!", 
"Hurdle leapfrog, bench press moonwalk, elliptical disco, jumping jack marathon! Kettlebell salsa, spin cycle rodeo, leg day pirouette, dumbbell opera! Sweaty symphony, treadmill tango, flexing flamenco, resistance band rock! Squat, lunge, crunch! Repeat, repeat, repeat! Victory dance, protein bar waltz, gym exit shimmy!",
"Turbocharged burpee, skipping rope rap battle, rowing machine rodeo, battle rope boogie! Muscle-up mambo, stair climber salsa, plank party, kettlebell chaos! Cardio ballet, tricep twist, resistance band rumba, gym floor shuffle! Water break jive, cooldown conga, post-workout power nap, dream of gains!",
"Boom! Crunch, crunch, squat! Turbocharge, sweat cascade, muscle shake! Pump, pump, pump! Flex, stretch, high-five air! Treadmill dash, bench press dance, kettlebell symphony! Rep, rep, rep! Protein shake river, energy bar avalanche, gym mirror salsa! Groove, groove, groove!",
"Wham! Bicep curl frenzy, cardio rave, leg day jive! Push-up tsunami, pull-up thunderstorm, ab crunch earthquake! Spin cycle whirlwind, dumbbell tornado, yoga mat disco! Sweat, sweat, sweat! Flex, lunge, shake it out! Hydrate, hydrate, hydrate!",
"Zap! Jump rope madness, burpee bonanza, plank party! Deadlift whirlpool, rowing machine cyclone, tricep dip tornado! Muscle burn inferno, sweat storm surge, bench press blast! Flex, flex, flex! Protein shake deluge, cooldown sprinkle, gym floor hustle! Victory pose, victory roar, repeat, repeat, repeat!"];

var tagsList = ["Bulk", "Cut", "Recomposition", "Strength", "Endurance", "Fat-Loss", "Powerlifting","Home-training", "Barbell", "Machines", "Dumbbell", "Bodyweight", "Progressive-Overload", "Gym-Rats", "Abs", "Flexible", "Agility", "Stamina", "Toning", "Powerlifting", "Warm-up", "Supersets", "HIIT", "Resistance", "Muscle-Growth"];

function randomBetween(min, max, numDecimals) {
    return (Math.random() * (max-min) + min).toFixed(numDecimals);
};

// Function to create list and randomly add n tags from tagList
function randomTags(numTags) {
    var tags = [];
    for (i = 0; i < numTags; i++) {
        var randomTag = tagsList[randomBetween(0,tagsList.length-1, 0)];
        // Make sure not duplicate
        while (tags.includes(randomTag)) {
            randomTag = tagsList[randomBetween(0,tagsList.length-1, 0)];
        };

        tags.push(randomTag);
    }
    return tags;
}

const cards = [
    {
        id: 1,
        name: 'The Arnold Split',
        postUser: '@ArnoldSwartzenegger',
        numDays: 6,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Medium',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 2,
        name: '5-Day Bro Split',
        postUser: '@ShreddedBro123',
        numDays: 5,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 3,
        name: 'Push Pull Legs',
        postUser: '@WorkSmarter',
        numDays: 3,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Medium',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 4,
        name: 'Left-Right Split',
        postUser: '@TikTokMemer',
        numDays: 2,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity: 'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 5,
        name: 'Full Body Goggins Split',
        postUser: '@DavidGoggins',
        numDays: 1,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity: 'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 6,
        name: 'Upper Lower Split',
        postUser: '@BasicGuy7',
        numDays: 2,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 7,
        name: 'Full Body Strength-Cardio Split',
        postUser: '@HealthyJack33',
        numDays: 2,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 8,
        name: 'Arnold Split',
        postUser: '@WannabeHuge23',
        numDays: 7,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 9,
        name: 'Push Pull Legs Core',
        postUser: '@JoeTheBro',
        numDays: 4,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 10,
        name: 'Quick Easy Split',
        postUser: '@BusySoftwareEngineer',
        numDays: 3,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 11,
        name: 'Daily Weight-Loss Home Training',
        postUser: '@BusyAndHungry',
        numDays: 1,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Easy',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
    {
        id: 12,
        name: 'Monster Bulk',
        postUser: '@TheHulk',
        numDays: 3,
        description: descriptions[randomBetween(0,descriptions.length-1,0)],
        tags: randomTags(randomBetween(2,6,0)),
        intensity:'Hard',
        averageDailyHours: `${randomBetween(0,3,1)}`,
        rating: `${randomBetween(3.5,5,2)}`,
        numRatings: `${randomBetween(3,1000,0)}`,
        image:`./imgs/card-imgs/${randomBetween(1,12,0)}.jpg`,
    },
];

const trending = [{
    name: "Barbell Bench Press",
    votes: 125,
    image:`./imgs/exercises-imgs/benchpress.jpg`,
},
{
    name: "Leg Press",
    votes: 112,
    image:`./imgs/exercises-imgs/legpress.jpg`,
},
{
    name: "Bodyweight Pull Ups",
    votes: 93,
    image:`./imgs/exercises-imgs/pullups.jpg`,
},
{
    name: "12-3-30 Treadmill",
    votes: 71,
    image:`./imgs/exercises-imgs/12-3-30.jpg`,
}];