import React from 'react';
import { Web3Auth } from "@web3auth/web3auth";

export default class Web3AuthModal extends React.Component{
  run = async () => {
    const web3auth = new Web3Auth({
      clientId: "BM8-nOFNYYD7KzZ5dV-foKHktttOFCzecoB2NYvkOFr-H17b0MKQeiGIESlkMmNiedbo7DI0zOuVyPf8zUS_z0oc", // Get your Client ID from Web3Auth Dashboard
      chainConfig: {
        chainNamespace: "eip155",
        chainId: "0x1",
      },
    });

    await web3auth.initModal();
  }

  componentDidMount(){
    this.run();
  }

  render(){
    return <div>Web3 Auth</div>
  }
}