import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-white p-4">
      <div>
        <p className="text-default-text">some logo</p>
      </div>
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <p>home</p>
        </Link>
        {/* <Link href={""}>
        </Link> */}
      </div>
    </nav>
  );
};

export default Nav;
