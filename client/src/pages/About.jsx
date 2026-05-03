import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'

import ellipse1 from '../../public/assets/Ellipse 434.png'
import ellipse2 from '../../public/assets/Ellipse 435.png'
import ellipse3 from '../../public/assets/Ellipse 436.png'
import ellipse4 from '../../public/assets/Ellipse 437.png'

const stats = [
  { value: '240K+', label: 'Artworks' },
  { value: '100K+', label: 'Artists' },
  { value: '$2.4M', label: 'Total Volume' },
  { value: '98%', label: 'Satisfaction' },
]

const team = [
  { name: 'Jonathan Borba', role: 'Founder & CEO', img: ellipse1 },
  { name: 'Aleksandra B.', role: 'Head of Design', img: ellipse2 },
  { name: 'Javier Miranda', role: 'Lead Artist', img: ellipse3 },
  { name: 'Milad Fakurian', role: '3D Art Director', img: ellipse4 },
]

const About = () => {
  return (
    <div className="about">
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__glow" />
        <div className="about-hero__content">
          <p className="about-hero__tag">About NFTme</p>
          <h1 className="about-hero__title">
            The Future of<br />Digital Art
          </h1>
          <p className="about-hero__desc">
            NFTme is the premier marketplace for rare digital collectibles and NFTs.
            We connect the world's finest digital artists with collectors who value
            extraordinary art. Born in 2022, we've built a community around creativity,
            ownership, and the limitless potential of blockchain technology.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="about-stats__glow" />
        {stats.map((s) => (
          <div key={s.label} className="about-stats__item">
            <span className="about-stats__value">{s.value}</span>
            <span className="about-stats__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-mission__glow" />
        <div className="about-mission__inner">
          <div className="about-mission__text">
            <h2 className="about-mission__title">Our Mission</h2>
            <p className="about-mission__desc">
              We believe that art should be accessible, verifiable, and permanent.
              NFTme democratizes the art world by giving every artist — whether established
              or emerging — a global stage. Our platform is built on transparency, fair royalties,
              and cutting-edge technology to ensure artists are always rewarded for their work.
            </p>
            <p className="about-mission__desc">
              For collectors, NFTme offers the confidence of provenance and the thrill of
              owning something truly rare. Every piece on our platform is verified, curated,
              and backed by the immutability of the blockchain.
            </p>
          </div>
          <div className="about-mission__visual">
            <div className="about-mission__orb" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2 className="about-team__title">Meet the Team</h2>
        <p className="about-team__sub">The visionaries behind the platform</p>
        <div className="about-team__grid">
          {team.map((member) => (
            <div key={member.name} className="about-team__card">
              <div className="about-team__avatar">
                <img src={member.img} alt={member.name} />
              </div>
              <p className="about-team__name">{member.name}</p>
              <p className="about-team__role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
