import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <div className="px-8 lg:px-52">
      <div className="flex flex-row text-xl justify-between items-center py-4 w-full">
        <p className="hidden md:block text-3xl">Ardi Prima</p>
        <div className="space-x-8 w-full md:w-min flex flex-row justify-between md:justify-end">
          <ThemeSwitcher />
          <Link href="#experience">Experience</Link>
          <Link href="mailto:ardiprima27@gmail.com" target="_blank">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
