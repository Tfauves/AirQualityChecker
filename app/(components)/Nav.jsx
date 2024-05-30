import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <p>home</p>
        </Link>
        {/* <Link href={""}>
        </Link> */}
      </div>
      <div>
        <p className="text-default-text">some logo</p>
      </div>
    </nav>
  );
};

export default Nav;
