
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import "/public/assets/css/main.css"

export default function Error404() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Error 404">
                <section className="Error-section section-padding fix">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="error-items">
                                    <div className="error-image">
                                        <img loading="lazy" src="/assets/img/404.png" alt="img" />
                                    </div>
                                    <h2>
                                        Whoops! This Page got Lost <br />
                                        in converstion
                                    </h2>
                                    <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                        Go Back Home
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}