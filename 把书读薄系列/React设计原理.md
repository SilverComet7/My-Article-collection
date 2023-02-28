1. 自变量与因变量与副作用因变量
useState()    ref  reactive
useMemo()     computed
useEffect()   副作用computed
useContext()   provide inject
useRef()
1. state  与  prop  与 store
2. 实现 UI = f(x)的策略   找到变化的部分，使用不同宿主环境下的方法
   1. 细粒度的更新
   2. AOT | JIT
   3. VDOM