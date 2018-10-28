import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundOutlinedFlagElement
 * @class IconRoundOutlinedFlagElement
 * @extends {AoflElement}
 */
class IconRoundOutlinedFlagElement extends AoflElement {
  /**
   * Creates an instance of IconRoundOutlinedFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-outlined-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundOutlinedFlagElement.is, IconRoundOutlinedFlagElement);

export default IconRoundOutlinedFlagElement;
