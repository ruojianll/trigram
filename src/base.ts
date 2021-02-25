import type Gram from './gram/gram'
export enum YAO {
    YIN = 'YIN',
    YANG = 'YANG'
}
export function stringifyList(list: (Gram<number, any> | null)[]) {
    return list.map(g => g || '').join('\t')
}
export function stringifyMatrix(matrix: (Gram<number, any> | null)[][]) {

    return matrix.map(r => stringifyList(r)).join('\n')

}