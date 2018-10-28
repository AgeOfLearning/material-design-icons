import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAcUnitElement
 * @class IconRoundAcUnitElement
 * @extends {AoflElement}
 */
class IconRoundAcUnitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAcUnitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-ac-unit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAcUnitElement.is, IconRoundAcUnitElement);

export default IconRoundAcUnitElement;
