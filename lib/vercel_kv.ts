import { kv } from "@vercel/kv"

const key = "experience:v1.0.0";

export async function getExperience() {
    const res = await kv.get(key);
    return res;
}

export async function setExperience() {
    await kv.set(key, [
        {
            company: "FLIK",
            position: "Software Engineer",
            type: "Full Time",
            date: "Agustus 2023 - Present",
            location: "Jakarta",
            arrangement: "Hybrid",
            company_logo: "https://media.licdn.com/dms/image/C560BAQFHMghlEnXB4Q/company-logo_100_100/0/1642588969598?e=1730332800&v=beta&t=0O5wuKSZy94AxotSLoWKYDQGuzIcpguKCDqGD4Qrmh0",
            description: [
                "Work closely with UI/UX and PM to develop Flik Shopper App",
                "Build Flik Shopper App from scratch that help our Shopper to track their order, manage address, and report order problem",
                "Implement CI/CD using Codemagic to utilize app build, automate unit testing and upload app build to Firebase App Distribution and/or PlayStore/App Store",
                "Working together with BE team to create Payload Contract so we can work in parallel"
            ],
            app_links: [
                "https://play.google.com/store/apps/details?id=id.co.flik.shopper",
                "https://apps.apple.com/id/app/flik-shop-and-get-rewards/id6467357556",
            ],
        }, {
            company: "Majoo Indonesia",
            position: "Mobile Senior Associate",
            type: "Contract",
            date: "May 2022 - July 2023",
            location: "Malang",
            arrangement: "Remote",
            company_logo: "https://media.licdn.com/dms/image/C560BAQE84QeKRSsqpA/company-logo_100_100/0/1630656149379/majoo_indonesia_logo?e=1730332800&v=beta&t=KuFQH0_4XVlEKBI6InmeuEG8IpoT47MS8s2o37bvaVg",
            description: [
                "Implement clean and maintainable code",
                "Reviewing pull/merge request",
                "Build white label consumer apps with Flutter for Majoo merchant so merchant can customize the apps based on their needs. The apps have key features such as order product, view transaction, loyalty point, etc.",
                "Joining Bug Fix Squad that focused on eliminating bugs on Majoo POS app"
            ],
            app_links: [
                "https://play.google.com/store/apps/details?id=com.klopos",
                "https://apps.apple.com/id/app/aplikasi-kasir-wirausaha-majoo/id1642259472",
            ],
        }, {
            company: "PT Solusi Data Madani",
            position: "Mobile Engineer",
            type: "Full Time",
            date: "Jan 2021 - May 2022",
            location: "Pekanbaru",
            arrangement: "On Site",
            company_logo: "https://media.licdn.com/dms/image/C560BAQGi0lcaZJkPew/company-logo_100_100/0/1630664948217?e=1730332800&v=beta&t=-mQhIcxPnuVEVUU0m2nUc2WqzjRCi4WkjvpQ8tYsBBM",
            description: [
                "Develop and maintain Android and iOS app using Flutter",
                "Integrate app with REST API and third-party libraries like Firebase, OneSignal, etc.",
                "Build an app to help digitalize villages called 'Digidesa'"
            ],
            app_links: [
                "https://play.google.com/store/apps/details?id=com.solusidatamadani.digidesa",
                "https://play.google.com/store/apps/details?id=com.solusidatamadani.amanat",
                "https://apps.apple.com/id/app/digidesa/id1577733972",
                "https://apps.apple.com/id/app/amanat/id1584287389"
            ],
        }
    ])
}