import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightness7Element
 * @class IconOutlineBrightness7Element
 * @extends {AoflElement}
 */
class IconOutlineBrightness7Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightness7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightness7Element.is, IconOutlineBrightness7Element);

export default IconOutlineBrightness7Element;
