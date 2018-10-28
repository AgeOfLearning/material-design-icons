import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLaptopElement
 * @class IconOutlineLaptopElement
 * @extends {AoflElement}
 */
class IconOutlineLaptopElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLaptopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-laptop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLaptopElement.is, IconOutlineLaptopElement);

export default IconOutlineLaptopElement;
