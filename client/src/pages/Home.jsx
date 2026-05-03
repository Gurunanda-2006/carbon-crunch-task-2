import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

const heroCardStack = '/assets/hero-card-stack.png'
const rect1 = '/assets/Rectangle 22742.png'
const rect2 = '/assets/Rectangle 22743.png'
const rect3 = '/assets/Rectangle 22744.png'
const rect4 = '/assets/Rectangle 22745.png'
const rect5 = '/assets/Rectangle 22746.png'
const rect6 = '/assets/Rectangle 22747.png'
const rect7 = '/assets/Rectangle 22748.png'
const ellipse1 = '/assets/Ellipse 434.png'
const ellipse2 = '/assets/Ellipse 435.png'
const ellipse3 = '/assets/Ellipse 436.png'
const ellipse4 = '/assets/Ellipse 437.png'
const ctaImg = '/assets/cta img.png'

const stats = [
  { value: '32k+', label: 'Artwork' },
  { value: '20k+', label: 'Auction' },
  { value: '10k+', label: 'Artist' },
]

const trendingLeft = [
  { title: 'Sebastian', artist: 'Golden Flower', price: '2.3 ETH', img: rect2 },
  { title: 'Javier Miranda', artist: 'Golden Flower', price: '2.3 ETH', img: rect4 },
  { title: 'Milad Fakurian', artist: 'Golden Flower', price: '2.3 ETH', img: rect6 },
]

const trendingRight = [
  { title: 'Sasha Dunae', artist: 'Golden Flower', price: '2.3 ETH', img: rect1 },
  { title: 'Anastasiia Kendrehova', artist: 'Golden Flower', price: '2.3 ETH', img: rect3 },
  { title: 'Erlon Butler', artist: 'Golden Flower', price: '2.3 ETH', img: rect5 },
]

const artists = [
  { name: 'Ferhat Deniz', img: ellipse1 },
  { name: 'Sebastian', img: ellipse2 },
  { name: 'Javier Miranda', img: ellipse3 },
  { name: 'Erlon Butler', img: ellipse4 },
]

const ArtworkItem = ({ item, tall = false }) => (
  <article className={`gallery__piece ${tall ? 'gallery__piece--tall' : ''}`}>
    <div className="gallery__piece-head">
      <div>
        <h3>{item.title}</h3>
        <p>{item.artist}</p>
      </div>
      <span>{item.price}</span>
    </div>
    <Link to="/marketplace" className="gallery__image-link" aria-label={`Open ${item.title}`}>
      <img src={item.img} alt={item.title} />
    </Link>
  </article>
)

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <div className="paint paint--hero" />
        <div className="home__shell hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              <span>Discover Rare</span>
              <span>Collections Of</span>
              <span>Art &amp; NFT&apos;s</span>
            </h1>
            <p className="hero__subtitle">Create, Explore, &amp; Collect Digital Art NFTs</p>
            <Link to="/marketplace" className="button button--primary">Explore</Link>
          </div>

          <div className="hero__visual" aria-label="Featured NFT preview">
            <img className="hero__card-stack" src={heroCardStack} alt="Featured NFT card stack" />
          </div>
        </div>

        <div className="home__shell stats">
          {stats.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="featured">
        <div className="paint paint--featured" />
        <div className="home__shell featured__grid">
          <img className="featured__image" src={rect7} alt="Bitcoin astronaut artwork" />
          <div className="featured__content">
            <h2>Bitcoin Art Work</h2>
            <p className="featured__creator">Created by <span>Jonathan Borba</span></p>
            <div className="featured__meta">
              <div>
                <span>Current Bid</span>
                <strong>1.09 ETH</strong>
                <small>$1,835</small>
              </div>
              <div className="featured__timer" aria-label="Auction countdown">
                <span>Remaining Time</span>
                <strong>18 <b>h</b></strong>
                <strong>57 <b>m</b></strong>
                <strong>14 <b>s</b></strong>
              </div>
            </div>
            <Link to="/marketplace" className="button button--light">View Art Work -&gt;</Link>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="paint paint--gallery-left" />
        <div className="paint paint--gallery-right" />
        <div className="home__shell">
          <div className="gallery__intro">
            <h2>Trending This Week</h2>
            <p>
              Various kinds of artworks that are trending this week. The trend will be reset every week.
            </p>
          </div>

          <div className="gallery__grid">
            <div className="gallery__column">
              {trendingLeft.map((item) => (
                <ArtworkItem item={item} key={item.title} />
              ))}
            </div>
            <div className="gallery__column gallery__column--offset">
              {trendingRight.map((item, index) => (
                <ArtworkItem item={item} tall={index === 2} key={item.title} />
              ))}
              <Link to="/marketplace" className="button button--light gallery__more">Explore More -&gt;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="artists">
        <div className="home__shell">
          <div className="artists__heading">
            <h2>Popular Artists</h2>
            <Link to="/artists" className="button button--light">View all Artists -&gt;</Link>
          </div>
          <div className="artists__list">
            {artists.map((artist) => (
              <Link to="/artists" className="artists__card" key={artist.name}>
                <img src={artist.img} alt={artist.name} />
                <strong>{artist.name}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="community">
        <div className="paint paint--community" />
        <div className="home__shell community__grid">
          <img src={ctaImg} alt="Blue wave NFT artwork" />
          <div className="community__content">
            <h2>Join The Community And Get The Best NFT Collection</h2>
            <Link to="/contact" className="button button--primary">Join Community</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
