Si tu n'arrive pas a faire npm start (Beaucoup d'erreurs de modules):

-> essaye de rajouter ca : 

    --openssl-legacy-provider pour start et build comme ca : 
        "start": "react-scripts --openssl-legacy-provider start"

-> Si ta cette erreur: 

    'React' must be in scope when using JSX

Rajoute ca dans chaque .js file du react:

    import React from 'react'