import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccountBoxElement
 * @class IconRoundAccountBoxElement
 * @extends {AoflElement}
 */
class IconRoundAccountBoxElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccountBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-account-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccountBoxElement.is, IconRoundAccountBoxElement);

export default IconRoundAccountBoxElement;
