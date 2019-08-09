import Ping from '../src/main'
import {
    getLoadTime
} from '../src/utils/check'
import {
    expect
} from 'chai';

import { JSDOM } from 'jsdom';
const window = (new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`, { resources: "usable" })).window;
(global as any).document = window.document;;
(global as any).window = window;

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
    it('getLoadTime img onload', function(){
        getLoadTime('https://timgsa.baidu.com/timg?test=0.8224775295479003image&quality=80&size=b9999_10000&sec=1564057772998&di=708714cd53be9a59b468d1472778a34f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F06%2F20160806232840_WZCjT.jpeg').then((result:any) => {
            expect(result.time).to.not.equal(-1);
        });
    })
})