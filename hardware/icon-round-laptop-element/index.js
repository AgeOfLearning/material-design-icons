import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLaptopElement
 * @class IconRoundLaptopElement
 * @extends {AoflElement}
 */
class IconRoundLaptopElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLaptopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-laptop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLaptopElement.is, IconRoundLaptopElement);

export default IconRoundLaptopElement;
