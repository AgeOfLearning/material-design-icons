import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLaptopWindowsElement
 * @class IconOutlineLaptopWindowsElement
 * @extends {AoflElement}
 */
class IconOutlineLaptopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLaptopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-laptop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLaptopWindowsElement.is, IconOutlineLaptopWindowsElement);

export default IconOutlineLaptopWindowsElement;
