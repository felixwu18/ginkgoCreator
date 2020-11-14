function objToParams (obj) {
    if (!obj) { return; };
    let params = '';
    Object.keys(obj).forEach((key) => {
        params += `${key}=${obj[key]}&`;
    });
    return params.slice(0, -1);
}
