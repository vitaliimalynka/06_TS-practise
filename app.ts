const BASE_URL: string = 'https://jsonplaceholder.typicode.com'
const POST_PATH: string = '/posts'
const COMMENTS_PATH: string = '/comments'

interface IPost {
    readonly id: string;
    userId: number;
    title: string;
    body: string;
}

interface IComment {
    readonly id: string;
    postId: number;
    email: string;
    body: string;
    name: string;
}

class Post implements IPost{
    public readonly id: string;
    public userId: number;
    public title: string;
    public body: string;

    constructor(obj: IPost) {
        Object.assign(this, obj)
    }
}

class UserComment implements IComment{
    public readonly id: string;
    public postId: number;
    public email: string;
    public body: string;
    public name: string;
    public testProp = 12;

    constructor(obj: IComment) {
        Object.assign(this, obj)
    }
}

let a = 1
let b = a
a = 2
console.log(a, b)

let obj1 = {
    name: "test"
}

let obj2 = Object.assign({}, obj1)

obj1.name = "new name"

console.log(obj1.name, obj2.name)

async function getData<T extends I, I>(path: string, cl: {new(item: I): T}): Promise<T[]> {
    const res: Response = await fetch(BASE_URL + path)
    const parsed: I[] = await res.json()
    console.dir(await parsed)
    return parsed.map((item: I) => new cl(item))
    
}

let posts: Post[] = []
getData<Post, IPost>(POST_PATH, Post).then(res => {
    posts = res
    console.dir(posts)
})



let comments: UserComment[] = []

getData<UserComment, IComment>(COMMENTS_PATH, UserComment).then(res => {
    comments = res
    console.dir(comments)
})


// console.dir(comments)