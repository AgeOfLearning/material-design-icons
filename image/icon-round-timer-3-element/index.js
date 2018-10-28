import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTimer3Element
 * @class IconRoundTimer3Element
 * @extends {AoflElement}
 */
class IconRoundTimer3Element extends AoflElement {
  /**
   * Creates an instance of IconRoundTimer3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-timer-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTimer3Element.is, IconRoundTimer3Element);

export default IconRoundTimer3Element;
