import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightness5Element
 * @class IconBaselineBrightness5Element
 * @extends {AoflElement}
 */
class IconBaselineBrightness5Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightness5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightness5Element.is, IconBaselineBrightness5Element);

export default IconBaselineBrightness5Element;
