import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightness3Element
 * @class IconBaselineBrightness3Element
 * @extends {AoflElement}
 */
class IconBaselineBrightness3Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightness3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightness3Element.is, IconBaselineBrightness3Element);

export default IconBaselineBrightness3Element;
