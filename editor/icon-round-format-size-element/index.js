import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatSizeElement
 * @class IconRoundFormatSizeElement
 * @extends {AoflElement}
 */
class IconRoundFormatSizeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatSizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-size';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatSizeElement.is, IconRoundFormatSizeElement);

export default IconRoundFormatSizeElement;
