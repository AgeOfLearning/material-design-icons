import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTabUnselectedElement
 * @class IconSharpTabUnselectedElement
 * @extends {AoflElement}
 */
class IconSharpTabUnselectedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTabUnselectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tab-unselected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTabUnselectedElement.is, IconSharpTabUnselectedElement);

export default IconSharpTabUnselectedElement;
