import React, { useState, useEffect } from 'react';
import { style } from 'glamor';
import useDimensions from 'react-use-dimensions';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './styles.css'

import Card from './card'

const SliderBar = (props, size) => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [sliderRef, sliderDim] = useDimensions({ liveMeasure: false });
    const [cardDim, setCardDim] = useState(0);
    const [slideMultiplier, setSlideMultiplier] = useState(0);
    const [slideBy, setSlideBy] = useState(0);
    
    const styles = {
        cardStyles: style({
            transform: `translateX(${slideBy}px)`,
            ":hover": {
                transform: `translateX(${slideBy + (cardDim.width/8)}px) scale(1.25)`,
                zIndex: 9,
            },
            ":hover ~.item": {
                transform: `translateX(${slideBy + (cardDim.width/4)}px)`,
            }
        }),
        containerStyles: style({
            ":hover .item": {
                transform: `translateX(${slideBy - (cardDim.width/8)}px)`,
                border: '2px solid lime'
            }
        })
    }

    useEffect(()=> {
        if(sliderDim.width > 1024){
            setCardDim({width: 0.109 * sliderDim.width, height: null});
            setSlideMultiplier(1.45);
        } else if(sliderDim.width > 478) {
            setCardDim({width: 0.197 * sliderDim.width, height: null})
            setSlideMultiplier(1.5);
        } else {
            setCardDim({width: 0.327 * sliderDim.width, height: null})
            setSlideMultiplier(1.3);
        }
    }, [sliderDim.width])

    const nextClick = (e) => {
        e.preventDefault();
        setRight(right => right+1)
        setLeft(left => left + 1)
        if (left>0) {
            setSlideBy(slideBy => slideBy - cardDim.width - 4)
        } else {
            setSlideBy(slideBy => slideBy - cardDim.width*slideMultiplier - 4)
        }
    }

    const prevClick = (e) => {
        e.preventDefault();
        setRight(right => right-1)
        setLeft(left => left - 1)
        if (left > 1) {
            setSlideBy(slideBy => slideBy + cardDim.width + 4)
        } else {
            setSlideBy(slideBy => slideBy + cardDim.width*slideMultiplier + 4)
        }

        
    }

    return (
        <div className={"slider-bar " + props.className} ref={sliderRef}>
            { left && props.arrows? 
                <div className="slider-btn slider-btn-left" onClick={prevClick}> 
                    <div className="slider-btn-arrow" style={{color: 'white'}}>                     
                        <ArrowBackIosIcon className="scale-hover" style={{color: "#ffffff", fontSize: "30" }}/> 
                    </div>
                </div>
                :
                null 
            }

            {
                props.content.map((movie, key)=> 
                    <Card movie={movie} key={key} style={styles} id={key}/>
                )
            }

            { (left + right <= props.content.length + 2) && props.arrows? 
                <button className="slider-btn slider-btn-right" onClick={nextClick}> 
                    <div className="slider-btn-arrow"style={{color: 'white'}}>                      
                        <ArrowForwardIosIcon style={{color: "#ffffff", fontSize: "30"}}/> 
                    </div>
                </button>
                :
                null 
            }
        </div>
    );
    
}

export default SliderBar;