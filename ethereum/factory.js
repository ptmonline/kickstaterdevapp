import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xc7789365DE70f491b2acb24D1753792A85e72f8d'
);

export default instance;