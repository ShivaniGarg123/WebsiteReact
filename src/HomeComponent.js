import React,{Component} from 'react';

class HomeComponent extends Component{
    render() {
        return(
            <div>
                <h1>American Diamond Ring</h1>
                <p>This is an american diamond ring of pink color, suitable and most likely to be chosen by a girl</p>
                <p>This consist of pure american diamonds of finest quality, so you need not to worry about anything</p>
                <p>This is an american diamond ring of pink color, suitable and most likely to be chosen by a girl</p>
                <p>This is an american diamond ring of pink color, suitable and most likely to be chosen by a girl</p>
                <p>This is an american diamond ring of pink color, suitable and most likely to be chosen by a girl</p>
                <p>This is an american diamond ring of pink color, suitable and most likely to be chosen by a girl</p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"></input>
                    <input type="hidden" name="hosted_button_id" value="RSKMVSPX4WZJY"></input>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"></input>
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                </form>

            </div>
        )
    }
}
export default HomeComponent;