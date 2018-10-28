import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightness2Element
 * @class IconBaselineBrightness2Element
 * @extends {AoflElement}
 */
class IconBaselineBrightness2Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightness2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightness2Element.is, IconBaselineBrightness2Element);

export default IconBaselineBrightness2Element;
