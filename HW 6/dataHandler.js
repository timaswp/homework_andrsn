class DataHandler {
    constructor() {
        this._apiBase = 'https://jsonplaceholder.typicode.com/posts';
        this.posts = new Map();
    }

    async fetchPosts() {
        const res = await fetch(this._apiBase);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
        }

        const data = await res.json();
        data.forEach(post => this.posts.set(post.id, post));
    }

    listPosts() {
        return Array.from(this.posts.values()).sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));
    }

    getPost(id) {
        return this.posts.get(id) || null;
    }

    clearPosts() {
        this.posts.clear();
    }
}


const dh = new DataHandler;
dh.fetchPosts().then(() => console.log(dh.listPosts()));