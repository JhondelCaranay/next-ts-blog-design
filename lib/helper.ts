// api/posts

const API_URL = "http://localhost:3000/api";

export const getPosts = async () => {
    const res = await fetch(`${API_URL}/posts`);
    const posts = await res.json();
    return posts;
};
