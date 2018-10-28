import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhonelinkElement
 * @class IconTwotonePhonelinkElement
 * @extends {AoflElement}
 */
class IconTwotonePhonelinkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhonelinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phonelink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhonelinkElement.is, IconTwotonePhonelinkElement);

export default IconTwotonePhonelinkElement;
