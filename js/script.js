// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: March 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function is for calculating the area of a trapezoid
 */
function calculate() {
 // input
  const abase = parseInt(document.getElementById('a-base').value)
  const bbase = parseInt(document.getElementById('b-base').value)
  const trapezoidheight = parseInt(document.getElementById('height').value)

  // process
  const area = ((abase + bbase) / 2) * trapezoidheight

  // output
  document.getElementById ('area-of-trapezoid').innerHTML = "The Area of your trapezoid is: " + area + " cm² "
}