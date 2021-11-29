import { Component, ViewChild } from '@angular/core';
enum MyOptions {
  'Rock',
  'Paper',
  'Scissors',
}
@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p [class]="pClass" (click)="handleClickFromP()">Hi, green beens</p>

    <input
      [value]="title"
      (click)="handleClick($event)"
      (keyup)="handleKey($event)"
      #myInput
    />
    <h1>{{ myInput.value }}</h1>
    <app-mintes-comp
      [class]="mintesClass"
      [data]="message"
      [data2]="message2"
      (click)="handleClickToMintes()"
      (onSpeak)="handleSpeak($event)"
    ></app-mintes-comp>
    <h1 class="gameTitle">Rock Paper Scissors</h1>

    <app-reusable-score
      [wins]="myWins"
      [losses]="myLosses"
    ></app-reusable-score>
    <app-reusable-button
      [buttonName]="button1"
      (click)="rockClicked()"
    ></app-reusable-button>
    <app-reusable-button
      [buttonName]="button2"
      (click)="paperClicked()"
    ></app-reusable-button>
    <app-reusable-button
      [buttonName]="button3"
      (click)="scissorsClicked()"
    ></app-reusable-button>

    <p>Computer's choice was: {{ compChoice }}</p>
    <!-- <p>{{Option1}}</p> -->
  `,
  styles: [
    `
      h1 {
        color: red;
      }
      .green {
        color: green;
      }
      .yellow {
        color: yellow;
      }
      .blue {
        color: 'blue';
      }
      .gameTitle {
        color: black;
      }
    `,
  ],
})
export class AppComponent {
  state: { w: number; l: number; computer: string } = {
    w: 0,
    l: 0,
    computer: MyOptions[Math.floor(Math.random() * 3)],
  };

  compChoice: string = this.state.computer;

  myWins = this.state.w;
  myLosses: number = this.state.l;
  button1 = 'Rock';
  button2 = 'Paper';
  button3 = 'Scissors';
  counter = 0;
  title = 'mintesApp';
  pClass = 'green';
  mintesClass = 'blue';
  message = 'hello';
  message2 = { msg: 'hello2' };
  @ViewChild('myInput') myInput: any;

  rockClicked() {
    if (this.state.computer === 'Paper') {
      this.myLosses++;
    } else if (this.state.computer === 'Scissors') {
      this.myWins++;
    }
  }
  paperClicked() {
    if (this.state.computer === 'Rock') {
      this.myWins++;
    } else if (this.state.computer === 'Scissors') {
      this.myLosses++;
    }
  }
  scissorsClicked() {
    if (this.state.computer === 'Rock') {
      this.myLosses++;
    } else if (this.state.computer === 'Paper') {
      this.myWins++;
    }
  }

  handleClick(e: any) {
    console.log(e);
  }
  handleKey(e: any) {
    this.title = this.myInput.nativeElement.value;
  }
  handleClickFromP() {
    this.pClass = 'yellow';
  }
  handleSpeak(e: { msg: string }) {
    console.log(e.msg);
  }
  handleClickToMintes() {
    if (this.counter % 2 === 0) {
      this.message = 'Hi';
      this.message2.msg = 'Mintes';
    } else {
      this.message = 'Hello';
      this.message2.msg = 'Sir';
    }

    this.counter++;
  }
}
