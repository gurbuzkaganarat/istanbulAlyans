// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import bannerImg from '../assets/images/istanbul-alyans-banner.webp';
import photo1 from '../assets/images/istanbul-alyans-tasarım.webp';
import photo2 from '../assets/images/istanbul-alyans-pırlanta2.webp';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{t('seo.home.title')}</title>
                <meta name="description" content={t('seo.home.description')} />
                <meta name="keywords" content={t('seo.home.keywords')} />
                <meta property="og:title" content={t('seo.home.title')} />
                <meta property="og:description" content={t('seo.home.description')} />
                <meta property="og:image" content="https://istanbulalyans.com/seo-banner.jpg" />
                <meta property="og:url" content="https://istanbulalyans.com/" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* Banner */}
            <div className="w-full overflow-hidden">
                <img
                    src={bannerImg}
                    alt={t('home.bannerAlt')}
                    className="w-full object-cover h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]"
                />
            </div>

            {/* Başlık ve Açıklama */}
            <section className="mt-8 px-4 py-12">
                <div className="mx-auto text-center">
                    <div className="inline-block">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl text-blackrock font-medium"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t('common.brand')}
                        </h2>
                        <div className="w-full h-[2px] bg-yellow-400 mt-[5px]" />
                    </div>
                    <p
                        className="mt-6 text-xl text-gray-600 max-w-xl mx-auto"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {t('home.description')}
                    </p>
                </div>
            </section>

            {/* Bölüm Ayırıcısı */}
            <div className="w-full h-px bg-amber-400 my-16" />

            {/* Zigzag 1: Görsel solda - Yazı sağda */}
            <section className="w-full bg-gray-50 py-8 px-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-[250px] md:h-[600px]">
                    <img
                        src={photo1}
                        alt={t('home.specialRingAlt')}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 mt-6 md:mt-0">
                    <div className="text-center max-w-lg">
                        <h2
                            className="text-xl md:text-2xl text-blackrock font-semibold"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t('home.specialRingTitle')}
                        </h2>
                        <p
                            className="text-gray-600 text-center text-base md:text-lg mt-2 mb-4"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t('home.specialRingDescription')}
                        </p>
                        <Link to="/alyans">
                            <button className="relative group border border-amber-400 text-blackrock font-medium px-6 py-2 w-48 md:w-60 text-center bg-transparent">
                                {t('common.explore')}
                                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bölüm Ayırıcısı */}
            <div className="w-full h-px bg-amber-400 my-16" />

            {/* Zigzag 2: Görsel sağda - Yazı solda */}
            <section className="w-full bg-gray-50 py-8 px-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 mt-6 md:mt-0 order-2 md:order-1">
                    <div className="text-center max-w-lg">
                        <h2
                            className="text-xl md:text-2xl text-blackrock font-semibold"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t('home.engagementRingTitle')}
                        </h2>
                        <p
                            className="text-gray-600 text-center text-base md:text-lg mt-2 mb-4"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t('home.engagementRingDescription')}
                        </p>
                        <Link to="/evlilik-yuzugu">
                            <button className="relative group border border-amber-400 text-blackrock font-medium px-6 py-2 w-48 md:w-60 text-center bg-transparent">
                                {t('common.explore')}
                                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-[250px] md:h-[600px] order-1 md:order-2">
                    <img
                        src={photo2}
                        alt={t('home.engagementRingAlt')}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
}
