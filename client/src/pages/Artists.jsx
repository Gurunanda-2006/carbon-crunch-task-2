import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Artists.css'

import ellipse1 from '../../public/assets/Ellipse 434.png'
import ellipse2 from '../../public/assets/Ellipse 435.png'
import ellipse3 from '../../public/assets/Ellipse 436.png'
import ellipse4 from '../../public/assets/Ellipse 437.png'

const artists = [
  {
    id: 1,
    name: 'Jonathan Borba',
    role: 'Digital Artist',
    works: 24,
    volume: '18.4 ETH',
    img: ellipse1,
    bio: 'Jonathan blends photography and digital manipulation to create surreal, thought-provoking NFTs that challenge the boundaries of reality.',
  },
  {
    id: 2,
    name: 'Aleksandra Bashova',
    role: 'Visual Artist',
    works: 37,
    volume: '31.2 ETH',
    img: ellipse2,
    bio: 'Aleksandra creates immersive 3D sculptures that explore organic forms, light, and the relationship between nature and technology.',
  },
  {
    id: 3,
    name: 'Javier Miranda',
    role: 'NFT Creator',
    works: 19,
    volume: '14.7 ETH',
    img: ellipse3,
    bio: "Javier's abstract works are defined by bold geometric compositions and a fearless approach to color that electrifies any collection.",
  },
  {
    id: 4,
    name: 'Milad Fakurian',
    role: '3D Art Director',
    works: 42,
    volume: '56.1 ETH',
    img: ellipse4,
    bio: 'Milad is renowned for his hyper-detailed 3D renders that bridge the gap between fine art and cutting-edge digital production.',
  },
]

const Artists = () => {
  return (
    <div className="artists-page">
      <Navbar />

      <section className="artists-hero">
        <div className="artists-hero__glow" />
        <h1 className="artists-hero__title">Top Artists</h1>
        <p className="artists-hero__sub">Discover the creative minds behind the rarest NFTs</p>
      </section>

      <section className="artists-grid-section">
        <div className="artists-grid-section__bg" />
        <div className="artists-grid">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <div className="artist-card__header">
                <div className="artist-card__avatar">
                  <img src={artist.img} alt={artist.name} />
                </div>
                <div className="artist-card__head-info">
                  <p className="artist-card__name">{artist.name}</p>
                  <p className="artist-card__role">{artist.role}</p>
                </div>
              </div>
              <p className="artist-card__bio">{artist.bio}</p>
              <div className="artist-card__stats">
                <div className="artist-card__stat">
                  <span className="artist-card__stat-value">{artist.works}</span>
                  <span className="artist-card__stat-label">Works</span>
                </div>
                <div className="artist-card__stat">
                  <span className="artist-card__stat-value">{artist.volume}</span>
                  <span className="artist-card__stat-label">Volume</span>
                </div>
              </div>
              <button className="artist-card__follow">Follow Artist</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Artists
