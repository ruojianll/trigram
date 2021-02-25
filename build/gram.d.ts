import { YAO } from './base';
import * as Data from './data';
export declare class Gram<L extends number, D extends Data.GramData> {
    protected yao: YAO[];
    protected readonly Length: number;
    protected readonly Data: D[];
    constructor(opt: {
        yao: YAO[];
        length: L;
        data: D[];
    });
    flip(yaoIndex?: number): void;
    reverse(): void;
    print(): void;
    get data(): D;
}
export declare class Trigram extends Gram<3, Data.TrigramData> {
    constructor(yao: YAO[]);
    print(): void;
}
export declare class Hexagram extends Gram<6, Data.HexagramData> {
    constructor(yao: YAO[]);
}
//# sourceMappingURL=gram.d.ts.map