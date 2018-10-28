import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHealingElement
 * @class IconRoundHealingElement
 * @extends {AoflElement}
 */
class IconRoundHealingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHealingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-healing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHealingElement.is, IconRoundHealingElement);

export default IconRoundHealingElement;
