import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatColorTextElement
 * @class IconTwotoneFormatColorTextElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatColorTextElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatColorTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-color-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatColorTextElement.is, IconTwotoneFormatColorTextElement);

export default IconTwotoneFormatColorTextElement;
