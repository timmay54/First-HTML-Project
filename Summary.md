1. old site
this was my first html project, ran in 2017, and the idea was just making an html website that could be structured to showcase some favorite photos of show cattle that I had been working on, and later hope to learn javascript and add some elements that would eventually make this project like a browser-based dashboard (different future project). Now, I have switched this to use an Angular website, and now it is used to showcase my computer science based achievements and aide me in the recruitment process.

2. How it was done
Angular has a few different versions, so starting the app was agnular 8.2. I learned how to use the npm package manager, and began looking at examples of some other portfolio websites, searching for themes and other cool Angular packages to try out (in comes ng-snotify and httpClient!)

3. The backend
I had always hoped to learn how to master API's, and building fancy endpoints that can show data, metrics, and create crazy fast displaying information. This googling lead me to SpringBoot, a java based API/backend framework that can be setup using maven or Gradle. 

4. Combining frontend with backend
Starting with ng-snotify, I was hoping to get the "Contact me" section working, where someone could fill out the form on my GitHub pages site and it would send me the information that was filled out, preferrably in JSON format. 

5. More about the backend (mostly architecture)
Why could I cURL POST the api but the website couldn't post? Well, it turns out I needed to restructure my network and architecture. To start with, I used No-IP to create a free domain. From there, I used my router's custom firmware (DD-WRT, its nice) to act as a dynamic update agent for No-IP, so when my External/Public IP changes, it pings No-IP's servers and updates my domain to reflect that. In other words, the domain "timmay54.test.com" would always point to my router, even when my ISP changes the IP of my router (FYI, that is not my real domain, redacting for safety purposes). 

Now that no-ip can point to my router, and my router can staticly lease an internal IP to my server, I setup Traefik (reverse proxy coded in GoLang) to make my service easily exposable from docker. If for some reason large amounts of traffic began hitting my backend, I could easily manually add another duplicate backend container and traefik would loadbalance the requests automatically. After setting up traefik for basic use, it was time to leverage traefik's seamless integration with Lets Encrypt, a service using ACME to create a HTTPS certificate! This will fix the reason why my frontend is blocking the POST request to the backend. It wasn't CORS or CRS related, it was simply being blocked since my frontend is using HTTPS, and the backend is still using HTTP. Lets Encrypt will fix this. 

6. Moving forward, I have used my knowledge of Traefik to host other projects, like my Covid-19 basic transmittance simulation (Mesa + Tornado) and Traefik runs 24/7; I just add more services and routers to it. I also have switched my domain from timmay54.onthewifi.com to timmay54.duckdns.org, and soon I will be buying a regular domain where I can use wildcard rules with Traefik. This would be handy for subdomains, like test.SomeService.timmay54.com, or some other format. 