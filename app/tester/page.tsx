import { getPosts } from "@/lib/user"
import Link from "next/link";

export default async function Tester() {
    const posts = await getPosts();

    return (
        <div className="p-16 grid grid-cols-3 gap-3">
            {posts.map((post: any) => (
                <div key={post.id} className="p-4 border border-solid rounded-lg space-y-2">
                    <p className="text-2xl font-semibold">{post.title}</p>
                    <p>{post.body}</p>
                    <Link href={`/tester/${post.id}`}>
                        <button className="mt-6 px-6 py-2 text-white bg-lime-700 rounded-lg">
                            Read More
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    )
}