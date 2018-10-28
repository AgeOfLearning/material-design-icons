import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLooks6Element
 * @class IconRoundLooks6Element
 * @extends {AoflElement}
 */
class IconRoundLooks6Element extends AoflElement {
  /**
   * Creates an instance of IconRoundLooks6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-looks-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLooks6Element.is, IconRoundLooks6Element);

export default IconRoundLooks6Element;
