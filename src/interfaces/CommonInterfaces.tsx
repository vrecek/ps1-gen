export type IImage = {
    src:      string
    altTxt ?: string
    cname  ?: string
}

export type IIcon = {
    icon:      JSX.Element
    cname   ?: string
    clickFn ?: (e: React.MouseEvent) => void
}

export type IButton = {
    txt:      string
    cname?:   string
    clickFn?: (e: React.MouseEvent) => void
}