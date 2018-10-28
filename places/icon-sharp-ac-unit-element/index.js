import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAcUnitElement
 * @class IconSharpAcUnitElement
 * @extends {AoflElement}
 */
class IconSharpAcUnitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAcUnitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-ac-unit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAcUnitElement.is, IconSharpAcUnitElement);

export default IconSharpAcUnitElement;
