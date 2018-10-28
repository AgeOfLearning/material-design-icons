import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTimer10Element
 * @class IconRoundTimer10Element
 * @extends {AoflElement}
 */
class IconRoundTimer10Element extends AoflElement {
  /**
   * Creates an instance of IconRoundTimer10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-timer-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTimer10Element.is, IconRoundTimer10Element);

export default IconRoundTimer10Element;
