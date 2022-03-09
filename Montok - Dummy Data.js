var $scope = $('#site-content-container > .switch').scope()
$scope.$apply(function () { 

    var get_date = function(minutes){
        var local_now = new Date()
        local_now.setMinutes(local_now.getMinutes() - local_now.getTimezoneOffset())
        local_now.setMinutes(local_now.getMinutes() + minutes)
        
        return local_now.toJSON()
            .slice(0, 19)
            .replace(/-/g,'')
            .replace(/T/g,'')
            .replace(/:/g,'');;
    }

    var res = {
        "success": true,
        "data": [
            {
                "Id": 1,
                "Name": "Toko Utama",
                "Type": "shopee",
                "Username": "griyacantikfashion",
                "Password": "s3S8I6DE8bZfThYrEd1RWQlHT8oT5BO+fWIXfWu60BhWKw3BGhyYbJwLturHGUjB5uVJnUe0q6qFM5BTW6oXDqo6Xa/Y1j6A2VleZXkvu0cLafCbj8FzIRhQ3YpaeOav",
                "Loggenin": 1,
                "StoreName": "Cahaya Elektronik",
                "Saldo": 9827800,
                "NotifOrderUnpaid": 0,
                "NotifOrderUnpaidNewAt": 0,
                "NotifOrderPending": 5,
                "NotifOrderPendingNewAt": get_date((62 * 60) + 26),
                "NotifOrderShipping": 16,
                "NotifOrderShippingNewAt": get_date(5 * 60),
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 34,
                "NotifChatNewAt": get_date(-((30 * 60) + 0)),
                "NotifChatLastAt": get_date(-((30 * 60) + 0)),
                "NotifComment": 0,
                "NotifCommentNewAt": 0,
                "NotifCommentLastAt": 0,
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://cf.shopee.co.id/file/e1c50fc4bdc88dfaa97bd595709adc6c"
                }
            },
            {
                "Id": 2,
                "Name": "Toko Utama",
                "Type": "bukalapak",
                "Username": "-",
                "Password": "-",
                "Loggenin": 1,
                "StoreName": "Global Grosir",
                "Saldo": 4084900,
                "NotifOrderUnpaid": 0,
                "NotifOrderUnpaidNewAt": 0,
                "NotifOrderPending": 2,
                "NotifOrderPendingNewAt": get_date((16 * 60) + 3),
                "NotifOrderShipping": 5,
                "NotifOrderShippingNewAt": get_date((0 * 60) + 36),
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 7,
                "NotifChatNewAt": get_date(-((1 * 60) + 30)),
                "NotifChatLastAt": get_date(-((1 * 60) + 30)),
                "NotifComment": 3,
                "NotifCommentNewAt": get_date(-((0 * 60) + 10)),
                "NotifCommentLastAt": get_date(-((0 * 60) + 10)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/4/14/9e213b92-33c6-47b2-91b5-7b7b8d448096.jpg"
                }
            },
            {
                "Id": 3,
                "Name": "Toko Utama",
                "Type": "tokopedia",
                "Username": "-",
                "Password": "-",
                "Loggenin": 1,
                "StoreName": "Global Grosir",
                "Saldo": 76458500,
                "NotifOrderUnpaid": 0,
                "NotifOrderUnpaidNewAt": 0,
                "NotifOrderPending": 7,
                "NotifOrderPendingNewAt": get_date((29 * 60) + 52),
                "NotifOrderShipping": 27,
                "NotifOrderShippingNewAt": get_date((26 * 60) + 31),
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 16,
                "NotifChatNewAt": get_date(-((0 * 60) + 26)),
                "NotifChatLastAt": get_date(-((0 * 60) + 26)),
                "NotifComment": 6,
                "NotifCommentNewAt": get_date(-((50 * 60) + 0)),
                "NotifCommentLastAt": get_date(-((50 * 60) + 0)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/4/14/9e213b92-33c6-47b2-91b5-7b7b8d448096.jpg"
                }
            },
            {
                "Id": 4,
                "Name": "Toko Utama",
                "Type": "lazada",
                "Username": "asdada",
                "Password": "VmClNZ6JSOTF/qzrALfZJB9iEbwvyflyFewFMPc90NwssCfaaMFghWmluUAh3r3iIYrNQBUECoZEVl9bBtDegiRMPJCFkKQDU49MCSacgomnhnY1i4JCi1PSnZKlupnd",
                "Loggenin": 1,
                "StoreName": "Global Grosir",
                "Saldo": 16996100,
                "NotifOrderUnpaid": 0,
                "NotifOrderUnpaidNewAt": 0,
                "NotifOrderPending": 4,
                "NotifOrderPendingNewAt": get_date((23 * 60) + 45),
                "NotifOrderShipping": 16,
                "NotifOrderShippingNewAt": get_date((16 * 60) + 34),
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 32,
                "NotifChatNewAt": get_date(-((1 * 60) + 24)),
                "NotifChatLastAt": get_date(-((1 * 60) + 24)),
                "NotifComment": 0,
                "NotifCommentNewAt": get_date(-((0 * 60) + 1)),
                "NotifCommentLastAt": get_date(-((0 * 60) + 1)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/4/14/9e213b92-33c6-47b2-91b5-7b7b8d448096.jpg"
                }
            },
            {
                "Id": 5,
                "Name": "Toko Utama",
                "Type": "shopee",
                "Username": "shop_yasmine1",
                "Password": "xxbJ/um3P1a/zwCjtHykI10v9LQamKSwszPkX3E9S1Pb9N/dwfDejO1DZET2L+qX1Ahpteg8pbzYTxYEVxDo8eBPrs084K8IPZZJfvJUYfWvduprYd6h94AF113u8B2k",
                "Loggenin": 1,
                "StoreName": "Sumber Teknik",
                "Saldo": 12921800,
                "NotifOrderUnpaid": 0,
                "NotifOrderUnpaidNewAt": 0,
                "NotifOrderPending": 0,
                "NotifOrderPendingNewAt": 0,
                "NotifOrderShipping": 0,
                "NotifOrderShippingNewAt": 0,
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 29,
                "NotifChatNewAt": get_date(-((0 * 60) + 45)),
                "NotifChatLastAt": get_date(-((0 * 60) + 45)),
                "NotifComment": 0,
                "NotifCommentNewAt": get_date(-((0 * 60) + 1)),
                "NotifCommentLastAt": get_date(-((0 * 60) + 1)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/9/6/e6491ad2-0805-4cf4-9a39-b885027860bf.jpg"
                }
            },
            {
                "Id": 6,
                "Name": "Toko Baru",
                "Type": "tokopedia",
                "Username": "Bangunsariiii.seller",
                "Password": "rg5qzrJQm/ob1vMDAaiqoiVpou+oDLRd5YCpQnY7v/qbbcC2Ox8w6EpRqGsUCpZvt5akhlHb+SVUeocA6uMUbgo5iFBqlblFcVa7R/xXESObnoJu8UQdunX+1eJfRr39",
                "Loggenin": 1,
                "StoreName": "OtoMania Store",
                "Saldo": 478200,
                "NotifOrderUnpaid": 0,
                "NotifOrderUnpaidNewAt": 0,
                "NotifOrderPending": 4,
                "NotifOrderPendingNewAt": get_date((0 * 60) + 42),
                "NotifOrderShipping": 2,
                "NotifOrderShippingNewAt": get_date((4 * 60) + 17),
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 3,
                "NotifChatNewAt": get_date(-((0 * 60) + 1)),
                "NotifChatLastAt": get_date(-((0 * 60) + 1)),
                "NotifComment": 5,
                "NotifCommentNewAt": get_date(-((0 * 60) + 30)),
                "NotifCommentLastAt": get_date(-((0 * 60) + 30)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuItNiffM1LCbma8UWZ1k7symLKgjGHy9xlibZ6s-oGXHpRzQ-XnD4GG1bV6qAfs-XKh4&usqp=CAU"
                }
            },
            {
                "Id": 7,
                "Name": "Toko Baru",
                "Type": "lazada",
                "Username": "IslamLaris",
                "Password": "tylw+j3VOBypwVZdbCLsoUTGPPr0TGBaorRYgMASw2rAVBs3YEpoI8j+F8luiTkwgdKgzo/63yZrDqbLaOQUNcebz952wLQF7sOSMgy4xPMIc1R3B0ic8YM1jd6YzHmu",
                "Loggenin": 1,
                "StoreName": "Sahabat Bunda Store",
                "Saldo": 724000,
                "NotifOrderUnpaid": 0,
                "NotifOrderUnpaidNewAt": 0,
                "NotifOrderPending": 0,
                "NotifOrderPendingNewAt": 0,
                "NotifOrderShipping": 0,
                "NotifOrderShippingNewAt": 0,
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 6,
                "NotifChatNewAt": get_date(-((0 * 60) + 18)),
                "NotifChatLastAt": get_date(-((0 * 60) + 18)),
                "NotifComment": 0,
                "NotifCommentNewAt": get_date(-((0 * 60) + 1)),
                "NotifCommentLastAt": get_date(-((0 * 60) + 1)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://media1.popsugar-assets.com/files/thumbor/LS_8uhfgtbEDLOHNE4e8cwIGGyU/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/07/20/935/n/24155406/054f8cb960f73f9cd21770.35899269_/i/cute-baby-clothes-from-old-navy.webp"
                }
            },
            {
                "Id": 8,
                "Name": "Toko Baru",
                "Type": "shopee",
                "Username": "sundayberkah",
                "Password": "qM4eD3AsTrSfO5srMV3hLQRWSuSsVgv2O4etQl/fqENc4MEHSrVEqD7ayuQoBxZ6UUAUg4C5v/6Ui56t/+uhv3ZVp26rjrGRmIp7QT0tUgwHc8Bn4K6Ch5ZhTB7QOag3",
                "Loggenin": 1,
                "StoreName": "Indriana Shop",
                "Saldo": 86500,
                "NotifOrderUnpaid": 10,
                "NotifOrderUnpaidNewAt": get_date((0 * 60) + 3),
                "NotifOrderPending": 0,
                "NotifOrderPendingNewAt": 0,
                "NotifOrderShipping": 2,
                "NotifOrderShippingNewAt": get_date((47 * 60) + 15),
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 0,
                "NotifChatNewAt": get_date(-((0 * 60) + 0)),
                "NotifChatLastAt": get_date(-((0 * 60) + 0)),
                "NotifComment": 0,
                "NotifCommentNewAt": get_date(-((0 * 60) + 0)),
                "NotifCommentLastAt": get_date(-((0 * 60) + 0)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://i.shgcdn.com/8e6a068e-0baa-485e-92bc-71fa862c424d/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                }
            },
            {
                "Id": 9,
                "Name": "Toko Baru",
                "Type": "lazada",
                "Username": "asyratunmart",
                "Password": "uYIFxY6tHyppJRATWYAnlvQ1ULo0Co1JEHmFNlCZqBE7+VJAw8VXC5HLkeHOywISvH+VzchEtlX7XxcJwbJL2KMdhPphUM69IPVeoLM0heQ+e0pweobWHjQQx/etr//O",
                "Loggenin": 1,
                "StoreName": "Indriana Shop",
                "Saldo": 0,
                "NotifOrderUnpaid": 0,
                "NotifOrderUnpaidNewAt": 0,
                "NotifOrderPending": 0,
                "NotifOrderPendingNewAt": 0,
                "NotifOrderShipping": 2,
                "NotifOrderShippingNewAt": get_date((47 * 60) + 15),
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 2,
                "NotifChatNewAt": get_date(-((0 * 60) + 16)),
                "NotifChatLastAt": get_date(-((0 * 60) + 16)),
                "NotifComment": 0,
                "NotifCommentNewAt": get_date(-((0 * 60) + 1)),
                "NotifCommentLastAt": get_date(-((0 * 60) + 1)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://i.shgcdn.com/8e6a068e-0baa-485e-92bc-71fa862c424d/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                }
            },
            {
                "Id": 10,
                "Name": "Toko Baru",
                "Type": "shopee",
                "Username": "RaestyColection",
                "Password": "DT6SGu7nT17hDGArfEjshJ+j/KXsyfSvU+8mocxm8bhYajmIARoc+SOuu/fa/gCklFRSyu6NdPhv3GZLuCtNeesFbWYaDcUGqPy2yJUa4ckQYMz/fC2/IFeJ1GZmQAEJ",
                "Loggenin": 1,
                "StoreName": "KiddyZone",
                "Saldo": 942000,
                "NotifOrderUnpaid": 6,
                "NotifOrderUnpaidNewAt": get_date((0 * 60) + 3),
                "NotifOrderPending": 0,
                "NotifOrderPendingNewAt": 0,
                "NotifOrderShipping": 0,
                "NotifOrderShippingNewAt": 0,
                "NotifOrderCancel": 0,
                "NotifOrderCancelNewAt": 0,
                "NotifOrderRefund": 0,
                "NotifOrderRefundNewAt": 0,
                "NotifChat": 0,
                "NotifChatNewAt": get_date(-((0 * 60) + 1)),
                "NotifChatLastAt": get_date(-((0 * 60) + 1)),
                "NotifComment": 0,
                "NotifCommentNewAt": get_date(-((0 * 60) + 1)),
                "NotifCommentLastAt": get_date(-((0 * 60) + 1)),
                "IsActive": 1,
                "LastUpdate": get_date(-((0 * 60) + 0)),
                "LastCheck": get_date(-((0 * 60) + 0)),
                "Meta": {
                    "img": "https://images.tokopedia.net/img/cache/700/product-1/2019/12/4/batch-upload/batch-upload_8e41921f-cb7e-4715-8f1b-88995fc390b9"
                }
            }
        ],
        "bot_is_running": true,
        "open_browser_profile": null
    }


    function timeout() {
        if( $scope.__looping_timeout ){
            // Looping timeout reset
            clearTimeout($scope.__looping_timeout);
        }

        $scope.__looping_timeout = setTimeout(function () {
            // Do Something Here
            // Then recall the parent function to
            // create a recursive loop.

            for (var i = $scope.listProfiles.length - 1; i >= 0; i--) {
                $scope.listProfiles[i].LastUpdate = get_date(-((0 * 60) + 0));
                $scope.listProfiles[i].LastCheck = get_date(-((0 * 60) + 0));
                // console.log("Set last update:", $scope.listProfiles[i].StoreName, $scope.listProfiles[i].LastUpdate)
            }

            timeout();
        }, 60 * 1000);
        // Bot diperbarui per 60 detik, dengan lastUpdate 0 menit yang lalu (a few seconds ago)
    }

    timeout()

    $scope.listProfiles = res.data.map($scope.sort_data_profile)
    $scope.botIsRunning = res.bot_is_running
});
