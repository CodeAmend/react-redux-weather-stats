![](./app-flow.png)

First the App calls => actionCreator

actionCreator returns => and action

action has to go through => middleware

middleware then submits data => Reducer

Reducer calls the 'glue' and creates => global app state

-we can have 0 or even 100 middlewares (totally optional)
