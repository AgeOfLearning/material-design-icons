import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMessageElement
 * @class IconRoundMessageElement
 * @extends {AoflElement}
 */
class IconRoundMessageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMessageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-message';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMessageElement.is, IconRoundMessageElement);

export default IconRoundMessageElement;
