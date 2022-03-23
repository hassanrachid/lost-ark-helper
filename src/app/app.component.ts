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
  merchantsView: ActiveMerchantsView | any = new ActiveMerchantsView();

  data = [
    {
      Time: '1:30',
      Keys: ["Yudia", "East Luterra", "Anikka", "Shushire", "Feiton"]
    },
    {
      Time: '2:30',
      Keys: ["Arthetine", "West Luterra", "Rohendel", "Punika", "East Luterra - Burt"]
    },
    {
      Time: '3:30',
      Keys: ["Rethramis", "North Vern", "Yorn"]
    },
    {
      Time: '4:30',
      Keys: ["Yudia", "Anikka", "North Vern", "Shushire", "Yorn", "Feiton"]
    },
    {
      Time: '5:30',
      Keys: ["Yudia", "Anikka", "East Luterra - Burt", "East Luterra - Mac", "West Luterra", "Shushire", "Arthetine", "Feiton", "Punika", "Rohendel"]
    },
    {
      Time: '6:30',
      Keys: ["Rethramis", "Tortoyk", "East Luterra - Burt", "West Luterra", "North Vern", "Arthetine", "Punika", "Rohendel"]
    },
    {
      Time: '7:30',
      Keys: ["Rethramis", "Yudia", "East Luterra", "Anikka", "North Vern", "Shushire", "Yorn", "Feiton"]
    },
    {
      Time: '8:30',
      Keys: ["West Luterra", "Yudia", "East Luterra - Mac", "East Luterra - Burt", "Anikka", "Tortoyk", "Shushire", "Anikka", "Feiton", "Punika", "Rohendel"]
    },
    {
      Time: '9:30',
      Keys: ["West Luterra", "East Luterra - Burt", "Tortoyk", "Arthetine", "Punika", "Rohendel"]
    },
    {
      Time: '10:30',
      Keys: ["Rethramis", "North Vern", "Yorn"]
    },
    {
      Time: '11:30',
      Keys: ["Yudia", "East Luterra", "Anikka", "Shushire", "Feiton"]
    },
    {
      Time: '12:30',
      Keys: ["Rethramis", "East Luterra - Burt", "West Luterra", "Tortoyk", "North Vern", "Arthetine", "Rohendel", "Yorn", "Punika"]
    },
  ]

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).split(" ")[0];
      this.merchantsView = this.getMerchants();
    }, 600);
  }

  getMerchants(): any {

    var merchantsView = new ActiveMerchantsView();
    var current = this.currentTime.split(":");

    for (let d of this.data) {
      if (d.Time.split(":")[0] == current[0]) {
        if (current[1] > 30 && current[1] < 55) {
          merchantsView.CurrentRotation = d.Time;
          merchantsView.ActiveMerchants = d.Keys;
        }
        if (current[1] >= 55) {
            localStorage.setItem("lastRotation", String(Number(current[0]) + 1));
        } else if (current[1] <= 30) {
            localStorage.setItem("lastRotation", current[0]);
        } else if (current[1] >= 30) {
          console.log(current[0]);
            localStorage.setItem("lastRotation", String(Number(current[0]) + 1));
        }
      }
    }

    var upcoming = Number(localStorage.getItem("lastRotation"));
    console.log(upcoming);
    for (let d of this.data) {
      if (d.Time.split(":")[0] == String(upcoming)) {
        merchantsView.UpcomingRotation = d.Time;
        merchantsView.UpcomingMerchants = d.Keys;
      }
    }

    return merchantsView;
  }
}


class ActiveMerchantsView {
  ActiveMerchants: string[] | any;
  UpcomingMerchants: string[] | any;
  CurrentRotation: string | any;
  UpcomingRotation: string | any;
}
