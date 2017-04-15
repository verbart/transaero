'use strict';

import polyfills from './libraries/polyfills';

import 'remodal';
import '../../components/hero/hero';
import '../../components/tabs/tabs';
import '../../components/auth/auth';


$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
});
