import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCastElement
 * @class IconRoundCastElement
 * @extends {AoflElement}
 */
class IconRoundCastElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCastElement.is, IconRoundCastElement);

export default IconRoundCastElement;
