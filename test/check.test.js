import Ping from '../dist/ping-url.esm.js'
import {
    expect
} from 'chai';

describe('ping-url check', function(){
    it('check m.baidu.com', function(){
        Ping.check('m.baidu.com').then(result => {
            expect(result).to.have.property('status');
            expect(result).to.have.property('time');
        });
    })
    it('check not url', function(){
        Ping.check('666').then(result => {
        }, result => {
            expect(result.status).to.equal(false);
            expect(result.msg).to.equal('url is not correct!');
        });
    })
    it('getStatus true', function(){
        Ping.check('http://m.baidu.com').then(result => {
            expect(result.status).to.equal(true);
        });
    })
    it('getStatus false', function(){
        Ping.check('http://ertfffferer.notexist.com').then(result => {
            expect(result.status).to.equal(false);
        });
    })
    it('getLoadTime has time', function(){
        Ping.check('http://m.baidu.com').then(result => {
            expect(result.time).to.not.equal(-1);
        });
    })
    it('getLoadTime has no time', function(){
        Ping.check('http://ertfffferer.notexist.com').then(result => {
            expect(result.time).to.equal(-1);
        });
    })
})