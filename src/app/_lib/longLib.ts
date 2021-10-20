//-------------- date
export function YMDtoDMY(date: any) {//  yyyy-mm-dd -> dd-mm-yyyy
  let t=date.split('-')
  return [t[2],t[1],t[0]].join('-')
}
export function DMYtoYMD(date: any) {//  dd-mm-yyyy -> yyyy-mm-dd
  let t=date.split('-')
  return [t[2],t[1],t[0]].join('-')
}
export function DATEtoDMY(date: Date) {// date -> dd-mm-yyyy
  let d = date
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [day, month, year].join('-')
}
export function DATEtoYMD(date: Date) {// date -> yyyy-mm-dd
  let d = date
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}
export function getTime(date: Date) {// date -> hh:mm:ss
  let d = date
  let h = '' + (d.getHours() ),
    m = '' + (d.getMinutes()),
    s ='' +(d.getSeconds())

  if (h.length < 2) h = '0' + h
  if (m.length < 2) m = '0' + m
  if (s.length < 2) s = '0' + s
  return [h, m, s].join(':')
}
// -------------- validated form
let validatorRules:any={
  required:function(value:any){
    return value?undefined:"Vui lòng nhập trường này";
  },
  email:function(value:any){
      let regex=/^[a-zA-Z]+.*@([a-zA-Z]+\.)+[a-zA-Z]+$/g
      return regex.test(value)?undefined:'Email không đúng';
  },
  phone:function(value:any){
      let regex=/^\d{3,10}$/g
      return regex.test(value)?undefined:'Số điện thoại không đúng ';
  },
  digitAll:function(value:any){
    let regex=/^\d*$/g
    return regex.test(value)?undefined:'Nhập sai định dạng';
  },
  digits:function(limit:any){
      return function(value:any){
          let regexs:any={
              '3':/^\d{3}$/,
              '9':/^\d{9}$/,
              '10':/^\d{10}$/,
          }
          return regexs[limit].test(value)?undefined:'Nhập sai định dạng';
      }
  },
  length:function(max:any){
      return function(value:any){
          return value.length==max?undefined:`Vui lòng nhập chính xác ${max} kí tự`;
      }
  },
  equal:function(selector:any){
      return function(value:any){
          let originEleValue=document.querySelector(selector).value
          return value==originEleValue?undefined:'Mật khẩu xác thực không chính xác'
      }
  },
  minLength:function(min:any){
      return function(value:any){
          return value.length>=min?undefined:`Vui lòng nhập ít nhất ${min} kí tự`;   
      }
  },
  min:function(min:any){
      return function(value:any){
          return value>=min?undefined:`Vui lòng nhập lớn hơn hoặc bằng ${min}`;   
      }
  },
  maxLength:function(max:any){
      return function(value:any){
          return value.length<=max?undefined:`Vui lòng nhập nhiều nhất ${max} kí tự`;
      }
  },
  max:function(max:any){
      return function(value:any){
          return value<=max?undefined:`Vui lòng nhập bé hơn hoặc bằng ${max}`;
      }
  },
  childMaxLength:function(max:any){
      return function(value:any){
          let kq=undefined;
          let childs=value.split(' ')
          for(let item of childs){
              if(item.length<=max){

              }else{
                  kq='Không hợp lệ'
                  break;
              }
          }
          return kq;
      }
  }, 
};
export function getParent(element:any,selector:any){
  while(element.parentElement){
    if(element.parentElement.matches(selector)){
        return element.parentElement
    }
    element=element.parentElement
  }
}

export function validator(formSelector:any,obj:any={}){
  console.log('validator')
  let formRules:any={};
  let formElement = document.querySelector(formSelector)
  if(!formElement) return
  // input không nhận kí tự space
  let inputNoSpace=formElement.querySelectorAll('[inputNoSpace]')
  for(let input of inputNoSpace){
    input.onkeydown=function(e:any){
      if(e.key==' '){
        e.preventDefault();
      }
    }
  }
  // input không nhận kí tự 2space
  let inputNo2Space=formElement.querySelectorAll('[inputNo2Space]')
  for(let input of inputNo2Space){
    input.onkeydown=function(e:any){
      if(e.key==' '){
        let value=e.target.value
        if(value.length==0&&value[0]==' ') {
          e.preventDefault();
          return
        }
        if(value.length>0&&value[value.length-1]==' '){
          e.preventDefault();
          return
        }   
      }
    }
  }

  let inputs=formElement.querySelectorAll('[name][rules]')
  for(let  input of inputs){
    let rules=input.getAttribute('rules').split('|')
    for(let rule of rules){
      let ruleInfo
      let isRuleHasValue=rule.includes(':');
      if(isRuleHasValue){
        ruleInfo=rule.split(':');
        rule=ruleInfo[0]
      }
      let ruleFunc=validatorRules[rule]
      if(isRuleHasValue){
          ruleFunc=ruleFunc(ruleInfo[1])
      }
      if(Array.isArray(formRules[input.name])){
          formRules[input.name].push(ruleFunc)
      }else{
          formRules[input.name]=[ruleFunc];
      }
    }
    //Lang nghe su kien
    input.onblur=handleValidate
    input.oninput=handleClearErrorAndValidObj
  }
  // ham thuc hien Validate
  function handleValidate(e:any){
    let rules=formRules[e.target.name];
    let errorMessage
    // Trim
    e.target.value=e.target.value.trim()
    // Xóa dau cach du thua
    e.target.value=e.target.value.replace(/ {2,}/g,' ')

    for(let rule of rules){
      errorMessage= rule(e.target.value)
      if(errorMessage) break;
      console.log(errorMessage)
    }
    // Neu co loi thi hien thi message ra UI
    if(errorMessage){
      let formGroup=getParent(e.target,'.form-group')
      if(formGroup){
        formGroup.classList.add('invalid')
        let formMessage=formGroup.querySelector('.form-message')
        if(formMessage){
            formMessage.innerText=errorMessage
            console.log(errorMessage)
        }
      }   
    }else{

    }
    return !errorMessage;
  }
  // Clear message loi va check validate form
  function handleClearErrorAndValidObj(e:any){
    let formGroup=getParent(e.target,'.form-group')
    if(formGroup.classList.contains('invalid')){
      formGroup.classList.remove('invalid')
      let formMessage=formGroup.querySelector('.form-message')
      if(formMessage){
        formMessage.innerText=""
      }
    }
    let name=e.target.name
    let value=e.target.value
    console.log(name)
    console.log(e)
    //obj.input[name]={value,isValid:true}
    //obj.checkValid()
    // if(obj.isValid){
    //   let password=formElement.querySelector(`#password`) 
    //   let rePassword=formElement.querySelector(`#rePassword`) 
    //   if(password&&rePassword&&rePassword.value!=password.value){
    //     let formGroup=getParent(rePassword,'.form-group')
    //     if(formGroup){
    //         formGroup.classList.add('invalid')
    //         let formMessage=formGroup.querySelector('.form-message')
    //         formMessage.innerText="Nhập lại mật khẩu không đúng"   
    //     }    
    //   }
    // }
  }
}
/*
  .form-group.invalid .form-control {
    border-color: #f33a58;
  }
  .form-group .form-control:focus {
    border-color: #80bdff;
  }
  .form-group.invalid .form-message {
    color: #f33a58;
  }
  
  .form-message {
    font-size: 10px;
    padding: 4px 0 0;
  }
*/
// -------------- common

export  function isEmptyObj(object:any) {
	return Object.keys(object).length == 0?true:false
}
export function test(...a:any) {
  console.log(111111111)
  return 1
}
