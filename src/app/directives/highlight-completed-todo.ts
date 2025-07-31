import { effect,Directive, input, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodo {
  isCompleted = input(false);
  el=inject(ElementRef)
  stylesEffect = effect(() => {
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'gray';
    }
    else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'black';
    }
  })
}
