import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMobileOffElement
 * @class IconOutlineMobileOffElement
 * @extends {AoflElement}
 */
class IconOutlineMobileOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMobileOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mobile-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMobileOffElement.is, IconOutlineMobileOffElement);

export default IconOutlineMobileOffElement;
