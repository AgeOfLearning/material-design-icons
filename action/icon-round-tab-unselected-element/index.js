import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTabUnselectedElement
 * @class IconRoundTabUnselectedElement
 * @extends {AoflElement}
 */
class IconRoundTabUnselectedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTabUnselectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tab-unselected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTabUnselectedElement.is, IconRoundTabUnselectedElement);

export default IconRoundTabUnselectedElement;
