/**
 * Created by srujangopu on 2/18/16.
 */
/// <reference path="../../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts" />
import {describe,expect,it,inject,beforeEachProviders} from 'angular2/testing';
import {provide, Injector} from 'angular2/core';
import {Http, HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {First} from "./first";

describe('MyService Tests', () => {
    let injector,
        backend,
        mockBackend,
        httpService,
        _first;

    beforeEach(() => {
        injector = Injector.resolveAndCreate([
            HTTP_PROVIDERS,
            MockBackend,
            provide(XHRBackend, {useClass: MockBackend}),
            First
        ]);

        mockBackend = injector.get(MockBackend);
        backend = injector.get(XHRBackend);
        httpService = injector.get(Http);
        _first = injector.get(First);
    });

    it('Should be defined', () => {
        expect(_first).toBeDefined();
    });
});