import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightness3Element
 * @class IconOutlineBrightness3Element
 * @extends {AoflElement}
 */
class IconOutlineBrightness3Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightness3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightness3Element.is, IconOutlineBrightness3Element);

export default IconOutlineBrightness3Element;
