import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatListNumberedRtlElement
 * @class IconRoundFormatListNumberedRtlElement
 * @extends {AoflElement}
 */
class IconRoundFormatListNumberedRtlElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatListNumberedRtlElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-list-numbered-rtl';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatListNumberedRtlElement.is, IconRoundFormatListNumberedRtlElement);

export default IconRoundFormatListNumberedRtlElement;
