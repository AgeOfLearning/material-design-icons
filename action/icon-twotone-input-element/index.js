import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInputElement
 * @class IconTwotoneInputElement
 * @extends {AoflElement}
 */
class IconTwotoneInputElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInputElement.is, IconTwotoneInputElement);

export default IconTwotoneInputElement;
