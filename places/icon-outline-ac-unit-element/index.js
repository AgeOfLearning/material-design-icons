import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAcUnitElement
 * @class IconOutlineAcUnitElement
 * @extends {AoflElement}
 */
class IconOutlineAcUnitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAcUnitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-ac-unit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAcUnitElement.is, IconOutlineAcUnitElement);

export default IconOutlineAcUnitElement;
