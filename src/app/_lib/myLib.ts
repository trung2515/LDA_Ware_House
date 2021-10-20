
export default class Lib {


  // Time
  static YMDtoDMY(date: any) {//  yyyy-mm-dd -> dd-mm-yyyy
    let t=date.split('-')
    return [t[2],t[1],t[0]].join('-')
  }
  static DMYtoYMD(date: any) {//  dd-mm-yyyy -> yyyy-mm-dd
    let t=date.split('-')
    return [t[2],t[1],t[0]].join('-')
  }
  static DATEtoDMY(date: Date) {// date -> dd-mm-yyyy
    var d = date
    var month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month, year].join('-')
  }
  static DATEtoYMD(date: Date) {// date -> yyyy-mm-dd
    var d = date
    var month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }
  static getTime(date: Date) {// date -> hh:mm:ss
    var d = date
    var h = '' + (d.getHours() ),
      m = '' + (d.getMinutes()),
      s ='' +(d.getSeconds())

    if (h.length < 2) h = '0' + h
    if (m.length < 2) m = '0' + m
    if (s.length < 2) s = '0' + s
    return [h, m, s].join(':')
  }
  // Validate
  static validatorRules:any={
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
  static blur(e:any,obj:any){
    console.log(e)
    let t=e.target
    let name=t.id.split('-')[1]
    console.log(t.value)
    let rules=e.target.attributes.rules
    if(rules){//rules='..|..'
      console.log(rules.value)//..|..
      rules=rules.value.split('|')
      let d=0;
      for(let rule of rules){
        let ruleInfo
        let isRuleHasValue=rule.includes(':');
        if(isRuleHasValue){
          ruleInfo=rule.split(':');
          rule=ruleInfo[0]
        }
        let ruleFunc=this.validatorRules[rule]
        if(isRuleHasValue){
          ruleFunc=ruleFunc(ruleInfo[1])
        }
        let mess=ruleFunc(t.value)
        // console.log(rule,mess)
        if(mess!=undefined){
          t.nextElementSibling.innerHTML=mess

          if(!t.classList.contains('invalid')) t.classList.add('invalid')

          if(!t.nextElementSibling.classList.contains('showMess')) t.nextElementSibling.classList.add('showMess')
          obj.input[name].isValid=false
          obj.checkValid()
          d--
          break
        } ;
        if(t.nextElementSibling.classList.contains('showMess')) t.nextElementSibling.classList.remove('showMess')
        if(t.classList.contains('invalid')) t.classList.remove('invalid')
        d++
      }
      obj.input[name].value=t.value
      if(d==rules.length){
        obj.input[name].isValid=true
        obj.checkValid()
      }
    }
  }
  static input(e:any){
    console.log(e)
    let t=e.target
    if(t.nextElementSibling.classList.contains('showMess')) t.nextElementSibling.classList.remove('showMess')
    if(t.classList.contains('invalid')) t.classList.remove('invalid')

  }
  static click(e:any){
    console.log(e)
    let t=e.target
    if(t.nextElementSibling.classList.contains('showMess')) t.nextElementSibling.classList.remove('showMess')
    if(t.classList.contains('invalid')) t.classList.remove('invalid')
  }
}
