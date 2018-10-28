import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter4Element
 * @class IconRoundFilter4Element
 * @extends {AoflElement}
 */
class IconRoundFilter4Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter4Element.is, IconRoundFilter4Element);

export default IconRoundFilter4Element;
