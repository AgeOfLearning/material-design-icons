import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTextFormatElement
 * @class IconOutlineTextFormatElement
 * @extends {AoflElement}
 */
class IconOutlineTextFormatElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTextFormatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-text-format';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTextFormatElement.is, IconOutlineTextFormatElement);

export default IconOutlineTextFormatElement;
