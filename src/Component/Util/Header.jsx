import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center bg-orange-500 h-36">
      <nav className="flex justify-evenly items-center w-full space-x-10  h-36">
        <Link>
          <img
            src="https://img.freepik.com/premium-vector/online-shop-logo-design-template-perfect-ecommerce-sale-store-shop-discount-web_695238-64.jpg"
            className="h-10 px-7"
            alt="logo"
          />
        </Link>
        {/* searchBar */}

        <div className="round-lg">
          <input
            type="text"
            placeholder="Search for products, catogies, etc..."
            className="w-80 h-11 rounded "
          />
        </div>

        {/* linkblock */}
        <div className="flex  font-semibold">
          <Link to={"/"} className="mr-8">
            Log in
          </Link>
          <Link to={"/"} className="mr-8">
            Become a Seller
          </Link>
          <Link to={"/"} className="mr-2">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
