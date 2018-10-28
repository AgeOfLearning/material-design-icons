import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhonelinkOffElement
 * @class IconTwotonePhonelinkOffElement
 * @extends {AoflElement}
 */
class IconTwotonePhonelinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhonelinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phonelink-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhonelinkOffElement.is, IconTwotonePhonelinkOffElement);

export default IconTwotonePhonelinkOffElement;
