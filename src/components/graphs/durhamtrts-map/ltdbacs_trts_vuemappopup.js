function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function popupValues () {
  var desc
  if (this.select.value === 'pop70' && this.select.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop70)
  }
  else if (this.select.value === 'nhwht70' && this.select.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht70)
  }
  else if (this.select.value === 'pnhwht70' && this.select.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht70)
  }
  else if (this.select.value === 'nhblk70' && this.select.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk70)
  }
  else if (this.select.value === 'pnhblk70' && this.select.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk70)
  }
  else if (this.select.value === 'asian70' && this.select.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian70)
  }
  else if (this.select.value === 'pasian70' && this.select.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian70)
  }
  else if (this.select.value === 'haw70' && this.select.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw70)
  }
  else if (this.select.value === 'phaw70' && this.select.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw70)
  }
  else if (this.select.value === 'hu70' && this.select.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu70)
  }
  else if (this.select.value === 'vac70' && this.select.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac70)
  }
  else if (this.select.value === 'pvac70' && this.select.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac70)
  }
  else if (this.select.value === 'ohu70' && this.select.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu70)
  }
  else if (this.select.value === 'pohu70' && this.select.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu70)
  }
  else if (this.select.value === 'own70' && this.select.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own70)
  }
  else if (this.select.value === 'pown70' && this.select.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown70)
  }
  else if (this.select.value === 'rent70' && this.select.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent70)
  }
  else if (this.select.value === 'prent70' && this.select.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent70)
  }
  else if (this.select.value === 'mhmval70a17' && this.select.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval70a17)
  }
  else if (this.select.value === 'mhmval70' && this.select.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval70)
  }
  else if (this.select.value === 'mrent70' && this.select.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent70)
  }
  else if (this.select.value === 'mrent70a17' && this.select.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent70a17)
  }
  else if (this.select.value === 'hinc70' && this.select.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc70)
  }
  else if (this.select.value === 'hinc70a17' && this.select.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc70a17)
  }
  else if (this.select.value === 'ag25up70' && this.select.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up70)
  }
  else if (this.select.value === 'hs70' && this.select.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs70)
  }
  else if (this.select.value === 'phs70' && this.select.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs70)
  }
  else if (this.select.value === 'col70' && this.select.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col70)
  }
  else if (this.select.value === 'pcol70' && this.select.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol70)
  }
  else if (this.select.value === 'clf70' && this.select.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf70)
  }
  else if (this.select.value === 'unemp70' && this.select.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp70)
  }
  else if (this.select.value === 'punemp70' && this.select.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp70)
  }
  else if (this.select.value === 'pop80' && this.select.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop80)
  }
  else if (this.select.value === 'nhwht80' && this.select.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht80)
  }
  else if (this.select.value === 'pnhwht80' && this.select.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht80)
  }
  else if (this.select.value === 'nhblk80' && this.select.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk80)
  }
  else if (this.select.value === 'pnhblk80' && this.select.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk80)
  }
  else if (this.select.value === 'ntv80' && this.select.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv80)
  }
  else if (this.select.value === 'pntv80' && this.select.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv80)
  }
  else if (this.select.value === 'asian80' && this.select.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian80)
  }
  else if (this.select.value === 'pasian80' && this.select.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian80)
  }
  else if (this.select.value === 'hisp80' && this.select.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp80)
  }
  else if (this.select.value === 'phisp80' && this.select.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp80)
  }
  else if (this.select.value === 'haw80' && this.select.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw80)
  }
  else if (this.select.value === 'phaw80' && this.select.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw80)
  }
  else if (this.select.value === 'hu80' && this.select.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu80)
  }
  else if (this.select.value === 'vac80' && this.select.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac80)
  }
  else if (this.select.value === 'pvac80' && this.select.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac80)
  }
  else if (this.select.value === 'ohu80' && this.select.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu80)
  }
  else if (this.select.value === 'pohu80' && this.select.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu80)
  }
  else if (this.select.value === 'own80' && this.select.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own80)
  }
  else if (this.select.value === 'pown80' && this.select.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown80)
  }
  else if (this.select.value === 'rent80' && this.select.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent80)
  }
  else if (this.select.value === 'prent80' && this.select.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent80)
  }
  else if (this.select.value === 'mhmval80' && this.select.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval80)
  }
  else if (this.select.value === 'mhmval80a17' && this.select.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval80a17)
  }
  else if (this.select.value === 'mrent80' && this.select.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent80)
  }
  else if (this.select.value === 'mrent80a17' && this.select.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent80a17)
  }
  else if (this.select.value === 'hinc80' && this.select.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc80)
  }
  else if (this.select.value === 'hinc80a17' && this.select.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc80a17)
  }
  else if (this.select.value === 'hincw80' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw80)
  }
  else if (this.select.value === 'hincw80a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw80a17)
  }
  else if (this.select.value === 'hincb80' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb80)
  }
  else if (this.select.value === 'hincb80a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb80a17)
  }
  else if (this.select.value === 'hinch80' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch80)
  }
  else if (this.select.value === 'hinch80a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch80a17)
  }
  else if (this.select.value === 'hinca80' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca80)
  }
  else if (this.select.value === 'hinca80a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca80a17)
  }
  else if (this.select.value === 'ag25up80' && this.select.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up80)
  }
  else if (this.select.value === 'hs80' && this.select.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs80)
  }
  else if (this.select.value === 'phs80' && this.select.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs80)
  }
  else if (this.select.value === 'col80' && this.select.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col80)
  }
  else if (this.select.value === 'pcol80' && this.select.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol80)
  }
  else if (this.select.value === 'clf80' && this.select.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf80)
  }
  else if (this.select.value === 'unemp80' && this.select.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp80)
  }
  else if (this.select.value === 'punemp80' && this.select.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp80)
  }
  else if (this.select.value === 'pop90' && this.select.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop90)
  }
  else if (this.select.value === 'nhwht90' && this.select.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht90)
  }
  else if (this.select.value === 'pnhwht90' && this.select.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht90)
  }
  else if (this.select.value === 'nhblk90' && this.select.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk90)
  }
  else if (this.select.value === 'pnhblk90' && this.select.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk90)
  }
  else if (this.select.value === 'ntv90' && this.select.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv90)
  }
  else if (this.select.value === 'pntv90' && this.select.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv90)
  }
  else if (this.select.value === 'asian90' && this.select.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian90)
  }
  else if (this.select.value === 'pasian90' && this.select.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian90)
  }
  else if (this.select.value === 'hisp90' && this.select.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp90)
  }
  else if (this.select.value === 'phisp90' && this.select.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp90)
  }
  else if (this.select.value === 'haw90' && this.select.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw90)
  }
  else if (this.select.value === 'phaw90' && this.select.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw90)
  }
  else if (this.select.value === 'hu90' && this.select.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu90)
  }
  else if (this.select.value === 'vac90' && this.select.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac90)
  }
  else if (this.select.value === 'pvac90' && this.select.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac90)
  }
  else if (this.select.value === 'ohu90' && this.select.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu90)
  }
  else if (this.select.value === 'pohu90' && this.select.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu90)
  }
  else if (this.select.value === 'own90' && this.select.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own90)
  }
  else if (this.select.value === 'pown90' && this.select.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown90)
  }
  else if (this.select.value === 'rent90' && this.select.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent90)
  }
  else if (this.select.value === 'prent90' && this.select.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent90)
  }
  else if (this.select.value === 'mhmval90' && this.select.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval90)
  }
  else if (this.select.value === 'mhmval90a17' && this.select.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval90a17)
  }
  else if (this.select.value === 'mrent90' && this.select.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent90)
  }
  else if (this.select.value === 'mrent90a17' && this.select.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent90a17)
  }
  else if (this.select.value === 'hinc90' && this.select.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc90)
  }
  else if (this.select.value === 'hinc90a17' && this.select.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc90a17)
  }
  else if (this.select.value === 'hincw90' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw90)
  }
  else if (this.select.value === 'hincw90a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw90a17)
  }
  else if (this.select.value === 'hincb90' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb90)
  }
  else if (this.select.value === 'hincb90a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb90a17)
  }
  else if (this.select.value === 'hinch90' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch90)
  }
  else if (this.select.value === 'hinch90a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch90a17)
  }
  else if (this.select.value === 'hinca90' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca90)
  }
  else if (this.select.value === 'hinca90a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca90a17)
  }
  else if (this.select.value === 'ag25up90' && this.select.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up90)
  }
  else if (this.select.value === 'hs90' && this.select.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs90)
  }
  else if (this.select.value === 'phs90' && this.select.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs90)
  }
  else if (this.select.value === 'col90' && this.select.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col90)
  }
  else if (this.select.value === 'pcol90' && this.select.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol90)
  }
  else if (this.select.value === 'clf90' && this.select.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf90)
  }
  else if (this.select.value === 'unemp90' && this.select.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp90)
  }
  else if (this.select.value === 'punemp90' && this.select.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp90)
  }
  else if (this.select.value === 'pop00' && this.select.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop00)
  }
  else if (this.select.value === 'nhwht00' && this.select.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht00)
  }
  else if (this.select.value === 'pnhwht00' && this.select.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht00)
  }
  else if (this.select.value === 'nhblk00' && this.select.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk00)
  }
  else if (this.select.value === 'pnhblk00' && this.select.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk00)
  }
  else if (this.select.value === 'ntv00' && this.select.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv00)
  }
  else if (this.select.value === 'pntv00' && this.select.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv00)
  }
  else if (this.select.value === 'asian00' && this.select.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian00)
  }
  else if (this.select.value === 'pasian00' && this.select.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian00)
  }
  else if (this.select.value === 'hisp00' && this.select.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp00)
  }
  else if (this.select.value === 'phisp00' && this.select.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp00)
  }
  else if (this.select.value === 'haw00' && this.select.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw00)
  }
  else if (this.select.value === 'phaw00' && this.select.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw00)
  }
  else if (this.select.value === 'hu00' && this.select.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu00)
  }
  else if (this.select.value === 'vac00' && this.select.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac00)
  }
  else if (this.select.value === 'pvac00' && this.select.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac00)
  }
  else if (this.select.value === 'ohu00' && this.select.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu00)
  }
  else if (this.select.value === 'pohu00' && this.select.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu00)
  }
  else if (this.select.value === 'own00' && this.select.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own00)
  }
  else if (this.select.value === 'pown00' && this.select.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown00)
  }
  else if (this.select.value === 'rent00' && this.select.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent00)
  }
  else if (this.select.value === 'prent00' && this.select.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent00)
  }
  else if (this.select.value === 'mhmval00' && this.select.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval00)
  }
  else if (this.select.value === 'mhmval00a17' && this.select.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval00a17)
  }
  else if (this.select.value === 'mrent00' && this.select.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent00)
  }
  else if (this.select.value === 'mrent00a17' && this.select.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent00a17)
  }
  else if (this.select.value === 'hinc00' && this.select.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc00)
  }
  else if (this.select.value === 'hinc00a17' && this.select.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc00a17)
  }
  else if (this.select.value === 'hincw00' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw00)
  }
  else if (this.select.value === 'hincw00a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw00a17)
  }
  else if (this.select.value === 'hincb00' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb00)
  }
  else if (this.select.value === 'hincb00a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb00a17)
  }
  else if (this.select.value === 'hinch00' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch00)
  }
  else if (this.select.value === 'hinch00a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch00a17)
  }
  else if (this.select.value === 'hinca00' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca00)
  }
  else if (this.select.value === 'hinca00a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca00a17)
  }
  else if (this.select.value === 'meansp9800' && this.select.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.meansp9800)
  }
  else if (this.select.value === 'minsp9800' && this.select.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.minsp9800)
  }
  else if (this.select.value === 'maxsp9800' && this.select.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.maxsp9800)
  }
  else if (this.select.value === 'mediansp9800' && this.select.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.mediansp9800)
  }
  else if (this.select.value === 'stddevsp9800' && this.select.type === 'trts') {
    desc = 'Standard Deviation of Sale Price for Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.stddevsp9800)
  }
  else if (this.select.value === 'totsp9800' && this.select.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.totsp9800)
  }
  else if (this.select.value === 'nums9800' && this.select.type === 'trts') {
    desc = 'Number of Homes Sold: ' + numberWithCommas(this.currentDurhamtr.nums9800)
  }
  else if (this.select.value === 'meansp9800a17' && this.select.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.meansp9800a17)
  }
  else if (this.select.value === 'minsp9800a17' && this.select.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.minsp9800a17)
  }
  else if (this.select.value === 'maxsp9800a17' && this.select.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.maxsp9800a17)
  }
  else if (this.select.value === 'mediansp9800a17' && this.select.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mediansp9800a17)
  }
  else if (this.select.value === 'totsp9800a17' && this.select.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.totsp9800a17)
  }
  else if (this.select.value === 'pir9800' && this.select.type === 'trts') {
    desc = 'Price Income Ratio: ' + numberWithCommas(this.currentDurhamtr.pir9800)
  }
  else if (this.select.value === 'ag25up00' && this.select.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up00)
  }
  else if (this.select.value === 'hs00' && this.select.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs00)
  }
  else if (this.select.value === 'phs00' && this.select.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs00)
  }
  else if (this.select.value === 'col00' && this.select.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col00)
  }
  else if (this.select.value === 'pcol00' && this.select.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol00)
  }
  else if (this.select.value === 'clf00' && this.select.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf00)
  }
  else if (this.select.value === 'unemp00' && this.select.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp00)
  }
  else if (this.select.value === 'punemp00' && this.select.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp00)
  }
  else if (this.select.value === 'pop10' && this.select.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop10)
  }
  else if (this.select.value === 'nhwht10' && this.select.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht10)
  }
  else if (this.select.value === 'pnhwht10' && this.select.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht10)
  }
  else if (this.select.value === 'nhblk10' && this.select.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk10)
  }
  else if (this.select.value === 'pnhblk10' && this.select.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk10)
  }
  else if (this.select.value === 'ntv10' && this.select.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv10)
  }
  else if (this.select.value === 'pntv10' && this.select.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv10)
  }
  else if (this.select.value === 'asian10' && this.select.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian10)
  }
  else if (this.select.value === 'pasian10' && this.select.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian10)
  }
  else if (this.select.value === 'hisp10' && this.select.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp10)
  }
  else if (this.select.value === 'phisp10' && this.select.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp10)
  }
  else if (this.select.value === 'haw10' && this.select.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw10)
  }
  else if (this.select.value === 'phaw10' && this.select.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw10)
  }
  else if (this.select.value === 'hu10' && this.select.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu10)
  }
  else if (this.select.value === 'vac10' && this.select.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac10)
  }
  else if (this.select.value === 'pvac10' && this.select.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac10)
  }
  else if (this.select.value === 'ohu10' && this.select.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu10)
  }
  else if (this.select.value === 'pohu10' && this.select.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu10)
  }
  else if (this.select.value === 'own10' && this.select.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own10)
  }
  else if (this.select.value === 'pown10' && this.select.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown10)
  }
  else if (this.select.value === 'rent10' && this.select.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent10)
  }
  else if (this.select.value === 'prent10' && this.select.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent10)
  }
  else if (this.select.value === 'mhmval12' && this.select.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval12)
  }
  else if (this.select.value === 'mhmval12a17' && this.select.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval12a17)
  }
  else if (this.select.value === 'mrent12' && this.select.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent12)
  }
  else if (this.select.value === 'mrent12a17' && this.select.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent12a17)
  }
  else if (this.select.value === 'hinc12' && this.select.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc12)
  }
  else if (this.select.value === 'hinc12a17' && this.select.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc12a17)
  }
  else if (this.select.value === 'hincw12' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw12)
  }
  else if (this.select.value === 'hincw12a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw12a17)
  }
  else if (this.select.value === 'hincb12' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb12)
  }
  else if (this.select.value === 'hincb12a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb12a17)
  }
  else if (this.select.value === 'hinch12' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch12)
  }
  else if (this.select.value === 'hinch12a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch12a17)
  }
  else if (this.select.value === 'hinca12' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca12)
  }
  else if (this.select.value === 'hinca12a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca12a17)
  }
  else if (this.select.value === 'meansp0709' && this.select.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.meansp0709)
  }
  else if (this.select.value === 'minsp0709' && this.select.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.minsp0709)
  }
  else if (this.select.value === 'maxsp0709' && this.select.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.maxsp0709)
  }
  else if (this.select.value === 'mediansp0709' && this.select.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.mediansp0709)
  }
  else if (this.select.value === 'stddevsp0709' && this.select.type === 'trts') {
    desc = 'Standard Deviation of Sale Price for Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.stddevsp0709)
  }
  else if (this.select.value === 'totsp0709' && this.select.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes: ' + numberWithCommas(this.currentDurhamtr.totsp0709)
  }
  else if (this.select.value === 'nums0709' && this.select.type === 'trts') {
    desc = 'Number of Homes Sold: ' + numberWithCommas(this.currentDurhamtr.nums0709)
  }
  else if (this.select.value === 'meansp0709a17' && this.select.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.meansp0709a17)
  }
  else if (this.select.value === 'minsp0709a17' && this.select.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.minsp0709a17)
  }
  else if (this.select.value === 'maxsp0709a17' && this.select.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.maxsp0709a17)
  }
  else if (this.select.value === 'mediansp0709a17' && this.select.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mediansp0709a17)
  }
  else if (this.select.value === 'totsp0709a17' && this.select.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.totsp0709a17)
  }
  else if (this.select.value === 'pir0712' && this.select.type === 'trts') {
    desc = 'Price Income Ratio: ' + numberWithCommas(this.currentDurhamtr.pir0712)
  }
  else if (this.select.value === 'ag25up12' && this.select.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up12)
  }
  else if (this.select.value === 'hs12' && this.select.type === 'trts') {
    desc = 'Number of High School Graduates: ' + numberWithCommas(this.currentDurhamtr.hs12)
  }
  else if (this.select.value === 'phs12' && this.select.type === 'trts') {
    desc = 'Percent High School Graduates: ' + numberWithCommas(this.currentDurhamtr.phs12)
  }
  else if (this.select.value === 'col12' && this.select.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col12)
  }
  else if (this.select.value === 'pcol12' && this.select.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol12)
  }
  else if (this.select.value === 'clf12' && this.select.type === 'trts') {
    desc = 'Civilian Labor Force: ' + numberWithCommas(this.currentDurhamtr.clf12)
  }
  else if (this.select.value === 'unemp12' && this.select.type === 'trts') {
    desc = 'Number of Unemployed: ' + numberWithCommas(this.currentDurhamtr.unemp12)
  }
  else if (this.select.value === 'punemp12' && this.select.type === 'trts') {
    desc = 'Percent Unempolyment: ' + numberWithCommas(this.currentDurhamtr.punemp12)
  }
  else if (this.select.value === 'pccol0012' && this.select.type === 'trts') {
    desc = 'Percent Change in College Graduates: ' + numberWithCommas(this.currentDurhamtr.pccol0012)
  }
  else if (this.select.value === 'pcnhwht0010' && this.select.type === 'trts') {
    desc = 'Percent Change in White Population: ' + numberWithCommas(this.currentDurhamtr.pcnhwht0010)
  }
  else if (this.select.value === 'pcnhblk0010' && this.select.type === 'trts') {
    desc = 'Percent Change in Black Population: ' + numberWithCommas(this.currentDurhamtr.pcnhblk0010)
  }
  else if (this.select.value === 'pcasian0010' && this.select.type === 'trts') {
    desc = 'Percent Change in Asian Population: ' + numberWithCommas(this.currentDurhamtr.pcasian0010)
  }
  else if (this.select.value === 'pchisp0010' && this.select.type === 'trts') {
    desc = 'Percent Change in Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.pchisp0010)
  }
  else if (this.select.value === 'cmhmval0012a17' && this.select.type === 'trts') {
    desc = 'Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmhmval0012a17)
  }
  else if (this.select.value === 'pcmhmval0012a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmhmval0012a17)
  }
  else if (this.select.value === 'cmrent0012a17' && this.select.type === 'trts') {
    desc = 'Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmrent0012a17)
  }
  else if (this.select.value === 'pcmrent0012a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmrent0012a17)
  }
  else if (this.select.value === 'chinc0012a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinc0012a17)
  }
  else if (this.select.value === 'chincw0012a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincw0012a17)
  }
  else if (this.select.value === 'chincb0012a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincb0012a17)
  }
  else if (this.select.value === 'chinca0012a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinca0012a17)
  }
  else if (this.select.value === 'chinch0012a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinch0012a17)
  }
  else if (this.select.value === 'cmeansp0009a17' && this.select.type === 'trts') {
    desc = 'Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmeansp0009a17)
  }
  else if (this.select.value === 'cmediansp0009a17' && this.select.type === 'trts') {
    desc = 'Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmediansp0009a17)
  }
  else if (this.select.value === 'pchinc0012a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinc0012a17)
  }
  else if (this.select.value === 'pchincw0012a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincw0012a17)
  }
  else if (this.select.value === 'pchincb0012a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincb0012a17)
  }
  else if (this.select.value === 'pchinca0012a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinca0012a17)
  }
  else if (this.select.value === 'pchinch0012a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinch0012a17)
  }
  else if (this.select.value === 'pcmeansp0009a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmeansp0009a17)
  }
  else if (this.select.value === 'pcmediansp0009a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmediansp0009a17)
  }
  else if (this.select.value === 'pop16' && this.select.type === 'trts') {
    desc = 'Total Population: ' + numberWithCommas(this.currentDurhamtr.pop16)
  }
  else if (this.select.value === 'nhwht16' && this.select.type === 'trts') {
    desc = 'Total White Population: ' + numberWithCommas(this.currentDurhamtr.nhwht16)
  }
  else if (this.select.value === 'pnhwht16' && this.select.type === 'trts') {
    desc = 'Percent White Population: ' + numberWithCommas(this.currentDurhamtr.pnhwht16)
  }
  else if (this.select.value === 'nhblk16' && this.select.type === 'trts') {
    desc = 'Total Black Population: ' + numberWithCommas(this.currentDurhamtr.nhblk16)
  }
  else if (this.select.value === 'pnhblk16' && this.select.type === 'trts') {
    desc = 'Percent Black Population: ' + numberWithCommas(this.currentDurhamtr.pnhblk16)
  }
  else if (this.select.value === 'ntv16' && this.select.type === 'trts') {
    desc = 'Total Native Population: ' + numberWithCommas(this.currentDurhamtr.ntv16)
  }
  else if (this.select.value === 'pntv16' && this.select.type === 'trts') {
    desc = 'Percent Native Population: ' + numberWithCommas(this.currentDurhamtr.pntv16)
  }
  else if (this.select.value === 'asian16' && this.select.type === 'trts') {
    desc = 'Total Asian Population: ' + numberWithCommas(this.currentDurhamtr.asian16)
  }
  else if (this.select.value === 'pasian16' && this.select.type === 'trts') {
    desc = 'Percent Asian Population: ' + numberWithCommas(this.currentDurhamtr.pasian16)
  }
  else if (this.select.value === 'haw16' && this.select.type === 'trts') {
    desc = 'Total Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.haw16)
  }
  else if (this.select.value === 'phaw16' && this.select.type === 'trts') {
    desc = 'Percent Hawaiian Population: ' + numberWithCommas(this.currentDurhamtr.phaw16)
  }
  else if (this.select.value === 'oth16' && this.select.type === 'trts') {
    desc = 'Total Other Population: ' + numberWithCommas(this.currentDurhamtr.oth16)
  }
  else if (this.select.value === 'poth16' && this.select.type === 'trts') {
    desc = 'Percent Other Population: ' + numberWithCommas(this.currentDurhamtr.poth16)
  }
  else if (this.select.value === 'twomr16' && this.select.type === 'trts') {
    desc = 'Total Two or More Races Population: ' + numberWithCommas(this.currentDurhamtr.twomr16)
  }
  else if (this.select.value === 'ptwomr16' && this.select.type === 'trts') {
    desc = 'Percent Two or More Races Population: ' + numberWithCommas(this.currentDurhamtr.ptwomr16)
  }
  else if (this.select.value === 'hisp16' && this.select.type === 'trts') {
    desc = 'Total Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.hisp16)
  }
  else if (this.select.value === 'phisp16' && this.select.type === 'trts') {
    desc = 'Percent Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.phisp16)
  }
  else if (this.select.value === 'pcnhwht0016' && this.select.type === 'trts') {
    desc = 'Percent Change in White Population: ' + numberWithCommas(this.currentDurhamtr.pcnhwht0016)
  }
  else if (this.select.value === 'pcnhblk0016' && this.select.type === 'trts') {
    desc = 'Percent Change in Black Population: ' + numberWithCommas(this.currentDurhamtr.pcnhblk0016)
  }
  else if (this.select.value === 'pcasian0016' && this.select.type === 'trts') {
    desc = 'Percent Change in Asian Population: ' + numberWithCommas(this.currentDurhamtr.pcasian0016)
  }
  else if (this.select.value === 'pchisp0016' && this.select.type === 'trts') {
    desc = 'Percent Change in Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.pchisp0016)
  }
  else if (this.select.value === 'pcnhwht1016' && this.select.type === 'trts') {
    desc = 'Percent Change in White Population: ' + numberWithCommas(this.currentDurhamtr.pcnhwht1016)
  }
  else if (this.select.value === 'pcnhblk1016' && this.select.type === 'trts') {
    desc = 'Percent Change in Black Population: ' + numberWithCommas(this.currentDurhamtr.pcnhblk1016)
  }
  else if (this.select.value === 'pcasian1016' && this.select.type === 'trts') {
    desc = 'Percent Change in Asian Population: ' + numberWithCommas(this.currentDurhamtr.pcasian1016)
  }
  else if (this.select.value === 'pchisp1016' && this.select.type === 'trts') {
    desc = 'Percent Change in Hispanic Population: ' + numberWithCommas(this.currentDurhamtr.pchisp1016)
  }
  else if (this.select.value === 'hu16' && this.select.type === 'trts') {
    desc = 'Total Housing Units: ' + numberWithCommas(this.currentDurhamtr.hu16)
  }
  else if (this.select.value === 'ohu16' && this.select.type === 'trts') {
    desc = 'Total Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.ohu16)
  }
  else if (this.select.value === 'pohu16' && this.select.type === 'trts') {
    desc = 'Percent Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pohu16)
  }
  else if (this.select.value === 'vac16' && this.select.type === 'trts') {
    desc = 'Total Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.vac16)
  }
  else if (this.select.value === 'pvac16' && this.select.type === 'trts') {
    desc = 'Percent Vacant Housing: ' + numberWithCommas(this.currentDurhamtr.pvac16)
  }
  else if (this.select.value === 'own16' && this.select.type === 'trts') {
    desc = 'Total Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.own16)
  }
  else if (this.select.value === 'pown16' && this.select.type === 'trts') {
    desc = 'Percent Owner Occupied Housing: ' + numberWithCommas(this.currentDurhamtr.pown16)
  }
  else if (this.select.value === 'rent16' && this.select.type === 'trts') {
    desc = 'Total Rental Housing: ' + numberWithCommas(this.currentDurhamtr.rent16)
  }
  else if (this.select.value === 'prent16' && this.select.type === 'trts') {
    desc = 'Percent Rental Housing: ' + numberWithCommas(this.currentDurhamtr.prent16)
  }
  else if (this.select.value === 'mhmval16' && this.select.type === 'trts') {
    desc = 'Median Home Value: ' + numberWithCommas(this.currentDurhamtr.mhmval16)
  }
  else if (this.select.value === 'mrent16' && this.select.type === 'trts') {
    desc = 'Median Rent: ' + numberWithCommas(this.currentDurhamtr.mrent16)
  }
  else if (this.select.value === 'mhmval16a17' && this.select.type === 'trts') {
    desc = 'Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mhmval16a17)
  }
  else if (this.select.value === 'mrent16a17' && this.select.type === 'trts') {
    desc = 'Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mrent16a17)
  }
  else if (this.select.value === 'cmhmval0016a17' && this.select.type === 'trts') {
    desc = 'Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmhmval0016a17)
  }
  else if (this.select.value === 'pcmhmval0016a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmhmval0016a17)
  }
  else if (this.select.value === 'cmrent0016a17' && this.select.type === 'trts') {
    desc = 'Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmrent0016a17)
  }
  else if (this.select.value === 'pcmrent0016a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmrent0016a17)
  }
  else if (this.select.value === 'cmhmval1216a17' && this.select.type === 'trts') {
    desc = 'Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmhmval1216a17)
  }
  else if (this.select.value === 'pcmhmval1216a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Home Value, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmhmval1216a17)
  }
  else if (this.select.value === 'cmrent1216a17' && this.select.type === 'trts') {
    desc = 'Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmrent1216a17)
  }
  else if (this.select.value === 'pcmrent1216a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Rent, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmrent1216a17)
  }
  else if (this.select.value === 'hinc16' && this.select.type === 'trts') {
    desc = 'Median Household Income: ' + numberWithCommas(this.currentDurhamtr.hinc16)
  }
  else if (this.select.value === 'hinc16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinc16a17)
  }
  else if (this.select.value === 'hincw16' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites: ' + numberWithCommas(this.currentDurhamtr.hincw16)
  }
  else if (this.select.value === 'hincw16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Whites, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincw16a17)
  }
  else if (this.select.value === 'hincb16' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks: ' + numberWithCommas(this.currentDurhamtr.hincb16)
  }
  else if (this.select.value === 'hincb16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Blacks, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincb16a17)
  }
  else if (this.select.value === 'hincn16' && this.select.type === 'trts') {
    desc = 'Median Household Income for Natives: ' + numberWithCommas(this.currentDurhamtr.hincn16)
  }
  else if (this.select.value === 'hincn16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Natives, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincn16a17)
  }
  else if (this.select.value === 'hinca16' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians: ' + numberWithCommas(this.currentDurhamtr.hinca16)
  }
  else if (this.select.value === 'hinca16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Asians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinca16a17)
  }
  else if (this.select.value === 'hincp16' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hawaiians: ' + numberWithCommas(this.currentDurhamtr.hincp16)
  }
  else if (this.select.value === 'hincp16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hawaiians, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincp16a17)
  }
  else if (this.select.value === 'hinco16' && this.select.type === 'trts') {
    desc = 'Median Household Income for Other: ' + numberWithCommas(this.currentDurhamtr.hinco16)
  }
  else if (this.select.value === 'hinco16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Other, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinco16a17)
  }
  else if (this.select.value === 'hincm16' && this.select.type === 'trts') {
    desc = 'Median Household Income for Two or More Races: ' + numberWithCommas(this.currentDurhamtr.hincm16)
  }
  else if (this.select.value === 'hincm16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Two or More Races, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hincm16a17)
  }
  else if (this.select.value === 'hinch16' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics: ' + numberWithCommas(this.currentDurhamtr.hinch16)
  }
  else if (this.select.value === 'hinch16a17' && this.select.type === 'trts') {
    desc = 'Median Household Income for Hispanics, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.hinch16a17)
  }
  else if (this.select.value === 'meansp1517' && this.select.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.meansp1517)
  }
  else if (this.select.value === 'minsp1517' && this.select.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.minsp1517)
  }
  else if (this.select.value === 'maxsp1517' && this.select.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.maxsp1517)
  }
  else if (this.select.value === 'mediansp1517' && this.select.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.mediansp1517)
  }
  else if (this.select.value === 'stddevsp1517' && this.select.type === 'trts') {
    desc = 'Standard Deviation of Sale Price for Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.stddevsp1517)
  }
  else if (this.select.value === 'totsp1517' && this.select.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes, ' + numberWithCommas(this.currentDurhamtr.totsp1517)
  }
  else if (this.select.value === 'nums1517' && this.select.type === 'trts') {
    desc = 'Number of Homes Sold, ' + numberWithCommas(this.currentDurhamtr.nums1517)
  }
  else if (this.select.value === 'meansp1517a17' && this.select.type === 'trts') {
    desc = 'Mean Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.meansp1517a17)
  }
  else if (this.select.value === 'minsp1517a17' && this.select.type === 'trts') {
    desc = 'Minimum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.minsp1517a17)
  }
  else if (this.select.value === 'maxsp1517a17' && this.select.type === 'trts') {
    desc = 'Maximum Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.maxsp1517a17)
  }
  else if (this.select.value === 'mediansp1517a17' && this.select.type === 'trts') {
    desc = 'Median Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.mediansp1517a17)
  }
  else if (this.select.value === 'totsp1517a17' && this.select.type === 'trts') {
    desc = 'Total Sale Price of Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.totsp1517a17)
  }
  else if (this.select.value === 'pir1517' && this.select.type === 'trts') {
    desc = 'Price Income Ratio, ' + numberWithCommas(this.currentDurhamtr.pir1517)
  }
  else if (this.select.value === 'chinc1216a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinc1216a17)
  }
  else if (this.select.value === 'chincw1216a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincw1216a17)
  }
  else if (this.select.value === 'chincb1216a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincb1216a17)
  }
  else if (this.select.value === 'chinca1216a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinca1216a17)
  }
  else if (this.select.value === 'chinch1216a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinch1216a17)
  }
  else if (this.select.value === 'cmeansp0917a17' && this.select.type === 'trts') {
    desc = 'Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmeansp0917a17)
  }
  else if (this.select.value === 'cmediansp0917a17' && this.select.type === 'trts') {
    desc = 'Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmediansp0917a17)
  }
  else if (this.select.value === 'pchinc1216a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinc1216a17)
  }
  else if (this.select.value === 'pchincw1216a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincw1216a17)
  }
  else if (this.select.value === 'pchincb1216a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincb1216a17)
  }
  else if (this.select.value === 'pchinca1216a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinca1216a17)
  }
  else if (this.select.value === 'pchinch1216a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinch1216a17)
  }
  else if (this.select.value === 'pcmeansp0917a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmeansp0917a17)
  }
  else if (this.select.value === 'pcmediansp0917a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmediansp0917a17)
  }
  else if (this.select.value === 'chinc0016a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinc0016a17)
  }
  else if (this.select.value === 'chincw0016a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincw0016a17)
  }
  else if (this.select.value === 'chincb0016a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chincb0016a17)
  }
  else if (this.select.value === 'chinca0016a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinca0016a17)
  }
  else if (this.select.value === 'chinch0016a17' && this.select.type === 'trts') {
    desc = 'Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.chinch0016a17)
  }
  else if (this.select.value === 'cmeansp0017a17' && this.select.type === 'trts') {
    desc = 'Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmeansp0017a17)
  }
  else if (this.select.value === 'cmediansp0017a17' && this.select.type === 'trts') {
    desc = 'Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.cmediansp0017a17)
  }
  else if (this.select.value === 'pchinc0016a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinc0016a17)
  }
  else if (this.select.value === 'pchincw0016a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for White Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincw0016a17)
  }
  else if (this.select.value === 'pchincb0016a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Black Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchincb0016a17)
  }
  else if (this.select.value === 'pchinca0016a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Asian Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinca0016a17)
  }
  else if (this.select.value === 'pchinch0016a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Household Income for Hispanic Population, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pchinch0016a17)
  }
  else if (this.select.value === 'pcmeansp0017a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Mean Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmeansp0017a17)
  }
  else if (this.select.value === 'pcmediansp0017a17' && this.select.type === 'trts') {
    desc = 'Percent Change in Median Sale Price for Single Family Homes, Adjusted to 2017 Dollars: ' + numberWithCommas(this.currentDurhamtr.pcmediansp0017a17)
  }
  else if (this.select.value === 'ag25up16' && this.select.type === 'trts') {
    desc = 'Age 25 and Older: ' + numberWithCommas(this.currentDurhamtr.ag25up16)
  }
  else if (this.select.value === 'colm16' && this.select.type === 'trts') {
    desc = 'Number of Male College Graduates: ' + numberWithCommas(this.currentDurhamtr.colm16)
  }
  else if (this.select.value === 'colf16' && this.select.type === 'trts') {
    desc = 'Number of Female College Graduates: ' + numberWithCommas(this.currentDurhamtr.colf16)
  }
  else if (this.select.value === 'col16' && this.select.type === 'trts') {
    desc = 'Number of College Graduates: ' + numberWithCommas(this.currentDurhamtr.col16)
  }
  else if (this.select.value === 'pcol16' && this.select.type === 'trts') {
    desc = 'Percent College Graduates: ' + numberWithCommas(this.currentDurhamtr.pcol16)
  }
  else if (this.select.value === 'pccol1216' && this.select.type === 'trts') {
    desc = 'Percent Change in College Graduates: ' + numberWithCommas(this.currentDurhamtr.pccol1216)
  }
  else if (this.select.value === 'pccol0016' && this.select.type === 'trts') {
    desc = 'Percent Change in College Graduates: ' + numberWithCommas(this.currentDurhamtr.pccol0016)
  }
  return desc
}

export default popupValues
