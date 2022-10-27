import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { menuItems } from '../../../shared/constants/menu-routes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Output() public readonly signOut: EventEmitter<void> =
    new EventEmitter<void>();

  public readonly menuItems = menuItems;

  public readonly today = new Date();

  constructor() {}

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
