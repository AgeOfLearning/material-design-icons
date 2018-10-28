import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatColorTextElement
 * @class IconBaselineFormatColorTextElement
 * @extends {AoflElement}
 */
class IconBaselineFormatColorTextElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatColorTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-color-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatColorTextElement.is, IconBaselineFormatColorTextElement);

export default IconBaselineFormatColorTextElement;
