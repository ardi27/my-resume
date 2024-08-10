import { getExperience } from "@/lib/vercel_kv";
import Image from "next/image";
import LinkPreviewer from "./LinkPreviewer";

export default async function WorkExperience() {
  const experience: any = await getExperience();
  return (
    <div id="experience" className="pt-8 space-y-5">
      <p className="text-2xl font-bold">Work Experience</p>
      {experience.map((item: any, i: number) => (
        <div
          key={i}
          className="flex flex-row items-start border border-solid pb-6 border-x-0 border-t-0"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 items-start">
            <Image
              src={item.company_logo}
              width={54}
              height={54}
              alt={item.company}
            />
            <div className="space-y-4">
              <p className="text-sm font-semibold">{item.position}</p>
              <div>
                <div className="flex flex-row">
                  <p className="text-sm font-medium">{item.company}</p>
                  <p className="px-2">·</p>
                  <p className="text-sm font-regular text-gray-700 dark:text-gray-400">
                    {item.type}
                  </p>
                </div>
                <div className="flex flex-row text-sm font-regular text-gray-700 dark:text-gray-400">
                  <p className="">{item.date}</p>
                </div>
                <div className="flex flex-row text-sm font-regular text-gray-700 dark:text-gray-400">
                  <p className="">{item.location}</p>
                  <p className="px-2">·</p>
                  <p className="">{item.arrangement}</p>
                </div>
              </div>
              <ul className="text-sm font-regular text-gray-700 dark:text-gray-400">
                {item.description.map((desc: string, index: number) => (
                  <li key={index}>- {desc}</li>
                ))}
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {item.app_links.map((link: any, index: number) => (
                  <LinkPreviewer key={index} url={link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
