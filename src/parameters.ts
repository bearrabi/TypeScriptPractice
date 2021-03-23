export {};

const debugProfile = (name: string, age: number) => {
    console.log({ name, age});
};

debugProfile('bearrabi', 35);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);