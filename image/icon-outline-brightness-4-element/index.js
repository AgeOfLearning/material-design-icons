import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightness4Element
 * @class IconOutlineBrightness4Element
 * @extends {AoflElement}
 */
class IconOutlineBrightness4Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightness4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightness4Element.is, IconOutlineBrightness4Element);

export default IconOutlineBrightness4Element;
