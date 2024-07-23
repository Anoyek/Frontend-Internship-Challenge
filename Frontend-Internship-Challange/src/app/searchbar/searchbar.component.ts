import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  searchbarValue = new FormControl('');
  @Output() searchbarValueEvent = new EventEmitter();

  constructor(){
    this.searchbarValue.valueChanges.pipe(debounceTime(500),filter((value)=> (value?.length || 0) > 1 || value === '')).subscribe((value)=>{
      this.searchbarValueEvent.emit(value);
    })
  }
}
