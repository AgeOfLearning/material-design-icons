import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGifElement
 * @class IconBaselineGifElement
 * @extends {AoflElement}
 */
class IconBaselineGifElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGifElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-gif';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGifElement.is, IconBaselineGifElement);

export default IconBaselineGifElement;
