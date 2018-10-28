import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlagElement
 * @class IconRoundFlagElement
 * @extends {AoflElement}
 */
class IconRoundFlagElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlagElement.is, IconRoundFlagElement);

export default IconRoundFlagElement;
