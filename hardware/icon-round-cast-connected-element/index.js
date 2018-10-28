import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCastConnectedElement
 * @class IconRoundCastConnectedElement
 * @extends {AoflElement}
 */
class IconRoundCastConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCastConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cast-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCastConnectedElement.is, IconRoundCastConnectedElement);

export default IconRoundCastConnectedElement;
