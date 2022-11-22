import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../data/data";
import { Error, Post } from "../../types";

// api/popular
export default function handler(req: NextApiRequest, res: NextApiResponse<Post[] | Error>) {
    const { Popular } = data;

    if (Popular) return res.status(200).json(Popular);

    return res.status(404).json({ error: "Data Not Found" });
}
