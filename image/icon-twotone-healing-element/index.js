import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHealingElement
 * @class IconTwotoneHealingElement
 * @extends {AoflElement}
 */
class IconTwotoneHealingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHealingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-healing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHealingElement.is, IconTwotoneHealingElement);

export default IconTwotoneHealingElement;
