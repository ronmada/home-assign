import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isShowMore = [false, false];

  public toggleIsShowMore(index: number): void {
    this.isShowMore[index] = !this.isShowMore[index];
  }
}
