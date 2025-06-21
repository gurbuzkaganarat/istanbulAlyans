// src/components/Navbar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import istanbulalyansLogo from '../../assets/images/istanbulalyans-logo.png';

const Navbar = () => {
    const { t } = useTranslation();

    const routes = [
        { label: t('navbar.home'), path: '/' },
        { label: t('navbar.about'), path: '/hakkimizda' },
        { label: t('navbar.weddingBend'), path: '/alyans' },
        { label: t('navbar.engagementRing'), path: '/evlilik-yuzugu' },
    ];

    return (
        <div className="hidden md:block md:sticky md:top-0 md:z-50 bg-white">
            {/* Logo ve çizgiler */}
            <div className="flex items-center justify-center gap-8 py-4">
                <div className="w-[48%] h-[2px] bg-yellow-400" />
                <img
                    src={istanbulalyansLogo}
                    alt="İstanbul Alyans Logo"
                    className="h-20 w-auto"
                />
                <div className="w-[50%] h-[2px] bg-yellow-400" />
            </div>

            {/* Linkler */}
            <nav
                className="flex justify-center space-x-15 text-blackrock font-medium text-lg pb-2"
                aria-label="Ana gezinme"
                style={{ fontFamily: "'Times New Roman', serif" }}
            >
                {routes.map(({ label, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end
                        className="relative inline-block px-2 group"
                    >
                        {({ isActive }) => (
                            <>
                                <span
                                    className={`transition-colors duration-200 ${isActive ? 'text-blackrock' : 'text-blackrock hover:text-blackrock'}`}
                                >
                                    {label}
                                </span>
                                <span
                                    className={
                                        `absolute bottom-0 left-0 h-[2px] bg-yellow-400 transition-[width] duration-300 ` +
                                        (isActive ? 'w-full' : 'w-0 group-hover:w-full')
                                    }
                                />
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
