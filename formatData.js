const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('./res.json', 'utf8'));

const formattedObj = {};

obj.results.forEach(({result}) => {
    const [tabType] = result.range.split('!');

    formattedObj[tabType] = result.rawData.map((raw) => {
        const [
            title,
            description,
            coords,
            village,
            iconColor,
            iconType
        ] = raw;

        return {
            title: title.trim(),
            description: description.trim(),
            coords,
            village,
            iconColor,
            iconType
        };
    });
});

fs.writeFileSync("./res2.json", JSON.stringify(formattedObj));

// console.log(formattedObj);
