import React from 'react';
import Flag from 'react-world-flags';  // burada import ettik
import { PiCallBellThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Header = ({ isOpen, onMenuClick }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        const newLang = i18n.language === 'tr' ? 'en' : 'tr';
        i18n.changeLanguage(newLang);
    };

    return (
        <header className="bg-white h-16 flex items-center justify-center sticky top-0 z-50 md:static md:bg-transparent relative px-4">
            {/* Sol: Menü butonu ve çağrı ikonu */}
            <div className="absolute left-4 top-4 flex items-center gap-2 md:hidden">
                <button
                    onClick={onMenuClick}
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blackrock hover:text-yellow-500 transition-transform duration-300 flex items-center justify-center p-0.5 md:p-2"
                    aria-label={isOpen ? t('common.closeMenu') : t('common.openMenu')}
                >
                    {isOpen ? (
                        <span className="text-3xl font-bold leading-none">×</span>
                    ) : (
                        <svg
                            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
                <Link to="/contact-us">
                    <PiCallBellThin
                        className="w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-blackrock hover:text-yellow-500 transition-transform duration-300 p-0.3 md:p-0"
                    />
                </Link>

            </div>

            {/* Başlık */}
            <h1
                className="text-l sm:text-3xl md:text-4xl font-extralight text-blackrock select-none md:static absolute left-23 top-4"
                style={{ fontFamily: "'Times New Roman', serif" }}
            >
                {t('common.brand')}
            </h1>

            {/* Bize Ulaşın */}
            <Link to="/contact-us">
                <div className="absolute top-4 left-20 hidden md:flex items-center group rounded-full p-2 cursor-pointer transition">
                    <PiCallBellThin
                        className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blackrock hover:text-yellow-500 transition-transform duration-300"
                    />
                    <span
                        className="text-blackrock text-sm sm:text-base font-medium group-hover:text-yellow-500 transition-colors duration-300 select-none pl-2"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {t('common.contactUs')}
                    </span>
                </div>
            </Link>

            {/* Sağ ikonlar ve dil butonu bir container içinde */}
            <div className="absolute top-4 right-4 flex items-center space-x-1 md:space-x-4 lg:space-x-6">
                {/* Dil değiştirme butonu */}
                <button
                    onClick={toggleLang}
                    className="group rounded-full p-0.3 md:p-2 cursor-pointer transition text-xs md:text-sm font-medium text-blackrock hover:text-yellow-500 whitespace-nowrap flex items-center gap-0.5 md:gap-1"
                    aria-label={t('common.changeLanguage')}
                >
                    {/* Bayrak ikonu */}
                    <Flag
                        code={i18n.language === 'tr' ? 'GB' : 'TR'}
                        style={{ width: 24, height: 16, objectFit: 'cover', borderRadius: 2 }}
                        alt={i18n.language === 'tr' ? 'English' : 'Türkçe'}
                    />
                    {/* Dil Kısaltması */}
                    <span>{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
                </button>

                {/* Instagram */}
                <Link
                    to="https://www.instagram.com/istanbulalyans_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-full p-0.3 md:p-2 cursor-pointer transition"
                >
                    <FaInstagram
                        className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-blackrock hover:text-yellow-500 transition-transform duration-300"
                    />
                </Link>

                {/* Konum */}
                <Link to="/konum" className="group rounded-full p-0.5 md:p-2 cursor-pointer transition">
                    <CiLocationOn
                        className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-blackrock hover:text-yellow-500 transition-transform duration-300"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
