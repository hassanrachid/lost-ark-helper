import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Wandering Merchant Watcher';
  currentRotation: string | any;
  currentTime: Date | any;
  activeMerchantsView: ActiveMerchantsView | any = new ActiveMerchantsView();


  data = [
    {
      key: 'Rethramis', times: ['3:30', '6:30', '7:30', '10:30', '12:30']
    },
    {
      key: 'Yudia', times: ['1:30', '4:30', '5:30', '7:30', '8:30', '11:30']
    },
    {
      key: 'West Luterra', times: ['2:30', '5:30', '6:30', '8:30', '9:30', '12:30']
    },
    {
      key: 'East Luterra', times: ['1:30', '4:30', '5:30', '7:30', '8:30', '11:30']
    },
    {
      key: 'Tortoyk', times: ['2:30', '5:30', '6:30', '8:30', '9:30', '12:30']
    },
    {
      key: 'Anikka', times: ['1:30', '4:30', '5:30', '7:30', '8:30', '11:30']
    },
    {
      key: 'North Vern', times: ['12:30', '3:30', '4:30', '6:30', '7:30', '10:30']
    },
    {
      key: 'Arthetine', times: ['2:30', '5:30', '6:30', '8:30', '9:30', '12:30']
    },
    {
      key: 'Shushire', times: ['1:30', '4:30', '5:30', '7:30', '8:30', '11:30']
    },
    {
      key: 'Rohendel', times: ['2:30', '5:30', '6:30', '8:30', '9:30', '12:30']
    },
    {
      key: 'Yorn', times: ['12:30', '3:30', '4:30', '6:30', '7:30', '10:30']
    },
    {
      key: 'Feiton', times: ['1:30', '4:30', '5:30', '7:30', '8:30', '11:30']
    },
    {
      key: 'Punika', times: ['12:30', '2:30', '5:30', '6:30', '8:30', '9:30']
    }
  ]

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).split(" ")[0];
      this.activeMerchantsView = this.getActiveMerchants();
    }, 600);
  }

  getActiveMerchants(): any {

    var activeMerchantsView = new ActiveMerchantsView();
    activeMerchantsView.ActiveMerchants = [ ];

    for (let d of this.data) {
      for (let time of d.times) {
        var current = this.currentTime.split(":");
        var merchant = time.split(":");
        if (current[0] == merchant[0] && (Number(current[1]) >= Number(merchant[1]) && Number(current[1]) <= 55)) {
          activeMerchantsView.ActiveMerchants.push(d.key);
          activeMerchantsView.Time = time;
        }
      }
    }
    return activeMerchantsView;
  }
}


 class ActiveMerchantsView {
  ActiveMerchants: string[] | any;
  Time: string | any;
}
