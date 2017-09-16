import { Component, Input } from '@angular/core'

@Component({
  selector: 'advocates-component',
  templateUrl: './advocates.component.html',
  styleUrls: ['./advocates.component.css']
})

export class AdvocatesComponent{
  @Input() advocateItem
}
