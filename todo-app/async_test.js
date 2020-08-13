// function increase(number) {
//   const promise = new Promise((resolve, reject) => {
//     // resolve는 성공, reject는 실패
//     setTimeout(() => {
//       const result = number + 10;
//       if (result > 50) {
//         // 50보다 높으면 에러 발생시키기
//         const e = new Error('NumberTooBig');
//         return reject(e);
//       }
//       resolve(result); // number 값에 +10 후 성공 처리
//     }, 1000);
//   });
//   return promise;
// }
 
// increase(0)
// .then(number => {
//   // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
//   console.log(number);
//   return increase(number); // Promise를 리턴하면
// })
// .then(number => {
//   // 또 .then으로 처리 가능
//   console.log(number);
//   return increase(number);
// })
// .then(number => {
//   console.log(number);
//   return increase(number);
// })
// .then(number => {
//   console.log(number);
//   return increase(number);
// })
// .then(number => {
//   console.log(number);
//   return increase(number);
// })
// .catch(e => {
//   // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
//   console.log(e);
// });




// function increase(number, callback) {
//   setTimeout(() => {
//       const result = number + 10;
//     if (callback) {
//       callback(result);
//     }
//   }, 1000)
//   }

//   console.log('작업 시작');
//   increase(0, result => {
//     console.log(result);
//     increase(result, result => {
//       console.log(result);
//       increase(result, result => {
//         console.log(result);
//         increase(result, result => {
//           console.log(result);
//           console.log('작업 완료');
//         });
//       });
//     });
//   });

function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) { // 50보다 높으면 에러 발생시키기
        const e = new Error('NumberTooBig');
                return reject(e);
      }
            resolve(result); // number 값에 +10 후 성공 처리
    }, 1000)
  });
  return promise;
}
async function runTasks() {
  try { // try/catch 구문을 사용하여 에러를 처리합니다.
    let result = await increment(0);
    console.log(result);
    result = await increment(result);
    console.log(result);
    result = await increment(result);
    console.log(result);
    result = await increment(result);
    console.log(result);
    result = await increment(result);
    console.log(result);
    result = await increment(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}


// function run_test() {
//   increase(0)
//   .then(number => {
//     // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
//     console.log(`[INCREASE]${number}`);
//     return increase(number); // Promise를 리턴하면
//   })
//   .then(number => {
//     // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
//     console.log(`[INCREASE2]${number}`);
//     return increase(number); // Promise를 리턴하면
//   })

  
//   increase(1)
//   .then(number => {
//     // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
//     console.log(`[INCREASE3]${number}`);
//     return increase(number); // Promise를 리턴하면
//   })
//   .then(number => {
//     // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
//     console.log(`[INCREASE4]${number}`);
//     return increase(number); // Promise를 리턴하면
//   })

//   console.log("바보")
// }


// console.log("Started");
// run_test();

// // 1) [INCREASE]10 바보
// // 2) 바보 [INCREASE]10
// // 3) 에러난다
// // 4) [INCREASE]10
// // 5) 바보