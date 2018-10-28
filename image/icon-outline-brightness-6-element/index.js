import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightness6Element
 * @class IconOutlineBrightness6Element
 * @extends {AoflElement}
 */
class IconOutlineBrightness6Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightness6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightness6Element.is, IconOutlineBrightness6Element);

export default IconOutlineBrightness6Element;
