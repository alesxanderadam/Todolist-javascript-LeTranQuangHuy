var validation = {
    kiemTraRong: function (value, errId, name) {
        if (value === '' || value === 0) {
            document.getElementById(errId).className = 'text d-block';
            document.getElementById(errId).innerHTML = `${name} không được bỏ trống !!`
            return false;
        }
        document.getElementById(errId).innerHTML = ``;
        document.getElementById(errId).className = 'none';
        return true;
    },
}