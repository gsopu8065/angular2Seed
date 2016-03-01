import {HTTP_PROVIDERS} from "angular2/http";
import {First} from './first/first.ts'
import {bootstrap}    from 'angular2/platform/browser'

bootstrap(First, [HTTP_PROVIDERS]);