export type IPanelOption = {
    name:  string
    value: string
}

export type ICurrentElement = {
    text: string
}

export type IOptionElement = {
    text:    string
    icon:    JSX.Element
    clickFn: (e: React.MouseEvent) => void
}