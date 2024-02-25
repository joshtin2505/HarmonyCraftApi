type MinChord = `${string}Min` | `${Note}${Alteration}Min`
type DimChord = `${string}Dim` | `${Note}${Alteration}Dim`
type AugChord = `${string}Aug` | `${Note}${Alteration}Aug`
type BaseChord = Note | MinChord | DimChord | AugChord
type SeventhChord =
  | `${Note}7`
  | `${Note}Maj7`
  | `${MinChord}7`
  | `${DimChord}7`
  | `${AugChord}7`
type Sus = 'Sus2' | 'Sus4' | 'Sus6' | 'Sus9'
type SuspendedChord =
  | `${Note}${Sus}`
  | `${MinChord}${Sus}`
  | `${SeventhChord}${Sus}`
  | `${DimChord}${Sus}`
  | `${AugChord}${Sus}`
type Add = 'Add2' | 'Add4' | 'Add6' | 'Add9'
type AddedChord =
  | `${Note}${Add}`
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
