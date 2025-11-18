import { SwiperSlide, Swiper } from "swiper/react"
import CertOne from '@/assets/images/certificates/cert-1.png?w=400;560;720&format=avif;webp;png&quality=80&as=picture'
import CertTwo from '@/assets/images/certificates/cert-2.png?w=400;560;720&format=avif;webp;png&quality=80&as=picture'
import CertThree from '@/assets/images/certificates/cert-3.png?w=400;560;720&format=avif;webp;png&quality=80&as=picture'
import CertFour from '@/assets/images/certificates/cert-4.png?w=400;560;720&format=avif;webp;png&quality=80&as=picture'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import "./CertificatesSection.scss"
import { Pagination } from 'swiper/modules'
import type { Picture } from "vite-imagetools"

type Certificate = {
    href: string
    alt: string
    image: Picture
}

const certificateSizes = '(max-width: 768px) 85vw, 420px'

const certificates: Certificate[] = [
    {
        href: "https://www.coursera.org/account/accomplishments/verify/ZBKRHYMR5LYH",
        alt: "Coursera certificate 4",
        image: CertFour
    },
    {
        href: "https://www.coursera.org/account/accomplishments/verify/UMW9ZLXH2A9B",
        alt: "Coursera certificate 3",
        image: CertThree
    },
    {
        href: "https://www.linkedin.com/learning/certificates/901fd8d18190882849450acd8e921d4eeadae8f9cc8386302c510b494be40027?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B75fgwUSrQ46RNizfkYGlrA%3D%3D",
        alt: "LinkedIn Learning certificate",
        image: CertTwo
    },
    {
        href: "https://www.udemy.com/certificate/UC-IXHB8PXC/",
        alt: "Udemy certificate",
        image: CertOne
    },
]

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
                {certificates.map(({ href, alt, image }) => (
                    <SwiperSlide key={href}>
                        <a className="certificates-section__image-container" href={href}>
                            <picture>
                                {Object.entries(image.sources).map(([format, srcSet]) => (
                                    <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={certificateSizes} />
                                ))}
                                <img
                                    src={image.img.src}
                                    width={image.img.w}
                                    height={image.img.h}
                                    alt={alt}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
