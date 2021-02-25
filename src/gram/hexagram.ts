import { YAO } from '../base'
import * as Data from '../data'
import Gram from './gram'


export default class Hexagram extends Gram<6, Data.HexagramData>{
    constructor(yao: YAO[]) {
        super({
            yao,
            length: 6,
            data: Data.Hexagrams
        })
    }
    print() {

        console.log(this.data.character)
    }
}