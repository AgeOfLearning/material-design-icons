import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalCafeElement
 * @class IconRoundLocalCafeElement
 * @extends {AoflElement}
 */
class IconRoundLocalCafeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalCafeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-cafe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalCafeElement.is, IconRoundLocalCafeElement);

export default IconRoundLocalCafeElement;
