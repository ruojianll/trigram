import { YAO } from '../base';
import * as Data from '../data';
import Gram from './gram';
export default class Hexagram extends Gram<6, Data.HexagramData> {
    constructor(yao: YAO[]);
    duplicate(): Hexagram;
    print(): void;
}
//# sourceMappingURL=hexagram.d.ts.map