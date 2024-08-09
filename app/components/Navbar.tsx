import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-8 lg:px-52">
      <div className="flex flex-row text-xl justify-between py-4">
        <p className="text-3xl">Ardi Prima</p>
        <div className="space-x-8">
          <Link href="#experience">Experience</Link>
          <Link href="mailto:ardiprima27@gmail.com" target="_blank">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
