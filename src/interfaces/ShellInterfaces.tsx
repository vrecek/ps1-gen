export type IPanelOption = {
    text:  string
    value: string
}

export type ICurrentElement = IElementsStateFn & IHighlightedState & {
    text:      string
    elementID: string
}

export type IOptionElement = {
    cname?:  string
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
export type IElementsStateObj = {
    elements: IElementState[]
}

export type IHighlightedStateFn = {
    setHighlighted: React.Dispatch<React.SetStateAction<string | null>>
}
export type IHighlightedStateObj = {
    highlighted: string | null
}

export type IElementsState = IElementsStateFn & IElementsStateObj
export type IHighlightedState = IHighlightedStateFn & IHighlightedStateObj

export type IElementsArrow = {
    icon: JSX.Element
    type: 'left' | 'right'
}

export type IElementsPanel = IElementsState & IHighlightedState

export type IAddPanel = IElementsStateFn & IHighlightedStateObj