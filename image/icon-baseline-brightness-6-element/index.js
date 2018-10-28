import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightness6Element
 * @class IconBaselineBrightness6Element
 * @extends {AoflElement}
 */
class IconBaselineBrightness6Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightness6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightness6Element.is, IconBaselineBrightness6Element);

export default IconBaselineBrightness6Element;
