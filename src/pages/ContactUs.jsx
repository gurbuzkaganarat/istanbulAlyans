import React from 'react';
import { useTranslation } from 'react-i18next';
import { PiPhoneCallThin } from 'react-icons/pi';
import { CiMail, CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ContactUs() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
            {/* Başlık ve alt çizgi */}
            <section className="text-center mb-16">
                <div className="inline-block">
                    <h1
                        className="text-4xl md:text-5xl font-serif font-light text-gray-900"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {t('contactPage.title')}
                    </h1>
                    <div className="w-32 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
                </div>
            </section>

            {/* Kart Düzeni */}
            <div className="grid gap-10 max-w-4xl mx-auto md:grid-cols-3">
                {/* Telefon Kartı */}
                <div className="relative group bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-2xl">
                    <div className="p-4 bg-amber-200 rounded-full mb-6 group-hover:bg-amber-300 transition">
                        <PiPhoneCallThin size={36} className="text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{t('contactPage.phone')}</h3>
                    <a
                        href="tel:+905418584918"
                        className="text-lg text-gray-700 hover:text-amber-500 transition"
                    >
                        <ul>
                            {t('contactPage.phoneNumbers', { returnObjects: true }).map((num, idx) => (
                                <li key={idx}>{num}</li>
                            ))}
                        </ul>
                    </a>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-400 rounded-full mb-4" />
                </div>

                {/* E-posta Kartı */}
                <div className="relative group bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-2xl">
                    <div className="p-4 bg-amber-200 rounded-full mb-6 group-hover:bg-amber-300 transition">
                        <CiMail size={36} className="text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{t('contactPage.email')}</h3>
                    <a
                        href={`mailto:${t('contactPage.emailAddress')}`}
                        className="text-lg text-gray-700 hover:text-amber-500 transition"
                    >
                        {t('contactPage.emailAddress')}
                    </a>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-400 rounded-full mb-4" />
                </div>

                {/* Konum Kartı */}
                <div className="relative group bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-2xl">
                    <div className="p-4 bg-amber-200 rounded-full mb-6 group-hover:bg-amber-300 transition">
                        <CiLocationOn size={36} className="text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{t('contactPage.location')}</h3>
                    <Link
                        to="/konum"
                        className="text-lg text-gray-700 hover:text-amber-500 transition"
                    >
                        {t('contactPage.locationLinkText')}
                    </Link>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-400 rounded-full mb-4" />
                </div>
            </div>
        </div>
    );
}
