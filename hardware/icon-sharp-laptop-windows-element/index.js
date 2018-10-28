import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLaptopWindowsElement
 * @class IconSharpLaptopWindowsElement
 * @extends {AoflElement}
 */
class IconSharpLaptopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLaptopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-laptop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLaptopWindowsElement.is, IconSharpLaptopWindowsElement);

export default IconSharpLaptopWindowsElement;
