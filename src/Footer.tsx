import styles from '../styles/Footer.module.scss'
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';


export function Footer() {

    const { t } = useTranslation()

    const socialMediaImages = [
        {
            img_src: "/line.png",
            img_src_hover: "/line-hover.png",
            link: "https://bit.ly/3RfTLWO",
            alt: "line"
        },
        {
            img_src: "/in.png",
            img_src_hover: "/in-hover.png",
            link: "https://bit.ly/3eabAZn",
            alt: "linkedin"
        },
        {
            img_src: "/Telegram.png",
            img_src_hover: "/Telegram-hover.png",
            link: "https://bit.ly/3e5AJ7g",
            alt: "telegram"
        },
        {
            img_src: "/facebook.png",
            img_src_hover: "/facebook-hover.png",
            link: "https://bit.ly/3Riu0oT",
            alt: "facebook"
        },
    ]

    const hotProducts = [
        {
            link: '/cdn',
            label: "CDN",
        },
        {
            link: '/cloudserver',
            label: t("common:cloud_server"),
        },
        {
            link: '/anti-ddos',
            label: "Anti-DDoS"
        },
        {
            link: "/livebroadcast",
            label: t("common:live_broadcast"),
        },
        {
            link: "/mysql",
            label: "MySql"
        },
        {
            link: '/mongodb',
            label: "MongoDB"
        }
    ]

    const aboutUs = [
        {
            link: "/companyprofile",
            label: t("common:company_profile")
        },
        {
            link: "/about",
            label: t("common:company_culture")
        },
        {
            link: "/about",
            label: t("common:user_cases")
        },
        {
            link: "/about",
            label: t("common:certificates")
        },
        {
            link: "/about",
            label: t("common:contact_us")
        }
    ]

    const latestNews = [
        {
            link: "https://blog.hicloud.com.tw",
            label: t("common:blog"),
        },
        {
            link: "https://blog.hicloud.com.tw/blog/events",
            label: t("common:latest_news")
        },
        {
            link: "https://blog.hicloud.com.tw/blog/cloudnews",
            label: t("common:cloud_news")
        }
    ]

    const contactUs = [
        {
            link: "mailto:sales@hicloud.sg",
            label: t("common:singapore_contact", { email: "sales@hicloud.sg" })
        },
        {
            link: "mailto:info@hicloud.com.tw",
            label: t("common:taiwan_contact", { email: "info@hicloud.com.tw" })
        },
        {
            link: "mailto:sales@hicloud.sg",
            label: t("common:shanghai_contact", { email: "sales@hicloud.sg" })
        }
    ]


    return (
        <footer className={styles['footer-content-info']}>
            <div className={styles['footer-content-outermost']}>
                <div style={{ padding: "28px 24px", flex: "2 1 auto" }} className={styles["gradual-change-border"]}>
                    <img src="/logo.png" alt="" style={{ width: "106px" }} />
                    <div className={styles["theme-div"]}>
                        One-Stop Multi-Cloud &<br />Solution Provider
                    </div>

                    <div className={styles["copyright-div"]}>
                        Copyright © 2022 HiCloud
                    </div>

                    <img src="/authentication.png" alt="" style={{ height: "48px", marginTop: "24px" }} />

                    <div style={{ display: "flex" }}>
                        {
                            socialMediaImages.map(imageMetadata => (
                                <a href={imageMetadata.link} target="_blank" className={styles["footer-third-list-img"]} key={imageMetadata.alt}>
                                    <img src={imageMetadata.img_src} alt={imageMetadata.alt} className={styles["footer-third-item-img"]} />
                                    <img src={imageMetadata.img_src_hover} alt={imageMetadata.alt} className={styles["footer-third-item-img-none"]} />
                                </a>
                            ))
                        }
                    </div>

                </div>
                <div className={[styles["footer-popular-products"], styles["gradual-change-border"]].join(" ")}>
                    <div className={styles["pop-title"]}>
                        {t("common:hot_products_and_solutions")}
                    </div>

                    {
                        hotProducts.map((product) => (
                            <div className={styles["content-list"]}>
                                <Link href={product.link}>
                                    <a>
                                        {product.label}
                                    </a>
                                </Link>

                            </div>

                        ))
                    }
                </div>

                <div className={[styles["footer-about-us"], styles["gradual-change-border"]].join(" ")}>
                    <div className={styles["pop-title"]}>
                        {t("common:about_us")}
                    </div>

                    {
                        aboutUs.map(item => (
                            <div className={styles["content-list"]}>
                                <a href={item.link} >
                                    {item.label}
                                </a>
                            </div>

                        ))
                    }
                </div>

                <div className={[styles["footer-latest-news"], styles["gradual-change-border"]].join(" ")}>
                    <div className={styles["pop-title"]}>
                        {t("common:latest_news")}
                    </div>
                    {
                        latestNews.map(item => (
                            <div className={styles["content-list"]}>
                                <Link href={item.link} target="_blank">
                                    <a>
                                        {item.label}
                                    </a>
                                </Link>

                            </div>

                        ))
                    }

                </div>

                <div className={[styles["footer-contact-us"], styles["gradual-change-border"]].join(" ")}>
                    <div className={styles["pop-title"]}>
                        {t("common:contact_us")}
                    </div>
                    {
                        contactUs.map(item => (
                            <div className={styles["content-list"]}>
                                <a href={item.link} target="_blank">{item.label}</a>
                            </div>
                        ))
                    }

                </div>
            </div>
            <hr style={{ border: "1px solid rgba(117, 114, 150, 0.15)" }} />

            <div style={{ maxWidth: "1136px", margin: "auto" }}>
                <div className={styles["footer-payment-text"]}>
                    {t("common:payment_methods")}
                </div>
                <div className={styles['footer-payment-image-group']} >
                    <img src="/visa.png" alt="visa" />
                    <img src="/master-card.png" alt="master-card" />
                    <img src="/pp.png" alt="paypal" />
                    <img src="/tether.png" alt="tether" />
                    <img src="/AlipayZF.png" alt="ali_pay" />
                    <img src="/WeChatZF.png" alt="wechat_pay" />
                </div>
            </div>
            <hr style={{ border: "1px solid rgba(117, 114, 150, 0.15)" }} />
            <div className={styles["footer-new-privacy-policy"]}>
                <Link href={"/userterms"} target="_blank">
                    <a>{t("common:user_terms")}</a>
                </Link>
                &nbsp;&nbsp;
                <Link href={"/privacypolicy"} target="_blank">

                    <a>{t("common:privacy_policy")}</a>
                </Link>
            </div>
        </footer>
    )
}