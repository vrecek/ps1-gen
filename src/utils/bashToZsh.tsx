import rgbToHex from "./rgbToHex"


export default (start: string, lowSymbol: string, uppSymbol: string, newValue: string): string => {
    let startIndex: number

    while ((startIndex = newValue.indexOf(start)) !== -1)
    {
        const rgb: string = newValue.slice(
            startIndex + 8, 
            newValue.indexOf('m', startIndex)
        )
        const hex: string = rgbToHex(rgb)

        // Replace the bash color \e[xx;2;x;x;xm -> %X{#xxxxxx}
        const zshValue: string = `${uppSymbol}{${hex}}`
        newValue = newValue.replace(`${start};${rgb}m`, zshValue)

        // Slice the string to replace the \e[0m that matches the color placement
        const endIndex: number = newValue.indexOf('\\e[0m', newValue.indexOf(zshValue))
        newValue = `${newValue.slice(0, endIndex)}${lowSymbol}${newValue.slice(endIndex + 5)}`
    }

    return newValue
}