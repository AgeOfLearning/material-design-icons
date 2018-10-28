import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatAlignCenterElement
 * @class IconRoundFormatAlignCenterElement
 * @extends {AoflElement}
 */
class IconRoundFormatAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatAlignCenterElement.is, IconRoundFormatAlignCenterElement);

export default IconRoundFormatAlignCenterElement;
