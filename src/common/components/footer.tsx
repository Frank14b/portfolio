import { Typography } from "@material-tailwind/react";

const LINKS = ["Home", "Contacts", "Blog"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-10 dark:bg-primaryBlack-600">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal text-gray-700 dark:text-gray-100 text-sm">
            <b>&copy; {CURRENT_YEAR}</b> <span className="text-primaryBlue font-bold">Frank Fontcha</span> || Software Engineer.
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors dark:text-gray-400"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
