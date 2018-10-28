import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLooks4Element
 * @class IconRoundLooks4Element
 * @extends {AoflElement}
 */
class IconRoundLooks4Element extends AoflElement {
  /**
   * Creates an instance of IconRoundLooks4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-looks-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLooks4Element.is, IconRoundLooks4Element);

export default IconRoundLooks4Element;
