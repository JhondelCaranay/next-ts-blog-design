// api/posts

const API_URL = "http://localhost:3000/api";

export const getPosts = async () => {
    const res = await fetch(`${API_URL}/posts`);
    const posts = await res.json();
    return posts;
};

export const getPost = async (id: number) => {
    const res = await fetch(`${API_URL}/posts/${id}`);
    const post = await res.json();
    return post;
};
