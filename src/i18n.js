import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    tr: {
        translation: {
            common: {
                brand: "İSTANBUL ALYANS",
                contactUs: "Bize Ulaşın",
                openMenu: "Menüyü Aç",
                closeMenu: "Menüyü Kapat",
                location: "Konum",
                instagram: "Instagram",
                explore: "KEŞFET",
                noProductsFound: "Ürün bulunamadı.",
                errorFetchingProducts: "Ürünler alınırken hata oluştu."
            },
            navbar: {
                home: "ANA SAYFA",
                about: "HAKKIMIZDA",
                weddingBend: "ALYANS",
                engagementRing: "EVLİLİK YÜZÜĞÜ"
            },
            footer: {
                motto: "Evliliğin zarafeti burada başlar.",
                contact: "İletişim",
                address: "İstanbul, Kapalıçarşı",
                phone1: "+90 541 858 49 18",
                phone2: "0212 527 10 92",
                email: "istanbulalyans@gmail.com",
                copyright: "© 2025 İstanbul Alyans. Tüm hakları saklıdır."
            },
            home: {
                bannerAlt: "İstanbul Alyans Banner",
                description: "1933’ten beri İstanbul Kapalıçarşı’da, zarif alyans ve tektaş tasarımlarıyla kusursuz işçiliği buluşturarak özel koleksiyonlar sunuyoruz.",
                specialRingAlt: "Özel Alyans Koleksiyonları",
                specialRingTitle: "ÖZEL ALYANS KOLEKSİYONLARI",
                specialRingDescription: "İstanbul Alyans’ın zarif alyans koleksiyonları, en değerli metaller ve özenle seçilmiş taşlarla, ustalığın birleşiminden doğar. Altın ve platinden modern tasarımlara uzanan modellerimiz, kadınlar ve erkekler için zamansız şıklığı temsil eder.",
                engagementRingAlt: "Evlilik Yüzüğü",
                engagementRingTitle: "EVLİLİK YÜZÜĞÜ SEÇENEKLERİ",
                engagementRingDescription: "İstanbul Alyans’ın tektaş koleksiyonları, en nadide taşların eşsiz işçilikle buluştuğu özel tasarımlardan oluşur. Parlaklığıyla göz kamaştıran tektaşlarımız, her anınızı unutulmaz kılacak zarafeti ve ışıltıyı parmaklarınıza taşır."
            },
            about: {
                bannerAlt: "İstanbul Alyans Craft",
                title: "HAKKIMIZDA",
                description: "İstanbul Alyans, 1933 yılında Kapalıçarşı’da doğdu. Zarafet, işçilik ve sadeliği birleştirerek nesiller boyu süregelen alyans üretiminde uzmanlaştık. Her parça, aşkın simgesi ve zamana meydan okuyan bir hatıra olarak tasarlanır.",
                masteryTitle: "Ustalık ve Kalite",
                masteryDescription: "Her bir alyansımız, deneyimli ustalarımızın elinde hayat bulur. En kaliteli metallerden, özenle seçilmiş değerli taşlara kadar her aşamada titizlikle çalışırız. Ürünlerimiz bir takı değil, bir ömürlük hikâyedir.",
                valuesTitle: "Değerlerimiz",
                valuesDescription: "İstanbul Alyans’ta, her tasarımımızda müşteri memnuniyeti ve etik kaynak kullanımı en ön plandadır. Kalite ve titizlikle üretim yaparken, zamansız şıklığı özgün tasarımlarla harmanlıyoruz. Bizim için her alyans, sadece bir takı değil; aşkın simgesi ve bir ömür boyunca taşıyacağınız özel bir hatıradır.",
                callToAction: "Bizi daha yakından tanımak ve eşsiz alyanslarımızı keşfetmek için mağazamıza davetlisiniz.",
                seoTitle: "İstanbul Alyans | Hakkımızda",
                seoDescription: "İstanbul Alyans olarak en özel evlilik ve nişan yüzüklerini tasarlıyor, kalite ve ustalığı ön planda tutuyoruz.",
                seoKeywords: "İstanbul Alyans, evlilik yüzüğü, nişan yüzüğü, kaliteli alyans",
            },
            weddingBend: {
                description: "İstanbul Alyans olarak, 14 ayar ve 22 ayar altın seçenekleriyle özenle tasarladığımız alyanslarımızda, en iyi metaller ve en sıra dışı değerli taşları kullanıyoruz. Her biri el işçiliğiyle şekillendirilen bu özel tasarımlar, sadece estetik değil; aynı zamanda ömür boyu sürecek bir bağlılığın da simgesidir. Yeşil, beyaz ve rose altına uzanan geniş yelpazemizle hem kadınlar hem de erkekler için benzersiz alyanslar sunuyoruz. Hayalinizdeki yüzüğü İstanbul Alyans farkıyla keşfedin."
            },
            locationPage: {
                title: "MAĞAZA KONUMU",
                address: "Beyazıt, Kuyumcular Cd. No:7‑11, 34126 Fatih/İstanbul",
                openInGoogleMaps: "Google Maps'te Aç"
            },
            contactPage: {
                title: "BİZE ULAŞIN",
                phone: "Telefon",
                phoneNumbers: ["(+90) 541 858 49 18", "(0212) 527 10 92"],
                email: "E-posta",
                emailAddress: "info@istanbulalyans.com",
                location: "Konum",
                locationLinkText: "Konumumuza Göz Atın"
            },
            weddingBend: {
                title: "Evlilik Yüzüğü",
                description: "İstanbul Alyans olarak, 14 ayar ve 22 ayar altın seçenekleriyle özenle tasarladığımız alyanslarımızda, en iyi metaller ve en sıra dışı değerli taşları kullanıyoruz. Her biri el işçiliğiyle şekillendirilen bu özel tasarımlar, sadece estetik değil; aynı zamanda ömür boyu sürecek bir bağlılığın da simgesidir. Yeşil, beyaz ve rose altına uzanan geniş yelpazemizle hem kadınlar hem de erkekler için benzersiz alyanslar sunuyoruz. Hayalinizdeki yüzüğü İstanbul Alyans farkıyla keşfedin.",
                no_products: "Ürün bulunamadı.",
                seoTitle: "İstanbul Alyans | Nişan Yüzükleri",
                seoDescription: "Özel nişan yüzüğü koleksiyonumuz ile sevginizi en güzel şekilde ifade edin.",
                seoKeywords: "nişan yüzüğü, tektaş, baget, beştaş, İstanbul Alyans"
            },
            engRing: {
                title: "EVLİLİK YÜZÜĞÜ",
                description: "İstanbul Alyans olarak, gerçek aşkı yansıtan özel nişan yüzükleri tasarlıyoruz. Koleksiyonumuzda 14 ayar ve 22 ayar altın seçenekleriyle birbirinden şık modeller sunuyoruz.Tektaş, baget, beştaş ve tamtur gibi farklı modellerimiz, hem klasik hem modern zevklere hitap eder. Her yüzük, özenle seçilen taşlarla ve kaliteli işçilikle hazırlanır.",
                seoTitle: "İstanbul Alyans | Nişan Yüzükleri",
                seoDescription: "Özel nişan yüzüğü koleksiyonumuz ile sevginizi en güzel şekilde ifade edin.",
                seoKeywords: "nişan yüzüğü, tektaş, baget, beştaş, İstanbul Alyans"


            },
            wedBend: {
                title: "ALYANSLAR",
                seoTitle: "İstanbul Alyans | Alyans Koleksiyonu",

            },
            seo: {
                home: {
                    title: "İstanbul Alyans | Evlilik ve Nişan Yüzükleri",
                    description: "İstanbul Alyans: Alyans ve nişan yüzüğü koleksiyonumuzla aşkınızı simgeleyen özel tasarımlar.",
                    keywords: "alyans, nişan yüzüğü, altın alyans, tektaş yüzük, istanbul alyans"
                }
            }

        }
    },
    en: {
        translation: {
            common: {
                brand: "ISTANBUL ALYANS",
                contactUs: "Contact Us",
                openMenu: "Open Menu",
                closeMenu: "Close Menu",
                location: "Location",
                instagram: "Instagram",
                explore: "EXPLORE",
                noProductsFound: "No products found.",
                errorFetchingProducts: "An error occurred while fetching products."
            },
            navbar: {
                home: "HOME",
                about: "ABOUT",
                weddingBend: "WEDDING BAND",
                engagementRing: "ENGAGEMENT RING"
            },
            footer: {
                motto: "The elegance of marriage begins here.",
                contact: "Contact",
                address: "Istanbul, Grand Bazaar",
                phone1: "+90 541 858 49 18",
                phone2: "+90 212 527 10 92",
                email: "istanbulalyans@gmail.com",
                copyright: "© 2025 Istanbul Alyans. All rights reserved."
            },
            home: {
                bannerAlt: "Istanbul Alyans Banner",
                description: "Since 1933, we have been offering special collections that combine elegant wedding bands and solitaire designs with flawless craftsmanship in Istanbul Grand Bazaar.",
                specialRingAlt: "Special Wedding Band Collections",
                specialRingTitle: "SPECIAL WEDDING BAND COLLECTIONS",
                specialRingDescription: "Istanbul Alyans’s elegant wedding band collections are born from the combination of the finest metals and carefully selected stones, representing timeless elegance for both women and men from gold and platinum to modern designs.",
                engagementRingAlt: "Engagement Ring",
                engagementRingTitle: "ENGAGEMENT RING OPTIONS",
                engagementRingDescription: "Istanbul Alyans’s solitaire collections feature special designs with unique craftsmanship of the rarest stones. Our sparkling solitaires bring elegance and brilliance to your fingers that will make every moment unforgettable."
            },
            about: {
                bannerAlt: "Istanbul Alyans Craft",
                title: "ABOUT US",
                description: "Istanbul Alyans was founded in 1933 in the Grand Bazaar. We specialize in wedding band production combining elegance, craftsmanship, and simplicity, continuing through generations. Each piece is designed as a symbol of love and a timeless memory.",
                masteryTitle: "Mastery and Quality",
                masteryDescription: "Each of our wedding bands comes to life in the hands of our experienced artisans. From the finest metals to carefully selected precious stones, we work meticulously at every step. Our products are not just jewelry but a lifelong story.",
                valuesTitle: "Our Values",
                valuesDescription: "At Istanbul Alyans, customer satisfaction and ethical sourcing are paramount in every design. While producing with quality and diligence, we blend timeless elegance with unique designs. For us, every wedding band is not just jewelry; it is a symbol of love and a special memory you will carry for a lifetime.",
                callToAction: "You are invited to visit our store to get to know us better and discover our unique wedding bands.",

                seoTitle: "Istanbul Alyans | About Us",
                seoDescription: "At Istanbul Alyans, we design the most special wedding and engagement rings, prioritizing quality and mastery.",
                seoKeywords: "Istanbul Alyans, wedding ring, engagement ring, quality wedding bands"
            },

            locationPage: {
                title: "STORE LOCATION",
                address: "Beyazıt, Kuyumcular Cd. No:7‑11, 34126 Fatih/Istanbul",
                openInGoogleMaps: "Open in Google Maps"
            },
            contactPage: {
                title: "CONTACT US",
                phone: "Phone",
                phoneNumbers: ["(+90) 541 858 49 18", "(0212) 527 10 92"],
                email: "Email",
                emailAddress: "info@istanbulalyans.com",
                location: "Location",
                locationLinkText: "Check Our Location"
            },
            weddingBend: {
                title: "Wedding Rings",
                description: "At Istanbul Alyans, we carefully design our wedding bands with 14K and 22K gold options, using the finest metals and the most extraordinary precious stones. Each handcrafted design is not only aesthetic but also a symbol of a lifelong commitment. Our wide range includes green, white, and rose gold, offering unique wedding bands for both women and men. Discover the ring of your dreams with the Istanbul Alyans difference.",
                no_products: "No products found.",
                seoTitle: "Istanbul Alyans | Engagement Rings",
                seoDescription: "Express your love beautifully with our exclusive engagement ring collection.",
                seoKeywords: "engagement ring, solitaire, baguette, five-stone, Istanbul Alyans"
            },
            engRing: {
                title: "ENGAGEMENT RING",
                description: "At İstanbul Alyans, we design special engagement rings that reflect true love. Our collection offers a variety of elegant models in 14K and 22K gold options. With styles such as solitaire, baguette, five-stone, and eternity rings, we cater to both classic and modern tastes. Each ring is crafted with carefully selected stones and high-quality workmanship."


            },
            wedBend: {
                title: "WEDDING BEND",
                seoTitle: "Istanbul Alyans | Wedding Bands Collection"

            },
            seo: {
                home: {
                    title: "Istanbul Alyans | Wedding and Engagement Rings",
                    description: "Istanbul Alyans: Discover our exclusive wedding and engagement ring collections designed to symbolize your love.",
                    keywords: "wedding ring, engagement ring, gold ring, solitaire, istanbul alyans"
                }
            }

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'tr',          // Başlangıç dili
        fallbackLng: 'tr',  // Yedek dil
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
