import { Directive, ElementRef, Input } from '@angular/core'

@Directive({
  selector: '[customText]',
})
export class CustomTextDirective {
  elRef: ElementRef
  @Input() value: string = ''

  constructor(elRef: ElementRef) {
    this.elRef = elRef
  }

  ngAfterViewInit() {
    if (this.value?.length >= 10) {
      this.elRef.nativeElement.style.color = 'red'
      this.elRef.nativeElement.innerText = this.value
        .split('')
        .map((v, i) => (i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()))
        .join('')
    }
  }
}
