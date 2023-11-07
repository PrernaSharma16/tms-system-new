import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  ngOnInit() {
      setTimeout(() => {
        const loadingContainer = document.getElementById('loadingContainer');
        if (loadingContainer) {
          loadingContainer.style.display = 'block';
        }
      }, 50000);
  }

}
