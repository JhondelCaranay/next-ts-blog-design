import { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data/data";
import { Error, Post } from "../../../types";

// api/posts/1
export default function handler(req: NextApiRequest, res: NextApiResponse<Post | Error>) {
    const { postId } = req.query;
    const { Posts } = data;

    // check if not a number
    // if (isNaN(Number(postId))) {
    if (!parseInt(postId as string)) {
        return res.status(400).json({ error: "Invalid Post ID" });
    }

    const post = Posts.find((post) => post.id === parseInt(postId as string));

    if (!post) return res.status(404).json({ error: "Post Not Found" });

    return res.status(200).json(post);
}
