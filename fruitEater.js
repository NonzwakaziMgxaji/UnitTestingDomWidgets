function FruitEater(){
    var numOfApples = 0;
    var fruitEaten;
    var numOfPears = 0;

    function eat(fruit){
        fruitEaten = fruit;
        if (fruit === "apple"){
            numOfApples++;
        }
        else if( fruit === "pear"){
            numOfPears++;
        }
    }

    function applesEaten(){
        return numOfApples;
    }

    function pearsEaten(){
        return numOfPears;
    }

    return{
        eat,
        applesEaten,
        pearsEaten,
    }
}