function load (component) {
  return () => import(`src/${component}.vue`)
}

export const routes = [
  {
    id: 1,
    type: 'Durham Map Tract:',
    name: 'US Census Tracts Data from 1970 to 2016',
    path: '/durhamtrts-map',
    folder: true,
    component: load('components/graphs/durhamtrts-map/index')
  },
  {
    id: 2,
    type: 'Durham Map Block Groups 2000:',
    name: 'Housing and Social Data, at US Census Block Groups Level, from 1998 to 2001',
    path: '/durhambgs00-map',
    folder: true,
    component: load('components/graphs/durhambgs00-map/index')
  },
  {
    id: 3,
    type: 'Durham Map Block Groups 2013 to 2018:',
    name: 'Housing and Social Data, at US Census Block Groups Level, from 2013 to 2014',
    path: '/durhambgs1317-map',
    folder: true,
    component: load('components/graphs/durhambgs1317-map/index')
  }
]
