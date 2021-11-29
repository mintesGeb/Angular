import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mintes-comp',
  template: ` <p>Data: {{ data }} {{ data2.msg }}</p> `,
  styles: [],
})
export class MintesCompComponent implements OnInit {
  @Input() data: string = '';
  @Input() data2: { msg: string } = { msg: '' };
  @Output() onSpeak: EventEmitter<{ msg: string }> = new EventEmitter();
  // sendMessage() {
  //   this.onSpeak.emit('stringEmmited');
  // }

  constructor() {
    setTimeout(() => {
      this.onSpeak.emit({ msg: 'Speaking' });
    }, 5000);
  }

  ngOnInit(): void {
    console.log({ data: this.data });
    console.log({ data2: this.data2 });
    // this.sendMessage();
  }
}
