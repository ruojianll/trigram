import * as P8 from './primordial8'
import Hexagram from '../gram/hexagram'
export const Matrix = [...P8.List].reverse().map(bottom =>
    [...P8.List].reverse().map(top =>
        new Hexagram([...bottom.yao, ...top.yao])
    )
)