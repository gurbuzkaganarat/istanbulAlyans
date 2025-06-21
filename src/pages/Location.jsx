// src/pages/Konum.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';

export default function Konum() {
    const { t } = useTranslation();

    const mapSrc =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.16642101840677!2d28.968935326404633!3d41.010754528385874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9915fd43da7%3A0xcafeafa3a25f63ea!2sBeyaz%C4%B1t%2C%20Kuyumcular%20Cd.%2C%2034126%20Fatih%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1750072817451!5m2!1str!2str";

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10">
            {/* Başlık ve alt çizgi */}
            <section className="text-center mb-12">
                <div className="inline-block">
                    <h1
                        className="text-4xl font-serif font-light text-blackrock"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {t('locationPage.title')}
                    </h1>
                    <div className="w-full h-[2px] bg-amber-400 mt-1" />
                </div>
            </section>

            {/* Grid container */}
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-screen-xl mx-auto">
                {/* Harita */}
                <div className="w-full h-[400px] md:h-[600px] overflow-hidden">
                    <iframe
                        title={t('locationPage.title')}
                        src={mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Adres + Buton */}
                <div className="flex flex-col justify-center items-center px-4">
                    <p
                        className="text-lg text-gray-800 flex items-center gap-2 mb-6"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        <CiLocationOn size={24} className="text-yellow-600" />
                        {t('locationPage.address')}
                    </p>

                    <a
                        href="https://www.google.com/maps/place/Beyaz%C4%B1t,+Kuyumcular+Cd.,+34126+Fatih%2F%C4%B0stanbul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-full shadow hover:bg-yellow-600 transition mx-auto"
                    >
                        {t('locationPage.openInGoogleMaps')}
                    </a>
                </div>
            </div>
        </div>
    );
}
