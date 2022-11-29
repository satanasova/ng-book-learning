import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Profile } from "./profile.model";

@Component({
  selector: 'app-on-push-change-detection',
  templateUrl: './on-push-change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChangeDetectionComponent {
  @Input() profile!: Profile;
}