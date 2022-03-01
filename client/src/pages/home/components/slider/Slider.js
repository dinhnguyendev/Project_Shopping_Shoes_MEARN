import './slider.css';
import video from '../../../../assets/image/video.mp4';
function Slider() {
    return (
        <div className="slider__width">
            <div id="slider">
                <div class="slider__text">
                    <span class="slider__text__heading">PAN</span>
                    <div class="slider__text__container">Hãy để chúng tôi nâng niu đôi chân của bạn trên từng bước
                        chạy...
                    </div>
                    <div class="slider__text__button"><button class="slider__text_btn">khám phá ngay<i
                        class="fal fa-arrow-right icon__padding"></i></button></div>
                </div>
                <div class="video">
                    <video className='video__item' loop autoplay="autoplay" muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>

    )
};
export default Slider;