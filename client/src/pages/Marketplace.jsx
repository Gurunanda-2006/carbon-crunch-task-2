import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Marketplace.css'

const rect1 = '/assets/Rectangle 22742.png'
const rect2 = '/assets/Rectangle 22743.png'
const rect3 = '/assets/Rectangle 22744.png'
const rect4 = '/assets/Rectangle 22745.png'
const rect5 = '/assets/Rectangle 22746.png'
const rect6 = '/assets/Rectangle 22747.png'
const rect7 = '/assets/Rectangle 22748.png'

const nfts = [
  { id: 1, title: 'Bitcoin Art', artist: 'Jonathan Borba', price: '1.09', img: rect1, category: 'Art' },
  { id: 2, title: 'Golden Shapes', artist: 'Javier Miranda', price: '2.3', img: rect2, category: '3D' },
  { id: 3, title: 'Fluid Gold', artist: 'Aleksandra B.', price: '2.3', img: rect3, category: 'Abstract' },
  { id: 4, title: 'Golden Flower', artist: 'Javier Miranda', price: '2.3', img: rect4, category: '3D' },
  { id: 5, title: 'Bloom Head', artist: 'Aleksandra B.', price: '2.3', img: rect5, category: 'Art' },
  { id: 6, title: 'Dark Form', artist: 'Milad Fakurian', price: '2.3', img: rect6, category: 'Abstract' },
  { id: 7, title: 'Red Mask', artist: 'Erlon', price: '2.3', img: rect7, category: '3D' },
]

const categories = ['All', 'Art', '3D', 'Abstract']

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? nfts
    : nfts.filter((nft) => nft.category === activeCategory)

  return (
    <div className="marketplace">
      <Navbar />

      <section className="marketplace-hero">
        <div className="marketplace-hero__glow" />
        <h1 className="marketplace-hero__title">Explore Marketplace</h1>
        <p className="marketplace-hero__sub">Discover and collect extraordinary NFTs</p>
      </section>

      <section className="marketplace-content">
        <div className="marketplace-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`marketplace-filter ${activeCategory === cat ? 'marketplace-filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="marketplace-grid">
          {filtered.map((nft) => (
            <div key={nft.id} className="marketplace-card">
              <div className="marketplace-card__img-wrap">
                <img src={nft.img} alt={nft.title} />
                <div className="marketplace-card__overlay">
                  <button className="marketplace-card__bid-btn">Place Bid</button>
                </div>
              </div>
              <div className="marketplace-card__info">
                <div>
                  <p className="marketplace-card__title">{nft.title}</p>
                  <p className="marketplace-card__artist">{nft.artist}</p>
                </div>
                <div className="marketplace-card__price">
                  <span className="marketplace-card__eth-icon">ETH</span>
                  <span>{nft.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Marketplace
