import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.scss']
})
export class ImplementationComponent implements OnInit {

  private finishedLoading = false;
  private finishedApp = false;
  private iframeElements = document.getElementsByTagName("iframe");

  constructor() { }

  ngOnInit(): void {
    this.checkLoaded();
    this.checkCompleted();
  }

  async checkLoaded() {
    try {
      // @ts-ignore
      while (!this.iframeElements[0].contentWindow.checkLoaded()) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      this.finishedLoading = true;
    } catch (error) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.checkLoaded();
    }
  }

  async checkCompleted(){
    try {
      // @ts-ignore
      while (!this.iframeElements[0].contentWindow.checkCompleted()) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      this.finishedApp = true;
      document.getElementById("iframe")?.classList.remove("active");
    } catch (error) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.checkCompleted();
    }
  }

  showObject() {
    if (!this.finishedApp) {
      if (this.finishedLoading) {
        // @ts-ignore
        this.iframeElements[0].contentWindow.showCube();
      } else {
        alert("Please wait for the iframe to finish loading");
      }
    } else {
      alert("App has finished, please refresh the page");
    }
  }

  hideObject() {
    if (!this.finishedApp) {
      if (this.finishedLoading) {
        // @ts-ignore
        this.iframeElements[0].contentWindow.hideCube();
      } else {
        alert("Please wait for the iframe to finish loading");
      }
    } else {
      alert("App has finished, please refresh the page");
    }
  }

}
