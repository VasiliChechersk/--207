import cloneDeep from '../node_modules/lodash-es/cloneDeep.js'

const obj = {
    x: 12,
    y: 15
}
const newObj = cloneDeep(obj)
console.log(newObj);