import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../assets/img.jpg'
import imageTwo from '../../assets/image2.jpg'
import imageThree from '../../assets/image3.jpg'


const ImgSlider = () => {
    return (
            <Carousel plugins={[
                'infinite',
                {
                    resolve: autoplayPlugin,
                    options: {
                        interval: 2000,
                     }
                  },
                ]}   
                 animationSpeed={1000}
            >
                    <img src={imageOne} alt="slider1"/>
                    <img src={imageTwo} alt="slider2"/>
                    <img src={imageThree} alt="slider3"/>
            </Carousel>
        
    )
}

export default ImgSlider
