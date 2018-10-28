import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightness2Element
 * @class IconOutlineBrightness2Element
 * @extends {AoflElement}
 */
class IconOutlineBrightness2Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightness2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightness2Element.is, IconOutlineBrightness2Element);

export default IconOutlineBrightness2Element;
