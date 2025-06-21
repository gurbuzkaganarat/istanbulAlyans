// src/components/Footer/Footer.jsx
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-blackrock text-white border-t border-gray-200 bottom-0 px-6 py-10 mt-16" style={{ fontFamily: "'Times New Roman', serif" }}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Sol: Firma Adı ve Motto */}
                <div>
                    <h2 className="text-2xl font-light mb-2">İSTANBUL ALYANS</h2>
                    <p className="text-sm text-white-200">
                        {t('footer.motto')}
                    </p>
                </div>

                {/* Sağ: İletişim */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <CiLocationOn size={20} />
                            <span>{t('footer.address')}</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FiSmartphone size={20} />
                            <span>{t('footer.phone1')}</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <TbDeviceLandlinePhone size={20} />
                            <span>{t('footer.phone2')}</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CiMail size={20} />
                            <span>{t('footer.email')}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Alt telif hakkı satırı */}
            <div className="text-center text-xs text-gray-500 mt-10">
                {t('footer.copyright')}
            </div>
        </footer>
    );
};

export default Footer;
