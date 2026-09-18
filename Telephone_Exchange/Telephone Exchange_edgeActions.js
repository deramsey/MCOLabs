
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",960,function(sym,e){sym.play("Label 1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_start-button}","click",function(sym,e){sym.play("Label 2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_light}","click",function(sym,e){sym.play("Label 3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_previous_light}","click",function(sym,e){sym.play("Label 1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1950,function(sym,e){sym.play("Label 2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_previous_lightCopy}","click",function(sym,e){sym.play("Label 2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_lightCopy}","click",function(sym,e){sym.play("Label 4");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2950,function(sym,e){sym.play("Label 3");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3955,function(sym,e){sym.play("Label 4");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4940,function(sym,e){sym.play("Label 5");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5960,function(sym,e){sym.play("Label 6");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_previous_lightCopy3}","click",function(sym,e){sym.play("Label 3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_lightCopy3}","click",function(sym,e){sym.play("Label 5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_previous_lightCopy4}","click",function(sym,e){sym.play("Label 4");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_lightCopy4}","click",function(sym,e){sym.play("Label 6");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_lightCopy2}","click",function(sym,e){sym.play("Label 7");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_previous_lightCopy2}","click",function(sym,e){sym.play("Label 5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_previous_lightCopy5}","click",function(sym,e){sym.play("Label 6");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6960,function(sym,e){sym.play("Label 7");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","mouseover",function(sym,e){$(current).css("color","yellow");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","click",function(sym,e){sym.play("Label 1");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-16972170");