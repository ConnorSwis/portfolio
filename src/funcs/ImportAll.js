const importAll = () => {
    let images = {};
    let r = require.context('../assets', false, /\.(png|jpe?g|svg)$/)
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default importAll;