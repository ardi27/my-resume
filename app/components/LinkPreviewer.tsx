import extractMetaTags from "@/lib/url_preview";
import Link from "next/link";


async function LinkPreviewer({ url }: { url: string }) {
    const data = await extractMetaTags(url);
    if (data?.title === undefined) return null;
    return (
        <Link href={url} target="_blank" className="">
            <div className="flex flex-row space-x-2 max-w-full border border-gray-300 border-solid rounded-lg">
                <img
                    src={data.image}
                    alt={data?.title}
                    className="size-24 object-cover rounded-tl-lg rounded-bl-lg" />
                <div className="flex flex-col space-y-2 p-2 max-h-24  overflow-hidden">
                    <p className="text-sm font-bold line-clamp-2">{data.title}</p>
                    <p className="text-xs line-clamp-2">{data.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default LinkPreviewer;