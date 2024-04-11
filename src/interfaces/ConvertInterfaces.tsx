import { Shells } from "./ShellInterfaces"


export type SetFn = {
    setFn:  (out: string) => void
}

export type IConvertSection = SetFn & {
    base:   Shells
    output: string
}

export type IConvertInput = SetFn &  {
    base: Shells
}

export type IConvertOutput = {
    output: string
    base:   Shells
}
