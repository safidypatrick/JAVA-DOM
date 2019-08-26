 
   //les nombre de paragraphe 

var paragraph = document.getElementsByTagName("p"); // Tous les titres p
console.log(paragraph.length); // Affiche 59

	// Elément portant l'identifiant "couco"

console.log(document.getElementById ("coucou").textContent);
  
  //l'url vers les quel pionte les trois element de <a>
 
  var lien = document.getElementsByTagName("a");
  var lien3 = lien[2]
  console.log(lien3.href);
  
  //les nombre d'element portent la class compte-moi
{
   let compteMoi = document.getElementsByClassName("compte-moi");
   console.log(compteMoi.length);
}
  // les nombre d'element <li> dans la classe "compte-moi"
   {
   	let li = document.getElementsByClassName("li.compte-moi");
   	console.log(li.length);
   }

   // les nombre d'element li situé dans la liste ordonnés de la class compte-moi
    {
    	let a = document.getElementsByClassName("ol li.compte-moi")
    	console.log(a.length);

    }
     // le premier elmt de la liste dans <div>

     {
     	let a =  document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0];
        console.log(a);

     }


 