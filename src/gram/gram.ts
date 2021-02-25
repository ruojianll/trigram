import { YAO } from '../base'
import * as Data from '../data'
export default class Gram<L extends number, D extends Data.GramData>{
    protected yao: YAO[]
    protected readonly Length: number
    protected readonly Data: D[]
    constructor(opt: {
        yao: YAO[],
        length: L,
        data: D[]
    }) {
        if (opt.yao.length !== opt.length) {
            throw new Error('Invalid length of yao.')
        }
        this.yao = opt.yao
        this.Length = opt.length
        this.Data = opt.data
    }
    flip(yaoIndex?: number) {
        if (yaoIndex !== undefined) {
            if (yaoIndex < 0 || yaoIndex >= this.Length) {
                throw new Error('Flip out of index.')
            }
            this.yao[yaoIndex] = {
                [YAO.YANG]: YAO.YIN,
                [YAO.YIN]: YAO.YANG
            }[this.yao[yaoIndex]]
        }
        else {
            for (let i = 0; i < this.Length; i++) {
                this.flip(i)
            }
        }
    }
    reverse() {
        this.yao = this.yao.reverse()
    }
    print() {
        console.log(this.yao.join(','))
    }
    get data() {
        let gram = this.Data.find(t => t.yao.join(',') === this.yao.join(','))
        if (!gram) {
            throw new Error('Not find data.')
        }
        return gram
    }
}

