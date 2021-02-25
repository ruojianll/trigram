import { YAO } from '../base'
import * as Data from '../data'
import Gram from './gram'
export default class Trigram extends Gram<3, Data.TrigramData>{
    constructor(yao: YAO[]) {
        super({
            yao,
            length: 3,
            data: Data.Trigrams
        })
    }

    print() {

        console.log(this.data.character)
    }
}

