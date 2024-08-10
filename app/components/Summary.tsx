import Image from "next/image";
import Link from "next/link";

export default function Summary() {
  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-2">
      <div className=" md:pr-8 space-y-4">
        <p className="text-2xl font-bold text-left">Mobile Engineer</p>
        <p className="text-4xl font-extrabold text-justify">
          Hello, my name is Ardi Prima
        </p>
        <p className=" font-light text-lg text-justify">
          I am a Mobile Engineer with 3 years experience in the full life cycle
          of the mobile development process including requirements gathering,
          design, coding, testing, debugging and maintenance. I have a strong
          understanding of Dart programming language and the Flutter framework.
          My expertise includes state management, API integration, and testing.
          I am a team player and enjoy collaborating with others to deliver
          successful projects.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="h-12 w-full bg-black text-white text-xl px-auto py-auto rounded-lg dark:bg-white dark:text-black">
            <Link href="https://github.com/ardi27" target="_blank">
              Github
            </Link>
          </button>
          <button className="h-12 w-full border border-solid border-black text-black  text-xl px-auto py-auto rounded-lg dark:border-white dark:text-white">
            <Link
              href="https://www.linkedin.com/in/ardi-prima/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </button>
        </div>
      </div>
      <Image
        // src="https://avatars.githubusercontent.com/u/29269251?v=4"
        src="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-19/443240568_424927340260163_6546875819672459448_n.jpg?_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0nY2Oio7Cv8Q7kNvgHcTVPv&edm=APHcPcMBAAAA&ccb=7-5&oh=00_AYCOZ_UMeK3OzOY44OtWyA0BswGfhKsxQxBKa61SzHb1hA&oe=66BD00D8&_nc_sid=bef7bc"
        alt="Next.js Logo"
        width={400}
        height={400}
        priority
        className="p-4 rounded-full md:w-full self-center place-self-center"
      />
    </div>
  );
}
