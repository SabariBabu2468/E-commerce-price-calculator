function calculateTotalPrice(cart,discount=0){
    let totalprice=0
    cart.forEach(function(item){
        totalprice=totalprice+item.price*item.quantity;

    })
    discount=totalprice*(discount/100);
    let finalprice=totalprice-discount;
    return {totalprice,discount,finalprice};
}

module.exports={calculateTotalPrice}