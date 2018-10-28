import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLaptopElement
 * @class IconSharpLaptopElement
 * @extends {AoflElement}
 */
class IconSharpLaptopElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLaptopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-laptop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLaptopElement.is, IconSharpLaptopElement);

export default IconSharpLaptopElement;
