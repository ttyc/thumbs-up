class PraiseButton {
    constructor(score = 0){
        this.score = score;
    }
    addScore(){
        this.score = this.score +1;
    }
    getScore(){
        return this.score
    }

}

export default PraiseButton;