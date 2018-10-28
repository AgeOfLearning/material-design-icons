import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTextFormatElement
 * @class IconSharpTextFormatElement
 * @extends {AoflElement}
 */
class IconSharpTextFormatElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTextFormatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-text-format';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTextFormatElement.is, IconSharpTextFormatElement);

export default IconSharpTextFormatElement;
