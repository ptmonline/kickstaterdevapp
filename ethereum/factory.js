import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5AdBFb0783B1f091E7239B64C9822369d44B5404'
);

export default instance;