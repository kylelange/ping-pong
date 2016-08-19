# Table Tennis Hijinks!

#### helping people pretend to play sports with math: since 2016.

#### by Kyle Lange + (http://github.com/kylelange)

## Description

_{This is a silly table tennis game that uses numbers divisible by 3,5, and 15 to simulate a game of ping pong. [see it live, here:] (https://kylelange.github.io/ping-pong/)}_

## Setup/Installation Requirements

* _clone the repository_
* _use Git Clone in your terminal and make sure to link to my [github site:] (http://github.com/kylelange)_
* _check your git log to see all of my commits!_
* _use git remote -v to make sure you are the origin user_
* _don't forget to open atom with: atom ._


## Known Bugs

_There are no known bugs in this program as of Aug. 19, 2016_

## Support and Contact Details

_Any issues with this site, please [e-mail me] (baronsintrees@gmail.com) here._

## Technologies Used

1. **html**
2. **CSS and Bootstrap**
3. **Javascript and jquery-3**
4. **The Human Brain**

## Specs/ Behavior Driven Development: Expected Outcomes.

1. The program will accept user input and display each number in the set via .append after running through a for loop that will.  This UI logic is first because we, as students, do not have enough console knowledge to forgo applying UI logic first
  * _Input: 3_
  * _Output: 1,2,3_
2.The program will accept user input and display "Ping Pong" for numbers divisible by 15 via a for loop with an if statement set to: userInput % 15 === 0 (medulo is = 0, therefor the # has no remainder and is divisible by 15).
  * _Input: 15_
  * _Output: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,ping pong_
3.The program will accept user input and display "pong" for numbers divisible by 5 via the same for loop with an else if statement set to: userInput % 5 === 0 (medulo is = 0, therefor the # has no remainder and is divisible by 5).
  * _Input: 15_
  * _Output: 1,2,3,4,pong,6,7,8,9,pong,11,12,13,14,pingpong_
4.The program will accept user input and display "ping" for numbers divisible by 3 via the same for loop with an if statement set to: userInput % 3 === 0 (medulo is = 0, therefor the # has no remainder and is divisible by 3).
  * _Input: 15_
  * _Output: 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong_
5.
  * __
  * __
### License


Copyright (c) 2016 **_Kyle Lange_**

This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
