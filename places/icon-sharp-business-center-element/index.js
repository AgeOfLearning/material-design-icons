import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBusinessCenterElement
 * @class IconSharpBusinessCenterElement
 * @extends {AoflElement}
 */
class IconSharpBusinessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBusinessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-business-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBusinessCenterElement.is, IconSharpBusinessCenterElement);

export default IconSharpBusinessCenterElement;
