import { YAO } from '../Base'
import Trigram from '../gram/trigram'
export const List: [
    Trigram, Trigram, Trigram, Trigram,
    Trigram, Trigram, Trigram, Trigram
] = [
        new Trigram([YAO.YANG, YAO.YANG, YAO.YANG]),
        new Trigram([YAO.YANG, YAO.YANG, YAO.YIN]),
        new Trigram([YAO.YANG, YAO.YIN, YAO.YANG]),
        new Trigram([YAO.YANG, YAO.YIN, YAO.YIN]),
        new Trigram([YAO.YIN, YAO.YANG, YAO.YANG]),
        new Trigram([YAO.YIN, YAO.YANG, YAO.YIN]),
        new Trigram([YAO.YIN, YAO.YIN, YAO.YANG]),
        new Trigram([YAO.YIN, YAO.YIN, YAO.YIN]),
    ]

export const Matrix: [
    [Trigram, Trigram, Trigram],
    [Trigram, null, Trigram],
    [Trigram, Trigram, Trigram],
] = [
        [List[1], List[0], List[4]],
        [List[2], null, List[5]],
        [List[3], List[7], List[6]]
    ]