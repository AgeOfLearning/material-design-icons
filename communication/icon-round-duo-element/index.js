import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDuoElement
 * @class IconRoundDuoElement
 * @extends {AoflElement}
 */
class IconRoundDuoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDuoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-duo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDuoElement.is, IconRoundDuoElement);

export default IconRoundDuoElement;
