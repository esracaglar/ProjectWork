
# Project1 #

###Pre-requisites & Getting Started###

1. Install NodeJS & Visiual Studio Code
2. Initiate NodeJS Project
3. npm install codeceptjs with WDIO
4. Install git

You can use environmentSetup.bat for quick environment setup:
- Open command prompt as Administrator run environmentSetup.bat
- Environment inludes:
    1. Chocolatey and NodeJS
    2. CodeceptJS, Webdriverio and Selenium-standalone
    3. JDK8
    4. Browsers: Chrome, Opera, Internet Explorer, Mozilla Firefox
   
5. Clone the Project on VS
6. Prepare Selenium Grid - Setup

Open command prompt:  
             1. Make local system as HUB server:    
                 -  ``` java -jar selenium-server-standalone-3.141.59.jar -role hub     ```  
Open new command prompt:              				 
             2. Register node with hub server    
                 - ```java -Dwebdriver.chrome.driver="...\chromedriver.exe" -jar selenium-server-standalone-3.141.59.jar -role node -hub http://localhost:4444/grid/register/```            
             3. Register the node including the path for the executable as shown below.(drivers exist in project)  
                 - ```java  -Dwebdriver.chrome.driver=..\…\chromedriver.exe -jar selenium-server-standalone-3.141.59.jar -role node -hub http://localhost:4444/grid/register -port 7777 -browser browserName=chrome,maxInstances=3```   
             4. You can access the selenium-grid console using: http://localhost:4444/grid/console           
             5. You can run your tests      

7. Open the Project on VS     
     1. Open Terminal    
        1. Execute tests:  
             1. To run all test : ``` npx codeceptjs run  ```
             2. To run specific test: ``` npx codeceptjs run .\tests\detailSearchPage_test.js     ```
             3. To run all suites for all browsers: ``` npx codeceptjs run-multiple --all  ```

=============================================

# Project2 #

###Pre-requisites & Getting Started###

To get started with Frisby.js, add it to your project as a dev dependency:

```npm install frisby --save-dev```

Install Jest
If you don't have Jest installed in your project yet, install it

```npm install --save-dev jest```

#### Run tests ####

To run specific test: ```npm test api_spec.js```

