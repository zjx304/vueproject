
// 图片根路径
export const staticPath = 'http://statics.zhuishushenqi.com';

// 存储localStorage时设置前缀
const storePrefix = 'ZJX_';

// 存储localStorage
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(storePrefix + name, content);
}

// 获取localStorage
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(storePrefix + name);
}

// 删除localStorage
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(storePrefix + name);
}


