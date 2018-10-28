import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightness7Element
 * @class IconBaselineBrightness7Element
 * @extends {AoflElement}
 */
class IconBaselineBrightness7Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightness7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightness7Element.is, IconBaselineBrightness7Element);

export default IconBaselineBrightness7Element;
