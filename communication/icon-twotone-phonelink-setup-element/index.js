import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhonelinkSetupElement
 * @class IconTwotonePhonelinkSetupElement
 * @extends {AoflElement}
 */
class IconTwotonePhonelinkSetupElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhonelinkSetupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phonelink-setup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhonelinkSetupElement.is, IconTwotonePhonelinkSetupElement);

export default IconTwotonePhonelinkSetupElement;
