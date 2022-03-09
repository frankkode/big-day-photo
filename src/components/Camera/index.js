import React, { Component } from "react";
import ClCamera from "@components/ClCamera";
import Notifier from "@components/Notifier";
class notification extends Component {
     constructor() {
          super();
          this.state = {
               offline: false
          };
     }
     componentDidMount() {
          window.addEventListener("online", () => {
               this.setState({ offline: false });
          });

          window.addEventListener("offline", () => {
               this.setState({ offline: true });
          });
     }

     componentDidUpdate() {
          let offlineStatus = !navigator.onLine;
          if (this.state.offline !== offlineStatus) {
               this.setState({ offline: offlineStatus });
          }
     }

     render() {
          return (
               <div >
                    <Notifier offline={this.state.offline} />
                    <ClCamera offline={this.state.offline} />
               </div>
          );
     }
}

export default notification;
