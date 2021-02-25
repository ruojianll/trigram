import { YAO } from '../base';
import * as Data from '../data';
export default abstract class Gram<L extends number, D extends Data.GramData> {
    yao: YAO[];
    protected readonly Length: L;
    protected readonly Data: D[];
    constructor(opt: {
        yao: YAO[];
        length: L;
        data: D[];
    });
    flip(yaoIndex?: number): void;
    reverse(): void;
    print(): void;
    abstract duplicate(): Gram<L, D>;
    get data(): D;
    toString(): string;
}
//# sourceMappingURL=gram.d.ts.map