import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatIndentIncreaseElement
 * @class IconRoundFormatIndentIncreaseElement
 * @extends {AoflElement}
 */
class IconRoundFormatIndentIncreaseElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatIndentIncreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-indent-increase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatIndentIncreaseElement.is, IconRoundFormatIndentIncreaseElement);

export default IconRoundFormatIndentIncreaseElement;
