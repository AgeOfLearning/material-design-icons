import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPinDropElement
 * @class IconRoundPinDropElement
 * @extends {AoflElement}
 */
class IconRoundPinDropElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPinDropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pin-drop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPinDropElement.is, IconRoundPinDropElement);

export default IconRoundPinDropElement;
