export const required = value => value ? undefined : 'Required';

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const numLength = value => value === 5 ? undefined : 'Tracking number must be a 5 digit number';

export const isNum = value => typeof value  == isNaN ? undefined : 'Must be valid numbers'; 