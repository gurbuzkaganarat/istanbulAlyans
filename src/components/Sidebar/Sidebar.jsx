import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    const routes = [
        { label: t('navbar.home'), path: '/' },
        { label: t('navbar.about'), path: '/hakkimizda' },
        { label: t('navbar.weddingBend'), path: '/alyans' },
        { label: t('navbar.engagementRing'), path: '/evlilik-yuzugu' },
    ];

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-blackrock bg-opacity-40 transition-opacity z-40
          ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar panel */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <button
                    onClick={onClose}
                    aria-label={t('common.closeMenu')}
                    className="p-4 text-blackrock text-2xl font-bold"
                >
                    ×
                </button>

                <nav
                    className="flex flex-col px-6 space-y-4 font-medium mt-2"
                    style={{ fontFamily: "'Times New Roman', serif" }}
                >
                    {routes.map(({ label, path }) => (
                        <NavLink
                            key={path}
                            to={path}
                            onClick={onClose}
                            end
                            className="relative inline-block group text-lg text-blackrock"
                        >
                            {({ isActive }) => (
                                <>
                                    <span className={isActive ? 'font-bold' : 'font-normal'}>
                                        {label}
                                    </span>
                                    <span
                                        className={`absolute bottom-0 left-0 h-[2px] bg-yellow-400 transition-[width] duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
