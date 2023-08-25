import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div className="layout-header">
      <div className="header-text">Header</div>
      <div className="nav-items">
        {!session && status !== "authenticated" && (
          <Link className="navlink" href="/api/auth/signin">
            <span onClick={signIn}>Sign In</span>
          </Link>
        )}
        {session && status !== "unauthenticated" && (
          <Link className="navlink" href="/api/auth/signout">
            <span onClick={signOut}>Sign Out</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
