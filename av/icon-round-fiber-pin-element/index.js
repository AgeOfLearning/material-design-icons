import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFiberPinElement
 * @class IconRoundFiberPinElement
 * @extends {AoflElement}
 */
class IconRoundFiberPinElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFiberPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fiber-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFiberPinElement.is, IconRoundFiberPinElement);

export default IconRoundFiberPinElement;
