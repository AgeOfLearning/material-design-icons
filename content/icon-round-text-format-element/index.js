import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTextFormatElement
 * @class IconRoundTextFormatElement
 * @extends {AoflElement}
 */
class IconRoundTextFormatElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTextFormatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-text-format';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTextFormatElement.is, IconRoundTextFormatElement);

export default IconRoundTextFormatElement;
