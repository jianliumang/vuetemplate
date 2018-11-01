exports.install = (Vue, options) => {
  Vue.prototype.setAllTime = function(sdata = 0) {
    let nowDate = new Date;
    let nowDateyear = nowDate.getFullYear();
    let nowDatemonth = nowDate.getMonth() + 1;
    let nowDatestrDate = nowDate.getDate();
    let nowDatehours = nowDate.getHours();
    let nowDateminutes = nowDate.getMinutes();
    let nowDateseconds = nowDate.getSeconds()-sdata;
    if(nowDateminutes<0){
      nowDateminutes = nowDateminutes+60;
      nowDatehours = nowDatehours-1;
    };
    if(nowDateseconds<0){
      nowDateseconds = nowDateseconds+60;
      nowDateminutes = nowDateminutes-1;
    };
    nowDatemonth = nowDatemonth >= 1 && nowDatemonth <= 9 ? "0" + nowDatemonth : nowDatemonth;
    nowDatestrDate = nowDatestrDate >= 1 && nowDatestrDate <= 9 ? "0" + nowDatestrDate : nowDatestrDate;
    nowDatehours = nowDatehours >= 0 && nowDatehours <= 9 ? "0" + nowDatehours : nowDatehours;
    nowDateminutes = nowDateminutes >= 0 && nowDateminutes <= 9 ? "0" + nowDateminutes : nowDateminutes;
    nowDateseconds = nowDateseconds >= 0 && nowDateseconds <= 9 ? "0" + nowDateseconds : nowDateseconds;
    var nowDateTime = nowDateyear + "-" + nowDatemonth + "-" + nowDatestrDate + " " + nowDatehours + ":" + nowDateminutes + ":" + nowDateseconds;
    return nowDateTime
  };
};
