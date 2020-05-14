import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Copenhagen Sweet Home :)',
      url: 'https://images.unsplash.com/photo-1513622118278-bc041b3c13ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Looking for the midnight sun.',
      url: 'https://images.unsplash.com/photo-1505553011163-ed5bb1ae1192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Fjords for Hearts',
      url: 'https://images.unsplash.com/photo-1473160330398-3aa3dbdf3117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Copenhagen Sweet Home :)',
      url: 'https://images.unsplash.com/photo-1513622118278-bc041b3c13ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Looking for the midnight sun.',
      url: 'https://images.unsplash.com/photo-1505553011163-ed5bb1ae1192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Fjords for Hearts',
      url: 'https://images.unsplash.com/photo-1473160330398-3aa3dbdf3117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Copenhagen Sweet Home :)',
      url: 'https://images.unsplash.com/photo-1513622118278-bc041b3c13ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Looking for the midnight sun.',
      url: 'https://images.unsplash.com/photo-1505553011163-ed5bb1ae1192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Fjords for Hearts',
      url: 'https://images.unsplash.com/photo-1473160330398-3aa3dbdf3117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Copenhagen Sweet Home :)',
      url: 'https://images.unsplash.com/photo-1513622118278-bc041b3c13ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Looking for the midnight sun.',
      url: 'https://images.unsplash.com/photo-1505553011163-ed5bb1ae1192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'Fjords for Hearts',
      url: 'https://images.unsplash.com/photo-1473160330398-3aa3dbdf3117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
    }
  ]
  currentPage = 0;

  checkWindowIndex(index : number){
    return Math.abs(this.currentPage - index) < 5
  }

}
