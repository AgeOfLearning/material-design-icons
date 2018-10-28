import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundToggleOffElement
 * @class IconRoundToggleOffElement
 * @extends {AoflElement}
 */
class IconRoundToggleOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundToggleOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-toggle-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundToggleOffElement.is, IconRoundToggleOffElement);

export default IconRoundToggleOffElement;
