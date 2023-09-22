type Ttype =
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Null'
  | 'Undefined'
  | 'Array'
  | 'Object'
  | 'Map'
  | 'Set'
  | 'Function'
  | 'Date'
  | 'Promise'
  | 'Error'
  | 'FormData';

type Ttarget =
  | string
  | number
  | Boolean
  | null
  | undefined
  | Array<any>
  | Object
  | Map<any, any>
  | Set<any>
  | Function
  | Date
  | Promise<any>
  | Error
  | FormData;

/**
 * 判断当前数据类型
 * @param {(String|Number|Boolean|Null|Undefined|Array|Object|Map|Set|Function|Date|Promise|Error|FormData)} type 数据类型
 * @returns {boolean}
 * @example isType("String")('abc') // true
 */
const isType = (type: Ttype) => (target: Ttarget) =>
  `[object ${type}]` === Object.prototype.toString.call(target);

export default isType;
