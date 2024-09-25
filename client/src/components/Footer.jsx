const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex flex-col md:flex-row items-start space-y-4 md:space-y-0 justify-between text-sm md:text-md py-8 md:mt-8">
        <div className="flex flex-col text-white ">
          <p>Featured Blogs</p>
          <p>Most viewed</p>
          <p>Readers Choices</p>
        </div>
        <div className="flex flex-col text-white ">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>
        <div className="flex flex-col text-white ">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <p className="bg-black text-center text-white pb-2 py-2">
        All Rights are reserved @ Blog Market 2024
      </p>
    </>
  );
};

export default Footer;
