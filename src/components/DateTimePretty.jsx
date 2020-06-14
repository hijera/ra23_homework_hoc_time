import moment from "moment";

function DateTimePretty(Component) {
        return function(props, ...args) {
        const rawDate=moment(props.date);
       const currentDate = moment();
       const mDiff=parseInt(currentDate.diff(rawDate,'minutes'));
       const hDiff=parseInt(mDiff/60);
       const dDiff=parseInt(hDiff/24);
       let date='';
       if (hDiff<1)
       {
           let mname='';
           switch (((mDiff<10 || mDiff>=20) && mDiff % 10) || (mDiff>=10 && mDiff<20 && mDiff % 20) )
           {
               case 1:
                   mname='минуту';
                   break;
               case 2:
               case 3:
               case 4:
                   mname='минуты';
                   break;
               default:
                   mname='минут';
                   break;
           }
           date=mDiff+' '+mname+' назад';
       }
       else if (hDiff>=1 && hDiff<=24)
       {
           let cname='';
           switch ((hDiff<10 && hDiff % 10) || (hDiff>=10 && hDiff % 20) )
           {
               case 1:
                   cname='час';
                   break;
               case 2:
               case 3:
               case 4:
                   cname='часа';
                   break;
               default:
                   cname='часов';
                   break;
           }
           date=hDiff+' '+cname+' назад';
       }
       else if (hDiff>24)
       {
           let dname='';
           switch (((dDiff<10 || dDiff>=20) && dDiff % 10) || (dDiff>=10 && dDiff<20 && dDiff % 20) )
           {
               case 1:
                   dname='день';
                   break;
               case 2:
               case 3:
               case 4:
                   dname='дня';
                   break;
               default:
                   dname='дней';
                   break;
           }
           date=dDiff+' '+dname+' назад';
       }

            return Component.apply(this, [{date:date},props, ...args]);
        }
}

export default DateTimePretty;