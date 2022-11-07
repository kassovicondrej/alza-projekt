import { Directive, ElementRef, Input } from '@angular/core'

@Directive({
  selector: '[myRed]',
})
export class MyRedDirective {
  elRef: ElementRef
  @Input() value: string = ''

  constructor(elRef: ElementRef) {
    this.elRef = elRef
  }

  ngAfterViewInit() {
    if (this.value?.length >= 10) {
      this.elRef.nativeElement.style.color = 'red'
    }
  }
}
