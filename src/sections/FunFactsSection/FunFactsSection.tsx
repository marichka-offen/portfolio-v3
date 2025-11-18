import Fact from "@/components/Fact/Fact"
import type { FactData } from "@/types"
import "./FunFactsSection.scss"
import Book from '@/assets/images/fun-facts/book.png?w=200;320;480&format=avif;webp;png&quality=75&as=picture'
import Game from '@/assets/images/fun-facts/game.png?w=200;320;480&format=avif;webp;png&quality=75&as=picture'
import Movie from '@/assets/images/fun-facts/movie.png?w=200;320;480&format=avif;webp;png&quality=75&as=picture'
import Podcast from '@/assets/images/fun-facts/podcast.png?w=200;320;480&format=avif;webp;png&quality=75&as=picture'
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css'

const facts: FactData[] = [
    {
        title: "Educated",
        description: "Tara Westover",
        image: Book,
        tag: "Favorite Book"
    },
    {
        title: "Cyberpunk 2077",
        description: "A dystopian future where technology and humanity collide",
        image: Game,
        tag: "Favorite Video Game"
    },
    {
        title: "The Secret Life of Walter Mitty",
        description: "A movie about an ordinary man who embarks on an extraordinary adventure",
        image: Movie,
        tag: "Favorite Movie"
    },
    {
        title: "And that's why we drink...",
        description: "A podcast about two friends discussing mysteries, true crime, and lemons",
        image: Podcast,
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
