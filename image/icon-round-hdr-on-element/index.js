import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHdrOnElement
 * @class IconRoundHdrOnElement
 * @extends {AoflElement}
 */
class IconRoundHdrOnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHdrOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hdr-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHdrOnElement.is, IconRoundHdrOnElement);

export default IconRoundHdrOnElement;
