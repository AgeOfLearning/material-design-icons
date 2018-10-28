import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLaptopWindowsElement
 * @class IconTwotoneLaptopWindowsElement
 * @extends {AoflElement}
 */
class IconTwotoneLaptopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLaptopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-laptop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLaptopWindowsElement.is, IconTwotoneLaptopWindowsElement);

export default IconTwotoneLaptopWindowsElement;
