import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatStrikethroughElement
 * @class IconRoundFormatStrikethroughElement
 * @extends {AoflElement}
 */
class IconRoundFormatStrikethroughElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatStrikethroughElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-strikethrough';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatStrikethroughElement.is, IconRoundFormatStrikethroughElement);

export default IconRoundFormatStrikethroughElement;
