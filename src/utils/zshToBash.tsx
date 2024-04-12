import hexToRgb from "./hexToRgb"


export default (start: string, end: string, rep: string, newValue: string) => {
    let startIndex: number

    while ((startIndex = newValue.indexOf(start)) !== -1)
    {
        const hex: string = newValue.slice(startIndex + 3, startIndex + 10),
              rgb: string = hexToRgb(hex)

        // Replace the zsh color %X{#xxxxxx} -> \e[xx;2;x;x;xm
        newValue = newValue.replace(`${start}{${hex}}`, `${rep}${rgb}`)

        // Slice the string to replace the %X that matches the color placement
        const endIndex: number = newValue.indexOf(end, newValue.indexOf(`${rep}${rgb}`)) 
        newValue = `${newValue.slice(0, endIndex)}\\e[0m${newValue.slice(endIndex + 2)}`
    }

    return newValue
}