import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-status',
  standalone: true,
  templateUrl: './user-status.html',
  styleUrl: './user-status.css',
})
export class UserStatusComponent {
  // Read the current status from the parent app.
  @Input() isOnline = false;

  // Send the new status to the parent when the button is pressed.
  @Output() statusChanged = new EventEmitter<boolean>();

  toggleStatus(): void {
    this.statusChanged.emit(!this.isOnline);
  }
}
