import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightness6Element
 * @class IconRoundBrightness6Element
 * @extends {AoflElement}
 */
class IconRoundBrightness6Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightness6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightness6Element.is, IconRoundBrightness6Element);

export default IconRoundBrightness6Element;
