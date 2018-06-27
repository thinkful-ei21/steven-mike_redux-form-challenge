export const required = value => value ? undefined : 'Required';

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const isNum = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const numLength = value => value.length === 5 ? undefined : 'Tracking number must be a 5 digit number';
