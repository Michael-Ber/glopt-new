'use strict';

import { burgerMenu } from "./burger.js";
import { slider } from "./slider.js";

window.addEventListener('DOMContentLoaded', () => {
    burgerMenu('.burger-btn', '.burger-menu', null, 'burger-btn_active', 'burger-menu_active', null, '.burger-close');
    slider();
});