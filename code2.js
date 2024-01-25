gdjs.PresentationCode = {};
gdjs.PresentationCode.GDPresentationObjects1= [];
gdjs.PresentationCode.GDPresentationObjects2= [];
gdjs.PresentationCode.GDPresentationObjects3= [];
gdjs.PresentationCode.GDnextObjects1= [];
gdjs.PresentationCode.GDnextObjects2= [];
gdjs.PresentationCode.GDnextObjects3= [];
gdjs.PresentationCode.GDpreviousObjects1= [];
gdjs.PresentationCode.GDpreviousObjects2= [];
gdjs.PresentationCode.GDpreviousObjects3= [];
gdjs.PresentationCode.GDdivebackObjects1= [];
gdjs.PresentationCode.GDdivebackObjects2= [];
gdjs.PresentationCode.GDdivebackObjects3= [];
gdjs.PresentationCode.GDLogoObjects1= [];
gdjs.PresentationCode.GDLogoObjects2= [];
gdjs.PresentationCode.GDLogoObjects3= [];
gdjs.PresentationCode.GDHandCursorObjects1= [];
gdjs.PresentationCode.GDHandCursorObjects2= [];
gdjs.PresentationCode.GDHandCursorObjects3= [];


gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDdivebackObjects2Objects = Hashtable.newFrom({"diveback": gdjs.PresentationCode.GDdivebackObjects2});
gdjs.PresentationCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13539396);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.PresentationCode.GDnextObjects2});
gdjs.PresentationCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13540524);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDpreviousObjects2Objects = Hashtable.newFrom({"previous": gdjs.PresentationCode.GDpreviousObjects2});
gdjs.PresentationCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13541732);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


};gdjs.PresentationCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("diveback"), gdjs.PresentationCode.GDdivebackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDdivebackObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PresentationCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.PresentationCode.GDnextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDnextObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PresentationCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("previous"), gdjs.PresentationCode.GDpreviousObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDpreviousObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PresentationCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) <= 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects2);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects2[i].getBehavior("Animation").setAnimationName("1");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects2);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects2[i].getBehavior("Animation").setAnimationName("2");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects2);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects2[i].getBehavior("Animation").setAnimationName("3");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects2);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects2[i].getBehavior("Animation").setAnimationName("4");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects2);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects2[i].getBehavior("Animation").setAnimationName("5");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 6;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.PresentationCode.eventsList4 = function(runtimeScene) {

{


gdjs.PresentationCode.eventsList3(runtimeScene);
}


};

gdjs.PresentationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PresentationCode.GDPresentationObjects1.length = 0;
gdjs.PresentationCode.GDPresentationObjects2.length = 0;
gdjs.PresentationCode.GDPresentationObjects3.length = 0;
gdjs.PresentationCode.GDnextObjects1.length = 0;
gdjs.PresentationCode.GDnextObjects2.length = 0;
gdjs.PresentationCode.GDnextObjects3.length = 0;
gdjs.PresentationCode.GDpreviousObjects1.length = 0;
gdjs.PresentationCode.GDpreviousObjects2.length = 0;
gdjs.PresentationCode.GDpreviousObjects3.length = 0;
gdjs.PresentationCode.GDdivebackObjects1.length = 0;
gdjs.PresentationCode.GDdivebackObjects2.length = 0;
gdjs.PresentationCode.GDdivebackObjects3.length = 0;
gdjs.PresentationCode.GDLogoObjects1.length = 0;
gdjs.PresentationCode.GDLogoObjects2.length = 0;
gdjs.PresentationCode.GDLogoObjects3.length = 0;
gdjs.PresentationCode.GDHandCursorObjects1.length = 0;
gdjs.PresentationCode.GDHandCursorObjects2.length = 0;
gdjs.PresentationCode.GDHandCursorObjects3.length = 0;

gdjs.PresentationCode.eventsList4(runtimeScene);

return;

}

gdjs['PresentationCode'] = gdjs.PresentationCode;
