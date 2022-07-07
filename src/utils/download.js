
/* --------------  GET方式 ----------------- */
/**
 * 模拟a标签下载
 * @param {String} url 目标文件地址
 * @param {String} filename 想要保存的文件名称
 */
function downloadA() {
    this.getBlob(data.url, () => {
        this.saveAs(blob, data.name)
    })
}
function  getBlob(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('SystemCode', window.projectConfig.systemCode);
    xhr.setRequestHeader('Authorization', getToken());
    xhr.responseType = 'blob';
    xhr.onload = function() {
        if (xhr.status === 200) {
            cb(xhr.response);
        }
    };
    xhr.send()
};

/**
 * 保存
 * window.URL 支持IE10及以上
 * @param {Blob} Blob
 * @param {String} filename 想要保存的文件名称
 */
function saveAs(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        const link = document.createElement('a');
        const body = document.querySelector('body');

        link.href = window.URL.createObjectURL(blob);
        link.download = filename;

        /* fix Firefox */
        link.download.style.dispaly = 'none';
        body.appendChild(link);

        link.click();
        body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
    }
}


/* --------------  POST方式 ----------------- */
/**
 * axios下载文件流方式 - post(此方法不兼容IE) 
 * window.URL 支持IE10及以上
 * @param {Blob} Blob
 * @param {String} filename 想要保存的文件名称
 */
function downloadPost(data, method) {
    let newMethod = 'post';
    if (method) {
        newMethod = method
    }
    const newData = {
        method: newMethod,
        url: data.url,
        /* headers里面设置token */
        headers: {
            Authorization: getToken(),
            SystemCode: window.projectConfig.systemCode,
        },
        /* 二进制流文件， 一定要设置成blob， 默认是json */
        responseType: 'blob',
    };
    if (newMethod === 'post') {
        newData.data = data.params;
    } else {
        newData.params = data.params;
    };
    Axios(newData)
        .then((response) => {
            const blob = new Blob([response.data]);
            const downloadElement = document.createElement('a');
            const href = window.URL.createObjectURL(blob); // 创建下载的链接
            downloadElement.href = href;
            downloadElement.download = data.name; // 下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement) // 下载完成移除元素
            window.URL.revokeObjectURL(href); // 释放掉blob对象

        })
        .catch((error) => {
            console.log(error);
        });
}