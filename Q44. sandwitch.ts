function makesandwitch (item: string []) {

    console.log("Making your sandwitch with :");

    item.forEach(Element => console.log("- " + Element));

    console.log('Enjoy your sandwitch ! \n ');

}

makesandwitch(['Ham','Cheese','Lettuce']);

makesandwitch(['Turkey','Bacon']);

makesandwitch(['Peanur butter','Jelly']);