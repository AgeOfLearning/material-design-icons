import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSaveAltElement
 * @class IconRoundSaveAltElement
 * @extends {AoflElement}
 */
class IconRoundSaveAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSaveAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-save-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSaveAltElement.is, IconRoundSaveAltElement);

export default IconRoundSaveAltElement;
