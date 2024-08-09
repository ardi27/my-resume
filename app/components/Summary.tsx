import Image from "next/image";
import Link from "next/link";

export default function Summary() {
    return (
        <div className="grid grid-cols-1 items-center md:grid-cols-2 min-h-[calc(100vh-68px)]">
            <div className=" md:pr-8 space-y-4">
                <p className="text-2xl font-bold text-left">Mobile Engineer</p>
                <p className="text-4xl font-extrabold text-justify">Hello, my name is Ardi Prima</p>
                <p className=" font-light text-lg text-justify">I am a Mobile Engineer with 3 years experience in the full life cycle of the mobile development process including requirements gathering, design, coding, testing, debugging and maintenance. I have a strong understanding of Dart programming language and the Flutter framework. My expertise includes state management, API integration, and testing. I am a team player and enjoy collaborating with others to deliver successful projects.</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button className="h-12 w-full bg-black text-white text-xl px-auto py-auto rounded-lg">
                        <Link href="https://github.com/ardi27" target="_blank">Github</Link>
                    </button>
                    <button className="h-12 w-full border border-solid border-black text-black text-xl px-auto py-auto rounded-lg">
                        <Link href="https://www.linkedin.com/in/ardi-prima/" target="_blank">LinkedIn</Link>
                    </button>
                </div>
            </div>
            <Image
                src="https://avatars.githubusercontent.com/u/29269251?v=4"
                alt="Next.js Logo"
                width={400}
                height={400}
                priority
                className="p-4 rounded-full md:w-full self-center place-self-center"
            />
        </div >
    );
};