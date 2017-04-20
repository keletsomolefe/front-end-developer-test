/*
    Toddler - 1-2-3 yrs
    Child - 3-12 years old
    Teen - 13-19 years old
    Adult - 20-60 years old
    Senior – 60 - …..
*/

function classify(form){
    classifier.setAge(form.age.value);
    classifier.setHeight(form.height.value);
   
    document.getElementById('output').innerHTML = classifier.classifyAge()+" & "+classifier.classifyHeight();
    document.getElementById('id01').style.display ='block';

    return false;
}

var classifier = new Classifier(); 

function Classifier(){
    this.age = 0;
    this.height = 0;
}

Classifier.prototype.setAge = function(age){
    this.age = age;
}

Classifier.prototype.setHeight = function(height){
    this.height = height;
}

Classifier.prototype.classifyAge = function(){
    if (this.age>=1 && this.age<=12)
        return "Child";
    else if (this.age>=13 && this.age<=19)
        return "Teenager";
    else if (this.age>=20 && this.age<60)
        return "Adult";
    else if (this.age>=60)
        return "Senior";
}

Classifier.prototype.classifyHeight = function(){
    /*For age 1*/
    if (this.age==1 && this.height<72)
        return "Short";
    else if (this.age==1 && this.height>80)
        return "Tall";
    else if (this.age==1) return "Average";

    /*For age 2*/
    if (this.age==2 && this.height<81)
        return "Short";
    else if (this.age==2 && this.height>90)
        return "Tall";
    else if (this.age==2) return "Average";

    /*For age 3*/
    if (this.age==3 && this.height<90)
        return "Short";
    else if (this.age==3 && this.height>100)
        return "Tall";
    else if (this.age==3) return "Average";

    /*For age 4*/
    if (this.age==4 && this.height<99)
        return "Short";
    else if (this.age==4 && this.height>106)
        return "Tall";
    else if (this.age==4) return "Average";

    /*For age 5*/
    if (this.age==5 && this.height<104)
        return "Short";
    else if (this.age==5 && this.height>114)
        return "Tall";
    else if (this.age==5) return "Average";

    /*For age 6*/
    if (this.age==6 && this.height<112)
        return "Short";
    else if (this.age==6 && this.height>120)
        return "Tall";
    else if (this.age==6) return "Average";

    /*For age 7*/
    if (this.age==7 && this.height<117)
        return "Short";
    else if (this.age==7 && this.height>126)
        return "Tall";
    else if (this.age==7) return "Average";

    /*For age 8*/
    if (this.age==8 && this.height<123)
        return "Short";
    else if (this.age==8 && this.height>131)
        return "Tall";
    else if (this.age==8) return "Average";

    /*For age 9*/
    if (this.age==9 && this.height<128)
        return "Short";
    else if (this.age==9 && this.height>137)
        return "Tall";
    else if (this.age==9) return "Average";

    /*For age 10*/
    if (this.age==10 && this.height<133)
        return "Short";
    else if (this.age==10 && this.height>142)
        return "Tall";
    else if (this.age==10) return "Average";

    /*For age 11*/
    if (this.age==11 && this.height<139)
        return "Short";
    else if (this.age==11 && this.height>148)
        return "Tall";
    else if (this.age==11) return "Average";

    /*For age 12*/
    if (this.age==12 && this.height<145)
        return "Short";
    else if (this.age==12 && this.height>153)
        return "Tall";
    else if (this.age==12) return "Average";

    /*For age 13*/
    if (this.age==13 && this.height<152)
        return "Short";
    else if (this.age==13 && this.height>160)
        return "Tall";
    else if (this.age==13) return "Average";

    /*For age 14*/
    if (this.age==14 && this.height<159)
        return "Short";
    else if (this.age==14 && this.height>168)
        return "Tall";
    else if (this.age==14) return "Average";

    /*For age 15*/
    if (this.age==15 && this.height<166)
        return "Short";
    else if (this.age==15 && this.height>174)
        return "Tall";
    else if (this.age==15) return "Average";

    /*For age 16*/
    if (this.age==16 && this.height<169)
        return "Short";
    else if (this.age==16 && this.height>178)
        return "Tall";
    else if (this.age==16) return "Average";

    /*For age 17*/
    if (this.age==17 && this.height<171)
        return "Short";
    else if (this.age==17 && this.height>179)
        return "Tall";
    else if (this.age==17) return "Average";

    /*For age 18*/
    if (this.age==18 && this.height<172)
        return "Short";
    else if (this.age==18 && this.height>180)
        return "Tall";
    else if (this.age==18) return "Average";

    /*For age 19*/
    if (this.age==19 && this.height<172.5)
        return "Short";
    else if (this.age==19 && this.height>180.5)
        return "Tall";
    else if (this.age==19) return "Average";

    /*For age 20*/
    if (this.age==20 && this.height<173)
        return "Short";
    else if (this.age==20 && this.height>181)
        return "Tall";
    else if (this.age==20) return "Average";

    /*For the rest*/
    if (this.age>20 && this.height<173)
        return "Short";
    else if (this.age>20 && this.height>181)
        return "Tall";
    else if (this.age>20) return "Average";
}