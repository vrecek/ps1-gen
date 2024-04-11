export default (rgb: string): string => {
    const hex: string = rgb.split(';')
                            .map(x => {
                                const h: string = parseInt(x).toString(16)
                                
                                return h.length === 1 ? `0${h}` : h
                            })
                            .join('')
                                
    return `#${hex}`
}