function load (component) {
  return () => import(`src/${component}.vue`)
}

export const routes = [
  {
    id: 1,
    type: 'Durham Map 1:',
    name: 'Non-Owner Occupied Single Family Homes',
    path: '/durhambgs1-map',
    folder: true,
    component: load('components/graphs/durhambgs1-map/index')
  },
  {
    id: 2,
    type: 'Durham Map 2:',
    name: 'Price Income Ratio for Single Family Homes',
    path: '/durhambgs2-map',
    folder: true,
    component: load('components/graphs/durhambgs2-map/index')
  }
]
