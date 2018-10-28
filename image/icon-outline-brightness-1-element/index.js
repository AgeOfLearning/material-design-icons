import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightness1Element
 * @class IconOutlineBrightness1Element
 * @extends {AoflElement}
 */
class IconOutlineBrightness1Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightness1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightness1Element.is, IconOutlineBrightness1Element);

export default IconOutlineBrightness1Element;
