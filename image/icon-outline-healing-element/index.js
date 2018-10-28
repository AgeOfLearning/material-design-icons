import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHealingElement
 * @class IconOutlineHealingElement
 * @extends {AoflElement}
 */
class IconOutlineHealingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHealingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-healing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHealingElement.is, IconOutlineHealingElement);

export default IconOutlineHealingElement;
