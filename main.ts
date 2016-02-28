/**
 * Created by srujangopu on 2/27/16.
 */
import {bootstrap}    from 'angular2/platform/browser'
import {First} from './first/first.ts'
import {HTTP_PROVIDERS} from "angular2/http";
bootstrap(First, [HTTP_PROVIDERS]);