import './trending.css';
function Trending() {
    return (
        <div className="gripd">
            <div class="container__trending">
                <div class="container__trending__heading">trending</div>
                <div class="container__trending__image">
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1407,c_limit/3680a9e4-d550-4a89-88d7-002ecb92cf6b/nike-football.png"
                        alt="" class="container__trending__img" />
                </div>
                <div class="container__trending__text">
                    <div class="container__trending__text__title">
                        Find the Right Boots for You.
                    </div>
                    <div class="container__trending__text__heading">
                        Football Boot Guide
                    </div>
                    <div class="container__trending__text__button">
                        <button class="container__trending__text__btn">
                            Explore <i class="fal fa-arrow-right icon__next"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Trending;