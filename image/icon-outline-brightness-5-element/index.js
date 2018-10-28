import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightness5Element
 * @class IconOutlineBrightness5Element
 * @extends {AoflElement}
 */
class IconOutlineBrightness5Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightness5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightness5Element.is, IconOutlineBrightness5Element);

export default IconOutlineBrightness5Element;
