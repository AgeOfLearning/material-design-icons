import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTextFieldsElement
 * @class IconOutlineTextFieldsElement
 * @extends {AoflElement}
 */
class IconOutlineTextFieldsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTextFieldsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-text-fields';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTextFieldsElement.is, IconOutlineTextFieldsElement);

export default IconOutlineTextFieldsElement;
