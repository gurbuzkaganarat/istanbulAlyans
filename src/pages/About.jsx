import React from "react";
import { useTranslation } from "react-i18next";
import craftImg from "../assets/images/istanbul-alyans-craft.jpg";
import coupleRingImg from "../assets/images/istanbul-alyans-cift-alyans.jpg";
import degerlerImg from "../assets/images/istanbul-alyan-deger.jpg";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function About() {
    const { t } = useTranslation();

    return (
        <div>
            <Helmet>
                <title>{t("about.seoTitle")}</title>
                <meta name="description" content={t("about.seoDescription")} />
                <meta name="keywords" content={t("about.seoKeywords")} />
                <meta name="robots" content="index, follow" />
                {/* Sosyal medya için Open Graph ve Twitter Kartları */}
                <meta property="og:title" content={t("about.seoTitle")} />
                <meta property="og:description" content={t("about.seoDescription")} />
                <meta property="og:type" content="website" />
                {/* İstersen bir resim ekle */}
                <meta property="og:image" content="/path-to-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            {/* Banner */}
            <div className="w-full overflow-hidden">
                <img
                    src={craftImg}
                    alt={t('home.bannerAlt')}
                    className="w-full object-cover h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]"
                />
            </div>

            {/* Başlık ve Açıklama */}
            <section className="mt-8 px-4 py-12">
                <div className="mx-auto text-center">
                    <div className="inline-block">
                        <h1
                            className="text-2xl sm:text-3xl md:text-5xl text-blackrock font-medium"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t("about.title")}
                        </h1>
                        <div className="w-full h-[2px] bg-amber-400 mt-1" />
                    </div>
                    <p
                        className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {t("about.description")}
                    </p>
                </div>
            </section>

            {/* Bölüm Ayırıcısı */}
            <div className="w-full h-px bg-amber-400 my-12 sm:my-16" />

            {/* Ustalık ve Kalite */}
            <section className="w-full bg-gray-50 mt-12 sm:mt-16 py-8 sm:py-16 px-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-[250px] sm:h-[400px] md:h-[600px] order-1 md:order-2 md:pl-0 md:pr-0">
                    <img
                        src={coupleRingImg}
                        alt={t("about.masteryImgAlt")}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 order-2 md:order-1 mt-6 md:mt-0">
                    <div className="text-center max-w-lg">
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-blackrock"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t("about.masteryTitle")}
                        </h2>
                        <p
                            className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t("about.masteryDescription")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Bölüm Ayırıcısı */}
            <div className="w-full h-px bg-amber-400 my-12 sm:my-16" />

            {/* Değerlerimiz */}
            <section className="w-full bg-gray-50 py-8 sm:py-16 px-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-[250px] sm:h-[400px] md:h-[600px] order-1 md:order-1 md:pl-0 md:pr-0">
                    <img
                        src={degerlerImg}
                        alt={t("about.valuesImgAlt")}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 order-2 mt-6 md:mt-0">
                    <div className="text-center max-w-lg">
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-blackrock"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t("about.valuesTitle")}
                        </h2>
                        <p
                            className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t("about.valuesDescription")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Bölüm Ayırıcısı */}
            <div className="w-full h-px bg-amber-400 my-12 sm:my-16" />

            {/* Call to Action */}
            <section className="text-center mt-0 py-8 sm:py-16 px-4 md:px-8" style={{ fontFamily: "'Times New Roman', serif" }}>
                <p className="text-base sm:text-xl text-gray-700 mb-6">
                    {t("about.callToAction")}
                </p>
                <Link to="/konum">
                    <button className="relative group border border-amber-400 text-blackrock font-medium px-8 py-3 w-48 md:w-60 text-center bg-transparent mx-auto block">
                        {t('common.location')}
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                    </button>
                </Link>
            </section>
        </div>
    );
}
