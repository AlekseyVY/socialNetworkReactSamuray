

export const requiredField = (value) => {
  if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (size) => (value) => {
  if (value.length > size) return `Max length is ${size} symbols`
    return undefined
}
