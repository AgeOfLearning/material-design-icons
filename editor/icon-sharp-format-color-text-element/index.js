import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatColorTextElement
 * @class IconSharpFormatColorTextElement
 * @extends {AoflElement}
 */
class IconSharpFormatColorTextElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatColorTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-color-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatColorTextElement.is, IconSharpFormatColorTextElement);

export default IconSharpFormatColorTextElement;
