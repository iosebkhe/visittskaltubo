/* eslint-disable react/prop-types */
import NavigationExpanded from "./NavigationExpanded";

import logo from "../assets/logo.png";
import flagGeo from "../assets/flag-geo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(null);

  const handleNavExpanded = (navLabel) => {
    setNavExpanded(navLabel);
  };

  useEffect(() => {
    const navExpandedInterval = setInterval(() => {
      setNavExpanded(null);
    }, 8000);

    return clearInterval(navExpandedInterval);
  }, []);


  return (
    <header className="header">
      {/* LOGO BOX */}
      <div className="logo-box">
        <a href="/">
          <img className="logo-box__logo" src={logo} alt="Visit tskaltubo logo" />
        </a>
        <p className="logo-box__slogan">
          <span>წყალტუბოს</span>
          <span>ტურიზმის</span>
          <span>ცენტრი</span>
        </p>
      </div>
      {/* NAVIGATION MAIN */}
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item things-to-do"
            onClick={() => handleNavExpanded('things-to-do')}
          >
            აქტივობები
          </li>
          <li className="header__nav-item explore-regions"
            onClick={() => handleNavExpanded('explore-regions')}
          >
            მიმართულებები
          </li>
          <li className="header__nav-item plan-your-visit"
            onClick={() => handleNavExpanded('plan-your-visit')}
          >
            ვიზიტის დაგეგმვა
          </li>
          <li className="header__nav-item about-tskaltubo"
            onClick={() => handleNavExpanded('about-tskaltubo')}
          >
            წყალტუბოს შესახებ
          </li>
          {/*  */}
          <NavigationExpanded navLabel={navExpanded} />
          {/*  */}
        </ul>
      </nav>
      {/* HEADER MISC */}
      <div className="header__misc">
        <button className="header__login">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.93853 14.8184C2.93853 12.0896 5.15065 9.87749 7.87944 9.87749C10.6082 9.87749 12.8203 12.0896 12.8203 14.8184V16.2729C12.8203 16.7575 13.2131 17.1502 13.6976 17.1502C14.1821 17.1502 14.5749 16.7575 14.5749 16.2729V14.8184C14.5749 11.1206 11.5773 8.12295 7.87944 8.12295C4.18164 8.12295 1.18398 11.1206 1.18398 14.8184V16.2729C1.18398 16.7575 1.57676 17.1502 2.06126 17.1502C2.54576 17.1502 2.93853 16.7575 2.93853 16.2729V14.8184Z" fill="#30334E" stroke="#30334E" strokeWidth="0.3" />
            <path d="M10.6384 5.36364C10.6384 6.88744 9.40304 8.12273 7.87926 8.12273C6.35546 8.12273 5.12017 6.88744 5.12017 5.36364C5.12017 3.83983 6.35546 2.60455 7.87926 2.60455C9.40304 2.60455 10.6384 3.83983 10.6384 5.36364ZM7.87926 9.87727C10.3721 9.87727 12.3929 7.85644 12.3929 5.36364C12.3929 2.87082 10.3721 0.85 7.87926 0.85C5.38645 0.85 3.36562 2.87082 3.36562 5.36364C3.36562 7.85644 5.38645 9.87727 7.87926 9.87727Z" fill="#30334E" stroke="#30334E" strokeWidth="0.3" />
          </svg>
          <span>
            შესვლა
          </span>
        </button>
        <div className="header__sf">
          <div className="header__search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7258 15.1614L17.6805 15.2296L17.7384 15.2874L22.3923 19.9414C23.0692 20.6183 23.0692 21.7155 22.3923 22.3923L22.3923 22.3924C21.7164 23.0692 20.6174 23.0692 19.9415 22.3924L19.9414 22.3923L15.2874 17.7384L15.2296 17.6805L15.1614 17.7258C13.7279 18.6769 12.0118 19.2335 10.1668 19.2335C5.16744 19.2335 1.1 15.1661 1.1 10.1668C1.1 5.16744 5.16744 1.1 10.1668 1.1C15.1661 1.1 19.2335 5.16744 19.2335 10.1668C19.2335 12.0118 18.6769 13.7279 17.7258 15.1614ZM10.1668 3.65003C6.57316 3.65003 3.65003 6.57316 3.65003 10.1668C3.65003 13.7604 6.57316 16.6835 10.1668 16.6835C13.7604 16.6835 16.6835 13.7604 16.6835 10.1668C16.6835 6.57316 13.7604 3.65003 10.1668 3.65003Z" fill="#30334E" stroke="white" strokeWidth="0.2" />
            </svg>
          </div>
          <div className="header__favorites">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.3305 1.77034C19.7536 1.20908 19.0686 0.763857 18.3147 0.4601C17.5609 0.156343 16.7529 0 15.9369 0C15.1209 0 14.3129 0.156343 13.559 0.4601C12.8052 0.763857 12.1202 1.20908 11.5432 1.77034L11 2.29873L10.4567 1.77034C9.8798 1.20908 9.19484 0.763857 8.44097 0.4601C7.68711 0.156343 6.87911 0 6.06311 0C5.24712 0 4.43912 0.156343 3.68525 0.4601C2.93139 0.763857 2.24643 1.20908 1.66948 1.77034C-0.193412 3.58176 -0.51846 6.37249 0.801094 9.23601C2.40947 12.7278 9.94233 19.4378 10.2621 19.7218C10.4638 19.9008 10.7269 20 11 20C11.273 20 11.5362 19.9008 11.7379 19.7218C12.0576 19.4378 19.5905 12.7278 21.1988 9.23551C22.5185 6.37249 22.1934 3.58176 20.3305 1.77034ZM19.2012 8.36438C18.1393 10.6683 13.4532 15.2351 11 17.4818C8.5468 15.2351 3.86176 10.6699 2.79877 8.36489C2.35176 7.39288 1.49624 4.95112 3.21797 3.27648C3.97255 2.54255 4.99598 2.13023 6.06311 2.13023C7.13024 2.13023 8.15366 2.54255 8.90825 3.27648L10.2258 4.55795C10.3274 4.65687 10.4481 4.73535 10.581 4.78889C10.7138 4.84243 10.8562 4.86999 11 4.86999C11.1438 4.86999 11.2862 4.84243 11.4191 4.78889C11.5519 4.73535 11.6726 4.65687 11.7743 4.55795L13.0917 3.27648C13.8585 2.56516 14.8773 2.16832 15.9369 2.16832C16.9964 2.16832 18.0153 2.56516 18.782 3.27648C20.5038 4.95112 19.6482 7.39288 19.2012 8.36438Z" fill="#30334E" />
            </svg>

          </div>
        </div>
        <div className="header_lang">
          <img src={flagGeo} alt="Georgian Flag" />
        </div>
      </div>
    </header>
  );
};

export default Header;