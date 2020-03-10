function mixPotion(arr){
  let totalVol = 0
  let concentrations = {}
  let finalPotion = {}


  for(let potion of arr){
    totalVol += potion.volume
    for(ingredient in potion.ingredients){
        if(!concentrations.hasOwnProperty(ingredient)){
          concentrations[ingredient] = potion.volume * potion.ingredients[ingredient]
        }else{
         concentrations[ingredient] += potion.volume *  potion.ingredients[ingredient] 
        }
    }
  }

  for(let concentration in concentrations){
    concentrations[concentration] = concentrations[concentration]/totalVol
  }

  finalPotion.volume = totalVol
  finalPotion.ingredients = concentrations



console.log(finalPotion)

}


let ing = [{volume:100, ingredients:{ingred1:50,ingred2:20,ingredA:500}},{volume:300, ingredients:{ingred1:150,ingredA:300,ingredB:950}}]
mixPotion(ing)
// return val should be {volume:400, ingredients: {ingred1:125, ingred2:5, ingredA: 350, ingredB: 712.5}}
