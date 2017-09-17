import { Component, Input } from '@angular/core'

@Component({
  selector: 'recipe-component',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent{
  @Input() recipeItem
}
