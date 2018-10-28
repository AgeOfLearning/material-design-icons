import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHdrOffElement
 * @class IconSharpHdrOffElement
 * @extends {AoflElement}
 */
class IconSharpHdrOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHdrOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hdr-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHdrOffElement.is, IconSharpHdrOffElement);

export default IconSharpHdrOffElement;
