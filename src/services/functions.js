export function removeEmptyFieldsInObject(object) {
  for (const objectKey in object) {
    if (!object[objectKey]) {
      delete object[objectKey];
    }
  }
  return object;
}
