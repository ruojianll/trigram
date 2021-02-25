import  Hexagram  from './gram/hexagram'
import { YAO } from './base'
let t = new Hexagram([YAO.YANG,YAO.YANG,YAO.YANG,YAO.YIN,YAO.YIN,YAO.YIN])
t.flip(1)
t.flip()
t.reverse()
t.print()
