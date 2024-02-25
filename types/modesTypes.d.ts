type EsName =
  | 'Jónico'
  | 'Dórico'
  | 'Frigio'
  | 'Lidio'
  | 'Mixolidio'
  | 'Eólico'
  | 'Locrio'
type EnName =
  | 'Ionian'
  | 'Dorian'
  | 'Phrygian'
  | 'Lydian'
  | 'Mixolydian'
  | 'Aeolian'
  | 'Locrian'
type ModeName = EsName | EnName
type ModeStructure =
  | 'T-ST-T-T-ST-T-T'
  | 'ST-T-T-ST-T-T-T'
  | 'T-T-ST-T-T-T-ST'
  | 'T-T-T-ST-T-T-ST'
  | 'T-T-ST-T-T-ST-T'
  | 'ST-T-T-T-ST-T-T'
  | 'T-ST-T-T-T-ST-T'
interface Mode {
  name: ModeName
  description: string
  emotion: string
  structure: ModeStructure
}
