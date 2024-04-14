// Write your code here.
import './index.css'
const BannerCard = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`${className} banner-card-lists`}>
      <div>
        <h1 className="banner-heading">{headerText}</h1>
        <p className="description-line">{description}</p>
        <button className="show-more-btn">Show More</button>
      </div>
    </li>
  )
}
export default BannerCard
