import Ping from '../src/main';
import {
    expect
} from 'chai';

describe('ping-url config', function(){
    it('config default', function(){
        const result = Ping.config({
            protocol: 'https'
        });
        expect(result).to.equal('https');
    })
    it('config error protocol', function(){
        const protocol = 'tcp';
        expect(function(){
            Ping.config({
                protocol: protocol
            });
        }).to.throw(`protocolList not includes ${protocol}`);
    })
})