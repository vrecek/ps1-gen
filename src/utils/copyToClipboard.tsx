const copyToClipboard = (e: React.MouseEvent, text: string): void => {
    const t:      HTMLElement = e.currentTarget! as HTMLElement,
          svg:    HTMLElement = [...t.children][0] as HTMLElement


    window.navigator.clipboard.writeText(text)

    svg.style.color = 'rgb(109, 160, 255)'
    svg.style.scale = '.85'

    setTimeout(() => {
        svg.style.color = 'rgb(250, 250, 250)'
        svg.style.scale = '1'
    }, 200)

    const i: HTMLElement = document.createElement('i')
    i.textContent = 'Copied ✅'
    t.append(i)

    setTimeout(() => i.remove(), 1500)
}


export default copyToClipboard