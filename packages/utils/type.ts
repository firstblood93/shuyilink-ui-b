/*
 * @Date: 2022-03-05 13:14:11
 * @LastEditTime: 2022-04-26 17:28:28
 */
/**
 * @desc 根据数据获取对应的类型
 * @param {Any} data  -检测的数据
 * @returns {String}
 */
export const getTypeByData = (data):string => Object.prototype.toString.call(data).slice(8, -1)

export const isNumber = (data):boolean => (getTypeByData(data) === 'Number')

export const isString = (data):boolean => (getTypeByData(data) === 'String')

export const isBoolean = (data):boolean => (getTypeByData(data) === 'Boolean')

export const isArray = (data):boolean => (getTypeByData(data) === 'Array')

export const isObject = (data):boolean => (getTypeByData(data) === 'Object')

export const isFunction = (data):boolean => (getTypeByData(data) === 'Function')

export const isUndefined = (data):boolean => (getTypeByData(data) === 'Undefined')

export const isNull = (data):boolean => (getTypeByData(data) === 'Null')

export const isDate = (data):boolean => (getTypeByData(data) === 'Date')

export const isRegExp = (data):boolean => (getTypeByData(data) === 'RegExp')

export const isError = (data):boolean => (getTypeByData(data) === 'Error')

export const isBlob = (data):boolean => (getTypeByData(data) === 'Blob')

export const isSymbol = (data):boolean => (getTypeByData(data) === 'Symbol')

export const isBigInt = (data):boolean => (getTypeByData(data) === 'BigInt')

export const isMap = (data):boolean => (getTypeByData(data) === 'Map')

export const isSet = (data):boolean => (getTypeByData(data) === 'Set')
