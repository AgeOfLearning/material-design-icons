import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPartyModeElement
 * @class IconRoundPartyModeElement
 * @extends {AoflElement}
 */
class IconRoundPartyModeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPartyModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-party-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPartyModeElement.is, IconRoundPartyModeElement);

export default IconRoundPartyModeElement;
