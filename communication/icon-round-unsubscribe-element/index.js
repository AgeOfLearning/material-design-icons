import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundUnsubscribeElement
 * @class IconRoundUnsubscribeElement
 * @extends {AoflElement}
 */
class IconRoundUnsubscribeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundUnsubscribeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-unsubscribe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundUnsubscribeElement.is, IconRoundUnsubscribeElement);

export default IconRoundUnsubscribeElement;
