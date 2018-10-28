import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundToggleOnElement
 * @class IconRoundToggleOnElement
 * @extends {AoflElement}
 */
class IconRoundToggleOnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundToggleOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-toggle-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundToggleOnElement.is, IconRoundToggleOnElement);

export default IconRoundToggleOnElement;
