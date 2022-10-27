import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') public readonly sidenav!: MatSidenav;

  public isShowSidebar!: boolean;
  public mobileQuery!: MediaQueryList;
  private mobileQueryListener!: () => void;

  public readonly eventType = 'change';

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly media: MediaMatcher
  ) {}

  public ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = (): void =>
      this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener(this.eventType, this.mobileQueryListener);

    this.isShowSidebar = !this.mobileQuery.matches;
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener(
      this.eventType,
      this.mobileQueryListener
    );

    this.sidenav.close();
  }

  public toggleMenu(value: boolean): void {
    this.sidenav.toggle(value);
  }
}
