import React from 'react';



function HomeComponent (){
    return (

        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"></input>
            <input type="hidden" name="hosted_button_id" value="FPPXJN5PVJUF4"></input>
            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"></input>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
        </form>

    )
}

export default HomeComponent;