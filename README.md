# affordablehousing
Affordable Housing is a broad subject, with many causes and solutions that vary depending on your location. 
In Durham North Carolina one of the main drivers to a lack of affordable housing is the large economic 
disparity of its citizens. Half of the city is a <a href="https://www.citylab.com/life/2012/07/americas-leading-creative-class-metros/2233/">World class center for research and technology</a>, while the 
other half is a recovering post industrial tobacco and textile mill town. Durham has been ranked one of the 
most <a href="http://opportunityurbanism.org/wp-content/uploads/2017/11/2017-cou-std-of-living-index.pdf">affluent towns in America, based on income and affordability</a>. However, it has also been ranked as having one of the  
<a href="https://www.citylab.com/life/2015/10/how-wage-inequality-is-playing-out-americas-most-successful-cities/409231/">highest wage inequalities in America</a>. 

These contrast create a housing market the has the potential to become
unaffordable for many of its citizens. This is what the Code for Durham Affordable Housing App with focus 
on first. Is the housing in Durham becoming unaffordable for many of its citizens? The App will utilize the cities <a href="http://www.dconc.gov/government/departments-f-z/tax-administration/land-record-gis">property parcel data</a> and <a href="http://compass.durhamnc.gov/">Neighborhood Compass data</a> to analyze the   current and past cost of single family homes, as well as looking at the change in non-owner occupied homes.

The existing maps were derived using <a href="https://d3js.org">d3</a> and <a href="https://vuejs.org">Vue</a>, along with additional resources:

<a href="https://github.com/shawnbot/topogram">D3 Cartogram</a>

<a href="https://github.com/CorpGlory/d3vue">D3 Vue examples</a>

The data for the map was obtained from the <a href="http://www.nconemap.com/">NC OneMap</a>
and the <a href="http://compass.durhamnc.gov/">Durham Neighborhood Compass</a>.

Additional information on how to process these data sets go to the <a href="https://github.com/codefordurham/datahub-dw">datahub data wrangling GitHub repository</a>.

This application is currently configured to access data through a <a href="http://www.django-rest-framework.org/">Django Rest Framework (DRF)</a>. For more information on how to setup and running the DRF for this project, go to the <a href="https://github.com/codefordurham/datahub-be">datahub-be GitHub repository</a>.

Along with Vue, this application also utilizes the <a href="http://quasar-framework.org/">Quasar Framework</a>. 
Further information on how to run setup and run a Quasar project is listed below.

# Quasar App

> A Quasar project

## Build Setup

``` bash
# install quasar globally, then
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

