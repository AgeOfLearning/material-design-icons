import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatUnderlinedElement
 * @class IconRoundFormatUnderlinedElement
 * @extends {AoflElement}
 */
class IconRoundFormatUnderlinedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatUnderlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-underlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatUnderlinedElement.is, IconRoundFormatUnderlinedElement);

export default IconRoundFormatUnderlinedElement;
