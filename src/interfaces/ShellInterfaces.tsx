export type IPanelOption = {
    text:  string
    value: string
    id:    string
}

export type ICurrentElement = IElementsStateFn & {
    text:      string
    elementID: string
}

export type IOptionElement = {
    text:    string
    icon:    JSX.Element
    clickFn: (e: React.MouseEvent) => void
}

export type IElementState = {
    text:  string
    value: string
    id: string
}

export type IElementsStateFn = {
    setElements: React.Dispatch<React.SetStateAction<IElementState[]>>
}

export type IElementsPanel = IElementsStateFn & {
    elements: IElementState[]
}

export type IElementsArrow = {
    icon: JSX.Element
    type: 'left' | 'right'
}