function load (component) {
  return () => import(`src/${component}.vue`)
}

export const routes = [
  {
    id: 1,
    type: 'Durham Map 1:',
    name: 'Single Family Homes Occupation Type and Value',
    path: '/durhambgs1-map',
    folder: true,
    component: load('components/graphs/durhambgs1-map/index')
  },
  {
    id: 2,
    type: 'Durham Map 2:',
    name: 'Single Family Homes Sale Price and Income',
    path: '/durhambgs2-map',
    folder: true,
    component: load('components/graphs/durhambgs2-map/index')
  }
]
