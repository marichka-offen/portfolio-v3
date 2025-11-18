import { SwiperSlide, Swiper } from "swiper/react"
import CertOne from '@/assets/images/certificates/cert-1.png'
import CertTwo from '@/assets/images/certificates/cert-2.png'
import CertThree from '@/assets/images/certificates/cert-3.png'
import CertFour from '@/assets/images/certificates/cert-4.png'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import "./CertificatesSection.scss"
import { Pagination } from 'swiper/modules'

export default function CertificatesSection() {
    return (
        <section id="certificates" className="certificates-section">
            <h2 className="certificates-section__title">Certificates</h2>
            <Swiper
                slidesPerView={1.25}
                spaceBetween={32}
                breakpoints={{
                    500: {
                        slidesPerView: 2.25,
                    }
                }}
                pagination={true}
                modules={[Pagination]}
                className="certificates-section__swiper"
            >
                <SwiperSlide>
                    <a className="certificates-section__image-container" href="https://www.coursera.org/account/accomplishments/verify/ZBKRHYMR5LYH">
                        <img src={CertFour} alt="Certificate 4" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="certificates-section__image-container">
                        <a className="certificates-section__cert-wrapper" href="https://www.coursera.org/account/accomplishments/verify/UMW9ZLXH2A9B">
                            <img src={CertThree} alt="Certificate 3" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="certificates-section__image-container">
                        <a className="certificates-section__cert-wrapper" href="https://www.linkedin.com/learning/certificates/901fd8d18190882849450acd8e921d4eeadae8f9cc8386302c510b494be40027?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B75fgwUSrQ46RNizfkYGlrA%3D%3D">
                            <img src={CertTwo} alt="Certificate 2" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="certificates-section__image-container">
                        <a className="certificates-section__cert-wrapper" href="https://www.udemy.com/certificate/UC-IXHB8PXC/">
                            <img src={CertOne} alt="Certificate 1" />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}