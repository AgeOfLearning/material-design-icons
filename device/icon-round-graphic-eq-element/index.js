import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGraphicEqElement
 * @class IconRoundGraphicEqElement
 * @extends {AoflElement}
 */
class IconRoundGraphicEqElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGraphicEqElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-graphic-eq';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGraphicEqElement.is, IconRoundGraphicEqElement);

export default IconRoundGraphicEqElement;
