export const calculateUtf8BytesLength = (s: string): number => {
    let b = 0, i = 0, c: number;
    for (; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1) { }
    return b;
};
