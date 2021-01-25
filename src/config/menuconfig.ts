import { menu } from './types'
const menus: menu[] = [
  {
    path: '/',
    name: '首页',
    deepth: 1,
    img: require('../assets/imgs/index-gray.png'),
    activeImg: require('../assets/imgs/index.png')
  },
  {
    path: '/findsome',
    name: '发现',
    deepth: 2,
    img: require('../assets/imgs/cricl-gray.png'),
    activeImg: require('../assets/imgs/cricl.png')
  },
  {
    path: '/message',
    name: '消息',
    deepth: 4,
    img: require('../assets/imgs/video-gray.png'),
    activeImg: require('../assets/imgs/video.png')
  },
  {
    path: '/my',
    name: '我的',
    deepth: 5,
    img: require('../assets/imgs/index-gray.png'),
    activeImg: require('../assets/imgs/index.png')
  }
]
export default menus