import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import bannerImg from '../assets/images/istanbul-alyans-banner-alyans.png';
import { Helmet } from 'react-helmet-async';

export default function WeddingBend() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://istanbulalyans.com/get_products.php?category=alyans')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Ürünler alınırken hata:', err));
    }, []);

    return (
        <div>
            {/* SEO için Helmet */}
            <Helmet>
                <title>{t('wedBend.seoTitle', 'Alyanslar - İstanbul Alyans')}</title>
                <meta name="description" content={t('weddingBend.seoDescription', 'İstanbul Alyans alyans koleksiyonları, 14 ve 22 ayar altın seçenekleri ile özel tasarımlar sunar.')} />
                <meta name="keywords" content={t('weddingBend.seoKeywords', 'alyans, altın alyans, istanbul alyans, evlilik alyansı')} />
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
                <div className="mx-auto text-center max-w-6xl">
                    <div className="inline-block">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl text-blackrock font-medium"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {t('wedBend.title')}
                        </h1>
                        <div className="w-full h-[2px] bg-amber-400 mt-1" />
                    </div>
                    <p
                        className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {t('weddingBend.description')}
                    </p>
                </div>
            </section>

            <div className="w-full h-px bg-amber-400 my-16" />

            {/* Ürünler Galerisi */}
            <section className="bg-gray-50 py-12 px-4 max-w-full mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-8xl mx-auto">
                    {products.length > 0 ? (
                        products.map(product => (
                            <div
                                key={product.id}
                                className="overflow-hidden rounded-lg shadow-lg cursor-pointer group bg-white p-0"
                                style={{ aspectRatio: '5 / 5' }}
                            >
                                <img
                                    src={encodeURI(product.image)}
                                    alt={`${t('navbar.weddingBend')} ${product.id}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full">{t('common.noProductsFound')}</p>
                    )}
                </div>
            </section>
        </div>
    );
}
