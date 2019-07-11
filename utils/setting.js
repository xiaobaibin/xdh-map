/**
 * 地图图层配置，支持OSM、百度、离线谷歌、高德、超图、方正PGIS
 * @type {{OSM: {title: string, server: null, preview: string}, Baidu: {title: string, server: string, preview: string}, Amap: {title: string, server: string, preview: string}, SupperMap: {title: string, server: string, preview: string}, Google: {title: string, server: string, preview: string}, Founder: {title: string, server: string, preview: string}}}
 */

const LAYERS = {
  OSM: {
    title: 'OSM',
    server: null,
    preview: require('../sources/types/OSM.png')
  },
  Baidu: {
    title: '百度',
    server: 'http://online{index}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20170301&scaler=1&p=1',
    preview: require('../sources/types/Baidu.png')
  },
  Amap: {
    title: '高德',
    server: 'http://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn',
    preview: require('../sources/types/Amap.png')
  },
  TDT: {
    title: '天地图',
    // vec_w: 矢量底图
    // cva_w: 矢量注记
    // img_w: 卫星影像底图
    // cia_w: 影像注记
    // ter_w: 地形底图
    // cta_w: 地形注记
    // ibo_w: 境界（省级以上）
    server: ['vec_w', 'cva_w', 'ibo_w'],
    preview: require('../sources/types/Amap.png')
  },
  SuperMap: {
    title: '超图',
    server: 'http://53.1.238.17/iserver/services/map-pgisvec/rest/maps/pgisvecv1',
    preview: require('../sources/types/SuperMap.png')
  },
  Google: {
    title: '谷歌',
    server: 'http://172.19.40.108:8081/maptile/googlemaps/roadmap/{z}/{x}/{y}.png',
    preview: require('../sources/types/Google.png')
  },
  Founder: {
    title: '方正',
    server: 'http://127.0.0.1:3000/proxy',
    preview: require('../sources/types/Founder.png')
  },
  EzMap: {
    title: '山海经纬',
    server: 'http://10.8.6.103/PGIS_S_TileMapServer/Maps/BJSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0',
    preview: require('../sources/types/Founder.png')
  },
  FcMap: {
    title: '航天精一',
    server: 'http://68.26.21.71/images/GetImage.do?method=showImageRedisBytable&jinyi_admin:MA_PGISSLDT&version=v1',
    preview: require('../sources/types/Founder.png')
  },
  Custom: {
    title: '自定义',
    handler: function (opt, config) {
    }
  }
}


// 验证配置的名称是否存在
export function validate(key) {
  const keys = Object.keys(LAYERS)
  const valid = keys.includes(key)
  if (!valid) {
    throw new Error(`图层配置 ${key} 不存在`)
  }
  return valid
}


/**
 * 更新图层服务配置
 * @param {Object} layers 图层配置信息对象
 *
 * @example
 *
 * setLayersConfig({
 *  Baidu: {
 *    title:'百度地图'
 *  }
 * })
 *
 */
export function set(layers) {
  Object.keys(layers).forEach(key => {
    const layer = layers[key]
    Object.assign(LAYERS[key], layer)
  })
}

/**
 * 获取图层服务配置
 * @param {String} [key=null] 图层名称,为null时表示获取全部图层配置
 * @param {boolean} [toArray=false] 是否转换成数组
 * @return {Object|Array}
 */
export function get(key = null, toArray = false) {
  if (key && validate(key)) {
    return LAYERS[key]
  }
  if (!toArray) {
    return LAYERS
  }
  return Object.keys(LAYERS).map(key => {
    return {
      name: key,
      ...LAYERS[key]
    }
  })
}
