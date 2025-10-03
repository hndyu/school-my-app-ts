export type User = {
    id: number;
    name: string;
    age: number;
    personalColor?: string;
    hobbies?: string[];
};

export type UserCustom = {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
}

export type Users = {
    id: number;
    name: string;
    age: number;
}

export type UserPlaceholder = {
    id: number;
    name: string;
    email: string;
    phone: number;
    website: string;
}