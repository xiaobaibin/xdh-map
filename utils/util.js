import {parse} from './style'

/**
 * capitalize('fooBar'); // 'FooBar'
 * capitalize('fooBar', true); // 'Foobar'
 */
export function capitalize([first, ...rest], lowerRest = false) {
  return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))
}

/**
 * 给选项对象的字段名称增加前缀
 * @param name
 * @param options
 *
 * @example
 * stroke: {color: 'red'} => {strokeColor: 'red'}
 */
export function prefix(name, options) {
  let result = {}
  Object.keys(options).forEach(key => {
    const fixName = name + capitalize(key)
    result[fixName] = options[key]
  })
  return result
}

/**
 * 选项对象增加前缀后对应关系
 * @param name
 * @param options
 *
 * @example
 * stroke: {color: 'red'} => {color：'strokeColor'}
 */
export function keyMap(name, options) {
  let result = {}
  Object.keys(options).forEach(key => {
    result[key] = name + capitalize(key)
  })
  return result
}

/**
 * 混合组件，生成Style描述JSON
 * @param {VueComponent} mv vue组件实例
 * @param name
 * @param options
 */
export function mix(mv, name, options) {
  let result = {}
  let map = keyMap(name, options)
  Object.keys(options).forEach(key => {
    result[key] = mv[map[key]]
  })
  return result
}

/**
 * 图形生成style
 * @return {*}
 */
export function featureStyleRender() {
  return parse({
    ...this.baseStyleRender(),
    fill: {
      className: 'Fill',
      color: this.fill
    },
    stroke: this.strokeRender(),
    text: this.textRender()
  })
}
