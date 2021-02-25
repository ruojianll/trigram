import { YAO } from './base';
import * as Data from './data';
export declare class Gram<L extends number> {
    protected yao: YAO[];
    protected length: L;
    constructor(yao: YAO[], length: L);
    flip(yaoIndex?: number): void;
    reverse(): void;
    print(): void;
}
export declare class Trigram extends Gram<3> {
    constructor(yao: YAO[]);
    get data(): Data.GramData;
    print(): void;
}
export declare class Hexagram extends Gram<6> {
    constructor(yao: YAO[]);
}
//# sourceMappingURL=gram.d.ts.map