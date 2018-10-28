import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMobileOffElement
 * @class IconSharpMobileOffElement
 * @extends {AoflElement}
 */
class IconSharpMobileOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMobileOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mobile-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMobileOffElement.is, IconSharpMobileOffElement);

export default IconSharpMobileOffElement;
