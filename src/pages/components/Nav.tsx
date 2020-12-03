import Link from "next/link";
import { config } from "../../../site.config";
import { motion } from "framer-motion";

export const Nav: React.FC = () => {
  return (
    <div className="nav-links">
      <Link href="/" passHref>
        <a>
          <img src="/logo.svg" alt="{config.siteMeta.title}" />
        </a>
      </Link>
      <div className="header-link">
        {config.headerLinks.map((link, i) => {
          const key = `header-link-${i}`;
          if (link.href.startsWith("/")) {
            return (
              <Link key={key} href={link.href} passHref>
                <a className="site-header_link">{link.title}</a>
              </Link>
            );
          }
          return (
            <a key={key} href={link.href} className="site-header_link">
              {link.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};
