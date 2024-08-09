import { getPostById } from "@/lib/user";


export default async function TesterId({ params }: { params: { id: number } }) {
    const post = await getPostById(params.id);
    return (
        <div className="p-16 space-y-6">
            <p className="text-2xl font-bold">{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}