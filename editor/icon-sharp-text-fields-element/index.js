import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTextFieldsElement
 * @class IconSharpTextFieldsElement
 * @extends {AoflElement}
 */
class IconSharpTextFieldsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTextFieldsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-text-fields';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTextFieldsElement.is, IconSharpTextFieldsElement);

export default IconSharpTextFieldsElement;
