import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-sky-900 text-white text-lg font-bold">
      <div className="">
        <Link href="/">LOGO</Link>
      </div>
      <div className="md:flex md:w-3/6 md:justify-between hidden md:block">
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/skills">Skills</Link>
        </div>
        <div>
          <Link href="/projects">Projects</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <Link href="/register">Register/Login</Link>
        </div>
      </div>
      <div className="md:hidden">
        ☰
      </div>
    </div>
  );
};
