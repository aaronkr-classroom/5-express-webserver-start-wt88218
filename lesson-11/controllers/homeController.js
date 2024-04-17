// homeController.js
"use strict";

/**
 * Listing 10.2
 */
exports.respondWithName1 = (req, res) => {

    res.render('index');
}

/**
 * Listing 10.3
 */
// exports.getHome = (req, res) => { res.render('index'); } // "/"index
// exports.getContact = (req, res) => {} // "/"contact Get method
// exports.postContact = (req, res) => {} // "/"contact Post method

exports.respondWithName = (req, res) => {
    console.log(req.params);
    let paramsName = req.params.myName; // 라우트의 매개변수 /name/:myName
    res.render('index', { 
        name: paramsName,
        people:{
            usa:{
                einstein: "Albert Einstein",
                musk: "Elon Musk",
                jobs: "Steve Jobs"
            },
            Korea: {
                psy: "싸이다!",
                kim: "김예수",
            },
            mexico: {
                jesus: "jesus Alvarez",
                
            }
        }
        }); //객체전송
};