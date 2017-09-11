# Challenge DIY : créons notre propre Redux !

On a posé les bases pendant le cours, avec notre fonction `createStore`
et la fonction `reducer`.

## Création du projet

### Modèle

* partir du modèle React v3

* installer les dépendances avec `yarn` et vérifier que tout va bien (hello world)

### Create Store

Créer un dossier `store` dans `app/src` comprenant :
- `createStore.js` : on reprend la fonction du parcours
- `reducer.js` : on reprend la fonction du parcours
- `index.js` : on crée un store, et on l'exporte :

```js
import createStore from './createStore';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

### Subscribe

* Ajouter une méthode `subscribe()` à l'objet renvoyé par `createStore`.
Cette méthode prend en paramètre une fonction. Cette fonction devra être stockée,
pour être éxécutée chaque fois que le state change.

On pourrait peut-être venir stocker cette fonction dans une variable de notre objet… :thinking:

Exemple :

```js
const store = createStore(reducer);

store.subscribe(() => {
  console.log('State has been updated');
});

store.dispatch({ type: 'SWITCH_ON' });
// En console :
// "State has been updated"
```


* La fonction  `subscribe()` peut accepter des fonctions plusieurs fois.

La variable de notre objet qui stockent les fonctions pourrait être un array… :thinking:

```js
const store = createStore(reducer);

store.subscribe(() => {
  console.log('State has been updated');
});
store.subscribe(() => {
  console.log('Hello World!');
});

store.dispatch({ type: 'SWITCH_ON' });
// En console :
// "State has been updated"
// "hello World!"
```


## Application : Sondage

### Fake datas

Créer l'interface suivante :

```
5 votes

___________    ___________
| oui (3) |    | non (2) |
-----------    -----------
```

Le composant `<App />` doit contenir un composant `<Counter />` et deux composants `<Button />`.  
On pourra rajouter une prop au composant Bouton pour déterminer le vote : `<Button name="oui" />`

On peut pour l'instant utiliser des **fausses données**
pour réaliser le découpage en composant et ajouter un peu de style.

### Real datas

Dans nos composants React, on importe le store (`import store from 'src/store'`),
et on utilise `.subscribe()` pour s'abonner aux changements de state.
A chaque change de state, on peut utiliser `this.setState` pour mettre à jour le composant.

Exemple :
```
componentWillMount() {
  store.subscribe(() => {
    const state = store.getState();
    this.setState({ count: state.oui });
  })
}
```

Quand on clique sur un bouton, on doit déclencher une action avec `dispatch`
pour venir incrémenter le compteur de voix. On peut utiliser une action de la
sorte :

```js
const action = {
  type: 'VOTE',
  name: 'oui',
};

store.dispatch(action);
```

Si tout va bien, au clic, le compteur s'incrémente. Magique ! :dizzy:


### Bonus

* Créer des action creators pour incrémenter les compteurs de voix.  
Cf. le test 8 de l'exo d'aujourd'hui.

* Implémenter un `shouldComponentUpdate()` pour ne pas faire un `render()`
quand le state ne change pas.
