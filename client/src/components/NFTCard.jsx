import './NFTCard.css'

const NFTCard = ({ image, artist, title, price, size = 'normal' }) => {
  return (
    <div className={`nft-card nft-card--${size}`}>
      <div className="nft-card__price">{price} ETH</div>
      <div className="nft-card__image-wrap">
        <img src={image} alt={title} />
      </div>
      <div className="nft-card__info">
        <div>
          <p className="nft-card__artist">{artist}</p>
          <p className="nft-card__title">{title}</p>
        </div>
        <span className="nft-card__eth">{price} ETH</span>
      </div>
    </div>
  )
}

export default NFTCard
