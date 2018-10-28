import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePartyModeElement
 * @class IconOutlinePartyModeElement
 * @extends {AoflElement}
 */
class IconOutlinePartyModeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePartyModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-party-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePartyModeElement.is, IconOutlinePartyModeElement);

export default IconOutlinePartyModeElement;
