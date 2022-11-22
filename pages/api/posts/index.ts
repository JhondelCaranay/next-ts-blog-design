import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data/data";
import { Error, Post } from "../../../types";

export default function hanlder(req: NextApiRequest, res: NextApiResponse<Post[] | Error>) {
    const { Posts } = data;
    if (Posts) return res.status(200).json(Posts);

    return res.status(404).json({ error: "Data Not Found" });
}
