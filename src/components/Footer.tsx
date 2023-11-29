const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center gap-1 bg-auburnBlue-900 p-4 text-sm text-white">
      © {new Date().getFullYear()} Ed Davis Labs | Proudly built by AU students
    </footer>
  );
};

export default Footer;
