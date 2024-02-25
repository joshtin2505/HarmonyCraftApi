type Note = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
type Alteration = '♭' | '#'
type MajChord = `${Note}` | `${Note}${Alteration}`
type MinChord = `${string}Min` | `${Note}${Alteration}Min`
type DimChord = `${string}Dim` | `${Note}${Alteration}Dim`
type AugChord = `${string}Aug` | `${Note}${Alteration}Aug`
type BaseChord = MajChord | MinChord | DimChord | AugChord
type SeventhChord =
  | `${MajChord}7`
  | `${MajChord}Maj7`
  | `${MinChord}7`
  | `${DimChord}7`
  | `${AugChord}7`
type Sus = 'Sus2' | 'Sus4' | 'Sus6' | 'Sus9'
type SuspendedChord =
  | `${MajChord}${Sus}`
  | `${MinChord}${Sus}`
  | `${SeventhChord}${Sus}`
  | `${DimChord}${Sus}`
  | `${AugChord}${Sus}`
type Add = 'Add2' | 'Add4' | 'Add6' | 'Add9'
type AddedChord =
  | `${MajChord}${Add}`
  | `${MinChord}${Add}`
  | `${SeventhChord}${Add}`
  | `${DimChord}${Add}`
  | `${AugChord}${Add}`
type Extend = '9' | '11' | '13'
type ExtendedChord = `${BaseChord}${Extend}`
type Chord =
  | BaseChord
  | SeventhChord
  | SuspendedChord
  | AddedChord
  | ExtendedChord
type Mode =
  | 'Ionian'
  | 'Dorian'
  | 'Phrygian'
  | 'Lydian'
  | 'Mixolydian'
  | 'Aeolian'
  | 'Locrian'
