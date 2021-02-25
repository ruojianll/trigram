import { YAO } from '../base';
import * as Data from '../data';
export default class Gram<L extends number, D extends Data.GramData> {
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
//# sourceMappingURL=gram.d.ts.map