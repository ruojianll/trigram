import { YAO } from './base'
import * as Data from './data'
export class Gram<L extends number>{
    constructor(protected yao: YAO[], protected length: L) {
        if (yao.length !== length) {
            throw new Error('Invalid length of yao.')
        }
    }
    flip(yaoIndex?: number) {
        if (yaoIndex !== undefined) {
            if (yaoIndex < 0 || yaoIndex >= this.length) {
                throw new Error('Flip out of index.')
            }
            this.yao[yaoIndex] = {
                [YAO.YANG]: YAO.YIN,
                [YAO.YIN]: YAO.YANG
            }[this.yao[yaoIndex]]
        }
        else {
            for (let i = 0; i < this.length; i++) {
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
}

export class Trigram extends Gram<3>{
    constructor(yao: YAO[]) {
        super(yao, 3)
    }
    get data(){
        let gram = Data.Trigrams.find(t=>t.yao.join(',')===this.yao.join(','))
        if(!gram){
            throw new Error('Not find data.')
        }
        return gram
    }
    print(){

        console.log(this.data.character)
    }
}

export class Hexagram extends Gram<6>{
    constructor(yao: YAO[]) {
        super(yao, 6)
    }
}