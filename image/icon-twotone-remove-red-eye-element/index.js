import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRemoveRedEyeElement
 * @class IconTwotoneRemoveRedEyeElement
 * @extends {AoflElement}
 */
class IconTwotoneRemoveRedEyeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRemoveRedEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-remove-red-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRemoveRedEyeElement.is, IconTwotoneRemoveRedEyeElement);

export default IconTwotoneRemoveRedEyeElement;
