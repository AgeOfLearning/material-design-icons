import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatColorTextElement
 * @class IconOutlineFormatColorTextElement
 * @extends {AoflElement}
 */
class IconOutlineFormatColorTextElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatColorTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-color-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatColorTextElement.is, IconOutlineFormatColorTextElement);

export default IconOutlineFormatColorTextElement;
