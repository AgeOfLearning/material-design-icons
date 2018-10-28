import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalDrinkElement
 * @class IconRoundLocalDrinkElement
 * @extends {AoflElement}
 */
class IconRoundLocalDrinkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalDrinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-drink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalDrinkElement.is, IconRoundLocalDrinkElement);

export default IconRoundLocalDrinkElement;
