console.log('Mixed Message Project');
const messages = {
    part1 : ['Aquarius', 'Taurus', 'Gemini', 'Scorpio'],
    part2: ['helping others', 'fighting for causes', 'intellectual conversation', 'listening to others'],
    part3: ['broken promises', 'being lonely', 'people who disagree with you', 'boring situations']
}
console.log(`Your zodiac sign is ${messages.part1[Math.floor(Math.random()*messages.part1.length)]}`);
console.log(`You like ${messages.part2[Math.floor(Math.random()*messages.part2.length)]}`);
console.log(`You hate ${messages.part3[Math.floor(Math.random()*messages.part3.length)]}`);