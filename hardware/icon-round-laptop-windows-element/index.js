import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLaptopWindowsElement
 * @class IconRoundLaptopWindowsElement
 * @extends {AoflElement}
 */
class IconRoundLaptopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLaptopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-laptop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLaptopWindowsElement.is, IconRoundLaptopWindowsElement);

export default IconRoundLaptopWindowsElement;
