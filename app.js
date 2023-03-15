var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const POST_PATH = '/posts';
const COMMENTS_PATH = '/comments';
class Post {
    constructor(obj) {
        Object.assign(this, obj);
    }
}
class UserComment {
    constructor(obj) {
        this.testProp = 12;
        Object.assign(this, obj);
    }
}
let a = 1;
let b = a;
a = 2;
console.log(a, b);
let obj1 = {
    name: "test"
};
let obj2 = Object.assign({}, obj1);
obj1.name = "new name";
console.log(obj1.name, obj2.name);
function getData(path, cl) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(BASE_URL + path);
        const parsed = yield res.json();
        console.dir(yield parsed);
        return parsed.map((item) => new cl(item));
    });
}
let posts = [];
getData(POST_PATH, Post).then(res => {
    posts = res;
    console.dir(posts);
});
let comments = [];
getData(COMMENTS_PATH, UserComment).then(res => {
    comments = res;
    console.dir(comments);
});
// console.dir(comments)
//# sourceMappingURL=app.js.map