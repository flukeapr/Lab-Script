import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import "../app/globals.css";

export default function Header(props) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  return (
    <div class="navbar bg-white ">
      <div class="container mx-5 p-1 pl-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="m-2"
        >
          <path
            fill="currentColor"
            d="M2.64 10.655v-1.6h1.31v4.92H2.64v-.31c-.09.09-.2.16-.32.22c-.18.09-.39.13-.62.13c-.34 0-.63-.08-.89-.24s-.46-.38-.6-.67c-.14-.28-.21-.61-.21-.98s.07-.68.21-.96c.14-.28.34-.5.59-.65c.25-.15.55-.23.88-.23c.23 0 .45.05.64.14c.12.06.23.13.33.22zm-.66 2.3c.2 0 .35-.07.47-.21c.12-.14.18-.33.18-.57s-.06-.43-.18-.57c-.12-.14-.28-.21-.47-.21s-.35.07-.48.21c-.12.14-.19.33-.19.57s.06.42.19.57a.6.6 0 0 0 .48.21m4.57-1.23c0-.12-.05-.21-.14-.27c-.1-.08-.24-.12-.44-.12c-.14 0-.29.02-.47.07s-.35.11-.53.2l-.08.04l-.38-.93l.07-.03c.29-.13.56-.23.83-.29c.26-.06.54-.1.82-.1c.5 0 .89.12 1.17.35c.28.24.43.57.43.99v2.34H6.54v-.26c-.24.21-.56.31-.96.31s-.7-.11-.93-.32c-.23-.22-.34-.5-.34-.85s.13-.63.37-.83s.59-.3 1.04-.3zm0 .98v-.2h-.59c-.28 0-.39.09-.39.27c0 .09.03.17.09.22c.07.06.16.09.29.09c.15 0 .29-.04.4-.11s.17-.16.2-.26zm2.53-2.58a.663.663 0 0 1-.68-.69c0-.19.06-.37.19-.5s.3-.19.49-.19s.36.07.49.19c.13.13.19.3.19.5s-.06.36-.19.49s-.3.2-.49.2m.66.21v3.63h-1.3v-3.63zm2.01 3.68c-.3 0-.59-.04-.87-.13s-.53-.21-.74-.38l-.05-.04l.43-.89l.08.06c.19.13.39.23.6.31c.21.07.4.11.58.11c.1 0 .17-.02.22-.04c.04-.02.05-.05.05-.08c0-.05-.03-.09-.1-.12c-.09-.04-.24-.09-.44-.15c-.25-.07-.45-.15-.61-.22c-.17-.08-.32-.19-.44-.34a.932.932 0 0 1-.2-.61c0-.38.14-.68.43-.89s.64-.31 1.08-.31c.26 0 .52.04.77.11s.49.17.72.31l.07.04l-.46.89l-.08-.04c-.44-.23-.79-.34-1.06-.34c-.08 0-.15 0-.19.04c-.03.02-.05.05-.05.09s.03.08.09.11c.09.04.23.09.43.15c.25.07.46.15.63.22c.18.08.33.19.46.34c.13.16.2.37.2.61c0 .38-.15.68-.44.89s-.66.31-1.11.31zm3.2-.23l-1.47-3.46h1.36l.76 2.08l.68-2.08h1.32l-.05.12l-1.49 3.8c-.14.34-.32.59-.56.76c-.24.17-.53.25-.87.25c-.2 0-.39-.03-.57-.09c-.18-.06-.35-.16-.51-.29l-.06-.05l.56-.94l.08.06c.07.06.14.11.21.13c.06.03.13.04.2.04c.16 0 .26-.07.34-.22l.06-.12h.01zm5.14.27c-.42 0-.8-.08-1.12-.25c-.32-.17-.58-.4-.75-.71c-.18-.31-.26-.66-.26-1.06v-2.72h1.34v2.72c0 .26.08.46.23.62c.15.15.34.23.57.23s.41-.07.55-.23c.14-.15.21-.36.21-.62v-2.72h1.34v2.72c0 .4-.09.76-.26 1.06c-.17.31-.42.54-.74.71c-.32.16-.69.25-1.11.25m3.91-.08h-1.34v-4.66H24z"
          />
        </svg>{" "}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar " id="navbarNav">
          <ul class="navbar-nav">
            <li class="mx-2">
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <div
                  className={
                    router.pathname === "/" ? "btn btn-primary" : "btn"
                  }
                >
                  Home
                </div>
              </Link>
            </li>
            <li class="mx-2">
              <Link href={"/cart/user/2"} style={{ textDecoration: "none" }}>
                <div
                  className={
                    router.pathname === "/cart/user/[userid]"
                      ? "btn btn-primary"
                      : "nav-link"
                  }
                >
                  Cart
                </div>
              </Link>
            </li>
            <li class="mx-2">
              <Link href={"/about"} style={{ textDecoration: "none" }}>
                <div
                  className={
                    router.pathname === "/about"
                      ? "btn btn-primary"
                      : "nav-link"
                  }
                >
                  About
                </div>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="ml-20 my-auto">
          <Link href={"/"} style={{ textDecoration: "none" }} >
          <div className="flex ">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <div className="justify-between">
            Profile
            <span className="badge">New</span>
          </div>
        </li>
        <li><div>Settings</div></li>
        <li><div>Logout</div></li>
      </ul>
    </div>
  </div>
          </Link>
        </div>
    </div>
  );
}
