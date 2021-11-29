import {Directive, ElementRef, Renderer2} from "@angular/core"

@Directive({
    selector:'[autoGrow]',
    host:{
        "(focus)":"onFocus()",
        "blur":"onBlur"
    }
})
export class AutoGrowDirective{

    constructor(private el:ElementRef ,private renderer: Renderer2){}
    onFocus(){
    this.renderer.setElementStyle()
    }
    onBlur(){

    }

}