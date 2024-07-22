import React, { useEffect, useState } from 'react';

export default function Tabs() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState('framework'); // Default active tab

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 667);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCardClick = (tab) => {
        setActiveTab(tab);
    };

    const tabItems = {
        framework: [
            { src: "/assets/img/JQuery-1.png", title: "JQuery", tab: 'framework' },
            { src: "/assets/img/Python-2.png", title: "Python", tab: 'framework' },
            { src: "/assets/img/Adobe-XD-3.png", title: "Adobe XD", tab: 'framework' },
            { src: "/assets/img/Photoshop-4.png", title: "Photoshop", tab: 'framework' },
            { src: "/assets/img/Illustrator-5.png", title: "Illustrator", tab: 'framework' },
        ],
        'front-end': [
            { src: "/assets/img/JQuery-6.png", title: "JQuery", tab: 'front-end' },
            { src: "/assets/img/Bootstrap-7.png", title: "Bootstrap", tab: 'front-end' },
        ],
        'back-end': [
            { src: "/assets/img/Visual-Studio-8.png", title: "Visual Studio", tab: 'back-end' },
            { src: "/assets/img/Next-9.png", title: "Next", tab: 'back-end' },
            { src: "/assets/img/Python-10.png", title: "Python", tab: 'back-end' }
        ],
        mobile: [
            { src: "/assets/img/JQuery-1.png", title: "JQuery", tab: 'mobile' },
            { src: "/assets/img/Python-2.png", title: "Python", tab: 'mobile' },
        ],
        tools: [
            { src: "/assets/img/Adobe-XD-3.png", title: "Adobe XD", tab: 'tools' },
            { src: "/assets/img/Photoshop-4.png", title: "Photoshop", tab: 'tools' },
        ],
        database: [
            { src: "/assets/img/Illustrator-5.png", title: "Illustrator", tab: 'database' },
            { src: "/assets/img/JQuery-6.png", title: "JQuery", tab: 'database' },
        ],
    };

    const renderTabContent = () => {
        const items = tabItems[activeTab];

        if (!items) {
            return <p>No items available for this category.</p>;
        }

        return (
            <div className="tab-main">
                {items.map((item, index) => (
                    <div className="tab-category" key={index} onClick={() => handleCardClick(item.tab)}>
                        <img loading="lazy" src={item.src} alt={item.title} />
                        <h3 className="mt-0">{item.title}</h3>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'framework' ? 'active' : ''}`} id="pills-framework-tab"
                            type="button" role="tab" onClick={() => handleTabClick('framework')}>Frameworks</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'front-end' ? 'active' : ''}`} id="pills-front-end-tab"
                            type="button" role="tab" onClick={() => handleTabClick('front-end')}>Front-End</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'back-end' ? 'active' : ''}`} id="pills-Back-end-tab"
                            type="button" role="tab" onClick={() => handleTabClick('back-end')}>Back-End</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'mobile' ? 'active' : ''}`} id="pills-Mobile-tab"
                            type="button" role="tab" onClick={() => handleTabClick('mobile')}>Mobile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'tools' ? 'active' : ''}`} id="pills-Tools-tab"
                            type="button" role="tab" onClick={() => handleTabClick('tools')}>Tools</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'database' ? 'active' : ''}`} id="pills-Database-tab"
                            type="button" role="tab" onClick={() => handleTabClick('database')}>Database</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane fade ${activeTab === 'framework' ? 'show active' : ''}`} id="pills-framework" role="tabpanel">
                        {renderTabContent()}
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'front-end' ? 'show active' : ''}`} id="pills-front-end" role="tabpanel">
                        {renderTabContent()}
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'back-end' ? 'show active' : ''}`} id="pills-back-end" role="tabpanel">
                        {renderTabContent()}
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'mobile' ? 'show active' : ''}`} id="pills-mobile" role="tabpanel">
                        {renderTabContent()}
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`} id="pills-tools" role="tabpanel">
                        {renderTabContent()}
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'database' ? 'show active' : ''}`} id="pills-database" role="tabpanel">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </>
    )
}
