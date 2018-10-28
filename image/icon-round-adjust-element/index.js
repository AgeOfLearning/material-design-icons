import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAdjustElement
 * @class IconRoundAdjustElement
 * @extends {AoflElement}
 */
class IconRoundAdjustElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAdjustElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-adjust';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAdjustElement.is, IconRoundAdjustElement);

export default IconRoundAdjustElement;
