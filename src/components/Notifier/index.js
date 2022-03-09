import React, { Component } from "react";
import classnames from 'classnames';

class Notifier extends Component {
     render() {
          const notifyclass = classnames('notify', {
               danger: this.props.offline
          });
          const message = this.props.offline ?
               `
               Image saved locally, it will be uploaded to bride and groom once internet connection is detected.
        ` :
               `
          Take a picture it will be uploaded to groom and bride.
        `;
          return (
               <div className={notifyclass}>
                    <p>
                         <em>{message}</em>
                    </p>
               </div>
          );
     }
}

export default Notifier;
