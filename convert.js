const fs = require("fs");

for (let i = 1; i <= 291; i++) {
    try {
        const data = fs.readFileSync(`UserFont-${i}.css`).toString();

        fontData = data.substring(data.indexOf("base64,") + 7, data.indexOf(") format(\"truetype"));
        
        fs.writeFile(
            `./fonts/ttf/UserFont-${i}.ttf`,
            Buffer.from(fontData, "base64"),
            () => {
                console.log(`Great success with ${i}`);
            }
        )
    } catch (error) {
        console.log(`Whoopsie with ${i}`)
    }
}
