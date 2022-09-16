export const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const passwordPattern = /^(?=.*[0-9].*)(?=.*[a-z].*)(?=.*[A-Z].*)[0-9a-zA-Z]{6,}$/;

export const isValid = (sample: string, pattern: RegExp) => {
    return pattern.test(sample);
}

export const getRandomInteger = (min: number, max: number) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}