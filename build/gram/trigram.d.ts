import { YAO } from '../base';
import * as Data from '../data';
import Gram from './gram';
export default class Trigram extends Gram<3, Data.TrigramData> {
    constructor(yao: YAO[]);
    duplicate(): Trigram;
    print(): void;
}
//# sourceMappingURL=trigram.d.ts.map