import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHealingElement
 * @class IconSharpHealingElement
 * @extends {AoflElement}
 */
class IconSharpHealingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHealingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-healing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHealingElement.is, IconSharpHealingElement);

export default IconSharpHealingElement;
