import Fact from "@/components/Fact/Fact"
import type { FactData } from "@/types"
import "./FunFactsSection.scss"
import Book from '@/assets/images/book.png'
import Game from '@/assets/images/game.png'
import Movie from '@/assets/images/movie.png'
import Podcast from '@/assets/images/podcast.png'
import { SwiperSlide, Swiper } from "swiper/react"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'

const facts: FactData[] = [
    {
        title: "Educated",
        description: "Tara Westover",
        imageUrl: Book,
        tag: "Favorite Book"
    },
    {
        title: "Cyberpunk 2077",
        description: "A dystopian future where technology and humanity collide",
        imageUrl: Game,
        tag: "Favorite Video Game"
    },
    {
        title: "The Secret Life of Walter Mitty",
        description: "A movie about an ordinary man who embarks on an extraordinary adventure",
        imageUrl: Movie,
        tag: "Favorite Movie"
    },
    {
        title: "And that's why we drink...",
        description: "A podcast about two friends discussing mysteries, true crime, and lemons",
        imageUrl: Podcast,
        tag: "Favorite Podcast"
    }
]

export default function FunFactsSection() {
    return (
        <section id="fun-facts" className="fun-facts-section">
            <h2 className="fun-facts-section__title">Fun Facts</h2>
            <ul className="fun-facts-section__facts-list hide-on-mobile">
                {facts.map((fact, index) => (
                    <Fact key={index} {...fact} />
                ))}
            </ul>

            <Swiper
                slidesPerView={1.15}
                spaceBetween={16}
                breakpoints={{
                    500: {
                        slidesPerView: 2.25,
                        spaceBetween: 16
                    }
                }}
                className="hide-on-tablet hide-on-small-desktop hide-on-desktop fun-facts-section__swiper"
            >
                {facts.map((fact, index) => (
                    <SwiperSlide key={index}><Fact {...fact} /></SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}