function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function popupValues () {
  var desc
  if (this.selectvariable.value === 'pop70' && this.selectvariable.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop70)
  }
  else if (this.selectvariable.value === 'nhwht70' && this.selectvariable.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht70)
  }
  else if (this.selectvariable.value === 'pnhwht70' && this.selectvariable.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht70)
  }
  else if (this.selectvariable.value === 'nhblk70' && this.selectvariable.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk70)
  }
  else if (this.selectvariable.value === 'pnhblk70' && this.selectvariable.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk70)
  }
  else if (this.selectvariable.value === 'asian70' && this.selectvariable.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian70)
  }
  else if (this.selectvariable.value === 'pasian70' && this.selectvariable.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian70)
  }
  else if (this.selectvariable.value === 'haw70' && this.selectvariable.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw70)
  }
  else if (this.selectvariable.value === 'phaw70' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw70)
  }
  else if (this.selectvariable.value === 'hu70' && this.selectvariable.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu70)
  }
  else if (this.selectvariable.value === 'vac70' && this.selectvariable.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac70)
  }
  else if (this.selectvariable.value === 'pvac70' && this.selectvariable.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac70)
  }
  else if (this.selectvariable.value === 'ohu70' && this.selectvariable.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu70)
  }
  else if (this.selectvariable.value === 'pohu70' && this.selectvariable.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu70)
  }
  else if (this.selectvariable.value === 'own70' && this.selectvariable.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own70)
  }
  else if (this.selectvariable.value === 'pown70' && this.selectvariable.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown70)
  }
  else if (this.selectvariable.value === 'rent70' && this.selectvariable.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent70)
  }
  else if (this.selectvariable.value === 'prent70' && this.selectvariable.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent70)
  }
  else if (this.selectvariable.value === 'mhmval70a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval70a17)
  }
  else if (this.selectvariable.value === 'mhmval70' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval70)
  }
  else if (this.selectvariable.value === 'mrent70' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent70)
  }
  else if (this.selectvariable.value === 'mrent70a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent70a17)
  }
  else if (this.selectvariable.value === 'hinc70' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc70)
  }
  else if (this.selectvariable.value === 'hinc70a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc70a17)
  }
  else if (this.selectvariable.value === 'ag25up70' && this.selectvariable.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up70)
  }
  else if (this.selectvariable.value === 'hs70' && this.selectvariable.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs70)
  }
  else if (this.selectvariable.value === 'phs70' && this.selectvariable.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs70)
  }
  else if (this.selectvariable.value === 'col70' && this.selectvariable.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col70)
  }
  else if (this.selectvariable.value === 'pcol70' && this.selectvariable.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol70)
  }
  else if (this.selectvariable.value === 'clf70' && this.selectvariable.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf70)
  }
  else if (this.selectvariable.value === 'unemp70' && this.selectvariable.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp70)
  }
  else if (this.selectvariable.value === 'punemp70' && this.selectvariable.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp70)
  }
  else if (this.selectvariable.value === 'pop80' && this.selectvariable.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop80)
  }
  else if (this.selectvariable.value === 'nhwht80' && this.selectvariable.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht80)
  }
  else if (this.selectvariable.value === 'pnhwht80' && this.selectvariable.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht80)
  }
  else if (this.selectvariable.value === 'nhblk80' && this.selectvariable.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk80)
  }
  else if (this.selectvariable.value === 'pnhblk80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk80)
  }
  else if (this.selectvariable.value === 'ntv80' && this.selectvariable.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv80)
  }
  else if (this.selectvariable.value === 'pntv80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv80)
  }
  else if (this.selectvariable.value === 'asian80' && this.selectvariable.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian80)
  }
  else if (this.selectvariable.value === 'pasian80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian80)
  }
  else if (this.selectvariable.value === 'hisp80' && this.selectvariable.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp80)
  }
  else if (this.selectvariable.value === 'phisp80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp80)
  }
  else if (this.selectvariable.value === 'haw80' && this.selectvariable.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw80)
  }
  else if (this.selectvariable.value === 'phaw80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw80)
  }
  else if (this.selectvariable.value === 'hu80' && this.selectvariable.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu80)
  }
  else if (this.selectvariable.value === 'vac80' && this.selectvariable.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac80)
  }
  else if (this.selectvariable.value === 'pvac80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac80)
  }
  else if (this.selectvariable.value === 'ohu80' && this.selectvariable.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu80)
  }
  else if (this.selectvariable.value === 'pohu80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu80)
  }
  else if (this.selectvariable.value === 'own80' && this.selectvariable.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own80)
  }
  else if (this.selectvariable.value === 'pown80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown80)
  }
  else if (this.selectvariable.value === 'rent80' && this.selectvariable.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent80)
  }
  else if (this.selectvariable.value === 'prent80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent80)
  }
  else if (this.selectvariable.value === 'mhmval80' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval80)
  }
  else if (this.selectvariable.value === 'mhmval80a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval80a17)
  }
  else if (this.selectvariable.value === 'mrent80' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent80)
  }
  else if (this.selectvariable.value === 'mrent80a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent80a17)
  }
  else if (this.selectvariable.value === 'hinc80' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc80)
  }
  else if (this.selectvariable.value === 'hinc80a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc80a17)
  }
  else if (this.selectvariable.value === 'hincw80' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw80)
  }
  else if (this.selectvariable.value === 'hincw80a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw80a17)
  }
  else if (this.selectvariable.value === 'hincb80' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb80)
  }
  else if (this.selectvariable.value === 'hincb80a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb80a17)
  }
  else if (this.selectvariable.value === 'hinch80' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch80)
  }
  else if (this.selectvariable.value === 'hinch80a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch80a17)
  }
  else if (this.selectvariable.value === 'hinca80' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca80)
  }
  else if (this.selectvariable.value === 'hinca80a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca80a17)
  }
  else if (this.selectvariable.value === 'ag25up80' && this.selectvariable.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up80)
  }
  else if (this.selectvariable.value === 'hs80' && this.selectvariable.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs80)
  }
  else if (this.selectvariable.value === 'phs80' && this.selectvariable.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs80)
  }
  else if (this.selectvariable.value === 'col80' && this.selectvariable.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col80)
  }
  else if (this.selectvariable.value === 'pcol80' && this.selectvariable.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol80)
  }
  else if (this.selectvariable.value === 'clf80' && this.selectvariable.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf80)
  }
  else if (this.selectvariable.value === 'unemp80' && this.selectvariable.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp80)
  }
  else if (this.selectvariable.value === 'punemp80' && this.selectvariable.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp80)
  }
  else if (this.selectvariable.value === 'pop90' && this.selectvariable.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop90)
  }
  else if (this.selectvariable.value === 'nhwht90' && this.selectvariable.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht90)
  }
  else if (this.selectvariable.value === 'pnhwht90' && this.selectvariable.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht90)
  }
  else if (this.selectvariable.value === 'nhblk90' && this.selectvariable.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk90)
  }
  else if (this.selectvariable.value === 'pnhblk90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk90)
  }
  else if (this.selectvariable.value === 'ntv90' && this.selectvariable.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv90)
  }
  else if (this.selectvariable.value === 'pntv90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv90)
  }
  else if (this.selectvariable.value === 'asian90' && this.selectvariable.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian90)
  }
  else if (this.selectvariable.value === 'pasian90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian90)
  }
  else if (this.selectvariable.value === 'hisp90' && this.selectvariable.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp90)
  }
  else if (this.selectvariable.value === 'phisp90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp90)
  }
  else if (this.selectvariable.value === 'haw90' && this.selectvariable.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw90)
  }
  else if (this.selectvariable.value === 'phaw90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw90)
  }
  else if (this.selectvariable.value === 'hu90' && this.selectvariable.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu90)
  }
  else if (this.selectvariable.value === 'vac90' && this.selectvariable.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac90)
  }
  else if (this.selectvariable.value === 'pvac90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac90)
  }
  else if (this.selectvariable.value === 'ohu90' && this.selectvariable.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu90)
  }
  else if (this.selectvariable.value === 'pohu90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu90)
  }
  else if (this.selectvariable.value === 'own90' && this.selectvariable.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own90)
  }
  else if (this.selectvariable.value === 'pown90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown90)
  }
  else if (this.selectvariable.value === 'rent90' && this.selectvariable.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent90)
  }
  else if (this.selectvariable.value === 'prent90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent90)
  }
  else if (this.selectvariable.value === 'mhmval90' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval90)
  }
  else if (this.selectvariable.value === 'mhmval90a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval90a17)
  }
  else if (this.selectvariable.value === 'mrent90' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent90)
  }
  else if (this.selectvariable.value === 'mrent90a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent90a17)
  }
  else if (this.selectvariable.value === 'hinc90' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc90)
  }
  else if (this.selectvariable.value === 'hinc90a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc90a17)
  }
  else if (this.selectvariable.value === 'hincw90' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw90)
  }
  else if (this.selectvariable.value === 'hincw90a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw90a17)
  }
  else if (this.selectvariable.value === 'hincb90' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb90)
  }
  else if (this.selectvariable.value === 'hincb90a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb90a17)
  }
  else if (this.selectvariable.value === 'hinch90' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch90)
  }
  else if (this.selectvariable.value === 'hinch90a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch90a17)
  }
  else if (this.selectvariable.value === 'hinca90' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca90)
  }
  else if (this.selectvariable.value === 'hinca90a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca90a17)
  }
  else if (this.selectvariable.value === 'ag25up90' && this.selectvariable.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up90)
  }
  else if (this.selectvariable.value === 'hs90' && this.selectvariable.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs90)
  }
  else if (this.selectvariable.value === 'phs90' && this.selectvariable.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs90)
  }
  else if (this.selectvariable.value === 'col90' && this.selectvariable.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col90)
  }
  else if (this.selectvariable.value === 'pcol90' && this.selectvariable.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol90)
  }
  else if (this.selectvariable.value === 'clf90' && this.selectvariable.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf90)
  }
  else if (this.selectvariable.value === 'unemp90' && this.selectvariable.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp90)
  }
  else if (this.selectvariable.value === 'punemp90' && this.selectvariable.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp90)
  }
  else if (this.selectvariable.value === 'pop00' && this.selectvariable.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop00)
  }
  else if (this.selectvariable.value === 'nhwht00' && this.selectvariable.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht00)
  }
  else if (this.selectvariable.value === 'pnhwht00' && this.selectvariable.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht00)
  }
  else if (this.selectvariable.value === 'nhblk00' && this.selectvariable.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk00)
  }
  else if (this.selectvariable.value === 'pnhblk00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk00)
  }
  else if (this.selectvariable.value === 'ntv00' && this.selectvariable.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv00)
  }
  else if (this.selectvariable.value === 'pntv00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv00)
  }
  else if (this.selectvariable.value === 'asian00' && this.selectvariable.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian00)
  }
  else if (this.selectvariable.value === 'pasian00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian00)
  }
  else if (this.selectvariable.value === 'hisp00' && this.selectvariable.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp00)
  }
  else if (this.selectvariable.value === 'phisp00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp00)
  }
  else if (this.selectvariable.value === 'haw00' && this.selectvariable.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw00)
  }
  else if (this.selectvariable.value === 'phaw00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw00)
  }
  else if (this.selectvariable.value === 'hu00' && this.selectvariable.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu00)
  }
  else if (this.selectvariable.value === 'vac00' && this.selectvariable.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac00)
  }
  else if (this.selectvariable.value === 'pvac00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac00)
  }
  else if (this.selectvariable.value === 'ohu00' && this.selectvariable.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu00)
  }
  else if (this.selectvariable.value === 'pohu00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu00)
  }
  else if (this.selectvariable.value === 'own00' && this.selectvariable.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own00)
  }
  else if (this.selectvariable.value === 'pown00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown00)
  }
  else if (this.selectvariable.value === 'rent00' && this.selectvariable.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent00)
  }
  else if (this.selectvariable.value === 'prent00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent00)
  }
  else if (this.selectvariable.value === 'mhmval00' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval00)
  }
  else if (this.selectvariable.value === 'mhmval00a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval00a17)
  }
  else if (this.selectvariable.value === 'mrent00' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent00)
  }
  else if (this.selectvariable.value === 'mrent00a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent00a17)
  }
  else if (this.selectvariable.value === 'hinc00' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc00)
  }
  else if (this.selectvariable.value === 'hinc00a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc00a17)
  }
  else if (this.selectvariable.value === 'hincw00' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw00)
  }
  else if (this.selectvariable.value === 'hincw00a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw00a17)
  }
  else if (this.selectvariable.value === 'hincb00' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb00)
  }
  else if (this.selectvariable.value === 'hincb00a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb00a17)
  }
  else if (this.selectvariable.value === 'hinch00' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch00)
  }
  else if (this.selectvariable.value === 'hinch00a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch00a17)
  }
  else if (this.selectvariable.value === 'hinca00' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca00)
  }
  else if (this.selectvariable.value === 'hinca00a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca00a17)
  }
  else if (this.selectvariable.value === 'meansp9800' && this.selectvariable.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.meansp9800)
  }
  else if (this.selectvariable.value === 'minsp9800' && this.selectvariable.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.minsp9800)
  }
  else if (this.selectvariable.value === 'maxsp9800' && this.selectvariable.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.maxsp9800)
  }
  else if (this.selectvariable.value === 'mediansp9800' && this.selectvariable.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.mediansp9800)
  }
  else if (this.selectvariable.value === 'stddevsp9800' && this.selectvariable.type === 'trts') {
    desc = 'Standard Deviation of Sale Price for Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.stddevsp9800)
  }
  else if (this.selectvariable.value === 'totsp9800' && this.selectvariable.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.totsp9800)
  }
  else if (this.selectvariable.value === 'nums9800' && this.selectvariable.type === 'trts') {
    desc = 'Number of Homes Sold: ' + numberWithCommas(this.currentDurhamtr.nums9800)
  }
  else if (this.selectvariable.value === 'meansp9800a17' && this.selectvariable.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.meansp9800a17)
  }
  else if (this.selectvariable.value === 'minsp9800a17' && this.selectvariable.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.minsp9800a17)
  }
  else if (this.selectvariable.value === 'maxsp9800a17' && this.selectvariable.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.maxsp9800a17)
  }
  else if (this.selectvariable.value === 'mediansp9800a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mediansp9800a17)
  }
  else if (this.selectvariable.value === 'totsp9800a17' && this.selectvariable.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.totsp9800a17)
  }
  else if (this.selectvariable.value === 'pir9800' && this.selectvariable.type === 'trts') {
    desc = 'Price Income Ratio: ' + numberWithCommas(this.currentDurhamtr.pir9800)
  }
  else if (this.selectvariable.value === 'ag25up00' && this.selectvariable.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up00)
  }
  else if (this.selectvariable.value === 'hs00' && this.selectvariable.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs00)
  }
  else if (this.selectvariable.value === 'phs00' && this.selectvariable.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs00)
  }
  else if (this.selectvariable.value === 'col00' && this.selectvariable.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col00)
  }
  else if (this.selectvariable.value === 'pcol00' && this.selectvariable.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol00)
  }
  else if (this.selectvariable.value === 'clf00' && this.selectvariable.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf00)
  }
  else if (this.selectvariable.value === 'unemp00' && this.selectvariable.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp00)
  }
  else if (this.selectvariable.value === 'punemp00' && this.selectvariable.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp00)
  }
  else if (this.selectvariable.value === 'pop10' && this.selectvariable.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop10)
  }
  else if (this.selectvariable.value === 'nhwht10' && this.selectvariable.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht10)
  }
  else if (this.selectvariable.value === 'pnhwht10' && this.selectvariable.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht10)
  }
  else if (this.selectvariable.value === 'nhblk10' && this.selectvariable.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk10)
  }
  else if (this.selectvariable.value === 'pnhblk10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk10)
  }
  else if (this.selectvariable.value === 'ntv10' && this.selectvariable.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv10)
  }
  else if (this.selectvariable.value === 'pntv10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv10)
  }
  else if (this.selectvariable.value === 'asian10' && this.selectvariable.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian10)
  }
  else if (this.selectvariable.value === 'pasian10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian10)
  }
  else if (this.selectvariable.value === 'hisp10' && this.selectvariable.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp10)
  }
  else if (this.selectvariable.value === 'phisp10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp10)
  }
  else if (this.selectvariable.value === 'haw10' && this.selectvariable.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw10)
  }
  else if (this.selectvariable.value === 'phaw10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw10)
  }
  else if (this.selectvariable.value === 'hu10' && this.selectvariable.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu10)
  }
  else if (this.selectvariable.value === 'vac10' && this.selectvariable.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac10)
  }
  else if (this.selectvariable.value === 'pvac10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac10)
  }
  else if (this.selectvariable.value === 'ohu10' && this.selectvariable.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu10)
  }
  else if (this.selectvariable.value === 'pohu10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu10)
  }
  else if (this.selectvariable.value === 'own10' && this.selectvariable.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own10)
  }
  else if (this.selectvariable.value === 'pown10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown10)
  }
  else if (this.selectvariable.value === 'rent10' && this.selectvariable.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent10)
  }
  else if (this.selectvariable.value === 'prent10' && this.selectvariable.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent10)
  }
  else if (this.selectvariable.value === 'mhmval12' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval12)
  }
  else if (this.selectvariable.value === 'mhmval12a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval12a17)
  }
  else if (this.selectvariable.value === 'mrent12' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent12)
  }
  else if (this.selectvariable.value === 'mrent12a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent12a17)
  }
  else if (this.selectvariable.value === 'hinc12' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc12)
  }
  else if (this.selectvariable.value === 'hinc12a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc12a17)
  }
  else if (this.selectvariable.value === 'hincw12' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw12)
  }
  else if (this.selectvariable.value === 'hincw12a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw12a17)
  }
  else if (this.selectvariable.value === 'hincb12' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb12)
  }
  else if (this.selectvariable.value === 'hincb12a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb12a17)
  }
  else if (this.selectvariable.value === 'hinch12' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch12)
  }
  else if (this.selectvariable.value === 'hinch12a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch12a17)
  }
  else if (this.selectvariable.value === 'hinca12' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca12)
  }
  else if (this.selectvariable.value === 'hinca12a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca12a17)
  }
  else if (this.selectvariable.value === 'meansp0709' && this.selectvariable.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.meansp0709)
  }
  else if (this.selectvariable.value === 'minsp0709' && this.selectvariable.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.minsp0709)
  }
  else if (this.selectvariable.value === 'maxsp0709' && this.selectvariable.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.maxsp0709)
  }
  else if (this.selectvariable.value === 'mediansp0709' && this.selectvariable.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.mediansp0709)
  }
  else if (this.selectvariable.value === 'stddevsp0709' && this.selectvariable.type === 'trts') {
    desc = 'Standard Deviation of Sale Price for Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.stddevsp0709)
  }
  else if (this.selectvariable.value === 'totsp0709' && this.selectvariable.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.totsp0709)
  }
  else if (this.selectvariable.value === 'nums0709' && this.selectvariable.type === 'trts') {
    desc = 'Number of Homes Sold: ' + numberWithCommas(this.currentDurhamtr.nums0709)
  }
  else if (this.selectvariable.value === 'meansp0709a17' && this.selectvariable.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.meansp0709a17)
  }
  else if (this.selectvariable.value === 'minsp0709a17' && this.selectvariable.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.minsp0709a17)
  }
  else if (this.selectvariable.value === 'maxsp0709a17' && this.selectvariable.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.maxsp0709a17)
  }
  else if (this.selectvariable.value === 'mediansp0709a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mediansp0709a17)
  }
  else if (this.selectvariable.value === 'totsp0709a17' && this.selectvariable.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.totsp0709a17)
  }
  else if (this.selectvariable.value === 'pir0712' && this.selectvariable.type === 'trts') {
    desc = 'Price Income Ratio: ' + numberWithCommas(this.currentDurhamtr.pir0712)
  }
  else if (this.selectvariable.value === 'ag25up12' && this.selectvariable.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up12)
  }
  else if (this.selectvariable.value === 'hs12' && this.selectvariable.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs12)
  }
  else if (this.selectvariable.value === 'phs12' && this.selectvariable.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs12)
  }
  else if (this.selectvariable.value === 'col12' && this.selectvariable.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col12)
  }
  else if (this.selectvariable.value === 'pcol12' && this.selectvariable.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol12)
  }
  else if (this.selectvariable.value === 'clf12' && this.selectvariable.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf12)
  }
  else if (this.selectvariable.value === 'unemp12' && this.selectvariable.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp12)
  }
  else if (this.selectvariable.value === 'punemp12' && this.selectvariable.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp12)
  }
  else if (this.selectvariable.value === 'pccol0012' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in College Graduates: ' + numberWithCommas(this.currentDurhamtr.pccol0012)
  }
  else if (this.selectvariable.value === 'pcnhwht0010' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in White Population: ' + numberWithCommas(this.currentDurhamtr.pcnhwht0010)
  }
  else if (this.selectvariable.value === 'pcnhblk0010' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Black Population: ' + numberWithCommas(this.currentDurhamtr.pcnhblk0010)
  }
  else if (this.selectvariable.value === 'pcasian0010' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Asian Population: ' + numberWithCommas(this.currentDurhamtr.pcasian0010)
  }
  else if (this.selectvariable.value === 'pchisp0010' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.pchisp0010)
  }
  else if (this.selectvariable.value === 'cmhmval0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmhmval0012a17)
  }
  else if (this.selectvariable.value === 'pcmhmval0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmhmval0012a17)
  }
  else if (this.selectvariable.value === 'cmrent0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmrent0012a17)
  }
  else if (this.selectvariable.value === 'pcmrent0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmrent0012a17)
  }
  else if (this.selectvariable.value === 'chinc0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinc0012a17)
  }
  else if (this.selectvariable.value === 'chincw0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincw0012a17)
  }
  else if (this.selectvariable.value === 'chincb0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincb0012a17)
  }
  else if (this.selectvariable.value === 'chinca0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinca0012a17)
  }
  else if (this.selectvariable.value === 'chinch0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinch0012a17)
  }
  else if (this.selectvariable.value === 'cmeansp0009a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmeansp0009a17)
  }
  else if (this.selectvariable.value === 'cmediansp0009a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmediansp0009a17)
  }
  else if (this.selectvariable.value === 'pchinc0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinc0012a17)
  }
  else if (this.selectvariable.value === 'pchincw0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincw0012a17)
  }
  else if (this.selectvariable.value === 'pchincb0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincb0012a17)
  }
  else if (this.selectvariable.value === 'pchinca0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinca0012a17)
  }
  else if (this.selectvariable.value === 'pchinch0012a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinch0012a17)
  }
  else if (this.selectvariable.value === 'pcmeansp0009a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmeansp0009a17)
  }
  else if (this.selectvariable.value === 'pcmediansp0009a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmediansp0009a17)
  }
  else if (this.selectvariable.value === 'pop16' && this.selectvariable.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop16)
  }
  else if (this.selectvariable.value === 'nhwht16' && this.selectvariable.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht16)
  }
  else if (this.selectvariable.value === 'pnhwht16' && this.selectvariable.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht16)
  }
  else if (this.selectvariable.value === 'nhblk16' && this.selectvariable.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk16)
  }
  else if (this.selectvariable.value === 'pnhblk16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk16)
  }
  else if (this.selectvariable.value === 'ntv16' && this.selectvariable.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv16)
  }
  else if (this.selectvariable.value === 'pntv16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv16)
  }
  else if (this.selectvariable.value === 'asian16' && this.selectvariable.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian16)
  }
  else if (this.selectvariable.value === 'pasian16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian16)
  }
  else if (this.selectvariable.value === 'haw16' && this.selectvariable.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw16)
  }
  else if (this.selectvariable.value === 'phaw16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw16)
  }
  else if (this.selectvariable.value === 'oth16' && this.selectvariable.type === 'trts') {
    desc = 'Total Other Population: ' + numberWithCommas(this.currentDurhamtr.oth16)
  }
  else if (this.selectvariable.value === 'poth16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Other Population: ' + numberWithCommas(this.currentDurhamtr.poth16)
  }
  else if (this.selectvariable.value === 'twomr16' && this.selectvariable.type === 'trts') {
    desc = 'Total Two or More Races Population: ' + numberWithCommas(this.currentDurhamtr.twomr16)
  }
  else if (this.selectvariable.value === 'ptwomr16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Two or More Races Population: ' + numberWithCommas(this.currentDurhamtr.ptwomr16)
  }
  else if (this.selectvariable.value === 'hisp16' && this.selectvariable.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp16)
  }
  else if (this.selectvariable.value === 'phisp16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp16)
  }
  else if (this.selectvariable.value === 'pcnhwht0016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in White Population: ' + numberWithCommas(this.currentDurhamtr.pcnhwht0016)
  }
  else if (this.selectvariable.value === 'pcnhblk0016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Black Population: ' + numberWithCommas(this.currentDurhamtr.pcnhblk0016)
  }
  else if (this.selectvariable.value === 'pcasian0016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Asian Population: ' + numberWithCommas(this.currentDurhamtr.pcasian0016)
  }
  else if (this.selectvariable.value === 'pchisp0016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.pchisp0016)
  }
  else if (this.selectvariable.value === 'pcnhwht1016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in White Population: ' + numberWithCommas(this.currentDurhamtr.pcnhwht1016)
  }
  else if (this.selectvariable.value === 'pcnhblk1016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Black Population: ' + numberWithCommas(this.currentDurhamtr.pcnhblk1016)
  }
  else if (this.selectvariable.value === 'pcasian1016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Asian Population: ' + numberWithCommas(this.currentDurhamtr.pcasian1016)
  }
  else if (this.selectvariable.value === 'pchisp1016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.pchisp1016)
  }
  else if (this.selectvariable.value === 'hu16' && this.selectvariable.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu16)
  }
  else if (this.selectvariable.value === 'ohu16' && this.selectvariable.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu16)
  }
  else if (this.selectvariable.value === 'pohu16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu16)
  }
  else if (this.selectvariable.value === 'vac16' && this.selectvariable.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac16)
  }
  else if (this.selectvariable.value === 'pvac16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac16)
  }
  else if (this.selectvariable.value === 'own16' && this.selectvariable.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own16)
  }
  else if (this.selectvariable.value === 'pown16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown16)
  }
  else if (this.selectvariable.value === 'rent16' && this.selectvariable.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent16)
  }
  else if (this.selectvariable.value === 'prent16' && this.selectvariable.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent16)
  }
  else if (this.selectvariable.value === 'mhmval16' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval16)
  }
  else if (this.selectvariable.value === 'mrent16' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent16)
  }
  else if (this.selectvariable.value === 'mhmval16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval16a17)
  }
  else if (this.selectvariable.value === 'mrent16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent16a17)
  }
  else if (this.selectvariable.value === 'cmhmval0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmhmval0016a17)
  }
  else if (this.selectvariable.value === 'pcmhmval0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmhmval0016a17)
  }
  else if (this.selectvariable.value === 'cmrent0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmrent0016a17)
  }
  else if (this.selectvariable.value === 'pcmrent0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmrent0016a17)
  }
  else if (this.selectvariable.value === 'cmhmval1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmhmval1216a17)
  }
  else if (this.selectvariable.value === 'pcmhmval1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmhmval1216a17)
  }
  else if (this.selectvariable.value === 'cmrent1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmrent1216a17)
  }
  else if (this.selectvariable.value === 'pcmrent1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmrent1216a17)
  }
  else if (this.selectvariable.value === 'hinc16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc16)
  }
  else if (this.selectvariable.value === 'hinc16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc16a17)
  }
  else if (this.selectvariable.value === 'hincw16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw16)
  }
  else if (this.selectvariable.value === 'hincw16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw16a17)
  }
  else if (this.selectvariable.value === 'hincb16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb16)
  }
  else if (this.selectvariable.value === 'hincb16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb16a17)
  }
  else if (this.selectvariable.value === 'hincn16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Natives: ' + numberWithCommas(this.currentDurhamtr.hincn16)
  }
  else if (this.selectvariable.value === 'hincn16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Natives, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincn16a17)
  }
  else if (this.selectvariable.value === 'hinca16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca16)
  }
  else if (this.selectvariable.value === 'hinca16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca16a17)
  }
  else if (this.selectvariable.value === 'hincp16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hawaiians: ' + numberWithCommas(this.currentDurhamtr.hincp16)
  }
  else if (this.selectvariable.value === 'hincp16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hawaiians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincp16a17)
  }
  else if (this.selectvariable.value === 'hinco16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Other: ' + numberWithCommas(this.currentDurhamtr.hinco16)
  }
  else if (this.selectvariable.value === 'hinco16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Other, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinco16a17)
  }
  else if (this.selectvariable.value === 'hincm16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Two or More Races: ' + numberWithCommas(this.currentDurhamtr.hincm16)
  }
  else if (this.selectvariable.value === 'hincm16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Two or More Races, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincm16a17)
  }
  else if (this.selectvariable.value === 'hinch16' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch16)
  }
  else if (this.selectvariable.value === 'hinch16a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch16a17)
  }
  else if (this.selectvariable.value === 'meansp1517' && this.selectvariable.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.meansp1517)
  }
  else if (this.selectvariable.value === 'minsp1517' && this.selectvariable.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.minsp1517)
  }
  else if (this.selectvariable.value === 'maxsp1517' && this.selectvariable.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.maxsp1517)
  }
  else if (this.selectvariable.value === 'mediansp1517' && this.selectvariable.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.mediansp1517)
  }
  else if (this.selectvariable.value === 'stddevsp1517' && this.selectvariable.type === 'trts') {
    desc = 'Standard Deviation of Sale Price for Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.stddevsp1517)
  }
  else if (this.selectvariable.value === 'totsp1517' && this.selectvariable.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.totsp1517)
  }
  else if (this.selectvariable.value === 'nums1517' && this.selectvariable.type === 'trts') {
    desc = 'Number of Homes Sold, ' + numberWithCommas(this.currentDurhamtr.nums1517)
  }
  else if (this.selectvariable.value === 'meansp1517a17' && this.selectvariable.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.meansp1517a17)
  }
  else if (this.selectvariable.value === 'minsp1517a17' && this.selectvariable.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.minsp1517a17)
  }
  else if (this.selectvariable.value === 'maxsp1517a17' && this.selectvariable.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.maxsp1517a17)
  }
  else if (this.selectvariable.value === 'mediansp1517a17' && this.selectvariable.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mediansp1517a17)
  }
  else if (this.selectvariable.value === 'totsp1517a17' && this.selectvariable.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.totsp1517a17)
  }
  else if (this.selectvariable.value === 'pir1517' && this.selectvariable.type === 'trts') {
    desc = 'Price Income Ratio, ' + numberWithCommas(this.currentDurhamtr.pir1517)
  }
  else if (this.selectvariable.value === 'chinc1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinc1216a17)
  }
  else if (this.selectvariable.value === 'chincw1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincw1216a17)
  }
  else if (this.selectvariable.value === 'chincb1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincb1216a17)
  }
  else if (this.selectvariable.value === 'chinca1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinca1216a17)
  }
  else if (this.selectvariable.value === 'chinch1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinch1216a17)
  }
  else if (this.selectvariable.value === 'cmeansp0917a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmeansp0917a17)
  }
  else if (this.selectvariable.value === 'cmediansp0917a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmediansp0917a17)
  }
  else if (this.selectvariable.value === 'pchinc1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinc1216a17)
  }
  else if (this.selectvariable.value === 'pchincw1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincw1216a17)
  }
  else if (this.selectvariable.value === 'pchincb1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincb1216a17)
  }
  else if (this.selectvariable.value === 'pchinca1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinca1216a17)
  }
  else if (this.selectvariable.value === 'pchinch1216a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinch1216a17)
  }
  else if (this.selectvariable.value === 'pcmeansp0917a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmeansp0917a17)
  }
  else if (this.selectvariable.value === 'pcmediansp0917a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmediansp0917a17)
  }
  else if (this.selectvariable.value === 'chinc0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinc0016a17)
  }
  else if (this.selectvariable.value === 'chincw0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincw0016a17)
  }
  else if (this.selectvariable.value === 'chincb0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincb0016a17)
  }
  else if (this.selectvariable.value === 'chinca0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinca0016a17)
  }
  else if (this.selectvariable.value === 'chinch0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinch0016a17)
  }
  else if (this.selectvariable.value === 'cmeansp0017a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmeansp0017a17)
  }
  else if (this.selectvariable.value === 'cmediansp0017a17' && this.selectvariable.type === 'trts') {
    desc = 'Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmediansp0017a17)
  }
  else if (this.selectvariable.value === 'pchinc0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinc0016a17)
  }
  else if (this.selectvariable.value === 'pchincw0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincw0016a17)
  }
  else if (this.selectvariable.value === 'pchincb0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincb0016a17)
  }
  else if (this.selectvariable.value === 'pchinca0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinca0016a17)
  }
  else if (this.selectvariable.value === 'pchinch0016a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinch0016a17)
  }
  else if (this.selectvariable.value === 'pcmeansp0017a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmeansp0017a17)
  }
  else if (this.selectvariable.value === 'pcmediansp0017a17' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmediansp0017a17)
  }
  else if (this.selectvariable.value === 'ag25up16' && this.selectvariable.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up16)
  }
  else if (this.selectvariable.value === 'batm16' && this.selectvariable.type === 'trts') {
    desc = 'Number of Males with Bachelor Degrees: ' + numberWithCommas(this.currentDurhamtr.batm16)
  }
  else if (this.selectvariable.value === 'masm16' && this.selectvariable.type === 'trts') {
    desc = 'Number of Males with Mater Degrees: ' + numberWithCommas(this.currentDurhamtr.masm16)
  }
  else if (this.selectvariable.value === 'prom16' && this.selectvariable.type === 'trts') {
    desc = 'Number of Males with Professional Degrees: ' + numberWithCommas(this.currentDurhamtr.prom16)
  }
  else if (this.selectvariable.value === 'phdm16' && this.selectvariable.type === 'trts') {
    desc = 'Number of Males with a PhD: ' + numberWithCommas(this.currentDurhamtr.phdm16)
  }
  else if (this.selectvariable.value === 'batf16' && this.selectvariable.type === 'trts') {
    desc = 'Number of Females with Bachelor Degrees: ' + numberWithCommas(this.currentDurhamtr.batf16)
  }
  else if (this.selectvariable.value === 'masf16' && this.selectvariable.type === 'trts') {
    desc = 'Number of Females with Master Degrees: ' + numberWithCommas(this.currentDurhamtr.masf16)
  }
  else if (this.selectvariable.value === 'prof16' && this.selectvariable.type === 'trts') {
    desc = 'Number of Females with Professional Degrees: ' + numberWithCommas(this.currentDurhamtr.prof16)
  }
  else if (this.selectvariable.value === 'phdf16' && this.selectvariable.type === 'trts') {
    desc = 'Number of Females with a PhD: ' + numberWithCommas(this.currentDurhamtr.phdf16)
  }
  else if (this.selectvariable.value === 'col16' && this.selectvariable.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col16)
  }
  else if (this.selectvariable.value === 'pcol16' && this.selectvariable.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol16)
  }
  else if (this.selectvariable.value === 'pccol1216' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in College Graduates: ' + numberWithCommas(this.currentDurhamtr.pccol1216)
  }
  else if (this.selectvariable.value === 'pccol0016' && this.selectvariable.type === 'trts') {
    desc = 'Percent Change in College Graduates: ' + numberWithCommas(this.currentDurhamtr.pccol0016)
  }
  return desc
}

export default popupValues
