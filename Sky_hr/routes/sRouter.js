'use strict'

let { Router } = require('express')
let router = Router();

const model = require('../models/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base/index');
});

// new Promise 골부  es 5
// async await 공부  es 6


// id: {type: String, required: true},
// password: {type: String, required: true},
// name: {type: String, required: true},
// phone: {type: String, required: true},
// age: {type: Number, required: true},
// store:{type: String, required: true},
// position: {type: String, required: true},
// createDate : {type: Date, default: new Date()}

router.get('/schedule', async function(req, res, next){
    //console.log(model['schedule'])
    try{

        // const data = await userModel.find({});
        //   console.log(scheduleModel)
        let scheduleModel = await model['schedule'];
       // let userModel = new model['user'];
        let data = scheduleModel.find({"name":"ryan"});
        console.log(data)
        //scheduleModel.id = '1';
        //scheduleModel.name = 'Ryan';
        //scheduleModel.save();
        //let find = scheduleModel.find({});
        // userModel.id = 'test'
        // userModel.password = 'test'
        // userModel.userName = 'test'
        // userModel.phone = 'test'
        // userModel.age = 123123
        // userModel.store = 'test'
        // userModel.position = 'test'
        // userModel.save();


    }catch(e){
        console.log(e)
    }

    //try{
     //const scheduleModel =  model['schedule'];
    //  scheduleModel.id = '1'
    //  scheduleModel.name = 'Ryan'
    // scheduleModel.save();

    //let find = scheduleModel.find({}).then();
    //console.log(find)

    // userModel.id = req.body.id
    // userModel.id =
    // userModel.password = 'test'
    // userModel.name = 'test'
    // userModel.phone = 'test'
    // userModel.age = 123123
    // userModel.store = 'test'
    // userModel.position = 'test'
    // userModel.save()

    // const data = await userModel.find({});
  //   console.log(scheduleModel)
  //
  //
  // }catch (e) {
  //   console.log(e)
  // }

   res.render('schedule/index');
})

router.get('/schedule/detail', function(req, res, next){
  res.render('schedule/detail');
})

router.get('/schedule/history', function(req, res, next){
  res.render('schedule/history');
})


module.exports = router;

// * Pagegnation
//
// try {
//   let page = parseInt(req.params.page);
//   let low_length = 15;
//   if (!page) {
//     throw new ParameterError(`Requied Parameter - page was not sent`);
//   }
//   let start = (page - 1) * low_length;
//   const allQuestion = await model[`Question`]
//       .find()
//       .populate('comments')
//       .skip(start)
//       .limit(start + low_length)
//       .limit(low_length)
//       .sort({"_id":-1})
//       .catch((e)=>{
//         throw new MongooseError(e)
//       });
//   return res.json({status: 'success', data : allQuestion})
// }catch (e) {
//   next(e)
// }
// });