# __Project for the session__

>## __The task was:__
>Write a service for generating random email addresses
>>а) The request must contain the number of addresses to be generated (maximum 20) and parameters
>>>b)Generation parameters: number of words for the name, punctuation mark, allowed numbers, allowed letters

___
## __FRAMEWORK__

![Express](https://expressjs.com/images/express-facebook-share.png)
___

## __APPS for work__
![Postman](https://mms.businesswire.com/media/20230322005274/en/761650/23/postman-logo-vert-2018.jpg)


__The body used to send the request was :__
```JSON
{
//GET     http://localhost:5000/generate-emails

    "count":20, //lim 20
    "allowRandom":true, // false\true
    "numberString":10, // inf
    "firstName":"", 
    "lastName":"",
    "separator":"", // . or _
    "allowNumbers":true, // false\true
    "domen":"" 
}
```
____
## __Function__
The `generateEmails` function is responsible for checking and creating the email address itself

The `generateRandomString` function is responsible for generating random letters.

The `allowNumbers` function is responsible for generating random numbers.

The `domen` is responsible for checking and adding the domain.
___

## __Performed by students__
+ Oleksandr Burdun
+ Oleksandr Kuchera
+ Olesia Darvai
+ Anna-Anastasia Tabaharnyuk
