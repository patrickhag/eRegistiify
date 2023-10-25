const FooterSection = () => {
  return (
    <div className="md: bg-gradient-to-b from-sky-200 to-sky-600 md:px-12 px-4 md:grid md:grid-cols-3 py-6 ">
      <div className="mb-3 border-b md:border-none pb-4">
        <ul>
          <li>Privancy</li>
          <li>Security</li>
          <li>Policies</li>
        </ul>
      </div>
      <div className="mb-3 border-b md:border-none pb-4">
        <h3>Follow us</h3>
        <ul className="flex md:block gap-4">
          <li>
            <i className="bg-sky-200 p-1 cusor-pointer rounded-md my-1 w-6 text-center fa fa-facebook"></i>
            <span className="hidden md:inline"> Facebook</span>
          </li>
          <li>
            <i className="bg-sky-200 p-1 cusor-pointer rounded-md my-1 w-6 text-center fa fa-whatsapp"></i>
            <span className="hidden md:inline"> WhatsApp</span>
          </li>
          <li>
            <i className="bg-sky-200 p-1 cusor-pointer rounded-md my-1 w-6 text-center fa fa-instagram"></i>
            <span className="hidden md:inline"> Instagram</span>
          </li>
          <li>
            <i className="bg-sky-200 p-1 cusor-pointer rounded-md my-1 w-6 text-center fa fa-reddit"></i>
            <span className="hidden md:inline"> Reddit</span>
          </li>
          <li>
            <i className="bg-sky-200 p-1 cusor-pointer rounded-md my-1 w-6 text-center fa fa-twitter"></i>
            Twitter
          </li>
          <li>
            <i className="bg-sky-200 p-1 cusor-pointer rounded-md my-1 w-6 text-center fa fa-linkedin"></i>
            <span className="hidden md:inline"> Linked</span>
          </li>
        </ul>
      </div>
      <div className="mb-3 border-b md:border-none pb-4">
        <h3>Quick links</h3>
        <ul>
          <li>Home</li>
          <li>Tips</li>
          <li>Login / Signup</li>
          <li>Contuct</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
