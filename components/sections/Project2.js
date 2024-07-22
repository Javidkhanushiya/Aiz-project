
import ProjectSlider2 from '../slider/ProjectSlider2'

export default function Project2() {
    return (
        <>
            <section className="project-section-2 section-padding fix" id="project">
                <div className="left-shape">
                    <img loading="lazy" src="/assets/img/project/left-shape.png" alt="shape-img" />
                </div>
                <div className="right-shape">
                    <img loading="lazy" src="/assets/img/project/right-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">PROJECTS</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Our Latest Incredible <br /> Client's Projects
                            </h2>
                        </div>
                        <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                            <button className="array-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg></button>
                            <button className="array-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z"/></svg></button>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <ProjectSlider2 />
                    </div>
                </div>
            </section>
        </>
    )
}
