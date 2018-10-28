import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMouseElement
 * @class IconRoundMouseElement
 * @extends {AoflElement}
 */
class IconRoundMouseElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMouseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mouse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMouseElement.is, IconRoundMouseElement);

export default IconRoundMouseElement;
