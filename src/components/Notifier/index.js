import React, { Component } from "react";
import classnames from 'classnames';

class Notifier extends  React.Component {
     render() {
          const notifyclass = classnames('notify', {
               danger: this.props.offline
          });
          const message = this.props.offline ?
               `
               You are offline, no worries send pictures.
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
