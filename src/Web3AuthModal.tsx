import React from 'react';
import { Web3Auth } from "@web3auth/web3auth";

export default class Web3AuthModal extends React.Component{
  run = async () => {
    const web3auth = new Web3Auth({
      clientId: "BF7aXxc4cr42ocNPxUFNwMs5kOY036iE3qjFOF_zgapRNM06WilmlSdgE4i7gVuF8xjM3enBLHsZW0Pr6Ooi6gc", // Get your Client ID from Web3Auth Dashboard
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
    return <>Modal</>
  }
}