export const setFile = (file) => {
  const img = file.split``
  img.splice(4, 0, 's')
  img.splice(15, 0, '.com')
  return img.join``
}

export const truncateFileName = (file) => {
  const file_arr = file.split``.slice(27)
  return file_arr.join``
}