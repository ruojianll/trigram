import { YAO } from './base';
export declare class Gram<L extends number> {
    private yao;
    private length;
    constructor(yao: YAO[], length: L);
    flip(yaoIndex?: number): void;
    reverse(): void;
    print(): void;
}
export declare class Trigram extends Gram<3> {
    constructor(yao: YAO[]);
    print(): void;
}
export declare class Hexagram extends Gram<6> {
    constructor(yao: YAO[]);
}
//# sourceMappingURL=trigram.d.ts.map