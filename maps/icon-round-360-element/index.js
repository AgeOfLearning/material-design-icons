import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRound360Element
 * @class IconRound360Element
 * @extends {AoflElement}
 */
class IconRound360Element extends AoflElement {
  /**
   * Creates an instance of IconRound360Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-360';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRound360Element.is, IconRound360Element);

export default IconRound360Element;
