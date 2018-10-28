import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFastfoodElement
 * @class IconRoundFastfoodElement
 * @extends {AoflElement}
 */
class IconRoundFastfoodElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFastfoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fastfood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFastfoodElement.is, IconRoundFastfoodElement);

export default IconRoundFastfoodElement;
