import { Component } from "@angular/core";
import { Profile } from "./profile.model";

@Component({
  selector: 'app-on-push-demo',
  templateUrl: './on-push-demo.component.html'
})
export class OnPushDemoComponent {
  profile1: Profile = new Profile('Haci', 'Hacev');
  profile2: Profile = new Profile('Kenny', 'Ankhesenamun')
}