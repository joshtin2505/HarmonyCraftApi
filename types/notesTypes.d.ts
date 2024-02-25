export type NaturalNote = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
export type Alteration = '♭' | '#'
export type AlteredNote = `${NaturalNote}${Alteration}`
type Note = NaturalNote | AlteredNote
