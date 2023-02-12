export const syWith = (arrA:[], arrB:string|number[], key:string = 'id'):any[] => {
  return arrA.filter((item) => arrB.includes(item[key]))
}
export const syWithOut = (arrA:[], arrB:string|number[], key:string = 'id'):any[] => {
  return arrA.filter((item) => !arrB.includes(item[key]))
}
