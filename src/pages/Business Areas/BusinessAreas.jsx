import { Link } from 'react-router-dom';
import './BusinessAreas.css';
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../../components/Footer';

function BusinessAreas() {
    const listRefs = useRef([]);

    useEffect(() => {
        AOS.init({ duration: 1400 });
        // AOS.refresh();
    }, []);

    useEffect(() => {
        if (listRefs.current) {
            ""
        }
        const observers = [];

        listRefs.current.forEach((listRef) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const listItems =
                            listRef.current.querySelectorAll(".list-group-item");
                        listItems.forEach((item) => {
                            item.classList.add("list-item-animation");
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });

            if (listRef.current) {
                observer.observe(listRef.current);
            }
            observers.push(observer);
        });
    }, []);
    return (
        <>
            <div className="BusinessArea">
                <section className="innerBanner">
                    <picture>
                        <img
                            className="responsive-image"
                            src="https://ajantapharma.com/assets/frontend/images/inner_banner/business_areas.jpg"
                            alt="Business Areas"
                            style={{ maxWidth: '100%' }}
                        />

                    </picture>

                    <div className="container">
                        <div className="innerpageTitle">
                            <div className="row h-100">
                                <div className="col-md-6 align-self-center aos-init aos-animate" >
                                    <h1 data-aos="fade-right">Business Areas</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='businesspage'>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="container mt-5">
                                <div className="card p-4 bg-light">
                                    <div className='d-flex flex-column align-items-start'>
                                        <Link to="/businessareas" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Overview</button></Link>
                                        <Link to="/indiabranded" data-aos="fade-right"> <button className='btn btn-warning mb-1'>India-Branding Generics</button></Link>
                                        <Link to="/emergingmarkets" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Emerging Markets - Branded Generics</button></Link>
                                        <Link to="/usgenerics" data-aos="fade-right"> <button className='btn btn-warning mb-1'>USA - Generics</button></Link>
                                        <Link to="/africainstitution" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Africa - Institution Business</button> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <div className="heading-business m-4" data-aos="fade-left">
                                ZenithCare Pharma is a leading pharmaceutical company known for its commitment to innovation and excellence. Our research-driven approach enables us to develop advanced and effective healthcare solutions that improve patient outcomes. With a focus on safety, quality, and sustainability, we strive to create a healthier world for all. Join us as we continue to push the boundaries of medical science and bring hope to millions.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4">
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                we are dedicated to advancing healthcare by leveraging our deep expertise in pharmaceuticals. With a mission to improve lives, we focus on developing high-quality and innovative healthcare solutions. Our team of experts works tirelessly to ensure the safety, efficacy, and accessibility of our products. Driven by compassion and backed by science, we are committed to being a trusted partner in health for communities worldwide.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}

export default BusinessAreas;
