import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  data: any = [];
  constructor(private http: HttpClient){};
  idNo: any;
  tempObj:any = {
    recipeId: '',
    ingredients: '',
    instruction: ''};

  addRecipe(rid: any, ing: any, ins: any){
    const recipe = {
      recipeId: rid,
      ingredients: ing,
      instruction: ins
    };
    console.log(recipe);
    const url = "http://localhost:5000/recipe/";
    this.http.post(url, recipe).subscribe((res) => {
      console.log(res);
      this.getAllRecipe();
    })


  }

  getAllRecipe(){
    const url = "http://localhost:5000/recipe/";
    this.http.get(url).subscribe((res)=>{
      this.data = res;
      console.log(this.data);
    })
  }

  deleteRecipe(){
    const url = "http://localhost:5000/recipe/" + this.tempObj.recipeId;
    console.log(url);
    this.http.delete(url).subscribe((res)=>{
      console.log(res);
      this.getAllRecipe();
    })
  }

  updateRecipe(rid: any, ing: any, ins: any){
    const recipe = {
      recipeId: rid,
      ingredients: ing,
      instruction: ins
    };
    const url = "http://localhost:5000/recipe/" + this.tempObj.recipeId;
    this.http.patch(url, recipe).subscribe((res) => {
      console.log(res);
      this.getAllRecipe();
    });
  }

  showElementOnForm(text: any){
    const id = text.target.textContent;
    const obj = this.data.find((o: any) => o.recipeId == id);
    //console.log(obj);
    this.tempObj = obj;
  }

  clearForm(){
    const temp:any = {
      recipeId: '',
      ingredients: '',
      instruction: ''};
    this.tempObj=temp;
  }
}
