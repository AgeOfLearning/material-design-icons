import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatListNumberedRtlElement
 * @class IconSharpFormatListNumberedRtlElement
 * @extends {AoflElement}
 */
class IconSharpFormatListNumberedRtlElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatListNumberedRtlElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-list-numbered-rtl';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatListNumberedRtlElement.is, IconSharpFormatListNumberedRtlElement);

export default IconSharpFormatListNumberedRtlElement;
