angular
  .module('myApp')
  .controller('myController',myController);

myController.$inject = ['$http'];

function myController(){
  var vm = this;
  vm.periods = [
    {
      "period": "#",
      "timeStart": "Start",
      "timeEnd": "End"
    },
    {
      "period": "1 ",
      "timeStart": "7:25 AM",
      "timeEnd": "8:15 AM"
    },
    {
      "period": "2 ",
      "timeStart": "8:30 AM",
      "timeEnd": "9:20 AM"
    },
    {
      "period": "3 ",
      "timeStart": "9:35 AM",
      "timeEnd": "10:25 AM"
    },
    {
      "period": "4 ",
      "timeStart": "10:40 AM",
      "timeEnd": "11:30 AM"
    },
    {
      "period": "5 ",
      "timeStart": "11:45 AM",
      "timeEnd": "12:35 PM"
    },
    {
      "period": "6 ",
      "timeStart": "12:50 PM",
      "timeEnd": "1:40 PM"
    },
    {
      "period": "7 ",
      "timeStart": "1:55 PM",
      "timeEnd": "2:45 PM"
    },
    {
      "period": "8 ",
      "timeStart": "3:00 PM",
      "timeEnd": "3:50 PM"
    },
    {
      "period": "9 ",
      "timeStart": "4:05 PM",
      "timeEnd": "4:55 PM"
    },
    {
      "period": "10",
      "timeStart": "5:10 PM",
      "timeEnd": "6:00 PM"
    },
    {
      "period": "11",
      "timeStart": "6:15 PM",
      "timeEnd": "7:05 PM"
    },
    {
      "period": "E1",
      "timeStart": "7:20 PM",
      "timeEnd": "8:10 PM"
    },
    {
      "period": "E2",
      "timeStart": "8:20 PM",
      "timeEnd": "9:10 PM"
    },
    {
      "period": "E3",
      "timeStart": "9:20 PM",
      "timeEnd": "10:10 PM"
    }
  ];
  vm.scheduleTerms = [
    {
      "termCode": "201505",
      "termDesc": "Summer 2015",
      "termCredits": "011",
      "refreshDateTime": "8/03/2015 2:30 PM",
      "apiVersion": "1.0",
      "termSections": [
        {
          "number": "7052",
          "display": "7052",
          "courseTitle": "ABE4042C",
          "courseDesc": "Biological Engineering Design 1",
          "credits": "04",
          "termInd": "C",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Pelletier,William"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Mon","Wed"
              ],
              "meetTimeBegin": "8:30 AM",
              "meetTimeEnd": "9:20 AM",
              "meetPeriodBegin": "02",
              "meetPeriodEnd": "02",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        }
        ,{
          "number": "8059",
          "display": "8059",
          "courseTitle": "ABE4662",
          "courseDesc": "Quantification of Biological Processes",
          "credits": "04",
          "termInd": "C",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Jacobson,John"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Thu","Fri"
              ],
              "meetTimeBegin": "4:05 PM",
              "meetTimeEnd": "4:55 PM",
              "meetPeriodBegin": "09",
              "meetPeriodEnd": "09",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        },
        {
          "number": "7052",
          "display": "7052",
          "courseTitle": "SFE4042C",
          "courseDesc": "Pre-Biological Engineering Design",
          "credits": "02",
          "termInd": "B",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Matthew,Johnson"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Wed","Fri"
              ],
              "meetTimeBegin": "12:50 PM",
              "meetTimeEnd": "1:40 PM",
              "meetPeriodBegin": "06",
              "meetPeriodEnd": "06",
              "meetBuilding": "NEB",
              "meetBldgCode": "0725",
              "meetRoom": "0403 "
            }
          ]
        }
        ,{
          "number": "8051",
          "display": "8051",
          "courseTitle": "ABE4662",
          "courseDesc": "Quantification of Biological Processes",
          "credits": "04",
          "termInd": "C",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Matthew,Johnson"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Mon","Fri"
              ],
              "meetTimeBegin": "5:10 PM",
              "meetTimeEnd": "6:00 PM",
              "meetPeriodBegin": "10",
              "meetPeriodEnd": "10",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        }
        ,{
          "number": "8453",
          "display": "8453",
          "courseTitle": "BLA8897",
          "courseDesc": "Description of Biological Processes",
          "credits": "04",
          "termInd": "C",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Richard,Lee"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Wed","Sat"
              ],
              "meetTimeBegin": "1:55 PM",
              "meetTimeEnd": "2:45 PM",
              "meetPeriodBegin": "07",
              "meetPeriodEnd": "07",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        }
        ,{
          "number": "7052",
          "display": "7052",
          "courseTitle": "ABE4042C",
          "courseDesc": "Biological Engineering Design 1",
          "credits": "04",
          "termInd": "C",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Pelletier,William"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Tue","Sat"
              ],
              "meetTimeBegin": "8:30 AM",
              "meetTimeEnd": "9:20 AM",
              "meetPeriodBegin": "02",
              "meetPeriodEnd": "02",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        }
        ,{
          "number": "8059",
          "display": "8059",
          "courseTitle": "ABE4662",
          "courseDesc": "Quantification of Biological Processes",
          "credits": "04",
          "termInd": "C",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Jacobson,John"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Thu","Tue"
              ],
              "meetTimeBegin": "4:05 PM",
              "meetTimeEnd": "4:55 PM",
              "meetPeriodBegin": "08",
              "meetPeriodEnd": "08",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        },
        {
          "number": "7052",
          "display": "7052",
          "courseTitle": "SFE4042C",
          "courseDesc": "Pre-Biological Engineering Design",
          "credits": "02",
          "termInd": "B",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Matthew,Johnson"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Tue","Fri"
              ],
              "meetTimeBegin": "12:50 PM",
              "meetTimeEnd": "1:40 PM",
              "meetPeriodBegin": "06",
              "meetPeriodEnd": "06",
              "meetBuilding": "NEB",
              "meetBldgCode": "0725",
              "meetRoom": "0403 "
            }
          ]
        }

      ],
      "errorCode": "",
      "errorTitle": "",
      "errorMessage": ""
    },
    {
      "termCode": "201508",
      "termDesc": "Fall 2015",
      "termCredits": "011",
      "refreshDateTime": "8/03/2015 2:30 PM",
      "apiVersion": "1.0",
      "termSections": [
        {
          "number": "7052",
          "display": "7052",
          "courseTitle": "ABE4042C",
          "courseDesc": "Biological Engineering Design 1",
          "credits": "04",
          "termInd": "",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Pelletier,William"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Mon","Thu"
              ],
              "meetTimeBegin": "9:35 AM",
              "meetTimeEnd": "10:25 AM",
              "meetPeriodBegin": "03",
              "meetPeriodEnd": "03",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        }
        ,{
          "number": "8059",
          "display": "8059",
          "courseTitle": "ABE4662",
          "courseDesc": "Quantification of Biological Processes",
          "credits": "04",
          "termInd": "",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Jacobson,John"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Tue","Wed","Thu"
              ],
              "meetTimeBegin": "10:40 AM",
              "meetTimeEnd": "11:30 AM",
              "meetPeriodBegin": "04",
              "meetPeriodEnd": "04",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        }

      ],
      "errorCode": "",
      "errorTitle": "",
      "errorMessage": ""
    },
    {
      "termCode": "201509",
      "termDesc": "Fall 2015",
      "termCredits": "011",
      "refreshDateTime": "8/03/2015 2:30 PM",
      "apiVersion": "1.0",
      "termSections": [
        {
          "number": "7052",
          "display": "7052",
          "courseTitle": "SFE4042C",
          "courseDesc": "Pre-Biological Engineering Design",
          "credits": "02",
          "termInd": "B",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Matthew,Johnson"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Thu","Fri"
              ],
              "meetTimeBegin": "12:50 PM",
              "meetTimeEnd": "1:40 PM",
              "meetPeriodBegin": "05",
              "meetPeriodEnd": "05",
              "meetBuilding": "NEB",
              "meetBldgCode": "0725",
              "meetRoom": "0403 "
            }
          ]
        }
        ,{
          "number": "8051",
          "display": "8051",
          "courseTitle": "ABE4662",
          "courseDesc": "Quantification of Biological Processes",
          "credits": "04",
          "termInd": "C",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Matthew,Johnson"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Mon","Thu","Fri"
              ],
              "meetTimeBegin": "5:10 PM",
              "meetTimeEnd": "6:00 PM",
              "meetPeriodBegin": "E1",
              "meetPeriodEnd": "E1",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        }
        ,{
          "number": "8453",
          "display": "8453",
          "courseTitle": "BLA8897",
          "courseDesc": "Description of Biological Processes",
          "credits": "04",
          "termInd": "C",
          "note": "",
          "genEd": [
            "H"
          ],
          "sectWeb": "Y",
          "rotateTitle": " ",
          "deptCode": "514907000",
          "deptName": "AGRICULTURAL & BIOLOG ENGINEERING",
          "finalExam": "18C",
          "grWriting": "",
          "courseFee": "0",
          "EEP": "Y",
          "instructors": [
            {
              "name": "Richard,Lee"
            }
          ],
          "meetTimes": [
            {
              "meetNo": 0,
              "meetDays": [
                "Wed","Fri"
              ],
              "meetTimeBegin": "1:55 PM",
              "meetTimeEnd": "2:45 PM",
              "meetPeriodBegin": "07",
              "meetPeriodEnd": "07",
              "meetBuilding": "MAEA",
              "meetBldgCode": "0725",
              "meetRoom": "0303 "
            }
          ]
        }


      ],
      "errorCode": "",
      "errorTitle": "",
      "errorMessage": ""
    }
  ];
  vm.sevenDays=['Mon','Tue','Wed','Thu','Fri','Sat'];
  vm.courseInfos=vm.scheduleTerms.termSections;
  console.log(vm.scheduleTerms[0].termSections[0].meetTimes);

}

