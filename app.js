(function () {
    var btn = document.getElementById('btn');

    if (!btn) {
        console.log('No button :(');
        return;
    }

    btn.addEventListener('click', function () {
        const arr1 = [];
        const arr2 = [];
        const arr3 = [];

        console.time('push');
        for (let i = 0; i <= 100000; ++i) {
            arr1.push(i);
        }
        console.timeEnd('push');

        console.time('unshift');
        for (let i = 100000; i >= 0; --i) {
            arr2.unshift(i);
        }
        console.timeEnd('unshift');

        console.time('splice');
        for (let i = 0; i <= 100000; ++i) {
            arr3.splice(i, 0, i);
        }
        console.timeEnd('splice');

        console.log(arr1);
        console.log(arr2);
        console.log(arr3);
    }, false);
})();