export default (hex: string): string => `${hex.slice(1).match(/.{2}/g)!.map(x => parseInt(x, 16)).join(';')}m`