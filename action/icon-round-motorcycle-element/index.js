import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMotorcycleElement
 * @class IconRoundMotorcycleElement
 * @extends {AoflElement}
 */
class IconRoundMotorcycleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMotorcycleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-motorcycle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMotorcycleElement.is, IconRoundMotorcycleElement);

export default IconRoundMotorcycleElement;
