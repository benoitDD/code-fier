# code-fier
Un bout de code dont je suis moins fier et un autre dont je suis fier.

## Explication de l'exercice (trouvé sur CodinGame)
Le but de ces bouts de code est d'effectuer tous les calculs dans le fichier `calcul.txt`.

La 1er ligne de ce fichier correspond au nombre de calculs. Les lignes suivantes sont les calculs à effectuer, avec une opération et des variables ou constantes.

Une variable est précédée du caractère `$` suivi de l'indice, ou il faut aller chercher la valeur de la variable. (exemple : `$0` c'est la valeur de la 2ème ligne du fichier, `$1` -> 3ème ligne, `$2` -> 4ème ligne, etc )

Donc si on veut calculer : `ADD $58 $28`, il faut additionner la variable `$58` avec `$28`

## Pourquoi je suis fier

La première implémentation de cette exercice (fichier `moinsFier.js`), a été faite en utilisant la récursion. Le problème est lorsque les calculs sont trop récursifs, cela peut lever des erreurs (exemple: StackOverFlow).

Donc, par curiosité, j'ai réalisé une autre implémentation de cet exercice en utilisant le système des événements. (fichier `fier.js`)

Cette implémentation construit son propre gestionnaire d'évènement : `event: {on, emit}`

Un évènement correspond au nom d'une variable. Lorsque l'on souhaite la valeur d'une variable on fait: ` 
```
event.on('$5', valeur => console.log(valeur))
```
Lorsque la variable $5 sera calculée, le gestionnaire appellera le callback avec comme paramètre la valeur de la variable $5.

Si on a résolu un calcul on fait:
```
event.emit('5', valeur_de_$5)
```

C'est à ce moment que le gestionnaire va appeler tous les callbacks qui demandent $5.

## Conclusion
Cette dernière implémentation permet d'éviter la récursion profonde et ainsi éviter les erreurs.



