import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHdrStrongElement
 * @class IconRoundHdrStrongElement
 * @extends {AoflElement}
 */
class IconRoundHdrStrongElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHdrStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hdr-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHdrStrongElement.is, IconRoundHdrStrongElement);

export default IconRoundHdrStrongElement;
