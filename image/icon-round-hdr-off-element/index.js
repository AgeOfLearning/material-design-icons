import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHdrOffElement
 * @class IconRoundHdrOffElement
 * @extends {AoflElement}
 */
class IconRoundHdrOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHdrOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hdr-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHdrOffElement.is, IconRoundHdrOffElement);

export default IconRoundHdrOffElement;
