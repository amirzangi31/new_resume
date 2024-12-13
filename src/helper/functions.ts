export const shortPathname = (path: string) => {
    const split = path.split("")
    const slice = split.slice(3, split.length)
    const result = slice.join("")
    return result
}