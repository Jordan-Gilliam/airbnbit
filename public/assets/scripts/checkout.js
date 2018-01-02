// payment redirect handeler

function checkSelectionId() {
    var response = document.getElementById('listId').value;
    if (response == 1)
        location = 'https://bitpay.com/cart/add?itemId=WYgahh4P3o4S5NV1Fu2wBe';
    else if (response == 2)
        location = 'https://bitpay.com/cart/add?itemId=EQ5f9Dbfgk8K3G2Xom2Kok';
    else if (response == 3)
        location = 'https://bitpay.com/cart/add?itemId=Um8cpRUzoAxqG8QJHdMwS9';
    else if (response == 4)
        location = 'https://bitpay.com/cart/add?itemId=Nd2smrtN1V7ERnf4nmyrTW';
    else if (response == 5)
        location = 'https://bitpay.com/cart/add?itemId=9wbCNRHkzfDZqo63BFBPa4';
    else if (response == 6)
        location = 'https://bitpay.com/cart/add?itemId=9Rq79fMHNecvcRe4QMF84U';
}
