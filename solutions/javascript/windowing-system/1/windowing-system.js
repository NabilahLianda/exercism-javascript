// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class WindowingSystem {
  constructor() {
    this.windows = [];
  }

  openWindow(name) {
    const newWindow = new Window(name);
    this.windows.push(newWindow);
    return newWindow;
  }

  closeWindow(name) {
    this.windows = this.windows.filter(window => window.name !== name);
  }

  listWindows() {
    return this.windows.map(window => window.name);
  }
}

export class Window {
  constructor(name) {
    this.name = name;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
