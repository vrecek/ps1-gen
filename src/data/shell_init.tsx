import { IPanelOption, Shells } from "@/interfaces/ShellInterfaces";


export default (shell: Shells): IPanelOption[] => {
    if (shell === 'zsh')
        return [
            { text: 'Hostname', value: '%m' },
            { text: 'Username', value: '%n' },
            { text: 'Current Path', value: '%~' },
            { text: 'Full path', value: '%/' },
            { text: '24 hour time', value: '%T' },
            { text: 'AM/PM time', value: '%t' },
            { text: 'YY-MM-DD', value: '%D' },
            { text: 'DD-MM-YY', value: '%D{%d-%m-%Y}' },
        ]

    return [
        { text: 'Hostname', value: '\\h' },
        { text: 'Username', value: '\\u' },
        { text: 'Current Path', value: '\\w' },
        { text: 'Full path', value: '$PWD' },
        { text: '24 hour time', value: '\\A' },
        { text: 'AM/PM time', value: '\\@' },
        { text: 'YY-MM-DD', value: '\\D{%Y-%m-%d}' },
        { text: 'DD-MM-YY', value: '\\D{%d-%m-%Y}' },
    ]
}