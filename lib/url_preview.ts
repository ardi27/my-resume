
import { JSDOM } from "jsdom";

const extractMetaTags = async (url: string) => {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const dom = new JSDOM(html);
        const document = dom.window.document;
        const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
            (tags: any, meta) => {
                const name =
                    meta.getAttribute("name") ||
                    meta.getAttribute("property") ||
                    meta.getAttribute("itemprop");
                const content = meta.getAttribute("content");

                if (name && content) {
                    tags[name] = content;
                }

                return tags;
            },
            {}
        );

        return {
            title:
                document.title || metaTags["og:title"] || metaTags["twitter:title"],
            description:
                metaTags.description ||
                metaTags["og:description"] ||
                metaTags["twitter:description"],
            image:
                metaTags.image || metaTags["og:image"] || metaTags["twitter:image"],
        };
    } catch (error) {
        console.error("Error fetching Open Graph details", error);
    }
};

export default extractMetaTags