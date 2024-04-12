import { IPanelOption, Shells } from "@/interfaces/ShellInterfaces";

export const zshCodeValues:  string[] = ['%m', '%n', '%~', '%/', '%T', '%t', '%D', '%D{%d-%m-%Y}']
export const bashCodeValues: string[] = ['\\h', '\\u', '\\w', '$PWD', '\\A', '\\@', '\\D{%Y-%m-%d}', '\\D{%d-%m-%Y}']

export const extendZshCodeValues:  string[] = [...zshCodeValues, '%~']
export const extendBashCodeValues: string[] = [...bashCodeValues, '\\W']

export default (shell: Shells): IPanelOption[] => {
    const constValues: string[][] = [
        [
            'Hostname', 'Username',
            'Current path', 'Full path',
            '24 hour time', 'AM/PM time',
            'YY-MM-DD', 'DD-MM-YY'
        ],
        [
            'computer', 'user',
            '~', '/home/user',
            '22:17', '10:17PM',
            '24-04-07', '07-04-2024'
        ]
    ]

    let codeValues: string[]

    if (shell === 'zsh')
        codeValues = zshCodeValues
    else
        codeValues = bashCodeValues


    return codeValues.map((x, i) => {
        return {
            text: constValues[0][i],
            value: x,
            prvText: constValues[1][i]
        }
    })
}