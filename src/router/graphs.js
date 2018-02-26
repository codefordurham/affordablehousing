function load (component) {
  return () => import(`src/${component}.vue`)
}

export const routes = [
  {
    id: 1,
    type: 'Durham Map 1:',
    name: 'Single Family Homes Occupation Type and Value from October 5, 2017',
    path: '/durhambgs1-map',
    folder: true,
    component: load('components/graphs/durhambgs1-map/index')
  },
  {
    id: 2,
    type: 'Durham Map 2:',
    name: 'Single Family Homes Sale Price and Income from 2013 to 2014',
    path: '/durhambgs2-map',
    folder: true,
    component: load('components/graphs/durhambgs2-map/index')
  },
  {
    id: 3,
    type: 'Durham Map 3:',
    name: 'Single Family Homes Sale Price and Income from 1998 to 2000',
    path: '/durhambgs3-map',
    folder: true,
    component: load('components/graphs/durhambgs3-map/index')
  },
  {
    id: 4,
    type: 'Durham Map 4:',
    name: 'Single Family Homes Sale Price and Income from 2015 to 2017',
    path: '/durhambgs4-map',
    folder: true,
    component: load('components/graphs/durhambgs4-map/index')
  },
  {
    id: 5,
    type: 'Durham Map 5:',
    name: 'Single Family Homes Occupation Type and Value from January 1, 2001',
    path: '/durhambgs5-map',
    folder: true,
    component: load('components/graphs/durhambgs5-map/index')
  },
  {
    id: 6,
    type: 'Durham Map 6:',
    name: 'Single Family Homes Occupation Type and Value from January 18, 2018',
    path: '/durhambgs6-map',
    folder: true,
    component: load('components/graphs/durhambgs6-map/index')
  }
]
