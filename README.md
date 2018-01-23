# affordablehousing
Affordable Housing is a broad subject, with many causes and solutions that vary depending on your location. 
In Durham North Carolina one of the main drivers to a lack of affordable housing is the large economic 
desparity of its citizens. Half of the city is a <a href="https://www.citylab.com/life/2012/07/americas-leading-creative-class-metros/2233/">World class center for research and technology</a>, while the 
other half is a recovering post industrial tobacco and textile mill town.

This is the start of the affordable Housing for Durham website, which is part of Code for Durham. The map was derived from the d3 cartogram, at:

https://github.com/shawnbot/topogram,

and d3 vue examples at:

https://github.com/CorpGlory/d3vue,

with the addition of v-select vue app at:

https://sagalbot.github.io/vue-select/.

The data for the map was obtained from the NC OneMap at:

http://www.nconemap.com/ and from Durham Neighborhood Commpass at:

http://compass.durhamnc.gov/

For information on how to process these datasets go to the datahub data wrangling GitHub repository at:

https://github.com/codefordurham/datahub-dw

This application is currently configured to access data through a Django Rest Framework (DRF). For more information to setup the DRF for this project, go to the datahub-be GitHub repository at:

https://github.com/codefordurham/datahub-be

# Quasar App

> A Quasar project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

