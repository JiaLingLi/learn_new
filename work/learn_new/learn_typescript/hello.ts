function swap<T,U>(tuple:[T,U]):[U,T]{
   return [tuple[1],tuple[0]]
}
const result = swap(['hello',123])
console.log(result)
const a=0