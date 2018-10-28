import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightness4Element
 * @class IconRoundBrightness4Element
 * @extends {AoflElement}
 */
class IconRoundBrightness4Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightness4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightness4Element.is, IconRoundBrightness4Element);

export default IconRoundBrightness4Element;
