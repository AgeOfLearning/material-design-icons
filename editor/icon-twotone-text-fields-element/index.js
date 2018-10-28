import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTextFieldsElement
 * @class IconTwotoneTextFieldsElement
 * @extends {AoflElement}
 */
class IconTwotoneTextFieldsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTextFieldsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-text-fields';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTextFieldsElement.is, IconTwotoneTextFieldsElement);

export default IconTwotoneTextFieldsElement;
