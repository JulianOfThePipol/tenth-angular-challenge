# TenthChallenge

This is a project developed for Applaudo Studios's Trainee Program's Tenth Week Challenge.
It's focus is the testing done on the proyect created on the ninth week. It also has new animations for the page changes, and has the animation of the matdialog modified.
Tests have been added to fullfill all te points required, including tests for the reducers of both ngrx stores. A preloading strategy has also been added.
The project is a SPA for an e-commerce which comunicates with the Api provided in this week's documentation.
The webpage consists in three main parts:

    The login page, which provides a simple form to sign into the app.
    The home or main page, where the user gets all the currently available products, and can click each one to see more information, and a add them to his cart. It also has pagination, and allows the user to filter by a search value or category.
    The cart page, where the user can finish the flow buying the items of his cart, and can also add or eliminate more items, or eliminate the whole cart alltogether.

The application was made using angular material, and ngrx for state management.

//Notes from the previous week on the core proyect.
Due to the API's erratic behaviour, currently there is a bug that upon any cart product quantity variation, or cart removal, the item's stock quantity is reduced.*1 
Eventually, an item can be made to run out of stock without no purchase ever ocurring. The alternatives to these problem where two: 
    Stop using the API alltogether except for data retrieval.
    Or implement the functionalities regardless, even though such implementation would include said bug.
I decided to go with the second option, as in a real world application it is more likely than a simple bug in the API as this would be fixed rather than the whole api to be ditched. 

Irregardless, the APP has a custom error handler, and furthermore the ngrx effect from the cart store function via an optimistic aproach, which, on failure to communicate with the api, rollback to the previous state of the store.

It has been deployed with the hosting solutions written below, but, due to a Cors problem originating in the backend, no requests can be made from the websites. Nevertheless, the deployed applications can be accessed, though their functionality is impaired. 
Github Pages: https://r4vage.github.io/ninth-challenge2/
Heroku: https://ninth-challenge.herokuapp.com/main
Firebase: https://ninth-challenge-367122.web.app/main

*1 These errors ocurr because in order to change an item's quantity, it's necessary to use the "_destroy" property on the request, which, not only eliminates the items from the cart, it also doesnt return the item's quantity to the item's stock. These also happens if a cart is eliminated with products inside of it.
It's also entirely possible to break the backend's cart endpoints by simple adding all items's quantities to a cart and then using the delete method to destroy it. Doing so would render all the /cart endpoints useless.