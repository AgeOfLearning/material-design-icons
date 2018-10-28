import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightness1Element
 * @class IconBaselineBrightness1Element
 * @extends {AoflElement}
 */
class IconBaselineBrightness1Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightness1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightness1Element.is, IconBaselineBrightness1Element);

export default IconBaselineBrightness1Element;
