import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightness4Element
 * @class IconBaselineBrightness4Element
 * @extends {AoflElement}
 */
class IconBaselineBrightness4Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightness4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightness4Element.is, IconBaselineBrightness4Element);

export default IconBaselineBrightness4Element;
