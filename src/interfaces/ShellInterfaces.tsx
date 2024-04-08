export type IShellPage = {
    shell: Shells
}
export type Shells = 'zsh' | 'bash'

export type IPanelOption = {
    text:    string
    prvText: string
    value:   string
}

export type ICurrentElement = IElementsStateFn & IHighlightedState & IToggledStateFn & {
    text:      string
    elementID: string
    fg:        string
    bg:        string
}

export type IOutputPanel = IElementsState & IHighlightedStateFn & IToggledStateFn & IShellPage

export type IOptionElement = {
    cname?:  string
    text:    string
    icon:    JSX.Element
    clickFn: (e: React.MouseEvent) => void
}

export type IElementState = {
    text:          string
    value:         string
    originalValue: string
    id:            string
    prvText:       string
    foreground:    string
    background:    string
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
export type IToggledState = IToggledStateFn & IToggledStateObj

export type IElementsArrow = {
    icon: JSX.Element
    type: 'left' | 'right'
}

export type IElementsPanel = IElementsState & IHighlightedState & IToggledStateFn

export type IAddPanel = IElementsStateFn & IToggledState & IHighlightedStateObj & IShellPage

export type IToggledOptions = 'foreground' | 'background' | null
export type IToggledStateFn = {
    setToggled: React.Dispatch<React.SetStateAction<IToggledOptions>>
}
export type IToggledStateObj = {
    toggled: IToggledOptions
}

export type IColorChange = IToggledStateFn & {
    header: string
    saveFn: (hexColor: string) => void
}

export type ShellInfo = [string, string, string, string]

export type IShellPreview = IElementsStateObj & IShellPage

export type ISwitchElements = IHighlightedStateObj & IElementsStateFn
export enum ESwitch {
    RIGHT = 1,
    LEFT = -1
}