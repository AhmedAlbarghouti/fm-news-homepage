import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
	const [heroImgPath, setHeroImgPath] = useState(
		"/images/image-web-3-mobile.jpg"
	);
	useEffect(() => {
		if (window.innerWidth < 1110) {
			setHeroImgPath("/images/image-web-3-mobile.jpg");
		} else {
			setHeroImgPath("/images/image-web-3-desktop.jpg");
		}
	});
	return (
		<div className='Hero'>
			<div className='hero-main'>
				<img className='hero-img' src={heroImgPath} alt='Hero' />

				<div className='hero-details'>
					<h2 className='fs-l fw-800 neutral-dark-blue hero-header'>
						The Bright Future of Web 3.0?
					</h2>

					<div className='hero-right'>
						<p className='fs-body neutral-dark-grayish-blue hero-para'>
							We dive into the next evolution of the web that claims to put the
							power of the platforms back into the hands of the people. But is
							it really fulfilling its promise?
						</p>
						<button className='read-btn fs-body fw-700 neutral-off-white bg-primary-red'>
							READ MORE
						</button>
					</div>
				</div>
			</div>

			<div className='new-article-list bg-neutral-dark-blue'>
				<h3 className='fs-m primary-orange '>New</h3>

				<div className='new-article '>
					<h4 className='fs-s neutral-off-white'>Hydrogen VS Electric Cars</h4>
					<p className='fs-body neutral-grayish-blue'>
						Will hydrogen-fueled cars ever catch up to EVs?
					</p>
				</div>
				<div className='new-article '>
					<h4 className='fs-s neutral-off-white'>
						The Downsides of AI Artistry
					</h4>
					<p className='fs-body neutral-grayish-blue'>
						What are the possible adverse effects of on-demand AI image
						generation?
					</p>
				</div>
				<div className='new-article '>
					<h4 className='fs-s neutral-off-white'>Is VC Funding Drying Up?</h4>
					<p className='fs-body neutral-grayish-blue'>
						Private funding by VC firms is down 50% YOY. We take a look at what
						that means.
					</p>
				</div>
			</div>

			<div className='ranked-article-list'>
				<div className='ranked-article'>
					<img
						src='/images/image-retro-pcs.jpg'
						alt='Retro PCs'
						className='ranked-article-img'
					/>
					<div className='article-details'>
						<h3 className='fs-m neutral-grayish-blue'>01</h3>
						<p className='fs-xs neutral-dark-blue fw-800 ranked-article-title'>
							Reviving Retro PCs
						</p>
						<p className='fs-body neutral-dark-grayish-blue'>
							What happens when old PCs are given modern upgrades?
						</p>
					</div>
				</div>

				<div className='ranked-article'>
					<img
						src='/images/image-top-laptops.jpg'
						alt='Retro PCs'
						className='ranked-article-img'
					/>
					<div className='article-details'>
						<h3 className='fs-m neutral-grayish-blue'>02</h3>
						<p className='fs-xs neutral-dark-blue fw-800 ranked-article-title'>
							Top 10 Laptops of 2022
						</p>
						<p className='fs-body neutral-dark-grayish-blue'>
							Our best picks for various needs and budgets.
						</p>
					</div>
				</div>

				<div className='ranked-article'>
					<img
						src='/images/image-gaming-growth.jpg'
						alt='Retro PCs'
						className='ranked-article-img'
					/>
					<div className='article-details'>
						<h3 className='fs-m neutral-grayish-blue'>03</h3>
						<p className='fs-xs neutral-dark-blue fw-800 ranked-article-title'>
							The Growth of Gaming
						</p>
						<p className='fs-body neutral-dark-grayish-blue'>
							How the pandemic has sparked fresh opportunities.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
