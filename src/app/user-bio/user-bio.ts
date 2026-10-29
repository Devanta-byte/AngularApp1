import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-bio.html',
  styleUrl: './user-bio.css',
})
export class UserBioComponent {
  // Show the bio from the parent and send saved edits back to it.
  @Input() bio = '';
  @Output() bioChanged = new EventEmitter<string>();

  isEditing = false;
  draftBio = '';

  startEditing(): void {
    this.draftBio = this.bio;
    this.isEditing = true;
  }

  saveBio(): void {
    const updatedBio = this.draftBio.trim();

    if (updatedBio) {
      // The parent saves the new bio and passes it back to this component.
      this.bioChanged.emit(updatedBio);
      this.isEditing = false;
    }
  }

  cancelEditing(): void {
    this.isEditing = false;
  }
}
