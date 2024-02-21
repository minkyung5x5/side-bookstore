import Link from "next/link";

export default async function Navbar() {
  return (
    <div className="h-12 md:h-16 bg-white bg-opacity-10 flex justify-center items-center">
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h1 className="text-black text-2xl md:text-3xl text-extrabold">{'책방'}</h1>
      </Link>
    </div>
  );
}
