import styles from "../../styles/Company.module.scss";
import useTranslation from "next-translate/useTranslation";

export function CompanyHead() {
    let {t} = useTranslation()

    return (
        <div className={styles.profile_head}>
            <img src="/profile-top-bg-scaled.jpeg" alt="" className={styles.head_img} />

            <div className={styles.head_content}>

                <h1 className={styles.head_h1}>關於我們 ABOUT US</h1>
                <h2 className={styles.head_h2}>HiCloud 專屬於您的數位轉型顧問「飛上雲端，簡單無疑！」</h2>

                <div className={styles.head_bottom_outermost}>
                    <div className={styles.head_bottom_sides} style={{background: "#ffffff"}}></div>

                    <div className={styles.head_bottom}>
                        <div>
                            <img src="/profile-service.png" className={styles.bottom_img} alt="" />
                            <div>
                                <span className={styles.bottom_title}>
                                    365
                                </span>
                                <span style={{ color: "#131340" }}>天</span>
                            </div>
                            <div className={styles.bottom_content}>
                                全年無休的免費諮詢服務
                            </div>
                        </div>

                        <div>
                            <img src="/profile-security.png"
                                className={styles.bottom_img} alt="" />
                            <div style={{ display: "flex" }}>
                                <div className={styles.bottom_title}>200</div>
                                <div style={{ lineHeight: "32px", fontSize: "30px", marginLeft: "4px", fontWeight: "700", color: "#131340" }}>+</div>
                            </div>
                            <div className={styles.bottom_content}>
                                {t("companyprofile:clients")}
                            </div>
                        </div>

                        <div>
                            <img src="/profile-location.png"
                                className={styles.bottom_img} alt="" />
                            <div style={{ fontSize: "34px" }} className={styles.bottom_title}>
                                {t('companyprofile:singapore')}&nbsp;&nbsp;{t("companyprofile:taiwan")}&nbsp;&nbsp;{t("companyprofile:shanghai")}
                            </div>
                            <div className={styles.bottom_content}>
                                {t("companyprofile:office")}
                            </div>
                        </div>

                        <div className={styles.bottom_padding}></div>

                    </div>

                    <div className={styles.head_bottom_sides}></div>
                </div>


            </div>
        </div>
    )
}