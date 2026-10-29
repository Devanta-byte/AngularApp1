import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCardComponent {
  // The parent passes the profile details into this component.
  @Input() user!: User;
}
