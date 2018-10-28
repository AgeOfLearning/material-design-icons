import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePartyModeElement
 * @class IconBaselinePartyModeElement
 * @extends {AoflElement}
 */
class IconBaselinePartyModeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePartyModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-party-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePartyModeElement.is, IconBaselinePartyModeElement);

export default IconBaselinePartyModeElement;
