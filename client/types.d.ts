type User = {
    "username": string,
    "password": string,
    "friends": Array,
    "picturePath": string,
    "groups": Array,
    "posts": Array
}

type Group = {
    "leader": string,
    "group_name": string,
    "group_description": string,
    "posts": Array,
    "members": Array,
    "picturePath": string
}
