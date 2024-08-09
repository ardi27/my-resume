async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
        throw new Error('Failed to fetch user')
    }
    return res.json();
}

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch user')
    }
    return res.json();
}

async function getPostById(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch user')
    }
    return res.json();
}
export { getUser, getPosts, getPostById }