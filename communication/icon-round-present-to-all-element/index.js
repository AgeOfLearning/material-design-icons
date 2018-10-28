import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPresentToAllElement
 * @class IconRoundPresentToAllElement
 * @extends {AoflElement}
 */
class IconRoundPresentToAllElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPresentToAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-present-to-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPresentToAllElement.is, IconRoundPresentToAllElement);

export default IconRoundPresentToAllElement;
