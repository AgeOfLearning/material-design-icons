import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGraphicEqElement
 * @class IconOutlineGraphicEqElement
 * @extends {AoflElement}
 */
class IconOutlineGraphicEqElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGraphicEqElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-graphic-eq';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGraphicEqElement.is, IconOutlineGraphicEqElement);

export default IconOutlineGraphicEqElement;
