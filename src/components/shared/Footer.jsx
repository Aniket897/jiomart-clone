const allCategories = [
  "Grocery",
  "Electronics",
  "Fashion",
  "Beauty",
  "Home % Kitchen",
  "Premium Fruits",
  "Books",
];

const popularCategories = [
  "Staples",
  "Beverages",
  "Personal Care",
  "Home Care",
  "Fruits & Vegetables",
  "Baby Care",
  "Snacks & Branded Foods",
  "Dairy & Bakery",
];

const customerAccount = [
  "My Account",
  "My Orders",
  "Wisglist",
  "Payment Methods",
  "JioMart Wallet",
];
const Footer = () => {
  return (
    <div className="pt-[30px] bg-[#F5F5F5] mt-6">
      <div className="w-[95%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[80%] mx-auto grid grid-cols-1 gap-3 max-sm:text-center">
        <div>
          <p className="font-extrabold pb-4">All Categories</p>
          <ul>
            {allCategories.map((item, index) => (
              <li
                className="py-2 px-2 rounded-md hover:bg-neutral-200 cursor-pointer"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-extrabold pb-4">Popular Categories</p>
          <ul>
            {popularCategories.map((item, index) => (
              <li
                className="py-2 px-2 rounded-md hover:bg-neutral-200 cursor-pointer"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-extrabold pb-4">Customer Account</p>
          <ul>
            {customerAccount.map((item, index) => (
              <li
                className="py-2 px-2 rounded-md hover:bg-neutral-200 cursor-pointer"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xs">
          <p className="text-xl font-extrabold pb-4">Contact Us</p>
          <p>
            WhatsApp us: 70003 70003 Call us: 1800 890 1222 8:00 AM to 8:00 PM,
            365 days
          </p>
          <p className="mt-5">
            Should you encounter any bugs, glitches, lack of functionality,
            delayed deliveries, billing errors or other problems on the website,
            please email us on cs@jiomart.com
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto flex items-center justify-between mt-[40px] border-t py-5 text-xs max-sm:flex-col max-sm:gap-y-6 max-sm:text-center">
        <div className="flex items-center gap-x-3">
          <img
            src="https://www.jiomart.com/assets/ds2web/jds-icons/jiomart-logo-icon.svg"
            alt=""
          />
          <p>© 2024 All rights reserved. Reliance Retail Ltd.</p>
        </div>
        <div>
          Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+,
          Google Chrome 80+
        </div>
      </div>
    </div>
  );
};

export default Footer;
