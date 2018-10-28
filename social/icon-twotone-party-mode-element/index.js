import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePartyModeElement
 * @class IconTwotonePartyModeElement
 * @extends {AoflElement}
 */
class IconTwotonePartyModeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePartyModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-party-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePartyModeElement.is, IconTwotonePartyModeElement);

export default IconTwotonePartyModeElement;
