import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPartyModeElement
 * @class IconSharpPartyModeElement
 * @extends {AoflElement}
 */
class IconSharpPartyModeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPartyModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-party-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPartyModeElement.is, IconSharpPartyModeElement);

export default IconSharpPartyModeElement;
