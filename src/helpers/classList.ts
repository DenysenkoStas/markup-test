type ClassValue = string | number | null | undefined | ClassObject | ClassArray;
type ClassObject = {[key: string]: boolean};
type ClassArray = ClassValue[];

export default function classList(...classes: ClassValue[]): string {
  let result = '';
  const addClass = (element: string | number) => (result += ` ${element}`);

  classes.forEach((element) => {
    if (!element) return;
    if (typeof element === 'string' || typeof element === 'number') addClass(element);
    else if (isDataArray(element)) addClass(classList(...element));
    else if (isDataObject(element)) Object.keys(element).forEach((key) => element[key] && addClass(key));
  });
  return result.trim();
}

const isDataArray = (array: unknown, minLength: number = 1): array is ClassArray =>
  Array.isArray(array) && array.length >= minLength;

const isDataObject = (object: unknown): object is ClassObject =>
  typeof object === 'object' && object !== null && !Array.isArray(object) && Object.keys(object).length > 0;
