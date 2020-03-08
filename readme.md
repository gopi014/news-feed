# Ionic 5 Angular Basic News feed Example using https://newsapi.org/ with Offline mode
### Objective:

The objective of this application is to create a basic News feed app using Ionic 5 with support for Android ,iOS and Web browsers. This project uses [News api] https://newsapi.org/ for getting the latest news. 

Note: you need to register in the news api to get your api key which is mandatory to fetch data

### Architecture Diagram:

The Architecture diagram for the project is illustrated below.
![Image of Architecture](/images/architecute.png)

### Architecture Overview:
Once the user fires the app using his smartphone or using web browser the application will look for the network status as the user is able to connect to internet or not. For checking the network status `@ionic-native/network` module is used. you can take a look at following link https://ionicframework.com/docs/native/network on implementation of how to check network availablity.

 If the network is available then a rest api call will be made to newsapi to fetch the latest news from newsapi. below is the code snippet to fetch the data from news api.
 ```javascript
        const API_KEY="`YOUR_API_KEY_GOES_HERE`";
        const API_URL="https://newsapi.org/v2/top-headlines";
        export class ApiService {
            getNews(){
                return this.httpClient.get(`${API_URL}?sources=techcrunch&apiKey=${API_KEY}`);
            }
        }    
 ```
After the data is being fetched from the news api it will be synced to local cache for the app to work offline in case of netwoek failure. `@ionic/storage` module is used for the local storage purpose. you can find the details of storage at following link https://ionicframework.com/docs/building/storage.

The complete implementation of the Network and Storage can be find at the below paths 
`src/app/services/network.services.ts`
`src/app/services/api.services.ts`

Once the data is retrived either from the api service or from local cache the data will be presented to the home page where the list of all the news feeds with thumbnail image and title of feed will be displayed. The implementation of this can be found in 
`src/app/home`.

![Image of page1](/images/page1.PNG)

On click on any feed the details of the feed with be displayed .

![Image of page1](/images/page2.PNG)

### Commands:

To run the project locally clone the project and replace the api key with your api key in the api service and execute following command.

    ionic serve
    
To run the project in your mobile make sure you have android studio installed in case of android or xcode in case of ios and excecute the following command.

**Android**

    ionic cordova run android

**iOS**    

    ionic cordova run ios

### Unit Testing:

The unit testing can be executed using the following command

    npm run test


