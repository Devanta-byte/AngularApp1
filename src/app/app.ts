import { Component } from '@angular/core';
import { User } from './models/user';
import { UserBioComponent } from './user-bio/user-bio';
import { UserCardComponent } from './user-card/user-card';
import { UserStatusComponent } from './user-status/user-status';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent, UserStatusComponent, UserBioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // The parent keeps the shared profile data and passes it to child components.
  user: User = {
    name: 'Maya Rivera',
    age: 20,
    course: 'Angular Development Student',
    location: 'Manila, Philippines',
    photoUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&q=85',
    bio: 'I am learning to build useful things for the web, one component at a time. I enjoy sketching, finding new coffee spots, and turning small ideas into projects.',
    isOnline: true,
  };

  updateStatus(isOnline: boolean): void {
    this.user.isOnline = isOnline;
  }

  updateBio(bio: string): void {
    this.user.bio = bio;
  }
}
