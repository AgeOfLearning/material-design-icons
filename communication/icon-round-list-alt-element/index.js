import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundListAltElement
 * @class IconRoundListAltElement
 * @extends {AoflElement}
 */
class IconRoundListAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundListAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-list-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundListAltElement.is, IconRoundListAltElement);

export default IconRoundListAltElement;
