import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatColorTextElement
 * @class IconRoundFormatColorTextElement
 * @extends {AoflElement}
 */
class IconRoundFormatColorTextElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatColorTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-color-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatColorTextElement.is, IconRoundFormatColorTextElement);

export default IconRoundFormatColorTextElement;
