import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHdrWeakElement
 * @class IconRoundHdrWeakElement
 * @extends {AoflElement}
 */
class IconRoundHdrWeakElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHdrWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hdr-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHdrWeakElement.is, IconRoundHdrWeakElement);

export default IconRoundHdrWeakElement;
