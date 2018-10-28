import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLaptopMacElement
 * @class IconRoundLaptopMacElement
 * @extends {AoflElement}
 */
class IconRoundLaptopMacElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLaptopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-laptop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLaptopMacElement.is, IconRoundLaptopMacElement);

export default IconRoundLaptopMacElement;
