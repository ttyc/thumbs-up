
import PraiseButton from './module/PraiseButton';

class Thumb extends PraiseButton{
    constructor(options){
        let {thumbDom, scoreDom, score} = options;
        super(score);
        this.thumbDom = thumbDom;
        this.scoreDom = scoreDom;
        this.init();
    }
    init(){
        this.bindEvent();
        this.renderScore();
    }
    renderScore(){
        this.scoreDom.innerHTML = this.getScore();
    }
    bindEvent(){
        this.thumbDom.addEventListener("click", ()=>{
            this.addScore();
            this.renderScore()
        }, false)
    }

}

new Thumb({
    thumbDom: document.getElementById("js-thumb"),
    scoreDom: document.getElementById("js-score"),
    score: 0
})